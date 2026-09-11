// src/lib/editor/withSlate.ts
import {
  createEditor as createEditor2
} from "@platejs/slate";
import { nanoid as nanoid2 } from "nanoid";

// src/internal/plugin/resolvePlugins.ts
import {
  assignLegacyApi,
  assignLegacyTransforms,
  syncLegacyMethods
} from "@platejs/slate";
import { isDefined as isDefined2 } from "@udecode/utils";
import merge2 from "lodash/merge.js";
import { createZustandStore } from "zustand-x";

// src/lib/plugin/createSlatePlugin.ts
import { isDefined } from "@udecode/utils";

// src/internal/utils/isFunction.ts
function isFunction(value) {
  return typeof value === "function";
}

// src/internal/utils/mergePlugins.ts
import mergeWith from "lodash/mergeWith.js";
function mergePlugins(basePlugin, ...sourcePlugins) {
  return mergeWith(
    {},
    basePlugin,
    ...sourcePlugins,
    (objValue, srcValue, key) => {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      if (key === "options") {
        return { ...objValue, ...srcValue };
      }
    }
  );
}

// src/lib/plugin/createSlatePlugin.ts
function createSlatePlugin(config = {}) {
  let baseConfig;
  let initialExtension;
  if (isFunction(config)) {
    baseConfig = { key: "" };
    initialExtension = (editor) => config(editor);
  } else {
    baseConfig = config;
  }
  const key = baseConfig.key ?? "";
  const plugin = mergePlugins(
    {
      key,
      __apiExtensions: [],
      __configuration: null,
      __extensions: initialExtension ? [initialExtension] : [],
      __selectorExtensions: [],
      api: {},
      dependencies: [],
      editor: {},
      handlers: {},
      inject: {},
      node: { type: key },
      options: {},
      override: {},
      parser: {},
      parsers: {},
      plugins: [],
      priority: 100,
      render: {},
      rules: {},
      shortcuts: {},
      transforms: {}
    },
    config
  );
  if (plugin.node.isLeaf && !isDefined(plugin.node.isDecoration)) {
    plugin.node.isDecoration = true;
  }
  plugin.configure = (config2) => {
    const newPlugin = { ...plugin };
    newPlugin.__configuration = (ctx) => isFunction(config2) ? config2(ctx) : config2;
    return createSlatePlugin(newPlugin);
  };
  plugin.configurePlugin = (p, config2) => {
    const newPlugin = { ...plugin };
    const configureNestedPlugin = (plugins) => {
      let found = false;
      const updatedPlugins = plugins.map((nestedPlugin) => {
        if (nestedPlugin.key === p.key) {
          found = true;
          return createSlatePlugin({
            ...nestedPlugin,
            __configuration: (ctx) => isFunction(config2) ? config2(ctx) : config2
          });
        }
        if (nestedPlugin.plugins && nestedPlugin.plugins.length > 0) {
          const result2 = configureNestedPlugin(nestedPlugin.plugins);
          if (result2.found) {
            found = true;
            return { ...nestedPlugin, plugins: result2.plugins };
          }
        }
        return nestedPlugin;
      });
      return { found, plugins: updatedPlugins };
    };
    const result = configureNestedPlugin(newPlugin.plugins);
    newPlugin.plugins = result.plugins;
    return createSlatePlugin(newPlugin);
  };
  plugin.extendEditorApi = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__apiExtensions = [
      ...newPlugin.__apiExtensions,
      { extension, isPluginSpecific: false }
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.extendSelectors = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__selectorExtensions = [
      ...newPlugin.__selectorExtensions,
      extension
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.extendApi = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__apiExtensions = [
      ...newPlugin.__apiExtensions,
      { extension, isPluginSpecific: true }
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.extendEditorTransforms = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__apiExtensions = [
      ...newPlugin.__apiExtensions,
      { extension, isPluginSpecific: false, isTransform: true }
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.extendTransforms = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__apiExtensions = [
      ...newPlugin.__apiExtensions,
      { extension, isPluginSpecific: true, isTransform: true }
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.overrideEditor = (extension) => {
    const newPlugin = { ...plugin };
    newPlugin.__apiExtensions = [
      ...newPlugin.__apiExtensions,
      {
        extension,
        isOverride: true,
        isPluginSpecific: false,
        isTransform: true
      }
    ];
    return createSlatePlugin(newPlugin);
  };
  plugin.extend = (extendConfig) => {
    let newPlugin = { ...plugin };
    if (isFunction(extendConfig)) {
      newPlugin.__extensions = [
        ...newPlugin.__extensions,
        extendConfig
      ];
    } else {
      newPlugin = mergePlugins(newPlugin, extendConfig);
    }
    return createSlatePlugin(newPlugin);
  };
  plugin.clone = () => mergePlugins(plugin);
  plugin.extendPlugin = (p, extendConfig) => {
    const newPlugin = { ...plugin };
    const extendNestedPlugin = (plugins) => {
      let found = false;
      const updatedPlugins = plugins.map((nestedPlugin) => {
        if (nestedPlugin.key === p.key) {
          found = true;
          return createSlatePlugin({
            ...nestedPlugin,
            __extensions: [
              ...nestedPlugin.__extensions,
              (ctx) => isFunction(extendConfig) ? extendConfig(ctx) : extendConfig
            ]
          });
        }
        if (nestedPlugin.plugins && nestedPlugin.plugins.length > 0) {
          const result2 = extendNestedPlugin(nestedPlugin.plugins);
          if (result2.found) {
            found = true;
            return { ...nestedPlugin, plugins: result2.plugins };
          }
        }
        return nestedPlugin;
      });
      return { found, plugins: updatedPlugins };
    };
    const result = extendNestedPlugin(newPlugin.plugins);
    newPlugin.plugins = result.plugins;
    if (!result.found) {
      newPlugin.plugins.push(
        createSlatePlugin({
          key: p.key,
          __extensions: [
            (ctx) => isFunction(extendConfig) ? extendConfig(ctx) : extendConfig
          ]
        })
      );
    }
    return createSlatePlugin(newPlugin);
  };
  plugin.withComponent = (component) => {
    return plugin.extend({
      node: { component },
      render: { node: component }
    });
  };
  return plugin;
}
function createTSlatePlugin(config = {}) {
  return createSlatePlugin(config);
}

// src/lib/plugin/getEditorPlugin.ts
function getEditorPlugin(editor, p) {
  const plugin = editor.getPlugin(p);
  return {
    api: editor.api,
    editor,
    plugin,
    setOption: (keyOrOptions, value) => editor.setOption(plugin, keyOrOptions, value),
    setOptions: (options) => editor.setOptions(plugin, options),
    tf: editor.transforms,
    type: plugin.node.type,
    getOption: (key, ...args) => editor.getOption(plugin, key, ...args),
    getOptions: () => editor.getOptions(plugin)
  };
}

// src/internal/plugin/resolvePlugin.ts
import merge from "lodash/merge.js";
var resolvePlugin = (editor, _plugin) => {
  let plugin = mergePlugins({}, _plugin);
  plugin.__resolved = true;
  if (plugin.__configuration) {
    const configResult = plugin.__configuration(
      getEditorPlugin(editor, plugin)
    );
    plugin = mergePlugins(plugin, configResult);
    delete plugin.__configuration;
  }
  if (plugin.__extensions && plugin.__extensions.length > 0) {
    plugin.__extensions.forEach((extension) => {
      plugin = mergePlugins(
        plugin,
        extension(getEditorPlugin(editor, plugin))
      );
    });
    plugin.__extensions = [];
  }
  const targetPluginToInject = plugin.inject?.targetPluginToInject;
  const targetPlugins = plugin.inject?.targetPlugins;
  if (targetPluginToInject && targetPlugins && targetPlugins.length > 0) {
    plugin.inject = plugin.inject || {};
    plugin.inject.plugins = merge(
      {},
      plugin.inject.plugins,
      Object.fromEntries(
        targetPlugins.map((targetPlugin) => {
          const injectedPlugin = targetPluginToInject({
            ...getEditorPlugin(editor, plugin),
            targetPlugin
          });
          return [targetPlugin, injectedPlugin];
        })
      )
    );
  }
  if (plugin.node?.component) {
    plugin.render.node = plugin.node.component;
  }
  if (plugin.render?.node) {
    plugin.node.component = plugin.render.node;
  }
  validatePlugin(editor, plugin);
  return plugin;
};
var validatePlugin = (editor, plugin) => {
  if (!plugin.__extensions) {
    editor.api.debug.error(
      `Invalid plugin '${plugin.key}', you should use createSlatePlugin.`,
      "USE_CREATE_PLUGIN"
    );
  }
  if (plugin.node.isElement && plugin.node.isLeaf) {
    editor.api.debug.error(
      `Plugin ${plugin.key} cannot be both an element and a leaf.`,
      "PLUGIN_NODE_TYPE"
    );
  }
};

// src/lib/plugin/getSlatePlugin.ts
function getSlatePlugin(editor, p) {
  let plugin = p;
  const editorPlugin = editor.plugins[p.key];
  if (!editorPlugin) {
    if (!plugin.node) {
      plugin = createSlatePlugin(plugin);
    }
    return plugin.__resolved ? plugin : resolvePlugin(editor, plugin);
  }
  return editorPlugin;
}
function getPluginType(editor, key) {
  const p = editor.getPlugin({ key });
  return p.node.type ?? p.key ?? "";
}
var getPluginTypes = (editor, keys) => keys.map((key) => editor.getType(key));
var getPluginKey = (editor, type) => editor.meta.pluginCache.node.types[type];
var getPluginKeys = (editor, types) => {
  return types.map((type) => {
    const pluginKey = getPluginKey(editor, type);
    return pluginKey ?? type;
  }).filter(Boolean);
};
var getPluginByType = (editor, type) => {
  const key = getPluginKey(editor, type);
  if (!key) return null;
  return editor.getPlugin({ key });
};
var getContainerTypes = (editor) => {
  return getPluginTypes(editor, editor.meta.pluginCache.node.isContainer);
};

// src/internal/plugin/resolvePlugins.ts
var resolvePlugins = (editor, plugins = []) => {
  editor.plugins = {};
  editor.meta.pluginList = [];
  editor.meta.shortcuts = {};
  editor.meta.components = {};
  editor.meta.pluginCache = {
    decorate: [],
    handlers: {
      onChange: [],
      onNodeChange: [],
      onTextChange: []
    },
    inject: {
      nodeProps: []
    },
    node: {
      isContainer: [],
      isLeaf: [],
      isText: [],
      leafProps: [],
      textProps: [],
      types: {}
    },
    normalizeInitialValue: [],
    render: {
      aboveEditable: [],
      aboveNodes: [],
      aboveSlate: [],
      afterContainer: [],
      afterEditable: [],
      beforeContainer: [],
      beforeEditable: [],
      belowNodes: [],
      belowRootNodes: []
    },
    rules: {
      match: []
    },
    useHooks: []
  };
  const resolvedPlugins = resolveAndSortPlugins(editor, plugins);
  applyPluginsToEditor(editor, resolvedPlugins);
  resolvePluginOverrides(editor);
  resolvePluginStores(editor);
  editor.meta.pluginList.forEach((plugin) => {
    if (plugin.extendEditor) {
      editor = plugin.extendEditor(getEditorPlugin(editor, plugin));
      syncLegacyMethods(editor);
    }
    resolvePluginMethods(editor, plugin);
    if (plugin.node?.isContainer) {
      editor.meta.pluginCache.node.isContainer.push(plugin.key);
    }
    editor.meta.pluginCache.node.types[plugin.node.type] = plugin.key;
    if (plugin.inject?.nodeProps) {
      editor.meta.pluginCache.inject.nodeProps.push(plugin.key);
    }
    if (plugin.render?.node) {
      editor.meta.components[plugin.key] = plugin.render.node;
    }
    if (plugin.node?.isLeaf && (plugin.node?.isDecoration === true || plugin.render.leaf)) {
      editor.meta.pluginCache.node.isLeaf.push(plugin.key);
    }
    if (plugin.node.isLeaf && plugin.node.isDecoration === false) {
      editor.meta.pluginCache.node.isText.push(plugin.key);
    }
    if (plugin.node?.leafProps) {
      editor.meta.pluginCache.node.leafProps.push(plugin.key);
    }
    if (plugin.node.textProps) {
      editor.meta.pluginCache.node.textProps.push(plugin.key);
    }
    if (plugin.render.aboveEditable) {
      editor.meta.pluginCache.render.aboveEditable.push(plugin.key);
    }
    if (plugin.render.aboveSlate) {
      editor.meta.pluginCache.render.aboveSlate.push(plugin.key);
    }
    if (plugin.render.afterEditable) {
      editor.meta.pluginCache.render.afterEditable.push(plugin.key);
    }
    if (plugin.render.beforeEditable) {
      editor.meta.pluginCache.render.beforeEditable.push(plugin.key);
    }
    if (plugin.rules?.match) {
      editor.meta.pluginCache.rules.match.push(plugin.key);
    }
    if (plugin.render.afterContainer) {
      editor.meta.pluginCache.render.afterContainer.push(plugin.key);
    }
    if (plugin.render.beforeContainer) {
      editor.meta.pluginCache.render.beforeContainer.push(plugin.key);
    }
    if (plugin.render.belowRootNodes) {
      editor.meta.pluginCache.render.belowRootNodes.push(plugin.key);
    }
    if (plugin.normalizeInitialValue) {
      editor.meta.pluginCache.normalizeInitialValue.push(plugin.key);
    }
    if (plugin.decorate) {
      editor.meta.pluginCache.decorate.push(plugin.key);
    }
    if (plugin.render.aboveNodes) {
      editor.meta.pluginCache.render.aboveNodes.push(plugin.key);
    }
    if (plugin.render.belowNodes) {
      editor.meta.pluginCache.render.belowNodes.push(plugin.key);
    }
    if (plugin.useHooks) {
      editor.meta.pluginCache.useHooks.push(plugin.key);
    }
    if (plugin.handlers?.onChange) {
      editor.meta.pluginCache.handlers.onChange.push(plugin.key);
    }
    if (plugin.handlers?.onNodeChange) {
      editor.meta.pluginCache.handlers.onNodeChange.push(plugin.key);
    }
    if (plugin.handlers?.onTextChange) {
      editor.meta.pluginCache.handlers.onTextChange.push(plugin.key);
    }
  });
  resolvePluginShortcuts(editor);
  return editor;
};
var resolvePluginStores = (editor) => {
  editor.meta.pluginList.forEach((plugin) => {
    let store = createZustandStore(plugin.options, {
      mutative: true,
      name: plugin.key
    });
    if (plugin.__selectorExtensions && plugin.__selectorExtensions.length > 0) {
      plugin.__selectorExtensions.forEach((extension) => {
        const extendedOptions = extension(getEditorPlugin(editor, plugin));
        store = store.extendSelectors(() => extendedOptions);
      });
    }
    plugin.optionsStore = store;
  });
};
var resolvePluginMethods = (editor, plugin) => {
  Object.entries(plugin.api).forEach(([apiKey, apiFunction]) => {
    editor.api[apiKey] = apiFunction;
  });
  if (plugin.__apiExtensions && plugin.__apiExtensions.length > 0) {
    plugin.__apiExtensions.forEach(
      ({ extension, isOverride, isPluginSpecific, isTransform }) => {
        const newExtensions = extension(getEditorPlugin(editor, plugin));
        if (isOverride) {
          if (newExtensions.api) {
            merge2(editor.api, newExtensions.api);
            merge2(plugin.api, newExtensions.api);
            assignLegacyApi(editor, editor.api);
          }
          if (newExtensions.transforms) {
            merge2(editor.transforms, newExtensions.transforms);
            merge2(plugin.transforms, newExtensions.transforms);
            assignLegacyTransforms(editor, newExtensions.transforms);
          }
        } else if (isTransform) {
          if (isPluginSpecific) {
            if (!editor.transforms[plugin.key]) {
              editor.transforms[plugin.key] = {};
            }
            if (!plugin.transforms[plugin.key]) {
              plugin.transforms[plugin.key] = {};
            }
            merge2(editor.transforms[plugin.key], newExtensions);
            merge2(plugin.transforms[plugin.key], newExtensions);
          } else {
            merge2(editor.transforms, newExtensions);
            merge2(plugin.transforms, newExtensions);
            assignLegacyTransforms(editor, newExtensions);
          }
        } else {
          if (isPluginSpecific) {
            if (!editor.api[plugin.key]) {
              editor.api[plugin.key] = {};
            }
            if (!plugin.api[plugin.key]) {
              plugin.api[plugin.key] = {};
            }
            merge2(editor.api[plugin.key], newExtensions);
            merge2(plugin.api[plugin.key], newExtensions);
          } else {
            merge2(editor.api, newExtensions);
            merge2(plugin.api, newExtensions);
            assignLegacyApi(editor, editor.api);
          }
        }
      }
    );
    delete plugin.__apiExtensions;
  }
};
var resolvePluginShortcuts = (editor) => {
  editor.meta.shortcuts = {};
  editor.meta.pluginList.forEach((plugin) => {
    Object.entries(plugin.shortcuts).forEach(([originalKey, hotkey]) => {
      const namespacedKey = `${plugin.key}.${originalKey}`;
      if (hotkey === null) {
        delete editor.meta.shortcuts[namespacedKey];
      } else if (hotkey && typeof hotkey === "object") {
        const resolvedHotkey = { ...hotkey };
        if (!resolvedHotkey.handler) {
          const pluginSpecificTransforms = plugin.transforms?.[plugin.key];
          const pluginSpecificApi = plugin.api?.[plugin.key];
          if (pluginSpecificTransforms?.[originalKey]) {
            resolvedHotkey.handler = () => {
              return pluginSpecificTransforms[originalKey]();
            };
          } else if (pluginSpecificApi?.[originalKey]) {
            resolvedHotkey.handler = () => {
              return pluginSpecificApi[originalKey]();
            };
          }
        }
        resolvedHotkey.priority = resolvedHotkey.priority ?? plugin.priority;
        editor.meta.shortcuts[namespacedKey] = resolvedHotkey;
      }
    });
  });
};
var flattenAndResolvePlugins = (editor, plugins) => {
  const pluginMap = /* @__PURE__ */ new Map();
  const processPlugin = (plugin) => {
    const resolvedPlugin = resolvePlugin(editor, plugin);
    if (resolvedPlugin.key) {
      const existingPlugin = pluginMap.get(resolvedPlugin.key);
      if (existingPlugin) {
        pluginMap.set(
          resolvedPlugin.key,
          mergePlugins(existingPlugin, resolvedPlugin)
        );
      } else {
        pluginMap.set(resolvedPlugin.key, resolvedPlugin);
      }
    } else {
    }
    if (resolvedPlugin.plugins && resolvedPlugin.plugins.length > 0) {
      resolvedPlugin.plugins.forEach(processPlugin);
    }
  };
  plugins.forEach(processPlugin);
  return pluginMap;
};
var resolveAndSortPlugins = (editor, plugins) => {
  const pluginMap = flattenAndResolvePlugins(editor, plugins);
  const enabledPlugins = Array.from(pluginMap.values()).filter(
    (plugin) => plugin.enabled !== false
  );
  enabledPlugins.sort((a, b) => b.priority - a.priority);
  const orderedPlugins = [];
  const visited = /* @__PURE__ */ new Set();
  const visit = (plugin) => {
    if (visited.has(plugin.key)) return;
    visited.add(plugin.key);
    plugin.dependencies?.forEach((depKey) => {
      const depPlugin = pluginMap.get(depKey);
      if (depPlugin) {
        visit(depPlugin);
      } else {
        editor.api.debug.warn(
          `Plugin "${plugin.key}" depends on missing plugin "${depKey}"`,
          "PLUGIN_DEPENDENCY_MISSING"
        );
      }
    });
    orderedPlugins.push(plugin);
  };
  enabledPlugins.forEach(visit);
  return orderedPlugins;
};
var applyPluginsToEditor = (editor, plugins) => {
  editor.meta.pluginList = plugins;
  editor.plugins = Object.fromEntries(
    plugins.map((plugin) => [plugin.key, plugin])
  );
};
var resolvePluginOverrides = (editor) => {
  const applyOverrides = (plugins) => {
    let overriddenPlugins = [...plugins];
    const enabledOverrides = {};
    const componentOverrides = {};
    const pluginOverrides = {};
    for (const plugin of plugins) {
      if (plugin.override.enabled) {
        Object.assign(enabledOverrides, plugin.override.enabled);
      }
      if (plugin.override.components) {
        Object.entries(plugin.override.components).forEach(
          ([key, component]) => {
            if (!componentOverrides[key] || plugin.priority > componentOverrides[key].priority) {
              componentOverrides[key] = {
                component,
                priority: plugin.priority
              };
            }
          }
        );
      }
      if (plugin.override.plugins) {
        Object.entries(plugin.override.plugins).forEach(([key, value]) => {
          pluginOverrides[key] = mergePlugins(pluginOverrides[key], value);
          if (value.enabled !== void 0) {
            enabledOverrides[key] = value.enabled;
          }
        });
      }
    }
    overriddenPlugins = overriddenPlugins.map((p) => {
      let updatedPlugin = { ...p };
      if (pluginOverrides[p.key]) {
        updatedPlugin = mergePlugins(updatedPlugin, pluginOverrides[p.key]);
      }
      if (componentOverrides[p.key] && (!p.render.node && !p.node.component || componentOverrides[p.key].priority > p.priority)) {
        updatedPlugin.render.node = componentOverrides[p.key].component;
        updatedPlugin.node.component = componentOverrides[p.key].component;
      }
      const enabled = enabledOverrides[p.key] ?? updatedPlugin.enabled;
      if (isDefined2(enabled)) {
        updatedPlugin.enabled = enabled;
      }
      return updatedPlugin;
    });
    return overriddenPlugins.filter((p) => p.enabled !== false).map((plugin) => ({
      ...plugin,
      plugins: applyOverrides(plugin.plugins || [])
    }));
  };
  applyPluginsToEditor;
  editor.meta.pluginList = applyOverrides(editor.meta.pluginList);
  editor.plugins = Object.fromEntries(
    editor.meta.pluginList.map((plugin) => [plugin.key, plugin])
  );
};

// src/lib/plugins/AstPlugin.ts
var AstPlugin = createSlatePlugin({
  key: "ast",
  parser: {
    format: "application/x-slate-fragment",
    deserialize: ({ data }) => {
      const decoded = decodeURIComponent(window.atob(data));
      let parsed;
      try {
        parsed = JSON.parse(decoded);
      } catch {
      }
      return parsed;
    }
  }
});

// src/lib/plugins/HistoryPlugin.ts
import { withHistory } from "@platejs/slate";
var withPlateHistory = ({ editor }) => withHistory(editor);
var HistoryPlugin = createSlatePlugin({
  key: "history",
  extendEditor: withPlateHistory
});

// src/lib/plugins/paragraph/BaseParagraphPlugin.ts
var BaseParagraphPlugin = createSlatePlugin({
  key: "p",
  node: {
    isElement: true
  },
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: "P"
          }
        ],
        query: ({ element }) => element.style.fontFamily !== "Consolas"
      }
    }
  },
  rules: {
    merge: { removeEmpty: true }
  }
});

// src/lib/plugins/override/withBreakRules.ts
import { PathApi } from "@platejs/slate";
var withBreakRules = (ctx) => {
  const {
    editor,
    tf: { insertBreak }
  } = ctx;
  const checkMatchRulesOverride = (rule, blockNode, blockPath) => {
    const matchRulesKeys = editor.meta.pluginCache.rules.match;
    for (const key of matchRulesKeys) {
      const overridePlugin = editor.getPlugin({ key });
      if (overridePlugin.rules?.break && overridePlugin.rules?.match?.({
        ...ctx,
        node: blockNode,
        path: blockPath,
        rule
      })) {
        return overridePlugin.rules.break;
      }
    }
    return null;
  };
  const executeBreakAction = (action, blockPath) => {
    if (action === "reset") {
      editor.tf.resetBlock({ at: blockPath });
      return true;
    }
    if (action === "exit") {
      editor.tf.insertExitBreak();
      return true;
    }
    if (action === "deleteExit") {
      editor.tf.deleteBackward("character");
      editor.tf.insertExitBreak();
      return true;
    }
    if (action === "lineBreak") {
      editor.tf.insertSoftBreak();
      return true;
    }
    return false;
  };
  return {
    transforms: {
      insertBreak() {
        if (editor.selection && editor.api.isCollapsed()) {
          const block = editor.api.block();
          if (block) {
            const [blockNode, blockPath] = block;
            const plugin = getPluginByType(editor, blockNode.type);
            const breakRules = plugin?.rules.break;
            if (editor.api.isEmpty(editor.selection, {
              block: true
            })) {
              const overrideBreakRules = checkMatchRulesOverride(
                "break.empty",
                blockNode,
                blockPath
              );
              const effectiveBreakRules = overrideBreakRules || breakRules;
              const emptyAction = effectiveBreakRules?.empty;
              if (executeBreakAction(emptyAction, blockPath)) return;
            }
            if (!editor.api.isEmpty(editor.selection, {
              block: true
            }) && editor.api.isAt({ end: true })) {
              const range = editor.api.range("before", editor.selection);
              if (range) {
                const char = editor.api.string(range);
                if (char === "\n") {
                  const overrideBreakRules = checkMatchRulesOverride(
                    "break.emptyLineEnd",
                    blockNode,
                    blockPath
                  );
                  const effectiveBreakRules = overrideBreakRules || breakRules;
                  const emptyLineEndAction = effectiveBreakRules?.emptyLineEnd;
                  if (executeBreakAction(emptyLineEndAction, blockPath)) return;
                }
              }
            }
            const overrideDefaultBreakRules = checkMatchRulesOverride(
              "break.default",
              blockNode,
              blockPath
            );
            const defaultAction = (overrideDefaultBreakRules || breakRules)?.default;
            if (executeBreakAction(defaultAction, blockPath)) return;
            const overrideSplitResetBreakRules = checkMatchRulesOverride(
              "break.splitReset",
              blockNode,
              blockPath
            );
            const splitReset = overrideSplitResetBreakRules?.splitReset ?? breakRules?.splitReset;
            if (splitReset) {
              const isAtStart = editor.api.isAt({ start: true });
              insertBreak();
              editor.tf.resetBlock({
                at: isAtStart ? blockPath : PathApi.next(blockPath)
              });
              return;
            }
          }
        }
        insertBreak();
      }
    }
  };
};

// src/lib/plugins/override/withDeleteRules.ts
import { PointApi, RangeApi } from "@platejs/slate";
var withDeleteRules = (ctx) => {
  const {
    editor,
    tf: { deleteBackward, deleteForward, deleteFragment }
  } = ctx;
  const resetMarks = () => {
    if (editor.api.isAt({ start: true })) {
      editor.tf.removeMarks();
    }
  };
  const checkMatchRulesOverride = (rule, blockNode, blockPath) => {
    const matchRulesKeys = editor.meta.pluginCache.rules.match;
    for (const key of matchRulesKeys) {
      const overridePlugin = editor.getPlugin({ key });
      if (overridePlugin.rules?.delete && overridePlugin.rules?.match?.({
        ...ctx,
        node: blockNode,
        path: blockPath,
        rule
      })) {
        return overridePlugin.rules.delete;
      }
    }
    return null;
  };
  const executeDeleteAction = (action, blockPath) => {
    if (action === "reset") {
      editor.tf.resetBlock({ at: blockPath });
      return true;
    }
    return false;
  };
  return {
    transforms: {
      deleteBackward(unit) {
        if (editor.selection && editor.api.isCollapsed()) {
          const block = editor.api.block();
          if (block) {
            const [blockNode, blockPath] = block;
            const plugin = getPluginByType(editor, blockNode.type);
            const deleteRules = plugin?.rules.delete;
            if (editor.api.isAt({ start: true })) {
              const overrideDeleteRules = checkMatchRulesOverride(
                "delete.start",
                blockNode,
                blockPath
              );
              const effectiveDeleteRules = overrideDeleteRules || deleteRules;
              const startAction = effectiveDeleteRules?.start;
              if (executeDeleteAction(startAction, blockPath)) {
                return;
              }
            }
            if (editor.api.isEmpty(editor.selection, { block: true })) {
              const overrideDeleteRules = checkMatchRulesOverride(
                "delete.empty",
                blockNode,
                blockPath
              );
              const effectiveDeleteRules = overrideDeleteRules || deleteRules;
              const emptyAction = effectiveDeleteRules?.empty;
              if (executeDeleteAction(emptyAction, blockPath)) return;
            }
          }
          if (PointApi.equals(editor.selection.anchor, editor.api.start([]))) {
            editor.tf.resetBlock({ at: [0] });
            return;
          }
        }
        deleteBackward(unit);
        resetMarks();
      },
      deleteForward(unit) {
        deleteForward(unit);
        resetMarks();
      },
      deleteFragment(options) {
        if (editor.selection && RangeApi.equals(editor.selection, editor.api.range([]))) {
          editor.tf.reset({
            children: true,
            select: true
          });
          return;
        }
        deleteFragment(options);
        resetMarks();
      }
    }
  };
};

// src/lib/plugins/override/withMergeRules.ts
import {
  ElementApi,
  PathApi as PathApi2,
  TextApi
} from "@platejs/slate";
var withMergeRules = (ctx) => {
  const {
    editor,
    tf: { removeNodes }
  } = ctx;
  const checkMatchRulesOverride = (rule, blockNode, blockPath) => {
    const matchRulesKeys = editor.meta.pluginCache.rules.match;
    for (const key of matchRulesKeys) {
      const overridePlugin = editor.getPlugin({ key });
      if (overridePlugin.rules.merge && overridePlugin.rules?.match?.({
        ...ctx,
        node: blockNode,
        path: blockPath,
        rule
      })) {
        return overridePlugin.rules.merge;
      }
    }
    return null;
  };
  return {
    api: {
      shouldMergeNodes(prevNodeEntry, nextNodeEntry, { reverse } = {}) {
        const [prevNode, prevPath] = prevNodeEntry;
        const [, nextPath] = nextNodeEntry;
        const [curNode, curPath] = reverse ? prevNodeEntry : nextNodeEntry;
        const [targetNode, targetPath] = reverse ? nextNodeEntry : prevNodeEntry;
        if (TextApi.isText(prevNode) && prevNode.text === "" && prevPath.at(-1) !== 0) {
          editor.tf.removeNodes({ at: prevPath });
          return false;
        }
        const shouldRemove = (node, path) => {
          const plugin = getPluginByType(editor, node.type);
          if (!plugin) {
            return true;
          }
          const mergeRules = plugin.rules.merge;
          if (!mergeRules?.removeEmpty) {
            return false;
          }
          const overrideMergeRules = checkMatchRulesOverride(
            "merge.removeEmpty",
            node,
            path
          );
          if (overrideMergeRules?.removeEmpty === false) {
            return false;
          }
          return true;
        };
        if (ElementApi.isElement(targetNode) && editor.api.isVoid(targetNode)) {
          if (shouldRemove(targetNode, targetPath)) {
            editor.tf.removeNodes({ at: prevPath });
          } else if (ElementApi.isElement(curNode) && editor.api.isEmpty(curNode)) {
            editor.tf.removeNodes({ at: curPath });
          }
          return false;
        }
        if (ElementApi.isElement(prevNode) && editor.api.isEmpty(prevNode) && PathApi2.isSibling(prevPath, nextPath) && shouldRemove(prevNode, prevPath)) {
          editor.tf.removeNodes({ at: prevPath });
          return false;
        }
        return true;
      }
    },
    transforms: {
      removeNodes(options = {}) {
        if (options.event?.type === "mergeNodes" && options.at) {
          const nodeEntry = editor.api.node(options.at);
          if (nodeEntry) {
            const [node, path] = nodeEntry;
            if (ElementApi.isElement(node)) {
              const plugin = getPluginByType(editor, node.type);
              if (plugin) {
                const mergeRules = plugin.rules.merge;
                const overrideMergeRules = checkMatchRulesOverride(
                  "merge.removeEmpty",
                  node,
                  path
                );
                const shouldNotRemove = overrideMergeRules?.removeEmpty === false || mergeRules?.removeEmpty === false;
                if (shouldNotRemove) {
                  return;
                }
              }
            }
          }
        }
        removeNodes(options);
      }
    }
  };
};

// src/lib/plugins/override/withNormalizeRules.ts
import { ElementApi as ElementApi2 } from "@platejs/slate";
var withNormalizeRules = (ctx) => {
  const {
    editor,
    tf: { normalizeNode }
  } = ctx;
  const checkMatchRulesOverride = (rule, node, path) => {
    const matchRulesKeys = editor.meta.pluginCache.rules.match;
    for (const key of matchRulesKeys) {
      const overridePlugin = editor.getPlugin({ key });
      if (overridePlugin.rules?.normalize && overridePlugin.rules?.match?.({
        ...ctx,
        node,
        path,
        rule
      })) {
        return overridePlugin.rules.normalize;
      }
    }
    return null;
  };
  return {
    transforms: {
      normalizeNode([node, path]) {
        if (ElementApi2.isElement(node) && node.type) {
          const plugin = getPluginByType(editor, node.type);
          const normalizeRules = plugin?.rules.normalize;
          const overridenormalizeRules = checkMatchRulesOverride(
            "normalize.removeEmpty",
            node,
            path
          );
          const effectivenormalizeRules = overridenormalizeRules || normalizeRules;
          if (effectivenormalizeRules?.removeEmpty && editor.api.isEmpty(node)) {
            editor.tf.removeNodes({ at: path });
            return;
          }
        }
        normalizeNode([node, path]);
      }
    }
  };
};

// src/lib/plugins/override/OverridePlugin.ts
var withOverrides = ({
  api: { isInline, isSelectable, isVoid, markableVoid },
  editor
}) => {
  return {
    api: {
      create: {
        block: (node) => ({
          children: [{ text: "" }],
          type: editor.getType(BaseParagraphPlugin.key),
          ...node
        })
      },
      isInline(element) {
        return getPluginByType(editor, element.type)?.node.isInline ? true : isInline(element);
      },
      isSelectable(element) {
        return getPluginByType(editor, element.type)?.node.isSelectable === false ? false : isSelectable(element);
      },
      isVoid(element) {
        return getPluginByType(editor, element.type)?.node.isVoid ? true : isVoid(element);
      },
      markableVoid(element) {
        return getPluginByType(editor, element.type)?.node.isMarkableVoid ? true : markableVoid(element);
      }
    }
  };
};
var OverridePlugin = createSlatePlugin({
  key: "override"
}).overrideEditor(withOverrides).overrideEditor(withBreakRules).overrideEditor(withDeleteRules).overrideEditor(withMergeRules).overrideEditor(withNormalizeRules);

// src/internal/plugin/pipeInsertFragment.ts
var pipeInsertFragment = (editor, injectedPlugins, { fragment, ...options }) => {
  editor.tf.withoutNormalizing(() => {
    injectedPlugins.some((p) => {
      return p.parser?.preInsert?.({
        ...getEditorPlugin(editor, p),
        fragment,
        ...options
      }) === true;
    });
    editor.tf.insertFragment(fragment);
  });
};

// src/internal/plugin/pipeTransformData.ts
var pipeTransformData = (editor, plugins, { data, ...options }) => {
  plugins.forEach((p) => {
    const transformData = p.parser?.transformData;
    if (!transformData) return;
    data = transformData({
      ...getEditorPlugin(editor, p),
      data,
      ...options
    });
  });
  return data;
};

// src/internal/plugin/pipeTransformFragment.ts
var pipeTransformFragment = (editor, plugins, { fragment, ...options }) => {
  plugins.forEach((p) => {
    const transformFragment = p.parser?.transformFragment;
    if (!transformFragment) return;
    fragment = transformFragment({
      fragment,
      ...options,
      ...getEditorPlugin(editor, p)
    });
  });
  return fragment;
};

// src/lib/utils/applyDeepToNodes.ts
import {
  NodeApi,
  queryNode
} from "@platejs/slate";
var applyDeepToNodes = ({
  apply,
  node,
  path = [],
  query,
  source
}) => {
  const entry = [node, path];
  if (queryNode(entry, query)) {
    if (typeof source === "function") {
      apply(node, source());
    } else {
      apply(node, source);
    }
  }
  if (!NodeApi.isAncestor(node)) return;
  node.children.forEach((child, index) => {
    applyDeepToNodes({
      apply,
      node: child,
      path: path.concat([index]),
      query,
      source
    });
  });
};

// src/lib/utils/defaultsDeepToNodes.ts
import defaults from "lodash/defaults.js";
var defaultsDeepToNodes = (options) => {
  applyDeepToNodes({ ...options, apply: defaults });
};

// src/lib/utils/getInjectMatch.ts
import { ElementApi as ElementApi3 } from "@platejs/slate";
var getInjectMatch = (editor, plugin) => {
  return (node, path) => {
    const {
      inject: {
        excludeBelowPlugins,
        excludePlugins,
        isBlock: _isBlock,
        isElement: _isElement,
        isLeaf,
        maxLevel,
        targetPlugins
      }
    } = plugin;
    const element = ElementApi3.isElement(node) ? node : void 0;
    if (_isElement && !element) return false;
    if (_isBlock && (!element || !editor.api.isBlock(element))) return false;
    if (isLeaf && element) return false;
    if (element?.type) {
      if (excludePlugins?.includes(getPluginKey(editor, element.type))) {
        return false;
      }
      if (targetPlugins && !targetPlugins.includes(getPluginKey(editor, element.type))) {
        return false;
      }
    }
    if (excludeBelowPlugins || maxLevel) {
      if (maxLevel && path.length > maxLevel) {
        return false;
      }
      if (excludeBelowPlugins) {
        const excludeTypes = getPluginKeys(editor, excludeBelowPlugins);
        const isBelow = editor.api.above({
          at: path,
          match: (n) => ElementApi3.isElement(n) && excludeTypes.includes(n.type)
        });
        if (isBelow) return false;
      }
    }
    return true;
  };
};

// src/lib/utils/getInjectedPlugins.ts
var getInjectedPlugins = (editor, plugin) => {
  const injectedPlugins = [];
  [...editor.meta.pluginList].reverse().forEach((p) => {
    const injectedPlugin = p.inject.plugins?.[plugin.key];
    if (injectedPlugin) injectedPlugins.push(injectedPlugin);
  });
  return [plugin, ...injectedPlugins];
};

// src/lib/utils/getPluginNodeProps.ts
import pick from "lodash/pick.js";

// src/lib/static/pipeRenderElementStatic.tsx
import React4 from "react";

// src/lib/static/components/slate-nodes.tsx
import React from "react";
import { clsx } from "clsx";
var useNodeAttributes = (props, ref) => {
  return {
    ...props.attributes,
    className: clsx(props.attributes.className, props.className) || void 0,
    ref,
    style: { ...props.attributes.style, ...props.style }
  };
};
var SlateElement = React.forwardRef(function SlateElement2({ as: Tag = "div", children, ...props }, ref) {
  const attributes = useNodeAttributes(props, ref);
  const block = !!props.element.id && !!props.editor.api.isBlock(props.element);
  return /* @__PURE__ */ React.createElement(
    Tag,
    {
      "data-slate-node": "element",
      "data-slate-inline": attributes["data-slate-inline"],
      "data-block-id": block ? props.element.id : void 0,
      ...attributes,
      style: {
        position: "relative",
        ...attributes?.style
      }
    },
    children
  );
});
var SlateText = React.forwardRef(({ as: Tag = "span", children, ...props }, ref) => {
  const attributes = useNodeAttributes(props, ref);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes }, children);
});
var NonBreakingSpace = () => /* @__PURE__ */ React.createElement("span", { style: { fontSize: 0, lineHeight: 0 }, contentEditable: false }, String.fromCodePoint(160));
var SlateLeaf = React.forwardRef(({ as: Tag = "span", children, inset, ...props }, ref) => {
  const attributes = useNodeAttributes(props, ref);
  if (inset) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NonBreakingSpace, null), /* @__PURE__ */ React.createElement(Tag, { ...attributes }, children, /* @__PURE__ */ React.createElement(NonBreakingSpace, null)));
  }
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes }, children);
});

// src/lib/static/pluginRenderElementStatic.tsx
import React3 from "react";

// src/lib/static/utils/createStaticString.ts
import React2 from "react";
function createStaticString({ text }) {
  return React2.createElement(
    "span",
    { "data-slate-string": true },
    text === "" ? "\uFEFF" : text
  );
}

// src/lib/static/utils/getNodeDataAttributes.ts
import { TextApi as TextApi2 } from "@platejs/slate";
import kebabCase from "lodash/kebabCase.js";
var getNodeDataAttributes = (editor, node, {
  isElement,
  isLeaf,
  isText
}) => {
  const dataAttributes = Object.keys(node).reduce((acc, key) => {
    if (typeof node[key] === "object") return acc;
    if (isElement && key === "children") return acc;
    if ((isLeaf || isText) && key === "text") return acc;
    const plugin = editor.getPlugin({ key });
    if (isLeaf && plugin?.node.isLeaf && plugin?.node.isDecoration !== true) {
      return acc;
    }
    if (isText && plugin?.node.isLeaf && plugin?.node.isDecoration !== false) {
      return acc;
    }
    const attributeName = keyToDataAttribute(key);
    return { ...acc, [attributeName]: node[key] };
  }, {});
  return dataAttributes;
};
var getPluginDataAttributes = (editor, plugin, node) => {
  const isElement = plugin.node.isElement;
  const isLeaf = plugin.node.isLeaf && plugin.node.isDecoration === true;
  const isText = plugin.node.isLeaf && plugin.node.isDecoration === false;
  const dataAttributes = getNodeDataAttributes(editor, node, {
    isElement,
    isLeaf,
    isText
  });
  const customAttributes = plugin.node.toDataAttributes?.({
    ...plugin ? getEditorPlugin(editor, plugin) : {},
    node
  }) ?? {};
  return { ...dataAttributes, ...customAttributes };
};
var getNodeDataAttributeKeys = (node) => {
  return Object.keys(node).filter(
    (key) => typeof node[key] !== "object" && (!TextApi2.isText(node) || key !== "text")
  ).map((key) => keyToDataAttribute(key));
};
var keyToDataAttribute = (key) => {
  return `data-slate-${kebabCase(key)}`;
};

// src/lib/static/utils/getRenderNodeStaticProps.ts
import clsx3 from "clsx";

// src/internal/plugin/pipeInjectNodeProps.tsx
import clsx2 from "clsx";

// src/internal/plugin/isEditOnlyDisabled.ts
var DEFAULT = {
  handlers: true,
  inject: true,
  normalizeInitialValue: false,
  render: true
};
var isEditOnly = (readOnly, plugin, feature) => {
  if (!readOnly) return false;
  if (plugin.editOnly === true) {
    return DEFAULT[feature];
  }
  if (typeof plugin.editOnly === "object") {
    return plugin.editOnly[feature] ?? DEFAULT[feature];
  }
  return false;
};

// src/internal/plugin/pluginInjectNodeProps.ts
import { isDefined as isDefined3 } from "@udecode/utils";
var pluginInjectNodeProps = (editor, plugin, nodeProps, getElementPath) => {
  const {
    key,
    inject: { nodeProps: injectNodeProps }
  } = plugin;
  const { element, text } = nodeProps;
  const node = element ?? text;
  if (!node) return;
  if (!injectNodeProps) return;
  const {
    classNames,
    defaultNodeValue,
    nodeKey = editor.getType(key),
    query,
    styleKey = nodeKey,
    transformClassName,
    transformNodeValue,
    transformProps,
    transformStyle,
    validNodeValues
  } = injectNodeProps;
  const injectMatch = getInjectMatch(editor, plugin);
  if (!injectMatch(node, getElementPath(node))) return;
  const queryResult = query?.({
    ...injectNodeProps,
    ...getEditorPlugin(editor, plugin),
    nodeProps
  });
  if (query && !queryResult) {
    return;
  }
  const nodeValue = node[nodeKey];
  if (!transformProps && (!isDefined3(nodeValue) || validNodeValues && !validNodeValues.includes(nodeValue) || nodeValue === defaultNodeValue)) {
    return;
  }
  const transformOptions = {
    ...nodeProps,
    ...getEditorPlugin(editor, plugin),
    nodeValue
  };
  const value = transformNodeValue?.(transformOptions) ?? nodeValue;
  transformOptions.value = value;
  let newProps = {};
  if (element && nodeKey && nodeValue) {
    newProps.className = `slate-${nodeKey}-${nodeValue}`;
  }
  if (classNames?.[nodeValue] || transformClassName) {
    newProps.className = transformClassName?.(transformOptions) ?? classNames?.[value];
  }
  if (styleKey) {
    newProps.style = transformStyle?.(transformOptions) ?? {
      [styleKey]: value
    };
  }
  if (transformProps) {
    newProps = transformProps({ ...transformOptions, props: newProps }) ?? newProps;
  }
  return newProps;
};

// src/internal/plugin/pipeInjectNodeProps.tsx
var pipeInjectNodeProps = (editor, nodeProps, getElementPath, readOnly = false) => {
  editor.meta.pluginCache.inject.nodeProps.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const newAttributes = pluginInjectNodeProps(
      editor,
      plugin,
      nodeProps,
      getElementPath
    );
    if (isEditOnly(readOnly, plugin, "inject")) {
      return;
    }
    if (!newAttributes) return;
    const attributes = nodeProps.attributes;
    nodeProps.attributes = {
      ...attributes,
      ...newAttributes,
      className: clsx2(attributes?.className, newAttributes.className) || void 0,
      style: {
        ...attributes?.style,
        ...newAttributes.style
      }
    };
  });
  return nodeProps;
};

// src/lib/static/utils/getRenderNodeStaticProps.ts
var getRenderNodeStaticProps = ({
  attributes: nodeAttributes,
  editor,
  node,
  plugin,
  props
}) => {
  let newProps = {
    ...props,
    ...plugin ? getEditorPlugin(editor, plugin) : {
      api: editor.api,
      editor,
      tf: editor.transforms
    }
  };
  const { className } = props;
  const pluginProps = getPluginNodeProps({
    attributes: nodeAttributes,
    node,
    plugin,
    props: newProps
  });
  newProps = {
    ...pluginProps,
    attributes: {
      ...pluginProps.attributes,
      className: clsx3(getSlateClass(plugin?.node.type), className) || void 0
    }
  };
  newProps = pipeInjectNodeProps(
    editor,
    newProps,
    (node2) => editor.api.findPath(node2)
  );
  if (newProps.style && Object.keys(newProps.style).length === 0) {
    delete newProps.style;
  }
  return newProps;
};

// src/lib/static/utils/getSelectedDomBlocks.ts
var getSelectedDomBlocks = () => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  const fragment = range.cloneContents();
  const domBlocks = fragment.querySelectorAll(
    '[data-slate-node="element"][data-slate-id]'
  );
  return Array.from(domBlocks);
};

// src/lib/static/utils/getSelectedDomFragment.tsx
import { ElementApi as ElementApi4, NodeApi as NodeApi2 } from "@platejs/slate";
var getSelectedDomFragment = (editor) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return [];
  const range = selection.getRangeAt(0);
  const fragment = range.cloneContents();
  const _domBlocks = fragment.querySelectorAll(
    '[data-slate-node="element"][data-slate-id]'
  );
  const domBlocks = Array.from(_domBlocks);
  if (domBlocks.length === 0) return [];
  const nodes = [];
  domBlocks.forEach((node, index) => {
    const blockId = node.dataset.slateId;
    const block = editor.api.node({ id: blockId, at: [] });
    if (!block || block[1].length !== 1) return;
    if ((index === 0 || index === domBlocks.length - 1) && node.textContent?.trim() !== NodeApi2.string(block[0]) && ElementApi4.isElement(block[0]) && !editor.api.isVoid(block[0])) {
      const html = document.createElement("div");
      html.append(node);
      const results = editor.api.html.deserialize({ element: html });
      nodes.push(results[0]);
    } else {
      nodes.push(block[0]);
    }
  });
  return nodes;
};

// src/lib/static/utils/getSelectedDomNode.ts
var getSelectedDomNode = () => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  const htmlFragment = range.cloneContents();
  const div = document.createElement("div");
  div.append(htmlFragment);
  return div;
};

// src/lib/static/utils/isSelectOutside.ts
var isSelectOutside = (html) => {
  const domNodes = html ?? getSelectedDomNode();
  if (!domNodes) return false;
  const selectOutside = !!domNodes?.querySelector('[data-slate-editor="true"');
  return selectOutside;
};

// src/lib/static/utils/pipeDecorate.ts
var pipeDecorate = (editor, decorateProp) => {
  if (editor.meta.pluginCache.decorate.length === 0 && !decorateProp) return;
  return (entry) => {
    let ranges = [];
    const addRanges = (newRanges) => {
      if (newRanges?.length) ranges = [...ranges, ...newRanges];
    };
    editor.meta.pluginCache.decorate.forEach((key) => {
      const plugin = editor.getPlugin({ key });
      addRanges(
        plugin.decorate({
          ...getEditorPlugin(editor, plugin),
          entry
        })
      );
    });
    if (decorateProp) {
      addRanges(
        decorateProp({
          editor,
          entry
        })
      );
    }
    return ranges;
  };
};

// src/lib/static/utils/stripHtmlClassNames.ts
var classAttrRegExp = / class="([^"]*)"/g;
var stripHtmlClassNames = (html, { preserveClassNames = ["slate-"] }) => {
  if (preserveClassNames.length === 0) {
    return html.replaceAll(classAttrRegExp, "");
  }
  const preserveRegExp = new RegExp(
    preserveClassNames.map((cn) => `^${cn}`).join("|")
  );
  return html.replaceAll(
    classAttrRegExp,
    (match, className) => {
      const classesToKeep = className.split(/\s+/).filter((cn) => preserveRegExp.test(cn));
      return classesToKeep.length === 0 ? "" : ` class="${classesToKeep.join(" ")}"`;
    }
  );
};

// src/lib/static/utils/stripSlateDataAttributes.ts
var stripSlateDataAttributes = (rawHtml) => rawHtml.replaceAll(/ data-slate(?:-node|-type|-leaf|-string)="[^"]+"/g, "").replaceAll(/ data-testid="[^"]+"/g, "");

// src/lib/static/pluginRenderElementStatic.tsx
var pluginRenderElementStatic = (editor, plugin) => function render(nodeProps) {
  const element = nodeProps.element;
  const Component = editor.meta.components?.[plugin.key];
  const Element = Component ?? SlateElement;
  let { children } = nodeProps;
  const dataAttributes = getPluginDataAttributes(editor, plugin, element);
  nodeProps = getRenderNodeStaticProps({
    attributes: {
      ...element.attributes,
      ...dataAttributes
    },
    editor,
    node: element,
    plugin,
    props: nodeProps
  });
  editor.meta.pluginCache.render.belowNodes.forEach((key) => {
    const hoc = editor.getPlugin({ key }).render.belowNodes({
      ...nodeProps,
      key
    });
    if (hoc) {
      children = hoc({ ...nodeProps, children });
    }
  });
  const defaultProps = Component ? {} : { as: plugin.render?.as };
  let component = /* @__PURE__ */ React3.createElement(Element, { ...defaultProps, ...nodeProps }, children, editor.meta.pluginCache.render.belowRootNodes.map((key) => {
    const plugin2 = editor.getPlugin({ key });
    const Component2 = plugin2.render.belowRootNodes;
    return /* @__PURE__ */ React3.createElement(Component2, { key, ...defaultProps, ...nodeProps });
  }));
  editor.meta.pluginCache.render.aboveNodes.forEach((key) => {
    const hoc = editor.getPlugin({ key }).render.aboveNodes({
      ...nodeProps,
      key
    });
    if (hoc) {
      component = hoc({ ...nodeProps, children: component });
    }
  });
  return component;
};

// src/lib/static/pipeRenderElementStatic.tsx
var pipeRenderElementStatic = (editor, {
  renderElement: renderElementProp
} = {}) => {
  return function render(props) {
    const plugin = getPluginByType(editor, props.element.type);
    if (plugin?.node.isElement) {
      return pluginRenderElementStatic(editor, plugin)(props);
    }
    if (renderElementProp) {
      return renderElementProp(props);
    }
    const ctxProps = getRenderNodeStaticProps({
      editor,
      props: { ...props }
    });
    return /* @__PURE__ */ React4.createElement(SlateElement, { ...ctxProps }, props.children, editor.meta.pluginCache.render.belowRootNodes.map((key) => {
      const plugin2 = editor.getPlugin({ key });
      const Component = plugin2.render.belowRootNodes;
      return /* @__PURE__ */ React4.createElement(Component, { key, ...ctxProps });
    }));
  };
};

// src/lib/static/pluginRenderLeafStatic.tsx
import React7 from "react";
import clsx6 from "clsx";

// src/lib/static/components/PlateStatic.tsx
import React6 from "react";
import {
  ElementApi as ElementApi5,
  isElementDecorationsEqual,
  isTextDecorationsEqual,
  RangeApi as RangeApi2,
  TextApi as TextApi3
} from "@platejs/slate";
import clsx5 from "clsx";

// src/lib/static/pluginRenderTextStatic.tsx
import React5 from "react";
import clsx4 from "clsx";
var pluginRenderTextStatic = (editor, plugin) => function render(nodeProps) {
  const { children, text } = nodeProps;
  if (text[plugin.node.type ?? plugin.key]) {
    const Component = editor.meta.components?.[plugin.key];
    const Text = Component ?? SlateText;
    const ctxProps = getRenderNodeStaticProps({
      attributes: { ...text.attributes },
      editor,
      node: text,
      plugin,
      props: nodeProps
    });
    const defaultProps = Component ? {} : { as: plugin.render?.as };
    return /* @__PURE__ */ React5.createElement(Text, { ...defaultProps, ...ctxProps }, children);
  }
  return children;
};
var pipeRenderTextStatic = (editor, { renderText: renderTextProp } = {}) => {
  const renderTexts = [];
  const textPropsPlugins = [];
  editor.meta.pluginCache.node.isText.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      renderTexts.push(pluginRenderTextStatic(editor, plugin));
    }
  });
  editor.meta.pluginCache.node.textProps.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      textPropsPlugins.push(plugin);
    }
  });
  return function render({ attributes, ...props }) {
    renderTexts.forEach((render2) => {
      const newChildren = render2(props);
      if (newChildren !== void 0) {
        props.children = newChildren;
      }
    });
    textPropsPlugins.forEach((plugin) => {
      if (props.text[plugin.node.type ?? plugin.key]) {
        const pluginTextProps = typeof plugin.node.textProps === "function" ? plugin.node.textProps(props) : plugin.node.textProps ?? {};
        if (pluginTextProps.className) {
          pluginTextProps.className = clsx4(
            props.className,
            pluginTextProps.className
          );
        }
        attributes = {
          ...attributes,
          ...pluginTextProps
        };
      }
    });
    if (renderTextProp) {
      return renderTextProp({ attributes, ...props });
    }
    const ctxProps = getRenderNodeStaticProps({
      editor,
      props: { attributes, ...props }
    });
    const text = ctxProps.text;
    const dataAttributes = getNodeDataAttributes(editor, text, {
      isText: true
    });
    return /* @__PURE__ */ React5.createElement(
      SlateText,
      {
        ...ctxProps,
        attributes: {
          ...ctxProps.attributes,
          ...dataAttributes
        }
      }
    );
  };
};

// src/lib/static/components/PlateStatic.tsx
function BaseElementStatic({
  decorate,
  decorations,
  editor,
  element = { children: [], type: "" }
}) {
  const renderElement = pipeRenderElementStatic(editor);
  const attributes = {
    "data-slate-node": "element",
    ref: null
  };
  let children = /* @__PURE__ */ React6.createElement(Children, { decorate, decorations, editor }, element.children);
  if (editor.api.isVoid(element)) {
    attributes["data-slate-void"] = true;
    children = /* @__PURE__ */ React6.createElement(
      "span",
      {
        style: {
          color: "transparent",
          height: "0",
          outline: "none",
          position: "absolute"
        },
        "data-slate-spacer": true
      },
      /* @__PURE__ */ React6.createElement(Children, { decorate, decorations, editor }, element.children)
    );
  }
  if (editor.api.isInline(element)) {
    attributes["data-slate-inline"] = true;
  }
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, renderElement?.({ attributes, children, element }));
}
var ElementStatic = React6.memo(BaseElementStatic, (prev, next) => {
  return (prev.element === next.element || prev.element._memo !== void 0 && prev.element._memo === next.element._memo) && isElementDecorationsEqual(prev.decorations, next.decorations);
});
function BaseLeafStatic({
  decorations,
  editor,
  text = { text: "" }
}) {
  const renderLeaf = pipeRenderLeafStatic(editor);
  const renderText = pipeRenderTextStatic(editor);
  const decoratedLeaves = TextApi3.decorations(text, decorations);
  const leafElements = decoratedLeaves.map(({ leaf, position }, index) => {
    const leafElement = renderLeaf({
      attributes: { "data-slate-leaf": true },
      children: /* @__PURE__ */ React6.createElement("span", { "data-slate-string": true }, leaf.text === "" ? "\uFEFF" : leaf.text),
      leaf,
      leafPosition: position,
      text: leaf
    });
    return /* @__PURE__ */ React6.createElement(React6.Fragment, { key: index }, leafElement);
  });
  return renderText({
    attributes: { "data-slate-node": "text", ref: null },
    children: leafElements,
    text
  });
}
var LeafStatic = React6.memo(BaseLeafStatic, (prev, next) => {
  return (
    // prev.text === next.text &&
    TextApi3.equals(next.text, prev.text) && isTextDecorationsEqual(next.decorations, prev.decorations)
  );
});
var defaultDecorate = () => [];
function Children({
  children = [],
  decorate = defaultDecorate,
  decorations = [],
  editor
}) {
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, children.map((child, i) => {
    const p = editor.api.findPath(child);
    let ds = [];
    if (p) {
      const range = editor.api.range(p);
      ds = decorate([child, p]);
      for (const dec of decorations) {
        const d = RangeApi2.intersection(dec, range);
        if (d) {
          ds.push(d);
        }
      }
    }
    return ElementApi5.isElement(child) ? /* @__PURE__ */ React6.createElement(
      ElementStatic,
      {
        key: i,
        decorate,
        decorations: ds,
        editor,
        element: child
      }
    ) : /* @__PURE__ */ React6.createElement(LeafStatic, { key: i, decorations: ds, editor, text: child });
  }));
}
function PlateStatic(props) {
  const { className, editor, value, ...rest } = props;
  if (value) {
    editor.children = value;
  }
  const decorate = pipeDecorate(editor);
  let afterEditable = null;
  let beforeEditable = null;
  editor.meta.pluginCache.render.beforeEditable.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const BeforeEditable = plugin.render.beforeEditable;
    if (BeforeEditable) {
      beforeEditable = /* @__PURE__ */ React6.createElement(React6.Fragment, null, beforeEditable, /* @__PURE__ */ React6.createElement(BeforeEditable, null));
    }
  });
  editor.meta.pluginCache.render.afterEditable.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const AfterEditable = plugin.render.afterEditable;
    if (AfterEditable) {
      afterEditable = /* @__PURE__ */ React6.createElement(React6.Fragment, null, afterEditable, /* @__PURE__ */ React6.createElement(AfterEditable, null));
    }
  });
  const content = /* @__PURE__ */ React6.createElement(
    "div",
    {
      className: clsx5("slate-editor", className),
      "data-slate-editor": true,
      "data-slate-node": "value",
      ...rest
    },
    /* @__PURE__ */ React6.createElement(Children, { decorate, decorations: [], editor }, editor.children)
  );
  let aboveEditable = /* @__PURE__ */ React6.createElement(React6.Fragment, null, beforeEditable, content, afterEditable);
  editor.meta.pluginCache.render.aboveEditable.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const AboveEditable = plugin.render.aboveEditable;
    if (AboveEditable) {
      aboveEditable = /* @__PURE__ */ React6.createElement(AboveEditable, null, aboveEditable);
    }
  });
  return aboveEditable;
}

// src/lib/static/pluginRenderLeafStatic.tsx
var pluginRenderLeafStatic = (editor, plugin) => function render(props) {
  const { children, leaf } = props;
  if (leaf[plugin.node.type]) {
    const Component = plugin.render.leaf ?? editor.meta.components?.[plugin.key];
    const Leaf = Component ?? SlateLeaf;
    const ctxProps = getRenderNodeStaticProps({
      attributes: { ...leaf.attributes },
      editor,
      node: leaf,
      plugin,
      props
    });
    const defaultProps = Component ? {} : { as: plugin.render?.as };
    return /* @__PURE__ */ React7.createElement(Leaf, { ...defaultProps, ...ctxProps }, children);
  }
  return children;
};
var pipeRenderLeafStatic = (editor, { renderLeaf: renderLeafProp } = {}) => {
  const renderLeafs = [];
  const leafPropsPlugins = [];
  editor.meta.pluginCache.node.isLeaf.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      renderLeafs.push(pluginRenderLeafStatic(editor, plugin));
    }
  });
  editor.meta.pluginCache.node.leafProps.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      leafPropsPlugins.push(plugin);
    }
  });
  return function render({ attributes, ...props }) {
    renderLeafs.forEach((render2) => {
      const newChildren = render2(props);
      if (newChildren !== void 0) {
        props.children = newChildren;
      }
    });
    leafPropsPlugins.forEach((plugin) => {
      if (props.leaf[plugin.node.type]) {
        const pluginLeafProps = typeof plugin.node.leafProps === "function" ? plugin.node.leafProps(props) : plugin.node.leafProps ?? {};
        if (pluginLeafProps.className) {
          pluginLeafProps.className = clsx6(
            props.className,
            pluginLeafProps.className
          );
        }
        attributes = {
          ...attributes,
          ...pluginLeafProps
        };
      }
    });
    if (renderLeafProp) {
      return renderLeafProp({ attributes, ...props });
    }
    const ctxProps = getRenderNodeStaticProps({
      editor,
      props: { attributes, ...props }
    });
    const leaf = ctxProps.leaf;
    const dataAttributes = getNodeDataAttributes(editor, leaf, {
      isLeaf: true
    });
    return /* @__PURE__ */ React7.createElement(
      SlateLeaf,
      {
        ...ctxProps,
        attributes: {
          ...ctxProps.attributes,
          ...dataAttributes
        }
      }
    );
  };
};

// src/lib/static/serializeHtml.tsx
import React8 from "react";
import { decode } from "html-entities";
var getReactDOMServer = async () => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  return ReactDOMServer;
};
var renderComponentToHtml = (ReactDOMServer, Component, props) => {
  return decode(
    ReactDOMServer.renderToStaticMarkup(React8.createElement(Component, props))
  );
};
var serializeHtml = async (editor, {
  editorComponent: EditorComponent = PlateStatic,
  preserveClassNames,
  props = {},
  stripClassNames = false,
  stripDataAttributes = false
} = {}) => {
  const ReactDOMServer = await getReactDOMServer();
  let htmlString = renderComponentToHtml(ReactDOMServer, EditorComponent, {
    editor,
    ...props
  });
  if (stripClassNames) {
    htmlString = stripHtmlClassNames(htmlString, {
      preserveClassNames
    });
  }
  if (stripDataAttributes) {
    htmlString = stripSlateDataAttributes(htmlString);
  }
  return htmlString;
};

// src/lib/static/deserialize/checkUtils.ts
var isSlateVoid = (element) => {
  return element.dataset.slateVoid === "true";
};
var isSlateElement = (element) => {
  return element.dataset.slateNode === "element";
};
var isSlateText = (element) => {
  return element.dataset.slateNode === "text";
};
var isSlateString = (element) => {
  return element.dataset.slateString === "true";
};
var isSlateLeaf = (element) => {
  return element.dataset.slateLeaf === "true";
};
var isSlateEditor = (element) => {
  return element.dataset.slateEditor === "true";
};
var isSlateNode = (element) => {
  return isSlateLeaf(element) || isSlateElement(element) || isSlateVoid(element) || isSlateString(element) || isSlateText(element);
};
var isSlatePluginElement = (element, pluginKey) => {
  return element.dataset.slateNode === "element" && element.classList.contains(`slate-${pluginKey}`);
};
var isSlatePluginNode = (element, pluginKey) => {
  return element.classList.contains(`slate-${pluginKey}`);
};
var getSlateElements = (element) => {
  return Array.from(element.querySelectorAll('[data-slate-node="element"]'));
};

// src/lib/static/deserialize/htmlStringToEditorDOM.ts
var getEditorDOMFromHtmlString = (html) => {
  const node = document.createElement("body");
  node.innerHTML = html;
  const editorNode = node.querySelector('[data-slate-editor="true"]');
  return editorNode;
};

// src/lib/static/editor/withStatic.tsx
import { createEditor } from "@platejs/slate";

// src/lib/plugins/affinity/AffinityPlugin.ts
import {
  ElementApi as ElementApi9,
  NodeApi as NodeApi7,
  TextApi as TextApi4
} from "@platejs/slate";

// src/lib/plugins/affinity/queries/getEdgeNodes.ts
import {
  ElementApi as ElementApi6,
  NodeApi as NodeApi3,
  PathApi as PathApi3
} from "@platejs/slate";
import { Path } from "slate";
var getEdgeNodes = (editor) => {
  if (!editor.api.isCollapsed()) return null;
  const cursor = editor.selection.anchor;
  const textRange = editor.api.range(cursor.path);
  if (!textRange) return null;
  const edge = editor.api.isStart(cursor, textRange) ? "start" : editor.api.isEnd(cursor, textRange) ? "end" : null;
  if (!edge) return null;
  const parent = NodeApi3.parent(editor, cursor.path) ?? null;
  const isAffinityInlineElement = (() => {
    if (!parent || !ElementApi6.isElement(parent)) return false;
    const parentAffinity = getPluginByType(editor, parent.type)?.rules.selection?.affinity;
    return parentAffinity === "hard" || parentAffinity === "directional";
  })();
  const nodeEntry = isAffinityInlineElement ? [parent, PathApi3.parent(cursor.path)] : [NodeApi3.get(editor, cursor.path), cursor.path];
  if (edge === "start" && cursor.path.at(-1) === 0 && !isAffinityInlineElement) {
    return [null, nodeEntry];
  }
  const siblingPath = edge === "end" ? Path.next(nodeEntry[1]) : Path.previous(nodeEntry[1]);
  const siblingNode = NodeApi3.get(editor, siblingPath);
  const siblingEntry = siblingNode ? [siblingNode, siblingPath] : null;
  return edge === "end" ? [nodeEntry, siblingEntry] : [siblingEntry, nodeEntry];
};

// src/lib/plugins/affinity/queries/getMarkBoundaryAffinity.ts
import { IS_FIREFOX, NodeApi as NodeApi4 } from "@platejs/slate";
import isEqual from "lodash/isEqual.js";
var getMarkBoundaryAffinity = (editor, markBoundary) => {
  const { marks, selection } = editor;
  if (!selection) return;
  const marksMatchLeaf = (leaf) => {
    return marks && isEqual(NodeApi4.extractProps(leaf), marks) && Object.keys(marks).length > 1;
  };
  const [backwardLeafEntry, forwardLeafEntry] = markBoundary;
  if (!backwardLeafEntry || !forwardLeafEntry) {
    const leafEntry = backwardLeafEntry || forwardLeafEntry;
    const affinityIsTowardsLeaf = !marks || marksMatchLeaf(leafEntry[0]);
    if (affinityIsTowardsLeaf) {
      return leafEntry === backwardLeafEntry ? "backward" : "forward";
    }
    return;
  }
  const marksDirection = marks && (() => {
    if (backwardLeafEntry && marksMatchLeaf(backwardLeafEntry[0]))
      return "backward";
    if (forwardLeafEntry && marksMatchLeaf(forwardLeafEntry[0]))
      return "forward";
    return null;
  })();
  const selectionDirection = selection.anchor.offset === 0 ? "forward" : "backward";
  if (selectionDirection === "backward" && marksDirection === "forward")
    return "forward";
  if (IS_FIREFOX && selectionDirection === "forward" && marksDirection !== "backward")
    return "forward";
  return "backward";
};

// src/lib/plugins/affinity/queries/isNodeAffinity.ts
import { ElementApi as ElementApi7, NodeApi as NodeApi5 } from "@platejs/slate";
var isNodeAffinity = (editor, node, affinity) => {
  const marks = Object.keys(NodeApi5.extractProps(node));
  const keys = ElementApi7.isElement(node) ? [node.type] : marks;
  return keys.some(
    (type) => getPluginByType(editor, type)?.rules.selection?.affinity === affinity
  );
};
var isNodesAffinity = (editor, edgeNodes, affinity) => {
  const [backwardLeafEntry, forwardLeafEntry] = edgeNodes;
  return backwardLeafEntry && isNodeAffinity(editor, backwardLeafEntry[0], affinity) || forwardLeafEntry && isNodeAffinity(editor, forwardLeafEntry[0], affinity);
};

// src/lib/plugins/affinity/transforms/setAffinitySelection.ts
import { ElementApi as ElementApi8, NodeApi as NodeApi6 } from "@platejs/slate";
var setAffinitySelection = (editor, edgeNodes, affinity) => {
  const setMarks = (marks) => {
    editor.marks = marks;
    editor.api.onChange();
  };
  const select = (point) => {
    editor.tf.setSelection({ anchor: point, focus: point });
  };
  const [before, after] = edgeNodes;
  if (affinity === "backward") {
    if (before === null) {
      setMarks({});
      return;
    }
    const beforeEnd2 = editor.api.end(before[1]);
    if (beforeEnd2) {
      select(beforeEnd2);
    }
    if (ElementApi8.isElement(before[0])) return;
    setMarks(null);
    return;
  }
  if (before === null) {
    setMarks(null);
    return;
  }
  if (after === null) {
    setMarks({});
    return;
  }
  const beforeEnd = editor.api.end(before[1]);
  select(beforeEnd);
  if (ElementApi8.isElement(after[0])) {
    return;
  } else {
    setMarks(NodeApi6.extractProps(after[0]));
  }
};

// src/lib/plugins/affinity/AffinityPlugin.ts
var AffinityPlugin = createTSlatePlugin({
  key: "affinity"
}).overrideEditor(({ editor, tf: { deleteBackward, insertText, move } }) => ({
  transforms: {
    /**
     * On backspace, if the deletion results in the cursor being at a mark
     * boundary, then the affinity should be forward. If the deletion removes a
     * character from the left mark, then the affinity should be backward.
     */
    deleteBackward: (unit) => {
      const apply = () => {
        if (unit === "character" && editor.api.isCollapsed()) {
          const [start] = getEdgeNodes(editor) ?? [null];
          const startText = start && (TextApi4.isText(start[0]) ? start[0].text : NodeApi7.string(start[0]));
          deleteBackward(unit);
          const edgeNodes = getEdgeNodes(editor);
          if (edgeNodes && isNodesAffinity(editor, edgeNodes, "directional") && !hasElement(edgeNodes)) {
            const affinity = startText && startText.length > 1 ? "backward" : "forward";
            setAffinitySelection(editor, edgeNodes, affinity);
          }
          return true;
        }
      };
      if (apply()) return;
      deleteBackward(unit);
    },
    insertText(text, options) {
      const applyOutwardAffinity = () => {
        if (!editor.selection || editor.api.isExpanded()) {
          return;
        }
        const textPath = editor.selection.focus.path;
        const textNode = NodeApi7.get(editor, textPath);
        if (!textNode) {
          return;
        }
        const marks = Object.keys(NodeApi7.extractProps(textNode));
        const outwardMarks = marks.filter(
          (type) => getPluginByType(editor, type)?.rules.selection?.affinity === "outward"
        );
        if (!outwardMarks.length || !editor.api.isEnd(editor.selection.focus, textPath)) {
          return;
        }
        const nextPoint = editor.api.start(textPath, { next: true });
        const marksToRemove = [];
        let nextTextNode = null;
        if (nextPoint) {
          const nextTextPath = nextPoint.path;
          nextTextNode = NodeApi7.get(editor, nextTextPath) || null;
        }
        for (const markKey of outwardMarks) {
          if (!textNode[markKey]) {
            continue;
          }
          const isBetweenSameMarks = nextTextNode?.[markKey];
          if (!isBetweenSameMarks) {
            marksToRemove.push(markKey);
          }
        }
        if (marksToRemove.length > 0) {
          editor.tf.removeMarks(marksToRemove);
        }
      };
      applyOutwardAffinity();
      return insertText(text, options);
    },
    move: (options) => {
      const apply = () => {
        const {
          distance = 1,
          reverse = false,
          unit = "character"
        } = options || {};
        if (unit === "character" && distance === 1 && editor.api.isCollapsed()) {
          const preEdgeNodes = getEdgeNodes(editor);
          if (preEdgeNodes && isNodesAffinity(editor, preEdgeNodes, "hard")) {
            if (preEdgeNodes && preEdgeNodes[reverse ? 0 : 1] === null && getMarkBoundaryAffinity(editor, preEdgeNodes) === (reverse ? "forward" : "backward")) {
              setAffinitySelection(
                editor,
                preEdgeNodes,
                reverse ? "backward" : "forward"
              );
              return true;
            }
            move({ ...options, unit: "offset" });
            return true;
          }
          move(options);
          const postEdgeNodes = getEdgeNodes(editor);
          if (postEdgeNodes && isNodesAffinity(editor, postEdgeNodes, "directional") && !hasElement(postEdgeNodes)) {
            setAffinitySelection(
              editor,
              postEdgeNodes,
              reverse ? "forward" : "backward"
            );
          }
          return true;
        }
      };
      if (apply()) return;
      move(options);
    }
  }
}));
var hasElement = (edgeNodes) => {
  const [before, after] = edgeNodes;
  return before && ElementApi9.isElement(before[0]) || after && ElementApi9.isElement(after[0]);
};

// src/lib/plugins/chunking/ChunkingPlugin.ts
import { NodeApi as NodeApi8 } from "@platejs/slate";

// src/lib/plugins/chunking/withChunking.ts
var withChunking = ({
  editor,
  getOptions
}) => {
  const { chunkSize, query } = getOptions();
  editor.getChunkSize = (ancestor) => query(ancestor) ? chunkSize : null;
  return {};
};

// src/lib/plugins/chunking/ChunkingPlugin.ts
var ChunkingPlugin = createTSlatePlugin({
  key: "chunking",
  options: {
    chunkSize: 1e3,
    contentVisibilityAuto: true,
    query: NodeApi8.isEditor
  }
}).overrideEditor(withChunking);

// src/lib/plugins/debug/DebugPlugin.ts
var PlateError = class extends Error {
  constructor(message, type = "DEFAULT") {
    super(`[${type}] ${message}`);
    this.type = type;
    this.name = "PlateError";
  }
};
var DebugPlugin = createTSlatePlugin({
  key: "debug",
  options: {
    isProduction: process.env.NODE_ENV === "production",
    logger: {
      error: (message, type, details) => console.error(`${type ? `[${type}] ` : ""}${message}`, details),
      info: (message, type, details) => console.info(`${type ? `[${type}] ` : ""}${message}`, details),
      log: (message, type, details) => console.log(`${type ? `[${type}] ` : ""}${message}`, details),
      warn: (message, type, details) => console.warn(`${type ? `[${type}] ` : ""}${message}`, details)
    },
    logLevel: process.env.NODE_ENV === "production" ? "error" : "log",
    throwErrors: true
  }
}).extendEditorApi(({ getOptions }) => {
  const logLevels = ["error", "warn", "info", "log"];
  const log = (level, message, type, details) => {
    if (process.env.NODE_ENV === "production") return;
    const options = getOptions();
    if (options.isProduction && level === "log") return;
    if (logLevels.indexOf(level) <= logLevels.indexOf(options.logLevel)) {
      if (level === "error" && options.throwErrors) {
        throw new PlateError(message, type);
      } else {
        options.logger[level]?.(message, type, details);
      }
    }
  };
  return {
    debug: {
      error: (message, type, details) => log("error", message, type, details),
      info: (message, type, details) => log("info", message, type, details),
      log: (message, type, details) => log("log", message, type, details),
      warn: (message, type, details) => log("warn", message, type, details)
    }
  };
});

// src/lib/plugins/dom/DOMPlugin.ts
import { bindFirst } from "@udecode/utils";

// src/lib/plugins/dom/withScrolling.ts
import isUndefined from "lodash/isUndefined.js";
import omitBy from "lodash/omitBy.js";
var withScrolling = (editor, fn, options) => {
  const prevOptions = editor.getOptions(DOMPlugin);
  const prevAutoScroll = AUTO_SCROLL.get(editor) ?? false;
  if (options) {
    const ops = {
      ...prevOptions,
      ...omitBy(options, isUndefined)
    };
    editor.setOptions(DOMPlugin, ops);
  }
  AUTO_SCROLL.set(editor, true);
  fn();
  AUTO_SCROLL.set(editor, prevAutoScroll);
  editor.setOptions(DOMPlugin, prevOptions);
};

// src/lib/plugins/dom/DOMPlugin.ts
var AUTO_SCROLL = /* @__PURE__ */ new WeakMap();
var DOMPlugin = createTSlatePlugin({
  key: "dom",
  options: {
    scrollMode: "last",
    scrollOperations: {
      insert_node: true,
      insert_text: true
    },
    scrollOptions: {
      scrollMode: "if-needed"
    }
  }
}).extendEditorApi(({ editor }) => ({
  isScrolling: () => {
    return AUTO_SCROLL.get(editor) ?? false;
  }
})).extendEditorTransforms(({ editor }) => ({
  withScrolling: bindFirst(withScrolling, editor)
})).overrideEditor(({ api, editor, getOption, tf: { apply } }) => ({
  transforms: {
    apply(operation) {
      if (api.isScrolling()) {
        apply(operation);
        const scrollOperations = getOption("scrollOperations");
        if (!scrollOperations[operation.type]) return;
        const matched = editor.operations.filter(
          (op) => !!scrollOperations[op.type]
        );
        if (matched.length === 0) return;
        const mode = getOption("scrollMode");
        const targetOp = mode === "first" ? matched[0] : matched.at(-1);
        if (!targetOp) return;
        const { offset, path } = targetOp.path ? targetOp : {};
        if (!path) return;
        const scrollOptions = getOption("scrollOptions");
        const scrollTarget = {
          offset: offset ?? 0,
          path
        };
        api.scrollIntoView(scrollTarget, scrollOptions);
        return;
      }
      return apply(operation);
    }
  }
})).overrideEditor(({ editor, tf: { apply } }) => ({
  transforms: {
    apply(operation) {
      if (operation.type === "set_selection") {
        const { properties } = operation;
        editor.dom.prevSelection = properties;
        apply(operation);
        editor.dom.currentKeyboardEvent = null;
        return;
      }
      apply(operation);
    }
  }
}));

// src/lib/plugins/html/HtmlPlugin.ts
import { bindFirst as bindFirst2 } from "@udecode/utils";

// src/lib/plugins/html/constants.ts
var CARRIAGE_RETURN = "\r";
var LINE_FEED = "\n";
var NO_BREAK_SPACE = "\xA0";
var SPACE = " ";
var TAB = "	";
var ZERO_WIDTH_SPACE = "\u200B";

// src/lib/plugins/html/utils/isHtmlElement.ts
var isHtmlElement = (node) => node.nodeType === Node.ELEMENT_NODE;

// src/lib/plugins/html/utils/traverseHtmlNode.ts
var traverseHtmlNode = (node, callback) => {
  const keepTraversing = callback(node);
  if (!keepTraversing) {
    return;
  }
  let child = node.firstChild;
  while (child) {
    const currentChild = child;
    const previousChild = child.previousSibling;
    child = child.nextSibling;
    traverseHtmlNode(currentChild, callback);
    if (
      // An unwrap was made. Need to compute the next child again.
      !currentChild.previousSibling && !currentChild.nextSibling && !currentChild.parentNode && child && previousChild !== child.previousSibling && child.parentNode
    ) {
      child = previousChild ? previousChild.nextSibling : node.firstChild;
    } else if (
      // A list was created. Need to compute the next child again.
      !currentChild.previousSibling && !currentChild.nextSibling && !currentChild.parentNode && child && !child.previousSibling && !child.nextSibling && !child.parentNode
    ) {
      if (previousChild) {
        child = previousChild.nextSibling ? previousChild.nextSibling.nextSibling : null;
      } else if (node.firstChild) {
        child = node.firstChild.nextSibling;
      }
    }
  }
};

// src/lib/plugins/html/utils/traverseHtmlElements.ts
var traverseHtmlElements = (rootNode, callback) => {
  traverseHtmlNode(rootNode, (node) => {
    if (!isHtmlElement(node)) {
      return true;
    }
    return callback(node);
  });
};

// src/lib/plugins/html/utils/cleanHtmlBrElements.ts
var cleanHtmlBrElements = (rootNode) => {
  traverseHtmlElements(rootNode, (element) => {
    if (element.tagName !== "BR") {
      return true;
    }
    const replacementTextNode = document.createTextNode(LINE_FEED);
    if (element.parentElement) {
      element.parentElement.replaceChild(replacementTextNode, element);
    }
    return false;
  });
};

// src/lib/plugins/html/utils/cleanHtmlCrLf.ts
var cleanHtmlCrLf = (html) => {
  return html.replaceAll(/\r\n|\r/g, "\n");
};

// src/lib/plugins/html/utils/cleanHtmlEmptyElements.ts
var ALLOWED_EMPTY_ELEMENTS = /* @__PURE__ */ new Set(["BR", "IMG", "TD", "TH"]);
var isEmpty = (element) => {
  return !ALLOWED_EMPTY_ELEMENTS.has(element.nodeName) && !element.innerHTML.trim();
};
var removeIfEmpty = (element) => {
  if (isEmpty(element)) {
    const { parentElement } = element;
    element.remove();
    if (parentElement) {
      removeIfEmpty(parentElement);
    }
  }
};
var cleanHtmlEmptyElements = (rootNode) => {
  traverseHtmlElements(rootNode, (element) => {
    removeIfEmpty(element);
    return true;
  });
};

// src/lib/plugins/html/utils/replaceTagName.ts
var replaceTagName = (element, tagName) => {
  const newElement = document.createElement(tagName);
  newElement.innerHTML = element.innerHTML;
  for (const { name } of element.attributes) {
    const value = element.getAttribute(name);
    if (value) {
      newElement.setAttribute(name, value);
    }
  }
  if (element.parentNode) {
    element.parentNode.replaceChild(newElement, element);
  }
  return newElement;
};

// src/lib/plugins/html/utils/cleanHtmlFontElements.ts
var cleanHtmlFontElements = (rootNode) => {
  traverseHtmlElements(rootNode, (element) => {
    if (element.tagName === "FONT") {
      if (element.textContent) {
        replaceTagName(element, "span");
      } else {
        element.remove();
      }
    }
    return true;
  });
};

// src/lib/plugins/html/utils/isHtmlFragmentHref.ts
var isHtmlFragmentHref = (href) => href.startsWith("#");

// src/lib/plugins/html/utils/unwrapHtmlElement.ts
var unwrapHtmlElement = (element) => {
  element.outerHTML = element.innerHTML;
};

// src/lib/plugins/html/utils/cleanHtmlLinkElements.ts
var cleanHtmlLinkElements = (rootNode) => {
  traverseHtmlElements(rootNode, (element) => {
    if (element.tagName !== "A") {
      return true;
    }
    const href = element.getAttribute("href");
    if (!href || isHtmlFragmentHref(href)) {
      unwrapHtmlElement(element);
    }
    if (href && element.querySelector("img")) {
      for (const span of element.querySelectorAll("span")) {
        if (!span.textContent) {
          unwrapHtmlElement(span);
        }
      }
    }
    return true;
  });
};

// src/lib/plugins/html/utils/isHtmlText.ts
var isHtmlText = (node) => node.nodeType === Node.TEXT_NODE;

// src/lib/plugins/html/utils/traverseHtmlTexts.ts
var traverseHtmlTexts = (rootNode, callback) => {
  traverseHtmlNode(rootNode, (node) => {
    if (!isHtmlText(node)) {
      return true;
    }
    return callback(node);
  });
};

// src/lib/plugins/html/utils/cleanHtmlTextNodes.ts
var cleanHtmlTextNodes = (rootNode) => {
  traverseHtmlTexts(rootNode, (textNode) => {
    if (/^\n\s*$/.test(textNode.data) && (textNode.previousElementSibling || textNode.nextElementSibling)) {
      textNode.remove();
      return true;
    }
    textNode.data = textNode.data.replaceAll(/\n\s*/g, "\n");
    if (textNode.data.includes(CARRIAGE_RETURN) || textNode.data.includes(LINE_FEED) || textNode.data.includes(NO_BREAK_SPACE)) {
      const hasSpace = textNode.data.includes(SPACE);
      const hasNonWhitespace = /\S/.test(textNode.data);
      const hasLineFeed = textNode.data.includes(LINE_FEED);
      if (!(hasSpace || hasNonWhitespace) && !hasLineFeed) {
        if (textNode.data === NO_BREAK_SPACE) {
          textNode.data = SPACE;
          return true;
        }
        textNode.remove();
        return true;
      }
      if (textNode.previousSibling && textNode.previousSibling.nodeName === "BR" && textNode.parentElement) {
        textNode.previousSibling.remove();
        const matches = /^[\n\r]+/.exec(textNode.data);
        const offset = matches ? matches[0].length : 0;
        textNode.data = textNode.data.slice(Math.max(0, offset)).replaceAll(new RegExp(LINE_FEED, "g"), SPACE).replaceAll(new RegExp(CARRIAGE_RETURN, "g"), SPACE);
        textNode.data = `
${textNode.data}`;
      } else {
        textNode.data = textNode.data.replaceAll(new RegExp(LINE_FEED, "g"), SPACE).replaceAll(new RegExp(CARRIAGE_RETURN, "g"), SPACE);
      }
    }
    return true;
  });
};

// src/lib/plugins/html/utils/inlineTagNames.ts
var inlineTagNames = /* @__PURE__ */ new Set([
  "A",
  "ABBR",
  "ACRONYM",
  "B",
  "BDI",
  "BDO",
  "BIG",
  "BR",
  "BUTTON",
  "CANVAS",
  "CITE",
  "CODE",
  "CONTENT",
  "DATA",
  "DEL",
  "DFN",
  "EM",
  "EMBED",
  "FONT",
  "I",
  "IFRAME",
  "IMG",
  "IMG",
  "INPUT",
  "INS",
  "KBD",
  "LABEL",
  "MAP",
  "MARK",
  "MARQUEE",
  "math",
  "MENUITEM",
  "METER",
  "NOBR",
  "OBJECT",
  "OUTPUT",
  "PICTURE",
  "PORTAL",
  "PROGRESS",
  "Q",
  "S",
  "SAMP",
  "SELECT",
  "SHADOW",
  "SMALL",
  "SOURCE",
  "SPAN",
  "STRIKE",
  "STRONG",
  "SUB",
  "SUP",
  "svg",
  "TEXTAREA",
  "TIME",
  "TRACK",
  "TT",
  "U",
  "VAR",
  "VIDEO",
  "WBR"
]);

// src/lib/plugins/html/utils/isHtmlInlineElement.ts
var isHtmlInlineElement = (node) => {
  if (!isHtmlElement(node)) return false;
  const element = node;
  const tagNameIsInline = inlineTagNames.has(element.tagName);
  const displayProperty = element.style.display.split(" ")[0];
  if (displayProperty === "") {
    return tagNameIsInline;
  }
  if (displayProperty.startsWith("inline")) {
    return true;
  }
  if (displayProperty === "inherit" && element.parentElement) {
    return isHtmlInlineElement(element.parentElement);
  }
  if (["contents", "initial", "none", "revert", "revert-layer", "unset"].includes(
    displayProperty
  )) {
    return tagNameIsInline;
  }
  return false;
};

// src/lib/plugins/html/utils/isHtmlBlockElement.ts
var isHtmlBlockElement = (node) => {
  if (!isHtmlElement(node)) return false;
  const element = node;
  return !isHtmlInlineElement(element);
};

// src/lib/plugins/html/utils/isHtmlTable.ts
var isHtmlTable = (element) => element.nodeName === "TABLE";

// src/lib/plugins/html/utils/copyBlockMarksToSpanChild.ts
var copyBlockMarksToSpanChild = (rootNode) => {
  traverseHtmlElements(rootNode, (element) => {
    const el = element;
    const styleAttribute = element.getAttribute("style");
    if (!styleAttribute) return true;
    if (isHtmlBlockElement(el) && !isHtmlTable(el)) {
      const {
        style: {
          backgroundColor,
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          textDecoration
        }
      } = el;
      if (backgroundColor || color || fontFamily || fontSize || fontStyle || fontWeight || textDecoration) {
        const span = document.createElement("span");
        if (!["inherit", "initial"].includes(color)) {
          span.style.color = color;
        }
        span.style.fontFamily = fontFamily;
        span.style.fontSize = fontSize;
        if (!["inherit", "initial", "normal"].includes(color)) {
          span.style.fontStyle = fontStyle;
        }
        if (![400, "normal"].includes(fontWeight)) {
          span.style.fontWeight = fontWeight;
        }
        span.style.textDecoration = textDecoration;
        span.innerHTML = el.innerHTML;
        element.innerHTML = span.outerHTML;
      }
    }
    return true;
  });
};

// src/lib/utils/normalizeDescendantsToDocumentFragment.ts
import {
  ElementApi as ElementApi10,
  TextApi as TextApi5
} from "@platejs/slate";
var isInlineNode = (editor) => (node) => TextApi5.isText(node) || ElementApi10.isElement(node) && editor.api.isInline(node);
var makeBlockLazy = (type) => () => ({
  children: [],
  type
});
var hasDifferentChildNodes = (descendants, isInline) => {
  return descendants.some((descendant, index, arr) => {
    const prevDescendant = arr[index - 1];
    if (index !== 0) {
      return isInline(descendant) !== isInline(prevDescendant);
    }
    return false;
  });
};
var normalizeDifferentNodeTypes = (descendants, isInline, makeDefaultBlock) => {
  const hasDifferentNodes = hasDifferentChildNodes(descendants, isInline);
  const { fragment } = descendants.reduce(
    (memo, node) => {
      if (hasDifferentNodes && isInline(node)) {
        let block = memo.precedingBlock;
        if (!block) {
          block = makeDefaultBlock();
          memo.precedingBlock = block;
          memo.fragment.push(block);
        }
        block.children.push(node);
      } else {
        memo.fragment.push(node);
        memo.precedingBlock = null;
      }
      return memo;
    },
    {
      fragment: [],
      precedingBlock: null
    }
  );
  return fragment;
};
var normalizeEmptyChildren = (descendants) => {
  if (descendants.length === 0) {
    return [{ text: "" }];
  }
  return descendants;
};
var normalize = (descendants, isInline, makeDefaultBlock) => {
  descendants = normalizeEmptyChildren(descendants);
  descendants = normalizeDifferentNodeTypes(
    descendants,
    isInline,
    makeDefaultBlock
  );
  descendants = descendants.map((node) => {
    if (ElementApi10.isElement(node)) {
      return {
        ...node,
        children: normalize(
          node.children,
          isInline,
          makeDefaultBlock
        )
      };
    }
    return node;
  });
  return descendants;
};
var normalizeDescendantsToDocumentFragment = (editor, {
  defaultElementPlugin = BaseParagraphPlugin,
  descendants
}) => {
  const isInline = isInlineNode(editor);
  const defaultType = editor.getType(defaultElementPlugin.key);
  const makeDefaultBlock = makeBlockLazy(defaultType);
  return normalize(descendants, isInline, makeDefaultBlock);
};

// src/lib/plugins/html/utils/collapse-white-space/collapseString.ts
var collapseString = (text, {
  shouldCollapseWhiteSpace = true,
  trimEnd = "collapse",
  trimStart = "collapse",
  whiteSpaceIncludesNewlines = true
} = {}) => {
  if (trimStart === "all") {
    text = text.replace(/^\s+/, "");
  }
  if (trimEnd === "single-newline") {
    text = text.replace(/\n$/, "");
  }
  if (shouldCollapseWhiteSpace) {
    if (whiteSpaceIncludesNewlines) {
      text = text.replaceAll(/\s+/g, " ");
    } else {
      text = text.replaceAll(/[^\S\n\r]+/g, " ");
      text = text.replaceAll(/^[^\S\n\r]+/gm, "");
      text = text.replaceAll(/[^\S\n\r]+$/gm, "");
    }
  }
  return text;
};

// src/lib/plugins/html/utils/collapse-white-space/isLastNonEmptyTextOfInlineFormattingContext.ts
var isLastNonEmptyTextOfInlineFormattingContext = (initialText) => {
  let currentNode = initialText;
  while (true) {
    if (currentNode.nextSibling) {
      currentNode = currentNode.nextSibling;
    } else {
      currentNode = currentNode.parentElement;
      if (currentNode && isHtmlBlockElement(currentNode)) {
        return true;
      }
      currentNode = currentNode?.nextSibling || null;
    }
    if (!currentNode) {
      return true;
    }
    if (isHtmlBlockElement(currentNode)) {
      return true;
    }
    if ((currentNode.textContent || "").length > 0) {
      return false;
    }
  }
};

// src/lib/plugins/html/utils/collapse-white-space/stateTransforms.ts
var upsertInlineFormattingContext = (state) => {
  if (state.inlineFormattingContext) {
    state.inlineFormattingContext.atStart = false;
  } else {
    state.inlineFormattingContext = {
      atStart: true,
      lastHasTrailingWhiteSpace: false
    };
  }
};
var endInlineFormattingContext = (state) => {
  state.inlineFormattingContext = null;
};

// src/lib/plugins/html/utils/collapse-white-space/collapseWhiteSpaceText.ts
var collapseWhiteSpaceText = (text, state) => {
  const textContent = text.textContent || "";
  const isWhiteSpaceOnly = textContent.trim() === "";
  if (state.inlineFormattingContext || !isWhiteSpaceOnly) {
    upsertInlineFormattingContext(state);
  }
  const { whiteSpaceRule } = state;
  const trimStart = (() => {
    if (whiteSpaceRule !== "normal") return "collapse";
    if (!state.inlineFormattingContext || state.inlineFormattingContext.atStart || state.inlineFormattingContext.lastHasTrailingWhiteSpace)
      return "all";
    return "collapse";
  })();
  const trimEnd = (() => {
    if (whiteSpaceRule === "normal") return "collapse";
    if (isLastNonEmptyTextOfInlineFormattingContext(text))
      return "single-newline";
    return "collapse";
  })();
  const shouldCollapseWhiteSpace = {
    normal: true,
    pre: false,
    "pre-line": true
  }[whiteSpaceRule];
  const whiteSpaceIncludesNewlines = whiteSpaceRule !== "pre-line";
  const collapsedTextContent = collapseString(textContent || "", {
    shouldCollapseWhiteSpace,
    trimEnd,
    trimStart,
    whiteSpaceIncludesNewlines
  });
  if (state.inlineFormattingContext && shouldCollapseWhiteSpace) {
    state.inlineFormattingContext.lastHasTrailingWhiteSpace = collapsedTextContent.endsWith(" ");
  }
  text.textContent = collapsedTextContent;
};

// src/lib/plugins/html/utils/collapse-white-space/collapseWhiteSpaceNode.ts
var collapseWhiteSpaceNode = (node, state) => {
  if (isHtmlElement(node)) {
    collapseWhiteSpaceElement(node, state);
    return;
  }
  if (isHtmlText(node)) {
    collapseWhiteSpaceText(node, state);
    return;
  }
  collapseWhiteSpaceChildren(node, state);
};

// src/lib/plugins/html/utils/collapse-white-space/collapseWhiteSpaceChildren.ts
var collapseWhiteSpaceChildren = (node, state) => {
  const childNodes = Array.from(node.childNodes);
  for (const childNode of childNodes) {
    collapseWhiteSpaceNode(childNode, state);
  }
};

// src/lib/plugins/html/utils/collapse-white-space/inferWhiteSpaceRule.ts
var inferWhiteSpaceRule = (element) => {
  const whiteSpaceProperty = element.style.whiteSpace;
  switch (whiteSpaceProperty) {
    case "break-spaces":
    case "pre":
    case "pre-wrap": {
      return "pre";
    }
    case "normal":
    case "nowrap": {
      return "normal";
    }
    case "pre-line": {
      return "pre-line";
    }
  }
  if (element.tagName === "PRE") {
    return "pre";
  }
  if (whiteSpaceProperty === "initial") {
    return "normal";
  }
  return null;
};

// src/lib/plugins/html/utils/collapse-white-space/collapseWhiteSpaceElement.ts
var collapseWhiteSpaceElement = (element, state) => {
  const isInlineElement = isHtmlInlineElement(element);
  const previousWhiteSpaceRule = state.whiteSpaceRule;
  const inferredWhiteSpaceRule = inferWhiteSpaceRule(element);
  if (inferredWhiteSpaceRule) {
    state.whiteSpaceRule = inferredWhiteSpaceRule;
  }
  if (!isInlineElement) {
    endInlineFormattingContext(state);
  }
  collapseWhiteSpaceChildren(element, state);
  if (!isInlineElement) {
    endInlineFormattingContext(state);
  }
  state.whiteSpaceRule = previousWhiteSpaceRule;
};

// src/lib/plugins/html/utils/collapse-white-space/collapseWhiteSpace.ts
var collapseWhiteSpace = (element) => {
  const clonedElement = element.cloneNode(true);
  const state = {
    inlineFormattingContext: null,
    whiteSpaceRule: "normal"
  };
  collapseWhiteSpaceElement(clonedElement, state);
  return clonedElement;
};

// src/lib/plugins/html/utils/htmlBodyToFragment.ts
import { jsx } from "slate-hyperscript";

// src/lib/plugins/html/utils/deserializeHtmlNodeChildren.ts
var deserializeHtmlNodeChildren = (editor, node, isSlateParent = false) => {
  return Array.from(node.childNodes).flatMap((child) => {
    if (child.nodeType === 1 && !isSlateNode(child) && isSlateParent) {
      return deserializeHtmlNodeChildren(
        editor,
        child,
        isSlateParent
      );
    }
    return deserializeHtmlNode(editor)(child);
  });
};

// src/lib/plugins/html/utils/htmlBodyToFragment.ts
var htmlBodyToFragment = (editor, element) => {
  if (element.nodeName === "BODY") {
    return jsx(
      "fragment",
      {},
      deserializeHtmlNodeChildren(editor, element)
    );
  }
};

// src/lib/plugins/html/utils/htmlBrToNewLine.ts
var htmlBrToNewLine = (node) => {
  if (node.nodeName === "BR") {
    return "\n";
  }
};

// src/lib/plugins/html/utils/htmlElementToElement.ts
import { jsx as jsx2 } from "slate-hyperscript";

// src/lib/plugins/html/utils/pluginDeserializeHtml.ts
import { isDefined as isDefined4 } from "@udecode/utils";
import castArray from "lodash/castArray.js";

// src/lib/plugins/html/utils/getDataNodeProps.ts
var getDefaultNodeProps = ({
  element,
  type
}) => {
  if (!isSlatePluginNode(element, type) && !isSlateLeaf(element)) return;
  const dataAttributes = {};
  Object.entries(element.dataset).forEach(([key, value]) => {
    if (key.startsWith("slate") && value && // Ignore slate default attributes
    !["slateInline", "slateLeaf", "slateNode", "slateVoid"].includes(key)) {
      const attributeKey = key.slice(5).charAt(0).toLowerCase() + key.slice(6);
      if (value === void 0) return;
      let parsedValue = value;
      if (value === "true") parsedValue = true;
      else if (value === "false") parsedValue = false;
      else if (!Number.isNaN(Number(value))) parsedValue = Number(value);
      dataAttributes[attributeKey] = parsedValue;
    }
  });
  if (Object.keys(dataAttributes).length > 0) {
    return dataAttributes;
  }
};
var getDataNodeProps = ({
  editor,
  element,
  plugin
}) => {
  const toNodeProps = plugin.parsers.html?.deserializer?.toNodeProps;
  const disableDefaultNodeProps = plugin.parsers.html?.deserializer?.disableDefaultNodeProps ?? false;
  const defaultNodeProps = disableDefaultNodeProps ? {} : getDefaultNodeProps({
    ...getEditorPlugin(editor, plugin),
    element
  });
  if (!toNodeProps) return defaultNodeProps;
  const customNodeProps = toNodeProps({
    ...getEditorPlugin(editor, plugin),
    element
  }) ?? {};
  return {
    ...defaultNodeProps,
    ...customNodeProps
  };
};

// src/lib/plugins/html/utils/pluginDeserializeHtml.ts
var getDeserializedWithStaticRules = (plugin) => {
  let deserializer = plugin.parsers?.html?.deserializer;
  const rules = deserializer?.rules ?? [];
  const hasSlateRule = rules.some(
    (rule) => rule.validClassName?.includes(`slate-${plugin.key}`)
  );
  const staticRules = hasSlateRule ? rules : [
    {
      validClassName: `slate-${plugin.key}`,
      validNodeName: "*"
    },
    ...rules
  ];
  if (!deserializer) deserializer = { rules: staticRules };
  deserializer.rules = staticRules;
  return deserializer;
};
var pluginDeserializeHtml = (editor, plugin, {
  deserializeLeaf,
  element: el
}) => {
  const {
    node: { isElement: isElementRoot, isLeaf: isLeafRoot }
  } = plugin;
  const deserializer = getDeserializedWithStaticRules(plugin);
  if (!deserializer) return;
  const {
    attributeNames,
    isElement: isElementRule,
    isLeaf: isLeafRule,
    query,
    rules
  } = deserializer;
  let { parse } = deserializer;
  const isElement = isElementRule || isElementRoot;
  const isLeaf = isLeafRule || isLeafRoot;
  if (!deserializeLeaf && !isElement) {
    return;
  }
  if (deserializeLeaf && !isLeaf) {
    return;
  }
  if (rules) {
    const isValid = rules.some(
      ({ validAttribute, validClassName, validNodeName = "*", validStyle }) => {
        if (validNodeName) {
          const validNodeNames = castArray(validNodeName);
          if (validNodeNames.length > 0 && !validNodeNames.includes(el.nodeName) && validNodeName !== "*")
            return false;
        }
        if (validClassName && !el.classList.contains(validClassName))
          return false;
        if (validStyle) {
          for (const [key, value] of Object.entries(validStyle)) {
            const values = castArray(value);
            if (!values.includes(el.style[key]) && value !== "*")
              return;
            if (value === "*" && !el.style[key]) return;
            const defaultNodeValue = plugin.inject.nodeProps?.defaultNodeValue;
            if (defaultNodeValue && defaultNodeValue === el.style[key]) {
              return false;
            }
          }
        }
        if (validAttribute) {
          if (typeof validAttribute === "string") {
            if (!el.getAttributeNames().includes(validAttribute)) return false;
          } else {
            for (const [attributeName, attributeValue] of Object.entries(
              validAttribute
            )) {
              const attributeValues = castArray(attributeValue);
              const elAttribute = el.getAttribute(attributeName);
              if (!isDefined4(elAttribute) || !attributeValues.includes(elAttribute))
                return false;
            }
          }
        }
        return true;
      }
    );
    if (!isValid) return;
  }
  if (query && !query({ ...getEditorPlugin(editor, plugin), element: el })) {
    return;
  }
  if (!parse)
    if (isElement) {
      parse = ({ type }) => ({ type });
    } else if (isLeaf) {
      parse = ({ type }) => ({ [type]: true });
    } else {
      return;
    }
  const parsedNode = (() => {
    if (isSlateNode(el)) {
      return {};
    }
    return parse({
      ...getEditorPlugin(editor, plugin),
      element: el,
      node: {}
    }) ?? {};
  })();
  const dataNodeProps = getDataNodeProps({
    editor,
    element: el,
    plugin
  });
  let node = {
    ...parsedNode,
    ...dataNodeProps
  };
  if (Object.keys(node).length === 0) return;
  const injectedPlugins = getInjectedPlugins(editor, plugin);
  injectedPlugins.forEach((injectedPlugin) => {
    const res = injectedPlugin.parsers?.html?.deserializer?.parse?.({
      ...getEditorPlugin(editor, plugin),
      element: el,
      node
    });
    if (res && !isSlateNode(el)) {
      node = {
        ...node,
        ...res
      };
    }
  });
  if (attributeNames) {
    const elementAttributes = {};
    const elementAttributeNames = el.getAttributeNames();
    for (const elementAttributeName of elementAttributeNames) {
      if (attributeNames.includes(elementAttributeName)) {
        elementAttributes[elementAttributeName] = el.getAttribute(elementAttributeName);
      }
    }
    if (Object.keys(elementAttributes).length > 0) {
      node.attributes = elementAttributes;
    }
  }
  return { ...deserializer, node };
};

// src/lib/plugins/html/utils/pipeDeserializeHtmlElement.ts
var pipeDeserializeHtmlElement = (editor, element) => {
  let result;
  [...editor.meta.pluginList].reverse().some((plugin) => {
    result = pluginDeserializeHtml(editor, plugin, { element });
    return !!result;
  });
  return result;
};

// src/lib/plugins/html/utils/htmlElementToElement.ts
var htmlElementToElement = (editor, element, isSlate = false) => {
  const deserialized = pipeDeserializeHtmlElement(editor, element);
  if (deserialized) {
    const { node, withoutChildren } = deserialized;
    let descendants = node.children ?? deserializeHtmlNodeChildren(editor, element, isSlate);
    if (descendants.length === 0 || withoutChildren || isSlateVoid(element)) {
      descendants = [{ text: "" }];
    }
    return jsx2("element", node, descendants);
  }
};

// src/lib/plugins/html/utils/htmlElementToLeaf.ts
import { ElementApi as ElementApi11, TextApi as TextApi6 } from "@platejs/slate";
import { jsx as jsx3 } from "slate-hyperscript";

// src/lib/plugins/html/utils/pipeDeserializeHtmlLeaf.ts
var pipeDeserializeHtmlLeaf = (editor, element) => {
  let node = {};
  [...editor.meta.pluginList].reverse().forEach((plugin) => {
    const deserialized = pluginDeserializeHtml(editor, plugin, {
      deserializeLeaf: true,
      element
    });
    if (!deserialized) return;
    node = { ...node, ...deserialized.node };
  });
  return node;
};

// src/lib/plugins/html/utils/htmlElementToLeaf.ts
var htmlElementToLeaf = (editor, element) => {
  const node = pipeDeserializeHtmlLeaf(editor, element);
  return deserializeHtmlNodeChildren(editor, element).reduce(
    (arr, child) => {
      if (!child) return arr;
      if (ElementApi11.isElement(child)) {
        if (Object.keys(node).length > 0) {
          mergeDeepToNodes({
            node: child,
            query: {
              filter: ([n]) => TextApi6.isText(n)
            },
            source: node
          });
        }
        arr.push(child);
      } else {
        const attributes = { ...node };
        if (TextApi6.isText(child) && child.text) {
          Object.keys(attributes).forEach((key) => {
            if (attributes[key] && child[key]) {
              attributes[key] = child[key];
            }
          });
        }
        arr.push(jsx3("text", attributes, child));
      }
      return arr;
    },
    []
  );
};

// src/lib/plugins/html/utils/htmlTextNodeToString.ts
var htmlTextNodeToString = (node) => {
  if (isHtmlText(node)) {
    if (node.parentElement?.dataset.platePreventDeserialization) return "";
    return node.textContent || "";
  }
};

// src/lib/plugins/html/utils/deserializeHtmlNode.ts
var shouldBrBecomeEmptyParagraph = (node) => {
  if (node.nodeName !== "BR") return false;
  if (node.className === "Apple-interchange-newline") {
    return false;
  }
  const parent = node.parentElement;
  if (!parent) return false;
  if (parent.tagName === "P" || parent.tagName === "SPAN") {
    return false;
  }
  const hasAdjacentText = () => {
    let sibling = node.previousSibling;
    while (sibling) {
      if (sibling.nodeType === Node.TEXT_NODE && sibling.textContent?.trim()) {
        return true;
      }
      sibling = sibling.previousSibling;
    }
    sibling = node.nextSibling;
    while (sibling) {
      if (sibling.nodeType === Node.TEXT_NODE && sibling.textContent?.trim()) {
        return true;
      }
      sibling = sibling.nextSibling;
    }
    return false;
  };
  if (hasAdjacentText()) {
    return false;
  }
  return true;
};
var deserializeHtmlNode = (editor) => (node) => {
  const textNode = htmlTextNodeToString(node);
  if (textNode) return textNode;
  if (!isHtmlElement(node)) return null;
  if (shouldBrBecomeEmptyParagraph(node)) {
    return {
      children: [{ text: "" }],
      type: editor.getType("p")
    };
  }
  if (node.nodeName === "BR" && node.className === "Apple-interchange-newline") {
    return null;
  }
  const breakLine = htmlBrToNewLine(node);
  if (breakLine) return breakLine;
  const fragment = htmlBodyToFragment(editor, node);
  if (fragment) return fragment;
  const element = htmlElementToElement(
    editor,
    node,
    isSlateNode(node)
  );
  if (element) return element;
  return htmlElementToLeaf(editor, node);
};

// src/lib/plugins/html/utils/deserializeHtmlElement.ts
var deserializeHtmlElement = (editor, element) => {
  return deserializeHtmlNode(editor)(element);
};

// src/lib/plugins/html/utils/htmlStringToDOMNode.ts
var htmlStringToDOMNode = (rawHtml) => {
  const node = document.createElement("body");
  node.innerHTML = rawHtml;
  return node;
};

// src/lib/plugins/html/utils/deserializeHtml.ts
var deserializeHtml = (editor, {
  collapseWhiteSpace: shouldCollapseWhiteSpace = true,
  defaultElementPlugin,
  element
}) => {
  if (typeof element === "string") {
    element = htmlStringToDOMNode(element);
  }
  if (shouldCollapseWhiteSpace) {
    element = collapseWhiteSpace(element);
  }
  const fragment = deserializeHtmlElement(editor, element);
  return normalizeDescendantsToDocumentFragment(editor, {
    defaultElementPlugin,
    descendants: fragment
  });
};

// src/lib/plugins/html/utils/findHtmlElement.ts
var findHtmlElement = (rootNode, predicate) => {
  let res = null;
  traverseHtmlElements(rootNode, (node) => {
    if (predicate(node)) {
      res = node;
      return false;
    }
    return true;
  });
  return res;
};
var someHtmlElement = (rootNode, predicate) => {
  return !!findHtmlElement(rootNode, predicate);
};

// src/lib/plugins/html/utils/getHtmlComments.ts
var acceptNode = () => NodeFilter.FILTER_ACCEPT;
var getHtmlComments = (node) => {
  const comments = [];
  const iterator = document.createNodeIterator(node, NodeFilter.SHOW_COMMENT, {
    acceptNode
  });
  let currentNode = iterator.nextNode();
  while (currentNode) {
    if (currentNode.nodeValue) {
      comments.push(currentNode.nodeValue);
    }
    currentNode = iterator.nextNode();
  }
  return comments;
};

// src/lib/plugins/html/utils/isHtmlComment.ts
var isHtmlComment = (node) => node.nodeType === Node.COMMENT_NODE;

// src/lib/plugins/html/utils/isOlSymbol.ts
var isOlSymbol = (symbol) => {
  return /[\da-np-z]\S/.test(symbol.toLowerCase());
};

// src/lib/plugins/html/utils/parseHtmlDocument.ts
var parseHtmlDocument = (html) => {
  return new DOMParser().parseFromString(html, "text/html");
};

// src/lib/plugins/html/utils/parseHtmlElement.ts
var parseHtmlElement = (html) => {
  const { body } = parseHtmlDocument(html);
  return body.firstElementChild;
};

// src/lib/plugins/html/utils/postCleanHtml.ts
var postCleanHtml = (html) => {
  const cleanHtml = html.trim().replaceAll(new RegExp(ZERO_WIDTH_SPACE, "g"), "");
  return `<body>${cleanHtml}</body>`;
};

// src/lib/plugins/html/utils/removeHtmlSurroundings.ts
var removeBeforeHtml = (html) => {
  const index = html.indexOf("<html");
  if (index === -1) {
    return html;
  }
  return html.slice(Math.max(0, index));
};
var removeAfterHtml = (html) => {
  const index = html.lastIndexOf("</html>");
  if (index === -1) {
    return html;
  }
  return html.slice(0, Math.max(0, index + "</html>".length));
};
var removeHtmlSurroundings = (html) => {
  return removeBeforeHtml(removeAfterHtml(html));
};

// src/lib/plugins/html/utils/preCleanHtml.ts
var cleaners = [removeHtmlSurroundings, cleanHtmlCrLf];
var preCleanHtml = (html) => {
  return cleaners.reduce((result, clean) => clean(result), html);
};

// src/lib/plugins/html/utils/traverseHtmlComments.ts
var traverseHtmlComments = (rootNode, callback) => {
  traverseHtmlNode(rootNode, (node) => {
    if (!isHtmlComment(node)) {
      return true;
    }
    return callback(node);
  });
};

// src/lib/plugins/html/utils/removeHtmlNodesBetweenComments.ts
var removeHtmlNodesBetweenComments = (rootNode, start, end) => {
  const isClosingComment = (node) => isHtmlComment(node) && node.data === end;
  traverseHtmlComments(rootNode, (comment) => {
    if (comment.data === start) {
      let node = comment.nextSibling;
      comment.remove();
      while (node && !isClosingComment(node)) {
        const { nextSibling } = node;
        node.remove();
        node = nextSibling;
      }
      if (node && isClosingComment(node)) {
        node.remove();
      }
    }
    return true;
  });
};

// src/lib/plugins/html/HtmlPlugin.ts
var HtmlPlugin = createSlatePlugin({
  key: "html"
}).extendApi(({ editor }) => ({
  deserialize: bindFirst2(deserializeHtml, editor)
})).extend({
  parser: {
    format: "text/html",
    deserialize: ({ api, data }) => {
      const document2 = parseHtmlDocument(data);
      return api.html.deserialize({
        element: document2.body
      });
    }
  }
});

// src/lib/plugins/length/LengthPlugin.ts
var LengthPlugin = createTSlatePlugin({
  key: "length"
}).overrideEditor(({ editor, getOptions, tf: { apply } }) => ({
  transforms: {
    apply(operation) {
      editor.tf.withoutNormalizing(() => {
        apply(operation);
        const options = getOptions();
        if (options.maxLength) {
          const length = editor.api.string([]).length;
          if (length > options.maxLength) {
            const overflowLength = length - options.maxLength;
            editor.tf.delete({
              distance: overflowLength,
              reverse: true,
              unit: "character"
            });
          }
        }
      });
    }
  }
}));

// src/lib/plugins/node-id/NodeIdPlugin.ts
import {
  ElementApi as ElementApi12,
  queryNode as queryNode3
} from "@platejs/slate";
import { nanoid } from "nanoid";

// src/lib/plugins/node-id/withNodeId.ts
import {
  queryNode as queryNode2
} from "@platejs/slate";
import { isDefined as isDefined5 } from "@udecode/utils";
import castArray2 from "lodash/castArray.js";
import cloneDeep from "lodash/cloneDeep.js";
var withNodeId = ({
  editor,
  getOptions,
  tf: { apply, insertNode, insertNodes }
}) => {
  const idPropsCreator = () => ({
    [getOptions().idKey ?? ""]: getOptions().idCreator()
  });
  const filterNode = (nodeEntry) => {
    const { filter, filterText } = getOptions();
    return filter(nodeEntry) && (!filterText || nodeEntry[0]?.type !== void 0);
  };
  const removeIdFromNodeIfDuplicate = (node) => {
    const { idKey = "", reuseId } = getOptions();
    if (!reuseId && editor.api.some({ at: [], match: { [idKey]: node[idKey] } })) {
      delete node[idKey];
    }
  };
  const overrideIdIfSet = (node) => {
    const { idKey = "" } = getOptions();
    if (isDefined5(node._id)) {
      const id = node._id;
      delete node._id;
      if (!editor.api.some({ at: [], match: { [idKey]: id } })) {
        node[idKey] = id;
      }
    }
  };
  return {
    transforms: {
      apply(operation) {
        const {
          allow,
          disableInsertOverrides,
          exclude,
          idCreator,
          idKey = "",
          reuseId
        } = getOptions();
        const query = {
          allow,
          exclude,
          filter: filterNode
        };
        if (operation.type === "insert_node") {
          const node = cloneDeep(operation.node);
          applyDeepToNodes({
            apply: removeIdFromNodeIfDuplicate,
            node,
            query,
            source: {}
          });
          defaultsDeepToNodes({
            node,
            path: operation.path,
            query,
            source: idPropsCreator
          });
          if (!disableInsertOverrides) {
            applyDeepToNodes({
              apply: overrideIdIfSet,
              node,
              query,
              source: {}
            });
          }
          return apply({
            ...operation,
            node
          });
        }
        if (operation.type === "split_node") {
          const node = operation.properties;
          let id = operation.properties[idKey];
          if (queryNode2([node, operation.path], query)) {
            if (!reuseId || id === void 0 || editor.api.some({
              at: [],
              match: { [idKey]: id }
            })) {
              id = idCreator();
            }
            return apply({
              ...operation,
              properties: {
                ...operation.properties,
                [idKey]: id
              }
            });
          }
          if (id) {
            delete operation.properties[idKey];
          }
        }
        return apply(operation);
      },
      insertNode(node) {
        const { disableInsertOverrides, idKey = "" } = getOptions();
        if (!disableInsertOverrides && node[idKey]) {
          if (!Object.isExtensible(node)) {
            node = cloneDeep(node);
          }
          node._id = node[idKey];
        }
        insertNode(node);
      },
      insertNodes(_nodes, options) {
        const nodes = castArray2(_nodes).filter(
          (node) => !!node
        );
        if (nodes.length === 0) return;
        const { disableInsertOverrides, idKey = "" } = getOptions();
        insertNodes(
          nodes.map((node) => {
            if (!disableInsertOverrides && node[idKey]) {
              if (!Object.isExtensible(node)) {
                node = cloneDeep(node);
              }
              node._id = node[idKey];
            }
            return node;
          }),
          options
        );
      }
    }
  };
};

// src/lib/plugins/node-id/NodeIdPlugin.ts
var normalizeNodeId = (value, options = {}) => {
  const {
    allow,
    exclude,
    filter = () => true,
    filterInline = true,
    filterText = true,
    idCreator = () => nanoid(10),
    idKey = "id"
  } = options;
  const normalizeNode = (node, path) => {
    const clonedNode = { ...node };
    if (!clonedNode[idKey] && queryNode3([clonedNode, path], {
      allow,
      exclude,
      filter: (entry) => {
        const [node2] = entry;
        if (filterText && !ElementApi12.isElement(node2)) {
          return false;
        }
        if (filterInline && ElementApi12.isElement(node2) && // For static normalization, we can't use editor.api.isBlock
        // so we'll assume all elements with children are blocks unless inline is explicitly set
        node2.inline === true) {
          return false;
        }
        return filter(entry);
      }
    })) {
      clonedNode[idKey] = idCreator();
    }
    if (ElementApi12.isElement(clonedNode)) {
      clonedNode.children = clonedNode.children.map(
        (child, index) => normalizeNode(child, [...path, index])
      );
    }
    return clonedNode;
  };
  return value.map((node, index) => normalizeNode(node, [index]));
};
var NodeIdPlugin = createTSlatePlugin({
  key: "nodeId",
  options: {
    filterInline: true,
    filterText: true,
    idKey: "id",
    normalizeInitialValue: false,
    filter: () => true,
    idCreator: () => nanoid(10)
  }
}).extendTransforms(({ editor, getOptions }) => ({
  normalize() {
    const { allow, exclude, filter, filterInline, filterText, idKey } = getOptions();
    const addNodeId = (entry) => {
      const [node, path] = entry;
      if (!node[idKey] && queryNode3([node, path], {
        allow,
        exclude,
        filter: (entry2) => {
          const [node2] = entry2;
          if (filterText && !ElementApi12.isElement(node2)) {
            return false;
          }
          if (filterInline && ElementApi12.isElement(node2) && !editor.api.isBlock(node2)) {
            return false;
          }
          return filter(entry2);
        }
      })) {
        const existingNode = editor.api.node(path);
        if (!existingNode) {
          return;
        }
        editor.tf.withoutSaving(() => {
          editor.tf.setNodes(
            { [idKey]: getOptions().idCreator() },
            { at: path }
          );
        });
      }
      if (ElementApi12.isElement(node)) {
        node.children.forEach((child, index) => {
          addNodeId([child, [...path, index]]);
        });
      }
    };
    editor.children.forEach((node, index) => {
      addNodeId([node, [index]]);
    });
  }
})).extend({
  normalizeInitialValue: ({ editor, getOptions, tf }) => {
    const { normalizeInitialValue } = getOptions();
    if (!normalizeInitialValue) {
      const firstNode = editor.children[0];
      const lastNode = editor.children.at(-1);
      if (firstNode?.id && lastNode?.id) {
        return;
      }
    }
    tf.nodeId.normalize();
  }
}).overrideEditor(withNodeId);

// src/lib/plugins/slate-extension/SlateExtensionPlugin.ts
import {
  NodeApi as NodeApi10,
  OperationApi,
  PathApi as PathApi5
} from "@platejs/slate";
import { bindFirst as bindFirst3 } from "@udecode/utils";

// src/lib/utils/pipeOnNodeChange.ts
var pipeOnNodeChange = (editor, node, prevNode, operation) => {
  return editor.meta.pluginCache.handlers.onNodeChange.some((key) => {
    const plugin = editor.getPlugin({ key });
    if (!plugin || editor.dom?.readOnly) {
      return false;
    }
    const handler = plugin.handlers?.onNodeChange;
    if (!handler) {
      return false;
    }
    const shouldTreatEventAsHandled = handler({
      editor,
      node,
      operation,
      plugin,
      prevNode
    });
    if (shouldTreatEventAsHandled != null) {
      return shouldTreatEventAsHandled;
    }
    return false;
  });
};

// src/lib/utils/pipeOnTextChange.ts
var pipeOnTextChange = (editor, node, text, prevText, operation) => {
  return editor.meta.pluginCache.handlers.onTextChange.some((key) => {
    const plugin = editor.getPlugin({ key });
    if (!plugin || editor.dom?.readOnly) {
      return false;
    }
    const handler = plugin.handlers?.onTextChange;
    if (!handler) {
      return false;
    }
    const shouldTreatEventAsHandled = handler({
      editor,
      node,
      operation,
      plugin,
      prevText,
      text
    });
    if (shouldTreatEventAsHandled != null) {
      return shouldTreatEventAsHandled;
    }
    return false;
  });
};

// src/internal/plugin/pipeNormalizeInitialValue.ts
var pipeNormalizeInitialValue = (editor) => {
  const value = editor.meta.isNormalizing;
  editor.meta.isNormalizing = true;
  editor.meta.pluginCache.normalizeInitialValue.forEach((key) => {
    const p = editor.getPlugin({ key });
    if (isEditOnly(editor.dom.readOnly, p, "normalizeInitialValue")) {
      return;
    }
    p.normalizeInitialValue?.({
      ...getEditorPlugin(editor, p),
      value: editor.children
    });
  });
  editor.meta.isNormalizing = value;
};

// src/lib/plugins/slate-extension/transforms/init.ts
var init = (editor, { autoSelect, selection, shouldNormalizeEditor, value, onReady }) => {
  const onValueLoaded = (isAsync = false) => {
    if (!editor.children || editor.children?.length === 0) {
      editor.children = editor.api.create.value();
    }
    if (selection) {
      editor.selection = selection;
    } else if (autoSelect) {
      const edge = autoSelect === "start" ? "start" : "end";
      const target = edge === "start" ? editor.api.start([]) : editor.api.end([]);
      editor.tf.select(target);
    }
    if (editor.children.length > 0) {
      pipeNormalizeInitialValue(editor);
    }
    if (shouldNormalizeEditor) {
      editor.tf.normalize({ force: true });
    }
    if (onReady) {
      onReady({ editor, isAsync, value: editor.children });
    }
  };
  if (value === null) {
    onValueLoaded();
  } else {
    if (typeof value === "string") {
      editor.children = editor.api.html.deserialize({
        element: value
      });
      onValueLoaded();
    } else if (typeof value === "function") {
      const result = value(editor);
      if (result && typeof result.then === "function") {
        result.then((resolvedValue) => {
          editor.children = resolvedValue;
          onValueLoaded(true);
        });
      } else {
        editor.children = result;
        onValueLoaded();
      }
    } else if (value) {
      editor.children = value;
      onValueLoaded();
    } else {
      onValueLoaded();
    }
  }
};

// src/lib/plugins/slate-extension/transforms/insertExitBreak.ts
import {
  combineMatchOptions,
  PathApi as PathApi4
} from "@platejs/slate";
var insertExitBreak = (editor, { match, reverse } = {}) => {
  if (!editor.selection || !editor.api.isCollapsed()) return;
  const block = editor.api.block();
  if (!block) return;
  const target = editor.api.above({
    at: block[1],
    match: combineMatchOptions(
      editor,
      (n, p) => p.length === 1 || p.length > 1 && !!n.type && !getPluginByType(editor, n.type)?.node.isStrictSiblings,
      { match }
    )
  });
  const ancestorPath = target?.[1] ?? block[1];
  const targetPath = reverse ? ancestorPath : PathApi4.next(ancestorPath);
  if (!targetPath) return;
  editor.tf.insertNodes(editor.api.create.block(), {
    at: targetPath,
    select: true
  });
  return true;
};

// src/lib/plugins/slate-extension/transforms/resetBlock.ts
import { NodeApi as NodeApi9 } from "@platejs/slate";
var resetBlock = (editor, { at } = {}) => {
  const entry = editor.api.block({ at });
  if (!entry?.[0]) return;
  const [block, path] = entry;
  editor.tf.withoutNormalizing(() => {
    const { id, type, ...otherProps } = NodeApi9.extractProps(block);
    Object.keys(otherProps).forEach((key) => {
      editor.tf.unsetNodes(key, { at: path });
    });
    const paragraphType = editor.getType(BaseParagraphPlugin.key);
    if (block.type !== paragraphType) {
      editor.tf.setNodes({ type: paragraphType }, { at: path });
    }
  });
  return true;
};

// src/lib/plugins/slate-extension/transforms/setValue.ts
var setValue = (editor, value) => {
  let children = value;
  if (typeof value === "string") {
    children = editor.api.html.deserialize({
      element: value
    });
  } else if (!value || value.length === 0) {
    children = editor.api.create.value();
  }
  editor.tf.replaceNodes(children, {
    at: [],
    children: true
  });
};

// src/lib/plugins/slate-extension/SlateExtensionPlugin.ts
var SlateExtensionPlugin = createTSlatePlugin({
  key: "slateExtension",
  options: {
    onNodeChange: () => {
    },
    onTextChange: () => {
    }
  }
}).extendEditorTransforms(({ editor, getOption, tf: { apply } }) => ({
  /**
   * Initialize the editor value, selection and normalization. Set `value` to
   * `null` to skip children initialization.
   */
  init: bindFirst3(init, editor),
  insertExitBreak: bindFirst3(insertExitBreak, editor),
  resetBlock: bindFirst3(resetBlock, editor),
  setValue: bindFirst3(setValue, editor),
  apply(operation) {
    const noop = () => {
    };
    const hasNodeHandlers = editor.meta.pluginCache.handlers.onNodeChange.length > 0 || getOption("onNodeChange") !== noop;
    const hasTextHandlers = editor.meta.pluginCache.handlers.onTextChange.length > 0 || getOption("onTextChange") !== noop;
    if (!hasNodeHandlers && !hasTextHandlers) {
      apply(operation);
      return;
    }
    let prevNode;
    let node;
    let prevText;
    let text;
    let parentNode;
    if (OperationApi.isNodeOperation(operation) && hasNodeHandlers) {
      switch (operation.type) {
        case "insert_node": {
          prevNode = operation.node;
          node = operation.node;
          break;
        }
        case "merge_node":
        case "move_node":
        case "set_node":
        case "split_node": {
          prevNode = NodeApi10.get(editor, operation.path);
          break;
        }
        case "remove_node": {
          prevNode = operation.node;
          node = operation.node;
          break;
        }
      }
    } else if (OperationApi.isTextOperation(operation) && hasTextHandlers) {
      const parentPath = PathApi5.parent(operation.path);
      parentNode = NodeApi10.get(editor, parentPath);
      const textNode = NodeApi10.get(editor, operation.path);
      prevText = textNode.text;
    }
    apply(operation);
    if (OperationApi.isNodeOperation(operation) && hasNodeHandlers) {
      switch (operation.type) {
        case "insert_node":
        case "remove_node": {
          break;
        }
        case "merge_node": {
          const prevPath = PathApi5.previous(operation.path);
          if (prevPath) {
            node = NodeApi10.get(editor, prevPath);
          }
          break;
        }
        case "move_node": {
          node = NodeApi10.get(editor, operation.newPath);
          break;
        }
        case "set_node": {
          node = NodeApi10.get(editor, operation.path);
          break;
        }
        case "split_node": {
          node = NodeApi10.get(editor, operation.path);
          break;
        }
      }
      if (!node) {
        node = prevNode;
      }
      const eventIsHandled = pipeOnNodeChange(
        editor,
        node,
        prevNode,
        operation
      );
      if (!eventIsHandled) {
        const onNodeChange = getOption("onNodeChange");
        onNodeChange({ editor, node, operation, prevNode });
      }
    }
    if (OperationApi.isTextOperation(operation) && hasTextHandlers) {
      const textNodeAfter = NodeApi10.get(editor, operation.path);
      if (textNodeAfter) {
        text = textNodeAfter.text;
      }
      const eventIsHandled = pipeOnTextChange(
        editor,
        parentNode,
        text,
        prevText,
        operation
      );
      if (!eventIsHandled) {
        const onTextChange = getOption("onTextChange");
        onTextChange({
          editor,
          node: parentNode,
          operation,
          prevText,
          text
        });
      }
    }
  }
}));

// src/lib/static/internal/getPlainText.tsx
var getDefaultView = (value) => {
  return value?.ownerDocument?.defaultView || null;
};
var isDOMElement = (value) => {
  return isDOMNode(value) && value.nodeType === 1;
};
var isDOMNode = (value) => {
  const window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};
var isDOMText = (value) => {
  return isDOMNode(value) && value.nodeType === 3;
};
var getPlainText = (domNode) => {
  let text = "";
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    for (const childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    const display = getComputedStyle(domNode).getPropertyValue("display");
    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }
  return text;
};

// src/lib/static/plugins/ViewPlugin.ts
var ViewPlugin = DOMPlugin.extendEditorApi(({ editor }) => ({
  getFragment() {
    return getSelectedDomFragment(editor);
  }
})).overrideEditor(({ editor, tf: { setFragmentData } }) => ({
  transforms: {
    setFragmentData(data, originEvent) {
      if (originEvent !== "copy") return setFragmentData(data, originEvent);
      const fragment = getSelectedDomFragment(editor);
      const html = getSelectedDomNode();
      if (!html || !fragment) return;
      const selectOutside = isSelectOutside(html);
      if (selectOutside) return;
      if (fragment.length > 0) {
        const string = JSON.stringify(fragment);
        const encoded = window.btoa(encodeURIComponent(string));
        data.setData("application/x-slate-fragment", encoded);
        data.setData("text/html", html.innerHTML);
        data.setData("text/plain", getPlainText(html));
      }
    }
  }
}));

// src/lib/static/plugins/getStaticPlugins.ts
var getStaticPlugins = () => {
  const staticPlugins = [ViewPlugin];
  return [...staticPlugins];
};

// src/lib/static/editor/withStatic.tsx
var withStatic = (editor, options = {}) => {
  const { plugins = [], ...rest } = options;
  const staticPlugins = getStaticPlugins();
  options.plugins = [...staticPlugins, ...plugins];
  return withSlate(editor, options);
};
var createStaticEditor = ({
  editor = createEditor(),
  ...options
} = {}) => {
  return withStatic(editor, options);
};

// src/lib/utils/getPluginNodeProps.ts
var getPluginNodeProps = ({
  attributes: nodeAttributes,
  node,
  plugin,
  props
}) => {
  const newProps = { ...props, attributes: { ...props.attributes } };
  if (plugin?.node.props) {
    const pluginNodeProps = (typeof plugin.node.props === "function" ? plugin.node.props(newProps) : plugin.node.props) ?? {};
    newProps.attributes = {
      ...newProps.attributes,
      ...pluginNodeProps
    };
  }
  if (nodeAttributes && plugin) {
    newProps.attributes = {
      ...newProps.attributes,
      ...pick(
        nodeAttributes,
        ...plugin.node.dangerouslyAllowAttributes ?? [],
        [...node ? getNodeDataAttributeKeys(node) : []]
      )
    };
  }
  Object.keys(newProps.attributes).forEach((key) => {
    if (newProps.attributes?.[key] === void 0) {
      delete newProps.attributes?.[key];
    }
  });
  return newProps;
};

// src/lib/utils/getSlateClass.ts
var getSlateClass = (type) => type ? `slate-${type}` : "";

// src/lib/utils/hotkeys.ts
import { IS_APPLE } from "@udecode/utils";
import { isKeyHotkey } from "is-hotkey";
import { isHotkey } from "is-hotkey";
var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  escape: "escape",
  extendBackward: "shift+left",
  extendDownward: "shift+down",
  extendForward: "shift+right",
  extendUpward: "shift+up",
  insertSoftBreak: "shift+enter",
  italic: "mod+i",
  moveBackward: "left",
  moveDownward: "down",
  moveForward: "right",
  moveUpward: "up",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  selectAll: "mod+a",
  splitBlock: "enter",
  tab: "tab",
  undo: "mod+z",
  untab: "shift+tab"
};
var APPLE_HOTKEYS = {
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};
var createHotkey = (key) => {
  const generic = HOTKEYS[key];
  const apple = APPLE_HOTKEYS[key];
  const windows = WINDOWS_HOTKEYS[key];
  const isGeneric = generic && isKeyHotkey(generic);
  const isApple = apple && isKeyHotkey(apple);
  const isWindows = windows && isKeyHotkey(windows);
  return (event) => {
    if (isGeneric?.(event)) return true;
    if (IS_APPLE && isApple?.(event)) return true;
    if (!IS_APPLE && isWindows?.(event)) return true;
    return false;
  };
};
var createComposing = (key) => (editor, event, {
  composing
} = {}) => {
  if (!createHotkey(key)(event)) return false;
  if (!!composing !== editor.api.isComposing()) return false;
  return true;
};
var Hotkeys = {
  isBold: createHotkey("bold"),
  isCompose: createHotkey("compose"),
  isDeleteBackward: createHotkey("deleteBackward"),
  isDeleteForward: createHotkey("deleteForward"),
  isDeleteLineBackward: createHotkey("deleteLineBackward"),
  isDeleteLineForward: createHotkey("deleteLineForward"),
  isDeleteWordBackward: createHotkey("deleteWordBackward"),
  isDeleteWordForward: createHotkey("deleteWordForward"),
  isEscape: createHotkey("escape"),
  isExtendBackward: createHotkey("extendBackward"),
  isExtendDownward: createHotkey("extendDownward"),
  isExtendForward: createHotkey("extendForward"),
  isExtendLineBackward: createHotkey("extendLineBackward"),
  isExtendLineForward: createHotkey("extendLineForward"),
  isExtendUpward: createHotkey("extendUpward"),
  isItalic: createHotkey("italic"),
  isMoveBackward: createHotkey("moveBackward"),
  isMoveDownward: createHotkey("moveDownward"),
  isMoveForward: createHotkey("moveForward"),
  isMoveLineBackward: createHotkey("moveLineBackward"),
  isMoveLineForward: createHotkey("moveLineForward"),
  isMoveUpward: createHotkey("moveUpward"),
  isMoveWordBackward: createHotkey("moveWordBackward"),
  isMoveWordForward: createHotkey("moveWordForward"),
  isRedo: createHotkey("redo"),
  isSelectAll: createHotkey("selectAll"),
  isSoftBreak: createHotkey("insertSoftBreak"),
  isSplitBlock: createHotkey("splitBlock"),
  isTab: createComposing("tab"),
  isTransposeCharacter: createHotkey("transposeCharacter"),
  isUndo: createHotkey("undo"),
  isUntab: createComposing("untab")
};

// src/lib/utils/isType.ts
import castArray3 from "lodash/castArray.js";
var isType = (editor, node, key) => {
  const keys = castArray3(key);
  const types = [];
  keys.forEach((_key) => types.push(editor.getType(_key)));
  return types.includes(node?.type);
};

// src/lib/utils/mergeDeepToNodes.ts
import merge3 from "lodash/merge.js";
var mergeDeepToNodes = (options) => {
  applyDeepToNodes({ ...options, apply: merge3 });
};

// src/lib/utils/omitPluginContext.ts
var omitPluginContext = (ctx) => {
  const {
    api,
    editor,
    getOption,
    getOptions,
    plugin,
    setOption,
    setOptions,
    tf,
    type,
    ...rest
  } = ctx;
  return rest;
};

// src/lib/utils/overridePluginsByKey.ts
import defaultsDeep from "lodash/defaultsDeep.js";
var overridePluginsByKey = (plugin, overrideByKey = {}, nested = false) => {
  if (overrideByKey[plugin.key]) {
    const {
      __extensions: pluginOverridesExtensions,
      plugins: pluginOverridesPlugins,
      ...pluginOverrides
    } = overrideByKey[plugin.key];
    plugin = defaultsDeep({}, pluginOverrides, plugin);
    if (pluginOverridesExtensions) {
      plugin.__extensions = [
        ...plugin.__extensions || [],
        ...pluginOverridesExtensions
      ];
    }
    if (!nested) {
      pluginOverridesPlugins?.forEach((pOverrides) => {
        if (!plugin.plugins) plugin.plugins = [];
        const found = plugin.plugins.find((p) => p.key === pOverrides.key);
        if (!found) plugin.plugins.push(pOverrides);
      });
    }
  }
  if (plugin.plugins) {
    plugin.plugins = plugin.plugins.map(
      (p) => overridePluginsByKey(p, overrideByKey, true)
    );
  }
  return plugin;
};

// src/lib/utils/pipeInsertDataQuery.ts
var pipeInsertDataQuery = (editor, plugins, options) => plugins.every((p) => {
  const query = p.parser?.query;
  return !query || query({
    ...getEditorPlugin(editor, p),
    ...options
  });
});

// src/lib/plugins/ParserPlugin.ts
var ParserPlugin = createSlatePlugin({
  key: "parser"
}).overrideEditor(({ editor, tf: { insertData } }) => ({
  transforms: {
    insertData(dataTransfer) {
      const inserted = [...editor.meta.pluginList].reverse().some((plugin) => {
        const parser = plugin.parser;
        if (!parser) return false;
        const injectedPlugins = getInjectedPlugins(editor, plugin);
        const { deserialize, format, mimeTypes } = parser;
        if (!format && !mimeTypes) return false;
        const formats = Array.isArray(format) ? format : format ? [format] : [];
        const mimeTypeList = mimeTypes || formats.map((fmt) => fmt.includes("/") ? fmt : `text/${fmt}`);
        for (const mimeType of mimeTypeList) {
          let data = dataTransfer.getData(mimeType);
          if (mimeType !== "Files" && !data || mimeType === "Files" && dataTransfer.files.length === 0)
            continue;
          if (!pipeInsertDataQuery(editor, injectedPlugins, {
            data,
            dataTransfer,
            mimeType
          })) {
            continue;
          }
          data = pipeTransformData(editor, injectedPlugins, {
            data,
            dataTransfer,
            mimeType
          });
          let fragment = deserialize?.({
            ...getEditorPlugin(editor, plugin),
            data,
            dataTransfer,
            mimeType
          });
          if (!fragment?.length) continue;
          fragment = pipeTransformFragment(editor, injectedPlugins, {
            data,
            dataTransfer,
            fragment,
            mimeType
          });
          if (fragment.length === 0) continue;
          pipeInsertFragment(editor, injectedPlugins, {
            data,
            dataTransfer,
            fragment,
            mimeType
          });
          return true;
        }
        return false;
      });
      if (inserted) return;
      insertData(dataTransfer);
    }
  }
}));

// src/lib/plugins/getCorePlugins.ts
var getCorePlugins = ({
  affinity,
  chunking,
  maxLength,
  nodeId,
  plugins = []
}) => {
  let resolvedNodeId = nodeId;
  if (process.env.NODE_ENV === "test" && nodeId === void 0) {
    resolvedNodeId = false;
  }
  let corePlugins = [
    DebugPlugin,
    SlateExtensionPlugin,
    DOMPlugin,
    HistoryPlugin,
    OverridePlugin,
    ParserPlugin,
    maxLength ? LengthPlugin.configure({ options: { maxLength } }) : LengthPlugin,
    HtmlPlugin,
    AstPlugin,
    NodeIdPlugin.configure({
      enabled: resolvedNodeId !== false,
      options: resolvedNodeId === false ? void 0 : resolvedNodeId
    }),
    AffinityPlugin.configure({ enabled: affinity }),
    BaseParagraphPlugin,
    ChunkingPlugin.configure({
      enabled: chunking !== false,
      options: typeof chunking === "boolean" ? void 0 : chunking
    })
  ];
  const customPluginsMap = new Map(
    plugins.map((plugin) => [plugin.key, plugin])
  );
  corePlugins = corePlugins.map((corePlugin) => {
    const customPlugin = customPluginsMap.get(corePlugin.key);
    if (customPlugin) {
      const index = plugins.findIndex((p) => p.key === corePlugin.key);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
      return customPlugin;
    }
    return corePlugin;
  });
  return corePlugins;
};

// src/lib/editor/withSlate.ts
var withSlate = (e, {
  id,
  affinity = true,
  autoSelect,
  chunking = true,
  maxLength,
  nodeId,
  plugins = [],
  readOnly = false,
  rootPlugin,
  selection,
  shouldNormalizeEditor,
  skipInitialization,
  value,
  onReady,
  ...pluginConfig
} = {}) => {
  const editor = e;
  editor.id = id ?? editor.id ?? nanoid2();
  editor.meta.key = editor.meta.key ?? nanoid2();
  editor.meta.isFallback = false;
  editor.dom = {
    composing: false,
    currentKeyboardEvent: null,
    focused: false,
    prevSelection: null,
    readOnly
  };
  editor.getApi = () => editor.api;
  editor.getTransforms = () => editor.transforms;
  editor.getPlugin = (plugin) => getSlatePlugin(editor, plugin);
  editor.getType = (pluginKey) => getPluginType(editor, pluginKey);
  editor.getInjectProps = (plugin) => {
    const nodeProps = editor.getPlugin(plugin).inject?.nodeProps ?? {};
    nodeProps.nodeKey = nodeProps.nodeKey ?? editor.getType(plugin.key);
    nodeProps.styleKey = nodeProps.styleKey ?? nodeProps.nodeKey;
    return nodeProps;
  };
  editor.getOptionsStore = (plugin) => {
    return editor.getPlugin(plugin).optionsStore;
  };
  editor.getOptions = (plugin) => {
    const store = editor.getOptionsStore(plugin);
    if (!store) return editor.getPlugin(plugin).options;
    return editor.getOptionsStore(plugin).get("state");
  };
  editor.getOption = (plugin, key, ...args) => {
    const store = editor.getOptionsStore(plugin);
    if (!store) return editor.getPlugin(plugin).options[key];
    if (!(key in store.get("state")) && !(key in store.selectors)) {
      editor.api.debug.error(
        `editor.getOption: ${key} option is not defined in plugin ${plugin.key}.`,
        "OPTION_UNDEFINED"
      );
      return;
    }
    return store.get(key, ...args);
  };
  editor.setOption = (plugin, key, ...args) => {
    const store = editor.getOptionsStore(plugin);
    if (!store) return;
    if (!(key in store.get("state"))) {
      editor.api.debug.error(
        `editor.setOption: ${key} option is not defined in plugin ${plugin.key}.`,
        "OPTION_UNDEFINED"
      );
      return;
    }
    store.set(key, ...args);
  };
  editor.setOptions = (plugin, options) => {
    const store = editor.getOptionsStore(plugin);
    if (!store) return;
    if (typeof options === "object") {
      store.set("state", (draft) => {
        Object.assign(draft, options);
      });
    } else if (typeof options === "function") {
      store.set("state", options);
    }
  };
  const corePlugins = getCorePlugins({
    affinity,
    chunking,
    maxLength,
    nodeId,
    plugins
  });
  let rootPluginInstance = createSlatePlugin({
    key: "root",
    priority: 1e4,
    ...pluginConfig,
    override: {
      ...pluginConfig.override,
      components: {
        ...pluginConfig.components,
        ...pluginConfig.override?.components
      }
    },
    plugins: [...corePlugins, ...plugins]
  });
  if (rootPlugin) {
    rootPluginInstance = rootPlugin(rootPluginInstance);
  }
  resolvePlugins(editor, [rootPluginInstance]);
  const normalizeNode = editor.tf.normalizeNode;
  editor.tf.normalizeNode = (...args) => {
    if (!editor.api.shouldNormalizeNode(args[0])) {
      return;
    }
    return normalizeNode(...args);
  };
  editor.normalizeNode = editor.tf.normalizeNode;
  if (!skipInitialization) {
    editor.tf.init({
      autoSelect,
      selection,
      shouldNormalizeEditor,
      value,
      onReady
    });
  }
  return editor;
};
var createSlateEditor = ({
  editor = createEditor2(),
  ...options
} = {}) => {
  return withSlate(editor, options);
};

// src/lib/libs/nanoid.ts
import { nanoid as nanoid3 } from "nanoid";

// src/lib/libs/zustand.ts
import { createZustandStore as createZustandStore2 } from "zustand-x";
export {
  AUTO_SCROLL,
  AffinityPlugin,
  AstPlugin,
  BaseParagraphPlugin,
  CARRIAGE_RETURN,
  ChunkingPlugin,
  DOMPlugin,
  DebugPlugin,
  ElementStatic,
  HistoryPlugin,
  Hotkeys,
  HtmlPlugin,
  LINE_FEED,
  LeafStatic,
  LengthPlugin,
  NO_BREAK_SPACE,
  NodeIdPlugin,
  OverridePlugin,
  ParserPlugin,
  PlateError,
  PlateStatic,
  SPACE,
  SlateElement,
  SlateExtensionPlugin,
  SlateLeaf,
  SlateText,
  TAB,
  ViewPlugin,
  ZERO_WIDTH_SPACE,
  applyDeepToNodes,
  cleanHtmlBrElements,
  cleanHtmlCrLf,
  cleanHtmlEmptyElements,
  cleanHtmlFontElements,
  cleanHtmlLinkElements,
  cleanHtmlTextNodes,
  collapseString,
  collapseWhiteSpace,
  collapseWhiteSpaceChildren,
  collapseWhiteSpaceElement,
  collapseWhiteSpaceNode,
  collapseWhiteSpaceText,
  copyBlockMarksToSpanChild,
  createHotkey,
  createSlateEditor,
  createSlatePlugin,
  createStaticEditor,
  createStaticString,
  createTSlatePlugin,
  createZustandStore2 as createZustandStore,
  defaultsDeepToNodes,
  deserializeHtml,
  deserializeHtmlElement,
  deserializeHtmlNode,
  deserializeHtmlNodeChildren,
  endInlineFormattingContext,
  findHtmlElement,
  getContainerTypes,
  getCorePlugins,
  getDataNodeProps,
  getEdgeNodes,
  getEditorDOMFromHtmlString,
  getEditorPlugin,
  getHtmlComments,
  getInjectMatch,
  getInjectedPlugins,
  getMarkBoundaryAffinity,
  getNodeDataAttributeKeys,
  getNodeDataAttributes,
  getPluginByType,
  getPluginDataAttributes,
  getPluginKey,
  getPluginKeys,
  getPluginNodeProps,
  getPluginType,
  getPluginTypes,
  getRenderNodeStaticProps,
  getSelectedDomBlocks,
  getSelectedDomFragment,
  getSelectedDomNode,
  getSlateClass,
  getSlateElements,
  getSlatePlugin,
  getStaticPlugins,
  htmlBodyToFragment,
  htmlBrToNewLine,
  htmlElementToElement,
  htmlElementToLeaf,
  htmlStringToDOMNode,
  htmlTextNodeToString,
  inferWhiteSpaceRule,
  init,
  inlineTagNames,
  insertExitBreak,
  isHotkey,
  isHtmlBlockElement,
  isHtmlComment,
  isHtmlElement,
  isHtmlFragmentHref,
  isHtmlInlineElement,
  isHtmlTable,
  isHtmlText,
  isLastNonEmptyTextOfInlineFormattingContext,
  isNodeAffinity,
  isNodesAffinity,
  isOlSymbol,
  isSelectOutside,
  isSlateEditor,
  isSlateElement,
  isSlateLeaf,
  isSlateNode,
  isSlatePluginElement,
  isSlatePluginNode,
  isSlateString,
  isSlateText,
  isSlateVoid,
  isType,
  keyToDataAttribute,
  mergeDeepToNodes,
  nanoid3 as nanoid,
  normalizeDescendantsToDocumentFragment,
  normalizeNodeId,
  omitPluginContext,
  overridePluginsByKey,
  parseHtmlDocument,
  parseHtmlElement,
  pipeDecorate,
  pipeDeserializeHtmlElement,
  pipeDeserializeHtmlLeaf,
  pipeInsertDataQuery,
  pipeOnNodeChange,
  pipeOnTextChange,
  pipeRenderElementStatic,
  pipeRenderLeafStatic,
  pipeRenderTextStatic,
  pluginDeserializeHtml,
  pluginRenderElementStatic,
  pluginRenderLeafStatic,
  pluginRenderTextStatic,
  postCleanHtml,
  preCleanHtml,
  removeHtmlNodesBetweenComments,
  removeHtmlSurroundings,
  replaceTagName,
  resetBlock,
  serializeHtml,
  setAffinitySelection,
  setValue,
  someHtmlElement,
  stripHtmlClassNames,
  stripSlateDataAttributes,
  traverseHtmlComments,
  traverseHtmlElements,
  traverseHtmlNode,
  traverseHtmlTexts,
  unwrapHtmlElement,
  upsertInlineFormattingContext,
  useNodeAttributes,
  withBreakRules,
  withChunking,
  withDeleteRules,
  withMergeRules,
  withNodeId,
  withNormalizeRules,
  withOverrides,
  withPlateHistory,
  withScrolling,
  withSlate
};
//# sourceMappingURL=index.mjs.map