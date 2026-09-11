"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  BLUR_EDITOR_EVENT: () => BLUR_EDITOR_EVENT,
  BelowRootNodes: () => BelowRootNodes,
  ContentVisibilityChunk: () => ContentVisibilityChunk,
  DOM_HANDLERS: () => DOM_HANDLERS,
  DefaultPlaceholder: () => import_slate_react.DefaultPlaceholder,
  Editable: () => import_slate_react.Editable,
  EditorHotkeysEffect: () => EditorHotkeysEffect,
  EditorMethodsEffect: () => EditorMethodsEffect,
  EditorRefEffect: () => EditorRefEffect,
  EditorRefPluginEffect: () => EditorRefPluginEffect,
  ElementProvider: () => ElementProvider,
  EventEditorPlugin: () => EventEditorPlugin,
  EventEditorStore: () => EventEditorStore,
  FOCUS_EDITOR_EVENT: () => FOCUS_EDITOR_EVENT,
  GLOBAL_PLATE_SCOPE: () => GLOBAL_PLATE_SCOPE,
  PLATE_SCOPE: () => PLATE_SCOPE,
  ParagraphPlugin: () => ParagraphPlugin,
  Plate: () => Plate,
  PlateContainer: () => PlateContainer,
  PlateContent: () => PlateContent,
  PlateController: () => PlateController,
  PlateControllerEffect: () => PlateControllerEffect,
  PlateElement: () => PlateElement,
  PlateLeaf: () => PlateLeaf,
  PlateSlate: () => PlateSlate,
  PlateStoreProvider: () => PlateStoreProvider,
  PlateTest: () => PlateTest,
  PlateText: () => PlateText,
  PlateView: () => PlateView,
  ReactPlugin: () => ReactPlugin,
  SCOPE_ELEMENT: () => SCOPE_ELEMENT,
  Slate: () => import_slate_react.Slate,
  SlateReactExtensionPlugin: () => SlateReactExtensionPlugin,
  atom: () => import_jotai.atom,
  convertDomEventToSyntheticEvent: () => convertDomEventToSyntheticEvent,
  createAtomStore: () => import_jotai_x.createAtomStore,
  createPlateEditor: () => createPlateEditor,
  createPlateFallbackEditor: () => createPlateFallbackEditor,
  createPlatePlugin: () => createPlatePlugin,
  createPlateStore: () => createPlateStore,
  createTPlatePlugin: () => createTPlatePlugin,
  elementStore: () => elementStore,
  getEditorPlugin: () => getEditorPlugin2,
  getEventPlateId: () => getEventPlateId,
  getPlateCorePlugins: () => getPlateCorePlugins,
  getPlugin: () => getPlugin,
  getRenderNodeProps: () => getRenderNodeProps,
  isEventHandled: () => isEventHandled,
  omitPluginContext: () => omitPluginContext,
  pipeHandler: () => pipeHandler,
  pipeOnChange: () => pipeOnChange,
  pipeRenderElement: () => pipeRenderElement,
  pipeRenderLeaf: () => pipeRenderLeaf,
  pipeRenderText: () => pipeRenderText,
  plateControllerStore: () => plateControllerStore,
  plateStore: () => plateStore,
  pluginRenderElement: () => pluginRenderElement,
  pluginRenderLeaf: () => pluginRenderLeaf,
  pluginRenderText: () => pluginRenderText,
  toPlatePlugin: () => toPlatePlugin,
  toTPlatePlugin: () => toTPlatePlugin,
  useComposing: () => import_slate_react2.useComposing,
  useEditableProps: () => useEditableProps,
  useEditorComposing: () => useEditorComposing,
  useEditorContainerRef: () => useEditorContainerRef,
  useEditorId: () => useEditorId,
  useEditorMounted: () => useEditorMounted,
  useEditorPlugin: () => useEditorPlugin,
  useEditorPluginOption: () => useEditorPluginOption,
  useEditorPluginOptions: () => useEditorPluginOptions,
  useEditorReadOnly: () => useEditorReadOnly,
  useEditorRef: () => useEditorRef,
  useEditorScrollRef: () => useEditorScrollRef,
  useEditorSelection: () => useEditorSelection,
  useEditorSelector: () => useEditorSelector,
  useEditorState: () => useEditorState,
  useEditorValue: () => useEditorValue,
  useEditorVersion: () => useEditorVersion,
  useElement: () => useElement,
  useElementSelector: () => useElementSelector,
  useElementStore: () => useElementStore,
  useEventEditorValue: () => useEventEditorValue,
  useEventPlateId: () => useEventPlateId,
  useFocusEditorEvents: () => useFocusEditorEvents,
  useFocused: () => import_slate_react2.useFocused,
  useFocusedLast: () => useFocusedLast,
  useIncrementVersion: () => useIncrementVersion,
  useNodeAttributes: () => useNodeAttributes2,
  useNodePath: () => useNodePath,
  usePath: () => usePath,
  usePlateControllerExists: () => usePlateControllerExists,
  usePlateControllerLocalStore: () => usePlateControllerLocalStore,
  usePlateControllerStore: () => usePlateControllerStore,
  usePlateEditor: () => usePlateEditor,
  usePlateLocalStore: () => usePlateLocalStore,
  usePlateSet: () => usePlateSet,
  usePlateState: () => usePlateState,
  usePlateStore: () => usePlateStore,
  usePlateValue: () => usePlateValue,
  usePlateViewEditor: () => usePlateViewEditor,
  usePluginOption: () => usePluginOption,
  usePluginOptions: () => usePluginOptions,
  useReadOnly: () => import_slate_react2.useReadOnly,
  useRedecorate: () => useRedecorate,
  useScrollRef: () => useScrollRef,
  useSelected: () => import_slate_react2.useSelected,
  useSelectionVersion: () => useSelectionVersion,
  useSlateProps: () => useSlateProps,
  useStoreAtomState: () => import_jotai_x.useStoreAtomState,
  useStoreAtomValue: () => import_jotai_x.useStoreAtomValue,
  useStoreSelect: () => import_zustand_x.useStoreSelect,
  useStoreSetAtom: () => import_jotai_x.useStoreSetAtom,
  useStoreState: () => import_zustand_x.useStoreState,
  useStoreValue: () => import_zustand_x.useStoreValue,
  useTracked: () => import_zustand_x.useTracked,
  useTrackedStore: () => import_zustand_x.useTrackedStore,
  useValueVersion: () => useValueVersion,
  withHOC: () => withHOC,
  withPlate: () => withPlate,
  withPlateReact: () => withPlateReact,
  withReact: () => import_slate_react3.withReact
});
module.exports = __toCommonJS(react_exports);

// src/react/slate-react.ts
var import_slate_react = require("slate-react");
var import_slate_react2 = require("slate-react");
var import_slate_react3 = require("slate-react");

// src/react/components/ContentVisibilityChunk.tsx
var import_react = __toESM(require("react"));
var ContentVisibilityChunk = ({
  attributes,
  children,
  lowest
}) => {
  if (!lowest) return children;
  return /* @__PURE__ */ import_react.default.createElement("div", { ...attributes, style: { contentVisibility: "auto" } }, children);
};

// src/react/components/EditorHotkeysEffect.tsx
var import_react24 = __toESM(require("react"));
var import_react_hotkeys2 = require("@udecode/react-hotkeys");
var import_utils21 = require("@udecode/utils");

// src/react/stores/element/useElement.ts
var import_jotai_x7 = require("jotai-x");

// src/react/stores/plate/createPlateStore.ts
var import_react20 = __toESM(require("react"));
var import_jotai4 = require("jotai");
var import_jotai_x5 = require("jotai-x");

// src/react/libs/jotai.ts
var import_jotai = require("jotai");
var import_jotai_x = require("jotai-x");
var import_zustand_x = require("zustand-x");

// src/react/editor/withPlate.ts
var import_slate28 = require("@platejs/slate");

// src/lib/editor/withSlate.ts
var import_slate27 = require("@platejs/slate");
var import_nanoid2 = require("nanoid");

// src/internal/plugin/resolvePlugins.ts
var import_slate = require("@platejs/slate");
var import_utils2 = require("@udecode/utils");
var import_merge2 = __toESM(require("lodash/merge.js"));
var import_zustand_x2 = require("zustand-x");

// src/lib/plugin/createSlatePlugin.ts
var import_utils = require("@udecode/utils");

// src/internal/utils/isFunction.ts
function isFunction(value) {
  return typeof value === "function";
}

// src/internal/utils/mergePlugins.ts
var import_mergeWith = __toESM(require("lodash/mergeWith.js"));
function mergePlugins(basePlugin, ...sourcePlugins) {
  return (0, import_mergeWith.default)(
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
  if (plugin.node.isLeaf && !(0, import_utils.isDefined)(plugin.node.isDecoration)) {
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
var import_merge = __toESM(require("lodash/merge.js"));
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
    plugin.inject.plugins = (0, import_merge.default)(
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
      (0, import_slate.syncLegacyMethods)(editor);
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
    let store = (0, import_zustand_x2.createZustandStore)(plugin.options, {
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
            (0, import_merge2.default)(editor.api, newExtensions.api);
            (0, import_merge2.default)(plugin.api, newExtensions.api);
            (0, import_slate.assignLegacyApi)(editor, editor.api);
          }
          if (newExtensions.transforms) {
            (0, import_merge2.default)(editor.transforms, newExtensions.transforms);
            (0, import_merge2.default)(plugin.transforms, newExtensions.transforms);
            (0, import_slate.assignLegacyTransforms)(editor, newExtensions.transforms);
          }
        } else if (isTransform) {
          if (isPluginSpecific) {
            if (!editor.transforms[plugin.key]) {
              editor.transforms[plugin.key] = {};
            }
            if (!plugin.transforms[plugin.key]) {
              plugin.transforms[plugin.key] = {};
            }
            (0, import_merge2.default)(editor.transforms[plugin.key], newExtensions);
            (0, import_merge2.default)(plugin.transforms[plugin.key], newExtensions);
          } else {
            (0, import_merge2.default)(editor.transforms, newExtensions);
            (0, import_merge2.default)(plugin.transforms, newExtensions);
            (0, import_slate.assignLegacyTransforms)(editor, newExtensions);
          }
        } else {
          if (isPluginSpecific) {
            if (!editor.api[plugin.key]) {
              editor.api[plugin.key] = {};
            }
            if (!plugin.api[plugin.key]) {
              plugin.api[plugin.key] = {};
            }
            (0, import_merge2.default)(editor.api[plugin.key], newExtensions);
            (0, import_merge2.default)(plugin.api[plugin.key], newExtensions);
          } else {
            (0, import_merge2.default)(editor.api, newExtensions);
            (0, import_merge2.default)(plugin.api, newExtensions);
            (0, import_slate.assignLegacyApi)(editor, editor.api);
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
      if ((0, import_utils2.isDefined)(enabled)) {
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
var import_slate2 = require("@platejs/slate");
var withPlateHistory = ({ editor }) => (0, import_slate2.withHistory)(editor);
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
var import_slate3 = require("@platejs/slate");
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
                at: isAtStart ? blockPath : import_slate3.PathApi.next(blockPath)
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
var import_slate4 = require("@platejs/slate");
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
          if (import_slate4.PointApi.equals(editor.selection.anchor, editor.api.start([]))) {
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
        if (editor.selection && import_slate4.RangeApi.equals(editor.selection, editor.api.range([]))) {
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
var import_slate5 = require("@platejs/slate");
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
        if (import_slate5.TextApi.isText(prevNode) && prevNode.text === "" && prevPath.at(-1) !== 0) {
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
        if (import_slate5.ElementApi.isElement(targetNode) && editor.api.isVoid(targetNode)) {
          if (shouldRemove(targetNode, targetPath)) {
            editor.tf.removeNodes({ at: prevPath });
          } else if (import_slate5.ElementApi.isElement(curNode) && editor.api.isEmpty(curNode)) {
            editor.tf.removeNodes({ at: curPath });
          }
          return false;
        }
        if (import_slate5.ElementApi.isElement(prevNode) && editor.api.isEmpty(prevNode) && import_slate5.PathApi.isSibling(prevPath, nextPath) && shouldRemove(prevNode, prevPath)) {
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
            if (import_slate5.ElementApi.isElement(node)) {
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
var import_slate6 = require("@platejs/slate");
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
        if (import_slate6.ElementApi.isElement(node) && node.type) {
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
var import_slate7 = require("@platejs/slate");
var applyDeepToNodes = ({
  apply,
  node,
  path = [],
  query,
  source
}) => {
  const entry = [node, path];
  if ((0, import_slate7.queryNode)(entry, query)) {
    if (typeof source === "function") {
      apply(node, source());
    } else {
      apply(node, source);
    }
  }
  if (!import_slate7.NodeApi.isAncestor(node)) return;
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
var import_defaults = __toESM(require("lodash/defaults.js"));
var defaultsDeepToNodes = (options) => {
  applyDeepToNodes({ ...options, apply: import_defaults.default });
};

// src/lib/utils/getInjectMatch.ts
var import_slate8 = require("@platejs/slate");
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
    const element = import_slate8.ElementApi.isElement(node) ? node : void 0;
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
          match: (n) => import_slate8.ElementApi.isElement(n) && excludeTypes.includes(n.type)
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
var import_pick = __toESM(require("lodash/pick.js"));

// src/lib/static/pipeRenderElementStatic.tsx
var import_react4 = __toESM(require("react"));

// src/lib/static/components/slate-nodes.tsx
var import_react2 = __toESM(require("react"));
var import_clsx = require("clsx");
var useNodeAttributes = (props, ref) => {
  return {
    ...props.attributes,
    className: (0, import_clsx.clsx)(props.attributes.className, props.className) || void 0,
    ref,
    style: { ...props.attributes.style, ...props.style }
  };
};
var SlateElement = import_react2.default.forwardRef(function SlateElement2({ as: Tag = "div", children, ...props }, ref) {
  const attributes = useNodeAttributes(props, ref);
  const block = !!props.element.id && !!props.editor.api.isBlock(props.element);
  return /* @__PURE__ */ import_react2.default.createElement(
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
var SlateText = import_react2.default.forwardRef(({ as: Tag = "span", children, ...props }, ref) => {
  const attributes = useNodeAttributes(props, ref);
  return /* @__PURE__ */ import_react2.default.createElement(Tag, { ...attributes }, children);
});
var NonBreakingSpace = () => /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: 0, lineHeight: 0 }, contentEditable: false }, String.fromCodePoint(160));
var SlateLeaf = import_react2.default.forwardRef(({ as: Tag = "span", children, inset, ...props }, ref) => {
  const attributes = useNodeAttributes(props, ref);
  if (inset) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(NonBreakingSpace, null), /* @__PURE__ */ import_react2.default.createElement(Tag, { ...attributes }, children, /* @__PURE__ */ import_react2.default.createElement(NonBreakingSpace, null)));
  }
  return /* @__PURE__ */ import_react2.default.createElement(Tag, { ...attributes }, children);
});

// src/lib/static/pluginRenderElementStatic.tsx
var import_react3 = __toESM(require("react"));

// src/lib/static/utils/getNodeDataAttributes.ts
var import_slate9 = require("@platejs/slate");
var import_kebabCase = __toESM(require("lodash/kebabCase.js"));
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
    (key) => typeof node[key] !== "object" && (!import_slate9.TextApi.isText(node) || key !== "text")
  ).map((key) => keyToDataAttribute(key));
};
var keyToDataAttribute = (key) => {
  return `data-slate-${(0, import_kebabCase.default)(key)}`;
};

// src/lib/static/utils/getRenderNodeStaticProps.ts
var import_clsx3 = __toESM(require("clsx"));

// src/internal/plugin/pipeInjectNodeProps.tsx
var import_clsx2 = __toESM(require("clsx"));

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
var import_utils3 = require("@udecode/utils");
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
  if (!transformProps && (!(0, import_utils3.isDefined)(nodeValue) || validNodeValues && !validNodeValues.includes(nodeValue) || nodeValue === defaultNodeValue)) {
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
      className: (0, import_clsx2.default)(attributes?.className, newAttributes.className) || void 0,
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
      className: (0, import_clsx3.default)(getSlateClass(plugin?.node.type), className) || void 0
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

// src/lib/static/utils/getSelectedDomFragment.tsx
var import_slate10 = require("@platejs/slate");
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
    if ((index === 0 || index === domBlocks.length - 1) && node.textContent?.trim() !== import_slate10.NodeApi.string(block[0]) && import_slate10.ElementApi.isElement(block[0]) && !editor.api.isVoid(block[0])) {
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
  let component = /* @__PURE__ */ import_react3.default.createElement(Element, { ...defaultProps, ...nodeProps }, children, editor.meta.pluginCache.render.belowRootNodes.map((key) => {
    const plugin2 = editor.getPlugin({ key });
    const Component2 = plugin2.render.belowRootNodes;
    return /* @__PURE__ */ import_react3.default.createElement(Component2, { key, ...defaultProps, ...nodeProps });
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
    return /* @__PURE__ */ import_react4.default.createElement(SlateElement, { ...ctxProps }, props.children, editor.meta.pluginCache.render.belowRootNodes.map((key) => {
      const plugin2 = editor.getPlugin({ key });
      const Component = plugin2.render.belowRootNodes;
      return /* @__PURE__ */ import_react4.default.createElement(Component, { key, ...ctxProps });
    }));
  };
};

// src/lib/static/pluginRenderLeafStatic.tsx
var import_react7 = __toESM(require("react"));
var import_clsx6 = __toESM(require("clsx"));

// src/lib/static/components/PlateStatic.tsx
var import_react6 = __toESM(require("react"));
var import_slate11 = require("@platejs/slate");
var import_clsx5 = __toESM(require("clsx"));

// src/lib/static/pluginRenderTextStatic.tsx
var import_react5 = __toESM(require("react"));
var import_clsx4 = __toESM(require("clsx"));
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
    return /* @__PURE__ */ import_react5.default.createElement(Text, { ...defaultProps, ...ctxProps }, children);
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
          pluginTextProps.className = (0, import_clsx4.default)(
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
    return /* @__PURE__ */ import_react5.default.createElement(
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
  let children = /* @__PURE__ */ import_react6.default.createElement(Children, { decorate, decorations, editor }, element.children);
  if (editor.api.isVoid(element)) {
    attributes["data-slate-void"] = true;
    children = /* @__PURE__ */ import_react6.default.createElement(
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
      /* @__PURE__ */ import_react6.default.createElement(Children, { decorate, decorations, editor }, element.children)
    );
  }
  if (editor.api.isInline(element)) {
    attributes["data-slate-inline"] = true;
  }
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, renderElement?.({ attributes, children, element }));
}
var ElementStatic = import_react6.default.memo(BaseElementStatic, (prev, next) => {
  return (prev.element === next.element || prev.element._memo !== void 0 && prev.element._memo === next.element._memo) && (0, import_slate11.isElementDecorationsEqual)(prev.decorations, next.decorations);
});
function BaseLeafStatic({
  decorations,
  editor,
  text = { text: "" }
}) {
  const renderLeaf = pipeRenderLeafStatic(editor);
  const renderText = pipeRenderTextStatic(editor);
  const decoratedLeaves = import_slate11.TextApi.decorations(text, decorations);
  const leafElements = decoratedLeaves.map(({ leaf, position }, index) => {
    const leafElement = renderLeaf({
      attributes: { "data-slate-leaf": true },
      children: /* @__PURE__ */ import_react6.default.createElement("span", { "data-slate-string": true }, leaf.text === "" ? "\uFEFF" : leaf.text),
      leaf,
      leafPosition: position,
      text: leaf
    });
    return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, { key: index }, leafElement);
  });
  return renderText({
    attributes: { "data-slate-node": "text", ref: null },
    children: leafElements,
    text
  });
}
var LeafStatic = import_react6.default.memo(BaseLeafStatic, (prev, next) => {
  return (
    // prev.text === next.text &&
    import_slate11.TextApi.equals(next.text, prev.text) && (0, import_slate11.isTextDecorationsEqual)(next.decorations, prev.decorations)
  );
});
var defaultDecorate = () => [];
function Children({
  children = [],
  decorate = defaultDecorate,
  decorations = [],
  editor
}) {
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, children.map((child, i) => {
    const p = editor.api.findPath(child);
    let ds = [];
    if (p) {
      const range = editor.api.range(p);
      ds = decorate([child, p]);
      for (const dec of decorations) {
        const d = import_slate11.RangeApi.intersection(dec, range);
        if (d) {
          ds.push(d);
        }
      }
    }
    return import_slate11.ElementApi.isElement(child) ? /* @__PURE__ */ import_react6.default.createElement(
      ElementStatic,
      {
        key: i,
        decorate,
        decorations: ds,
        editor,
        element: child
      }
    ) : /* @__PURE__ */ import_react6.default.createElement(LeafStatic, { key: i, decorations: ds, editor, text: child });
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
      beforeEditable = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, beforeEditable, /* @__PURE__ */ import_react6.default.createElement(BeforeEditable, null));
    }
  });
  editor.meta.pluginCache.render.afterEditable.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const AfterEditable = plugin.render.afterEditable;
    if (AfterEditable) {
      afterEditable = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, afterEditable, /* @__PURE__ */ import_react6.default.createElement(AfterEditable, null));
    }
  });
  const content = /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: (0, import_clsx5.default)("slate-editor", className),
      "data-slate-editor": true,
      "data-slate-node": "value",
      ...rest
    },
    /* @__PURE__ */ import_react6.default.createElement(Children, { decorate, decorations: [], editor }, editor.children)
  );
  let aboveEditable = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, beforeEditable, content, afterEditable);
  editor.meta.pluginCache.render.aboveEditable.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const AboveEditable = plugin.render.aboveEditable;
    if (AboveEditable) {
      aboveEditable = /* @__PURE__ */ import_react6.default.createElement(AboveEditable, null, aboveEditable);
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
    return /* @__PURE__ */ import_react7.default.createElement(Leaf, { ...defaultProps, ...ctxProps }, children);
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
          pluginLeafProps.className = (0, import_clsx6.default)(
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
    return /* @__PURE__ */ import_react7.default.createElement(
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
var isSlateNode = (element) => {
  return isSlateLeaf(element) || isSlateElement(element) || isSlateVoid(element) || isSlateString(element) || isSlateText(element);
};
var isSlatePluginNode = (element, pluginKey) => {
  return element.classList.contains(`slate-${pluginKey}`);
};

// src/lib/static/editor/withStatic.tsx
var import_slate26 = require("@platejs/slate");

// src/lib/plugins/affinity/AffinityPlugin.ts
var import_slate17 = require("@platejs/slate");

// src/lib/plugins/affinity/queries/getEdgeNodes.ts
var import_slate12 = require("@platejs/slate");
var import_slate13 = require("slate");
var getEdgeNodes = (editor) => {
  if (!editor.api.isCollapsed()) return null;
  const cursor = editor.selection.anchor;
  const textRange = editor.api.range(cursor.path);
  if (!textRange) return null;
  const edge = editor.api.isStart(cursor, textRange) ? "start" : editor.api.isEnd(cursor, textRange) ? "end" : null;
  if (!edge) return null;
  const parent = import_slate12.NodeApi.parent(editor, cursor.path) ?? null;
  const isAffinityInlineElement = (() => {
    if (!parent || !import_slate12.ElementApi.isElement(parent)) return false;
    const parentAffinity = getPluginByType(editor, parent.type)?.rules.selection?.affinity;
    return parentAffinity === "hard" || parentAffinity === "directional";
  })();
  const nodeEntry = isAffinityInlineElement ? [parent, import_slate12.PathApi.parent(cursor.path)] : [import_slate12.NodeApi.get(editor, cursor.path), cursor.path];
  if (edge === "start" && cursor.path.at(-1) === 0 && !isAffinityInlineElement) {
    return [null, nodeEntry];
  }
  const siblingPath = edge === "end" ? import_slate13.Path.next(nodeEntry[1]) : import_slate13.Path.previous(nodeEntry[1]);
  const siblingNode = import_slate12.NodeApi.get(editor, siblingPath);
  const siblingEntry = siblingNode ? [siblingNode, siblingPath] : null;
  return edge === "end" ? [nodeEntry, siblingEntry] : [siblingEntry, nodeEntry];
};

// src/lib/plugins/affinity/queries/getMarkBoundaryAffinity.ts
var import_slate14 = require("@platejs/slate");
var import_isEqual = __toESM(require("lodash/isEqual.js"));
var getMarkBoundaryAffinity = (editor, markBoundary) => {
  const { marks, selection } = editor;
  if (!selection) return;
  const marksMatchLeaf = (leaf) => {
    return marks && (0, import_isEqual.default)(import_slate14.NodeApi.extractProps(leaf), marks) && Object.keys(marks).length > 1;
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
  if (import_slate14.IS_FIREFOX && selectionDirection === "forward" && marksDirection !== "backward")
    return "forward";
  return "backward";
};

// src/lib/plugins/affinity/queries/isNodeAffinity.ts
var import_slate15 = require("@platejs/slate");
var isNodeAffinity = (editor, node, affinity) => {
  const marks = Object.keys(import_slate15.NodeApi.extractProps(node));
  const keys = import_slate15.ElementApi.isElement(node) ? [node.type] : marks;
  return keys.some(
    (type) => getPluginByType(editor, type)?.rules.selection?.affinity === affinity
  );
};
var isNodesAffinity = (editor, edgeNodes, affinity) => {
  const [backwardLeafEntry, forwardLeafEntry] = edgeNodes;
  return backwardLeafEntry && isNodeAffinity(editor, backwardLeafEntry[0], affinity) || forwardLeafEntry && isNodeAffinity(editor, forwardLeafEntry[0], affinity);
};

// src/lib/plugins/affinity/transforms/setAffinitySelection.ts
var import_slate16 = require("@platejs/slate");
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
    if (import_slate16.ElementApi.isElement(before[0])) return;
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
  if (import_slate16.ElementApi.isElement(after[0])) {
    return;
  } else {
    setMarks(import_slate16.NodeApi.extractProps(after[0]));
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
          const startText = start && (import_slate17.TextApi.isText(start[0]) ? start[0].text : import_slate17.NodeApi.string(start[0]));
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
        const textNode = import_slate17.NodeApi.get(editor, textPath);
        if (!textNode) {
          return;
        }
        const marks = Object.keys(import_slate17.NodeApi.extractProps(textNode));
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
          nextTextNode = import_slate17.NodeApi.get(editor, nextTextPath) || null;
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
  return before && import_slate17.ElementApi.isElement(before[0]) || after && import_slate17.ElementApi.isElement(after[0]);
};

// src/lib/plugins/chunking/ChunkingPlugin.ts
var import_slate18 = require("@platejs/slate");

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
    query: import_slate18.NodeApi.isEditor
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
var import_utils7 = require("@udecode/utils");

// src/lib/plugins/dom/withScrolling.ts
var import_isUndefined = __toESM(require("lodash/isUndefined.js"));
var import_omitBy = __toESM(require("lodash/omitBy.js"));
var withScrolling = (editor, fn, options) => {
  const prevOptions = editor.getOptions(DOMPlugin);
  const prevAutoScroll = AUTO_SCROLL.get(editor) ?? false;
  if (options) {
    const ops = {
      ...prevOptions,
      ...(0, import_omitBy.default)(options, import_isUndefined.default)
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
  withScrolling: (0, import_utils7.bindFirst)(withScrolling, editor)
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
var import_utils10 = require("@udecode/utils");

// src/lib/plugins/html/utils/isHtmlElement.ts
var isHtmlElement = (node) => node.nodeType === Node.ELEMENT_NODE;

// src/lib/plugins/html/utils/isHtmlText.ts
var isHtmlText = (node) => node.nodeType === Node.TEXT_NODE;

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

// src/lib/utils/normalizeDescendantsToDocumentFragment.ts
var import_slate19 = require("@platejs/slate");
var isInlineNode = (editor) => (node) => import_slate19.TextApi.isText(node) || import_slate19.ElementApi.isElement(node) && editor.api.isInline(node);
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
    if (import_slate19.ElementApi.isElement(node)) {
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
var import_slate_hyperscript = require("slate-hyperscript");

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
    return (0, import_slate_hyperscript.jsx)(
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
var import_slate_hyperscript2 = require("slate-hyperscript");

// src/lib/plugins/html/utils/pluginDeserializeHtml.ts
var import_utils8 = require("@udecode/utils");
var import_castArray = __toESM(require("lodash/castArray.js"));

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
          const validNodeNames = (0, import_castArray.default)(validNodeName);
          if (validNodeNames.length > 0 && !validNodeNames.includes(el.nodeName) && validNodeName !== "*")
            return false;
        }
        if (validClassName && !el.classList.contains(validClassName))
          return false;
        if (validStyle) {
          for (const [key, value] of Object.entries(validStyle)) {
            const values = (0, import_castArray.default)(value);
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
              const attributeValues = (0, import_castArray.default)(attributeValue);
              const elAttribute = el.getAttribute(attributeName);
              if (!(0, import_utils8.isDefined)(elAttribute) || !attributeValues.includes(elAttribute))
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
    return (0, import_slate_hyperscript2.jsx)("element", node, descendants);
  }
};

// src/lib/plugins/html/utils/htmlElementToLeaf.ts
var import_slate20 = require("@platejs/slate");
var import_slate_hyperscript3 = require("slate-hyperscript");

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
      if (import_slate20.ElementApi.isElement(child)) {
        if (Object.keys(node).length > 0) {
          mergeDeepToNodes({
            node: child,
            query: {
              filter: ([n]) => import_slate20.TextApi.isText(n)
            },
            source: node
          });
        }
        arr.push(child);
      } else {
        const attributes = { ...node };
        if (import_slate20.TextApi.isText(child) && child.text) {
          Object.keys(attributes).forEach((key) => {
            if (attributes[key] && child[key]) {
              attributes[key] = child[key];
            }
          });
        }
        arr.push((0, import_slate_hyperscript3.jsx)("text", attributes, child));
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

// src/lib/plugins/html/utils/parseHtmlDocument.ts
var parseHtmlDocument = (html) => {
  return new DOMParser().parseFromString(html, "text/html");
};

// src/lib/plugins/html/HtmlPlugin.ts
var HtmlPlugin = createSlatePlugin({
  key: "html"
}).extendApi(({ editor }) => ({
  deserialize: (0, import_utils10.bindFirst)(deserializeHtml, editor)
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
var import_slate22 = require("@platejs/slate");
var import_nanoid = require("nanoid");

// src/lib/plugins/node-id/withNodeId.ts
var import_slate21 = require("@platejs/slate");
var import_utils12 = require("@udecode/utils");
var import_castArray2 = __toESM(require("lodash/castArray.js"));
var import_cloneDeep = __toESM(require("lodash/cloneDeep.js"));
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
    if ((0, import_utils12.isDefined)(node._id)) {
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
          const node = (0, import_cloneDeep.default)(operation.node);
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
          if ((0, import_slate21.queryNode)([node, operation.path], query)) {
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
            node = (0, import_cloneDeep.default)(node);
          }
          node._id = node[idKey];
        }
        insertNode(node);
      },
      insertNodes(_nodes, options) {
        const nodes = (0, import_castArray2.default)(_nodes).filter(
          (node) => !!node
        );
        if (nodes.length === 0) return;
        const { disableInsertOverrides, idKey = "" } = getOptions();
        insertNodes(
          nodes.map((node) => {
            if (!disableInsertOverrides && node[idKey]) {
              if (!Object.isExtensible(node)) {
                node = (0, import_cloneDeep.default)(node);
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
var NodeIdPlugin = createTSlatePlugin({
  key: "nodeId",
  options: {
    filterInline: true,
    filterText: true,
    idKey: "id",
    normalizeInitialValue: false,
    filter: () => true,
    idCreator: () => (0, import_nanoid.nanoid)(10)
  }
}).extendTransforms(({ editor, getOptions }) => ({
  normalize() {
    const { allow, exclude, filter, filterInline, filterText, idKey } = getOptions();
    const addNodeId = (entry) => {
      const [node, path] = entry;
      if (!node[idKey] && (0, import_slate22.queryNode)([node, path], {
        allow,
        exclude,
        filter: (entry2) => {
          const [node2] = entry2;
          if (filterText && !import_slate22.ElementApi.isElement(node2)) {
            return false;
          }
          if (filterInline && import_slate22.ElementApi.isElement(node2) && !editor.api.isBlock(node2)) {
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
      if (import_slate22.ElementApi.isElement(node)) {
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
var import_slate25 = require("@platejs/slate");
var import_utils14 = require("@udecode/utils");

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
var import_slate23 = require("@platejs/slate");
var insertExitBreak = (editor, { match, reverse } = {}) => {
  if (!editor.selection || !editor.api.isCollapsed()) return;
  const block = editor.api.block();
  if (!block) return;
  const target = editor.api.above({
    at: block[1],
    match: (0, import_slate23.combineMatchOptions)(
      editor,
      (n, p) => p.length === 1 || p.length > 1 && !!n.type && !getPluginByType(editor, n.type)?.node.isStrictSiblings,
      { match }
    )
  });
  const ancestorPath = target?.[1] ?? block[1];
  const targetPath = reverse ? ancestorPath : import_slate23.PathApi.next(ancestorPath);
  if (!targetPath) return;
  editor.tf.insertNodes(editor.api.create.block(), {
    at: targetPath,
    select: true
  });
  return true;
};

// src/lib/plugins/slate-extension/transforms/resetBlock.ts
var import_slate24 = require("@platejs/slate");
var resetBlock = (editor, { at } = {}) => {
  const entry = editor.api.block({ at });
  if (!entry?.[0]) return;
  const [block, path] = entry;
  editor.tf.withoutNormalizing(() => {
    const { id, type, ...otherProps } = import_slate24.NodeApi.extractProps(block);
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
  init: (0, import_utils14.bindFirst)(init, editor),
  insertExitBreak: (0, import_utils14.bindFirst)(insertExitBreak, editor),
  resetBlock: (0, import_utils14.bindFirst)(resetBlock, editor),
  setValue: (0, import_utils14.bindFirst)(setValue, editor),
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
    if (import_slate25.OperationApi.isNodeOperation(operation) && hasNodeHandlers) {
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
          prevNode = import_slate25.NodeApi.get(editor, operation.path);
          break;
        }
        case "remove_node": {
          prevNode = operation.node;
          node = operation.node;
          break;
        }
      }
    } else if (import_slate25.OperationApi.isTextOperation(operation) && hasTextHandlers) {
      const parentPath = import_slate25.PathApi.parent(operation.path);
      parentNode = import_slate25.NodeApi.get(editor, parentPath);
      const textNode = import_slate25.NodeApi.get(editor, operation.path);
      prevText = textNode.text;
    }
    apply(operation);
    if (import_slate25.OperationApi.isNodeOperation(operation) && hasNodeHandlers) {
      switch (operation.type) {
        case "insert_node":
        case "remove_node": {
          break;
        }
        case "merge_node": {
          const prevPath = import_slate25.PathApi.previous(operation.path);
          if (prevPath) {
            node = import_slate25.NodeApi.get(editor, prevPath);
          }
          break;
        }
        case "move_node": {
          node = import_slate25.NodeApi.get(editor, operation.newPath);
          break;
        }
        case "set_node": {
          node = import_slate25.NodeApi.get(editor, operation.path);
          break;
        }
        case "split_node": {
          node = import_slate25.NodeApi.get(editor, operation.path);
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
    if (import_slate25.OperationApi.isTextOperation(operation) && hasTextHandlers) {
      const textNodeAfter = import_slate25.NodeApi.get(editor, operation.path);
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
  editor = (0, import_slate26.createEditor)(),
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
      ...(0, import_pick.default)(
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
var import_utils15 = require("@udecode/utils");
var import_is_hotkey = require("is-hotkey");
var import_is_hotkey2 = require("is-hotkey");
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
  const isGeneric = generic && (0, import_is_hotkey.isKeyHotkey)(generic);
  const isApple = apple && (0, import_is_hotkey.isKeyHotkey)(apple);
  const isWindows = windows && (0, import_is_hotkey.isKeyHotkey)(windows);
  return (event) => {
    if (isGeneric?.(event)) return true;
    if (import_utils15.IS_APPLE && isApple?.(event)) return true;
    if (!import_utils15.IS_APPLE && isWindows?.(event)) return true;
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

// src/lib/utils/mergeDeepToNodes.ts
var import_merge3 = __toESM(require("lodash/merge.js"));
var mergeDeepToNodes = (options) => {
  applyDeepToNodes({ ...options, apply: import_merge3.default });
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
  editor.id = id ?? editor.id ?? (0, import_nanoid2.nanoid)();
  editor.meta.key = editor.meta.key ?? (0, import_nanoid2.nanoid)();
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

// src/lib/libs/zustand.ts
var import_zustand_x3 = require("zustand-x");

// src/react/plugins/SlateReactExtensionPlugin.ts
var import_utils17 = require("@udecode/utils");

// src/react/plugin/toPlatePlugin.ts
var methodsToWrap = [
  "configure",
  "configurePlugin",
  "extendEditorApi",
  "extendSelectors",
  "extendApi",
  "extendEditorTransforms",
  "extendTransforms",
  "overrideEditor",
  "extend",
  "extendPlugin"
];
function toPlatePlugin(basePlugin, extendConfig) {
  const plugin = { ...basePlugin };
  methodsToWrap.forEach((method) => {
    const originalMethod = plugin[method];
    plugin[method] = (...args) => {
      const slatePlugin = originalMethod(...args);
      return toPlatePlugin(slatePlugin);
    };
  });
  if (!extendConfig) return plugin;
  const extendedPlugin = plugin.extend(extendConfig);
  return extendedPlugin;
}
function toTPlatePlugin(basePlugin, extendConfig) {
  return toPlatePlugin(basePlugin, extendConfig);
}

// src/react/plugin/createPlatePlugin.ts
var createPlatePlugin = (config = {}) => {
  const plugin = createSlatePlugin(config);
  return toPlatePlugin(plugin);
};
function createTPlatePlugin(config = {}) {
  return createPlatePlugin(config);
}

// src/react/plugin/getEditorPlugin.ts
function getEditorPlugin2(editor, plugin) {
  return getEditorPlugin(editor, plugin);
}

// src/react/plugin/getPlugin.ts
function getPlugin(editor, plugin) {
  return editor.plugins[plugin.key] ?? createPlatePlugin({ key: plugin.key });
}

// src/react/plugin/omitPluginContext.ts
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

// src/react/plugins/SlateReactExtensionPlugin.ts
var SlateReactExtensionPlugin = toPlatePlugin(SlateExtensionPlugin, {
  handlers: {
    onKeyDown: ({ editor, event }) => {
      event.persist();
      editor.dom.currentKeyboardEvent = event;
      if (Hotkeys.isMoveUpward(event)) {
        if (editor.tf.moveLine({ reverse: true })) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (Hotkeys.isMoveDownward(event)) {
        if (editor.tf.moveLine({ reverse: false })) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (Hotkeys.isTab(editor, event) || Hotkeys.isUntab(editor, event)) {
        if (editor.tf.tab({ reverse: Hotkeys.isUntab(editor, event) })) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (Hotkeys.isSelectAll(event)) {
        if (editor.tf.selectAll()) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (Hotkeys.isEscape(event) && editor.tf.escape()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
}).extendEditorApi(({ editor }) => ({
  redecorate: () => {
    editor.api.debug.warn(
      `The method editor.api.redecorate() has not been overridden. This may cause unexpected behavior. Please ensure that all required editor methods are properly defined.`,
      "OVERRIDE_MISSING"
    );
  }
})).extendEditorTransforms(({ editor, tf: { reset } }) => ({
  reset(options) {
    const isFocused = editor.api.isFocused();
    reset(options);
    if (isFocused) {
      editor.tf.focus({ edge: "startEditor" });
    }
  }
})).overrideEditor(({ editor, tf: { normalizeNode } }) => ({
  transforms: {
    normalizeNode(entry, options) {
      if ((0, import_utils17.isDefined)(entry[0]._memo)) {
        editor.tf.unsetNodes("_memo", { at: entry[1] });
        return;
      }
      normalizeNode(entry, options);
    }
  }
}));

// src/react/plugins/event-editor/EventEditorStore.ts
var EventEditorStore = (0, import_zustand_x3.createZustandStore)(
  {
    blur: null,
    focus: null,
    last: null
  },
  {
    mutative: true,
    name: "event-editor"
  }
);
var { useValue: useEventEditorValue } = EventEditorStore;

// src/react/plugins/event-editor/useFocusEditorEvents.ts
var import_react8 = require("react");
var FOCUS_EDITOR_EVENT = "focus-editor-event";
var BLUR_EDITOR_EVENT = "blur-editor-event";
var useFocusEditorEvents = ({
  editorRef,
  onEditorBlur,
  onEditorFocus
}) => {
  (0, import_react8.useEffect)(() => {
    const onFocusEditor = (event) => {
      const id = event.detail.id;
      if (!!onEditorFocus && editorRef && editorRef.id === id) {
        onEditorFocus();
      }
    };
    const onBlurEditor = (event) => {
      const id = event.detail.id;
      if (!!onEditorBlur && editorRef && editorRef.id === id) {
        onEditorBlur();
      }
    };
    document.addEventListener(FOCUS_EDITOR_EVENT, onFocusEditor);
    document.addEventListener(BLUR_EDITOR_EVENT, onBlurEditor);
    return () => {
      document.removeEventListener(FOCUS_EDITOR_EVENT, onFocusEditor);
      document.removeEventListener(BLUR_EDITOR_EVENT, onBlurEditor);
    };
  }, [editorRef, onEditorBlur, onEditorFocus]);
};

// src/react/plugins/event-editor/EventEditorPlugin.ts
var EventEditorPlugin = createPlatePlugin({
  key: "eventEditor",
  handlers: {
    onBlur: ({ editor }) => {
      const focus = EventEditorStore.get("focus");
      if (focus === editor.id) {
        EventEditorStore.set("focus", null);
      }
      EventEditorStore.set("blur", editor.id);
      document.dispatchEvent(
        new CustomEvent(BLUR_EDITOR_EVENT, {
          detail: { id: editor.id }
        })
      );
    },
    onFocus: ({ editor }) => {
      EventEditorStore.set("focus", editor.id);
      EventEditorStore.set("last", editor.id);
      document.dispatchEvent(
        new CustomEvent(FOCUS_EDITOR_EVENT, {
          detail: { id: editor.id }
        })
      );
    }
  }
});

// src/react/plugins/event-editor/getEventPlateId.ts
var getEventPlateId = (id) => {
  if (id) return id;
  const focus = EventEditorStore.get("focus");
  if (focus) return focus;
  const blur = EventEditorStore.get("blur");
  if (blur) return blur;
  return EventEditorStore.get("last") ?? "plate";
};

// src/react/plugins/event-editor/useFocusedLast.ts
var useFocusedLast = (id) => {
  const editorId = id ?? useEditorId();
  const lastFocusedEditorId = useEventEditorValue("last");
  return editorId === lastFocusedEditorId;
};

// src/react/plugins/paragraph/ParagraphPlugin.tsx
var import_react_hotkeys = require("@udecode/react-hotkeys");
var ParagraphPlugin = toPlatePlugin(
  BaseParagraphPlugin,
  ({ editor, type }) => ({
    shortcuts: {
      toggleParagraph: {
        keys: [
          [import_react_hotkeys.Key.Mod, import_react_hotkeys.Key.Alt, "0"],
          [import_react_hotkeys.Key.Mod, import_react_hotkeys.Key.Shift, "0"]
        ],
        preventDefault: true,
        handler: () => {
          editor.tf.toggleBlock(type);
        }
      }
    }
  })
);

// src/react/plugins/react/withPlateReact.ts
var withPlateReact = ({ editor }) => {
  return (0, import_slate_react3.withReact)(editor);
};

// src/react/plugins/react/ReactPlugin.ts
var ReactPlugin = toPlatePlugin(DOMPlugin, {
  key: "dom",
  extendEditor: withPlateReact
});

// src/react/editor/getPlateCorePlugins.ts
var getPlateCorePlugins = () => [
  SlateReactExtensionPlugin,
  ReactPlugin,
  EventEditorPlugin,
  ParagraphPlugin
];

// src/react/editor/withPlate.ts
var withPlate = (e, { plugins = [], ...options } = {}) => {
  const editor = withSlate(e, {
    ...options,
    plugins: [...getPlateCorePlugins(), ...plugins]
  });
  return editor;
};
var createPlateEditor = ({
  editor = (0, import_slate28.createEditor)(),
  ...options
} = {}) => {
  return withPlate(editor, options);
};

// src/react/utils/createPlateFallbackEditor.ts
var createPlateFallbackEditor = (options = {}) => {
  const editor = createPlateEditor(options);
  editor.meta.isFallback = true;
  editor.apply = () => {
    throw new Error(
      "Cannot apply operations on the fallback editor. The fallback editor is used when a hook that depends on the Plate store was unable to locate a valid store. If you are using PlateController, use `useEditorMounted(id?: string)` or `!editor.meta.isFallback` to ensure that a valid Plate store is available before attempting to call operations on the editor."
    );
  };
  return editor;
};

// src/react/utils/dom-attributes.ts
var DOM_HANDLERS = [
  // Clipboard Events
  "onCopy",
  "onCopyCapture",
  "onCut",
  "onCutCapture",
  "onPaste",
  "onPasteCapture",
  // Composition Events
  "onCompositionEnd",
  "onCompositionEndCapture",
  "onCompositionStart",
  "onCompositionStartCapture",
  "onCompositionUpdate",
  "onCompositionUpdateCapture",
  // Focus Events
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  // Form Events
  "onDOMBeforeInput",
  "onBeforeInput",
  "onBeforeInputCapture",
  "onInput",
  "onInputCapture",
  "onReset",
  "onResetCapture",
  "onSubmit",
  "onSubmitCapture",
  "onInvalid",
  "onInvalidCapture",
  // Image Events
  "onLoad",
  "onLoadCapture",
  // Keyboard Events
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyPressCapture",
  "onKeyUp",
  "onKeyUpCapture",
  // Media Events
  "onAbort",
  "onAbortCapture",
  "onCanPlay",
  "onCanPlayCapture",
  "onCanPlayThrough",
  "onCanPlayThroughCapture",
  "onDurationChange",
  "onDurationChangeCapture",
  "onEmptied",
  "onEmptiedCapture",
  "onEncrypted",
  "onEncryptedCapture",
  "onEnded",
  "onEndedCapture",
  "onLoadedData",
  "onLoadedDataCapture",
  "onLoadedMetadata",
  "onLoadedMetadataCapture",
  "onLoadStart",
  "onLoadStartCapture",
  "onPause",
  "onPauseCapture",
  "onPlay",
  "onPlayCapture",
  "onPlaying",
  "onPlayingCapture",
  "onProgress",
  "onProgressCapture",
  "onRateChange",
  "onRateChangeCapture",
  "onSeeked",
  "onSeekedCapture",
  "onSeeking",
  "onSeekingCapture",
  "onStalled",
  "onStalledCapture",
  "onSuspend",
  "onSuspendCapture",
  "onTimeUpdate",
  "onTimeUpdateCapture",
  "onVolumeChange",
  "onVolumeChangeCapture",
  "onWaiting",
  "onWaitingCapture",
  // MouseEvents
  "onAuxClick",
  "onAuxClickCapture",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onContextMenuCapture",
  "onDoubleClick",
  "onDoubleClickCapture",
  "onDrag",
  "onDragCapture",
  "onDragEnd",
  "onDragEndCapture",
  "onDragEnter",
  "onDragEnterCapture",
  "onDragExit",
  "onDragExitCapture",
  "onDragLeave",
  "onDragLeaveCapture",
  "onDragOver",
  "onDragOverCapture",
  "onDragStart",
  "onDragStartCapture",
  "onDrop",
  "onDropCapture",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseMoveCapture",
  "onMouseOut",
  "onMouseOutCapture",
  "onMouseOver",
  "onMouseOverCapture",
  "onMouseUp",
  "onMouseUpCapture",
  // Selection Events
  "onSelect",
  "onSelectCapture",
  // Touch Events
  "onTouchCancel",
  "onTouchCancelCapture",
  "onTouchEnd",
  "onTouchEndCapture",
  "onTouchMove",
  "onTouchMoveCapture",
  "onTouchStart",
  "onTouchStartCapture",
  // Pointer Events
  "onPointerDown",
  "onPointerDownCapture",
  "onPointerMove",
  "onPointerUp",
  "onPointerUpCapture",
  "onPointerCancel",
  "onPointerCancelCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOverCapture",
  "onPointerOut",
  "onPointerOutCapture",
  "onGotPointerCapture",
  "onGotPointerCaptureCapture",
  "onLostPointerCapture",
  "onLostPointerCaptureCapture",
  // UI Events
  "onScroll",
  "onScrollCapture",
  // Wheel Events
  "onWheel",
  "onWheelCapture",
  // Animation Events
  "onAnimationStart",
  "onAnimationStartCapture",
  "onAnimationEnd",
  "onAnimationEndCapture",
  "onAnimationIteration",
  "onAnimationIterationCapture",
  // Transition Events
  "onTransitionEnd",
  "onTransitionEndCapture"
];

// src/react/utils/getRenderNodeProps.ts
var import_clsx7 = require("clsx");
var getRenderNodeProps = ({
  attributes: nodeAttributes,
  disableInjectNodeProps,
  editor,
  plugin,
  props,
  readOnly
}) => {
  let newProps = {
    ...props,
    ...plugin ? getEditorPlugin2(editor, plugin) : {
      api: editor.api,
      editor,
      tf: editor.transforms
    }
  };
  const { className } = props;
  const pluginProps = getPluginNodeProps({
    attributes: nodeAttributes,
    plugin,
    props: newProps
  });
  newProps = {
    ...pluginProps,
    attributes: {
      ...pluginProps.attributes,
      className: (0, import_clsx7.clsx)(
        getSlateClass(plugin?.node.type),
        pluginProps.attributes?.className,
        className
      ) || void 0
    }
  };
  if (!disableInjectNodeProps) {
    newProps = pipeInjectNodeProps(
      editor,
      newProps,
      (node) => editor.api.findPath(node),
      readOnly
    );
  }
  if (newProps.attributes?.style && Object.keys(newProps.attributes.style).length === 0) {
    delete newProps.attributes.style;
  }
  return newProps;
};

// src/react/utils/pipeHandler.ts
var convertDomEventToSyntheticEvent = (domEvent) => {
  let propagationStopped = false;
  return {
    ...domEvent,
    bubbles: domEvent.bubbles,
    cancelable: domEvent.cancelable,
    currentTarget: domEvent.currentTarget,
    defaultPrevented: domEvent.defaultPrevented,
    eventPhase: domEvent.eventPhase,
    isTrusted: domEvent.isTrusted,
    nativeEvent: domEvent,
    target: domEvent.target,
    timeStamp: domEvent.timeStamp,
    type: domEvent.type,
    isDefaultPrevented: () => domEvent.defaultPrevented,
    isPropagationStopped: () => propagationStopped,
    persist: () => {
      throw new Error(
        "persist is not implemented for synthetic events created using convertDomEventToSyntheticEvent"
      );
    },
    preventDefault: () => domEvent.preventDefault(),
    stopPropagation: () => {
      propagationStopped = true;
      domEvent.stopPropagation();
    }
  };
};
var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  const shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isPropagationStopped();
};
var pipeHandler = (editor, {
  editableProps,
  handlerKey
}) => {
  const propsHandler = editableProps?.[handlerKey];
  const relevantPlugins = editor.meta.pluginList.filter(
    (plugin) => plugin.handlers?.[handlerKey]
  );
  if (relevantPlugins.length === 0 && !propsHandler) return;
  return (event) => {
    const isDomEvent = event instanceof Event;
    const handledEvent = isDomEvent ? convertDomEventToSyntheticEvent(event) : event;
    const eventIsHandled = relevantPlugins.some((plugin) => {
      if (isEditOnly(editor.dom.readOnly, plugin, "handlers")) {
        return false;
      }
      const pluginHandler = plugin.handlers[handlerKey];
      const shouldTreatEventAsHandled = pluginHandler({
        ...getEditorPlugin2(editor, plugin),
        event: handledEvent
      });
      if (shouldTreatEventAsHandled != null) {
        return shouldTreatEventAsHandled;
      }
      return false;
    });
    if (eventIsHandled) return true;
    return isEventHandled(handledEvent, propsHandler);
  };
};

// src/react/utils/pipeOnChange.ts
var pipeOnChange = (editor, value) => {
  return editor.meta.pluginCache.handlers.onChange.some((key) => {
    const plugin = getPlugin(editor, { key });
    if (isEditOnly(editor.dom.readOnly, plugin, "handlers")) {
      return false;
    }
    const handler = plugin.handlers.onChange;
    const shouldTreatEventAsHandled = handler({
      ...getEditorPlugin2(editor, plugin),
      value
    });
    if (shouldTreatEventAsHandled != null) {
      return shouldTreatEventAsHandled;
    }
    return false;
  });
};

// src/react/utils/pipeRenderElement.tsx
var import_react18 = __toESM(require("react"));

// src/react/hooks/useEditableProps.ts
var import_react14 = __toESM(require("react"));
var import_clsx11 = __toESM(require("clsx"));
var import_jotai_x2 = require("jotai-x");
var import_omit = __toESM(require("lodash/omit.js"));
var import_use_deep_compare = require("use-deep-compare");

// src/react/utils/pipeRenderLeaf.tsx
var import_react11 = __toESM(require("react"));
var import_clsx9 = __toESM(require("clsx"));

// src/react/utils/pluginRenderLeaf.tsx
var import_react10 = __toESM(require("react"));

// src/react/components/plate-nodes.tsx
var import_react9 = __toESM(require("react"));
var import_react_utils = require("@udecode/react-utils");
var import_clsx8 = require("clsx");
var useNodeAttributes2 = (props, ref) => {
  return {
    ...props.attributes,
    className: (0, import_clsx8.clsx)(props.attributes.className, props.className) || void 0,
    ref: (0, import_react_utils.useComposedRef)(ref, props.attributes.ref),
    style: { ...props.attributes.style, ...props.style }
  };
};
var PlateElement = import_react9.default.forwardRef(function PlateElement2({ as: Tag = "div", children, insetProp, ...props }, ref) {
  const attributes = useNodeAttributes2(props, ref);
  const mounted = useEditorMounted();
  const block = import_react9.default.useMemo(
    () => mounted && !!props.element.id && !!props.editor.api.isBlock(props.element),
    [props.element, props.editor, mounted]
  );
  const inset = insetProp ?? props.plugin?.rules.selection?.affinity === "directional";
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, inset && /* @__PURE__ */ import_react9.default.createElement(NonBreakingSpace2, null), /* @__PURE__ */ import_react9.default.createElement(
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
    children,
    inset && /* @__PURE__ */ import_react9.default.createElement(NonBreakingSpace2, null)
  ));
});
var PlateText = import_react9.default.forwardRef(({ as: Tag = "span", children, ...props }, ref) => {
  const attributes = useNodeAttributes2(props, ref);
  return /* @__PURE__ */ import_react9.default.createElement(Tag, { ...attributes }, children);
});
var NonBreakingSpace2 = () => /* @__PURE__ */ import_react9.default.createElement("span", { style: { fontSize: 0, lineHeight: 0 }, contentEditable: false }, String.fromCodePoint(160));
var PlateLeaf = import_react9.default.forwardRef(({ as: Tag = "span", children, inset: insetProp, ...props }, ref) => {
  const attributes = useNodeAttributes2(props, ref);
  const inset = insetProp ?? props.plugin?.rules.selection?.affinity === "hard";
  if (inset) {
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(NonBreakingSpace2, null), /* @__PURE__ */ import_react9.default.createElement(Tag, { ...attributes }, children, /* @__PURE__ */ import_react9.default.createElement(NonBreakingSpace2, null)));
  }
  return /* @__PURE__ */ import_react9.default.createElement(Tag, { ...attributes }, children);
});

// src/react/utils/pluginRenderLeaf.tsx
var pluginRenderLeaf = (editor, plugin) => function render(props) {
  const {
    render: { leaf: leafComponent, node }
  } = plugin;
  const { children, leaf } = props;
  const readOnly = (0, import_slate_react2.useReadOnly)();
  if (isEditOnly(readOnly, plugin, "render")) return children;
  if (leaf[plugin.node.type]) {
    const Component = leafComponent ?? node;
    const Leaf = Component ?? PlateLeaf;
    const ctxProps = getRenderNodeProps({
      attributes: leaf.attributes,
      editor,
      plugin,
      props,
      readOnly
    });
    const defaultProps = Component ? {} : { as: plugin.render?.as };
    return /* @__PURE__ */ import_react10.default.createElement(Leaf, { ...defaultProps, ...ctxProps }, children);
  }
  return children;
};

// src/react/utils/pipeRenderLeaf.tsx
var pipeRenderLeaf = (editor, renderLeafProp) => {
  const renderLeafs = [];
  const leafPropsPlugins = [];
  editor.meta.pluginCache.node.isLeaf.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      renderLeafs.push(pluginRenderLeaf(editor, plugin));
    }
  });
  editor.meta.pluginCache.node.leafProps.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (plugin) {
      leafPropsPlugins.push(plugin);
    }
  });
  return function render({ attributes, ...props }) {
    const readOnly = (0, import_slate_react2.useReadOnly)();
    renderLeafs.forEach((renderLeaf) => {
      const newChildren = renderLeaf(props);
      if (newChildren !== void 0) {
        props.children = newChildren;
      }
    });
    leafPropsPlugins.forEach((plugin) => {
      if (props.leaf[plugin.node.type]) {
        const pluginLeafProps = typeof plugin.node.leafProps === "function" ? plugin.node.leafProps(props) : plugin.node.leafProps ?? {};
        if (pluginLeafProps.className) {
          pluginLeafProps.className = (0, import_clsx9.default)(
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
    const ctxProps = getRenderNodeProps({
      editor,
      props: { attributes, ...props },
      readOnly
    });
    return /* @__PURE__ */ import_react11.default.createElement(PlateLeaf, { ...ctxProps }, props.children);
  };
};

// src/react/utils/pipeRenderText.tsx
var import_react13 = __toESM(require("react"));
var import_clsx10 = __toESM(require("clsx"));

// src/react/utils/pluginRenderText.tsx
var import_react12 = __toESM(require("react"));
var pluginRenderText = (editor, plugin) => function render(nodeProps) {
  const {
    render: { node }
  } = plugin;
  const { children, text } = nodeProps;
  const readOnly = (0, import_slate_react2.useReadOnly)();
  if (isEditOnly(readOnly, plugin, "render")) return children;
  if (text[plugin.node.type ?? plugin.key]) {
    const Text = node ?? PlateText;
    const ctxProps = getRenderNodeProps({
      attributes: nodeProps.attributes,
      editor,
      plugin,
      props: nodeProps,
      readOnly
    });
    const defaultProps = node ? {} : { as: plugin.render?.as };
    return /* @__PURE__ */ import_react12.default.createElement(Text, { ...defaultProps, ...ctxProps }, children);
  }
  return children;
};

// src/react/utils/pipeRenderText.tsx
var pipeRenderText = (editor, renderTextProp) => {
  const renderTexts = [];
  const textPropsPlugins = [];
  editor.meta.pluginList.forEach((plugin) => {
    if (plugin.node.isLeaf && plugin.node.isDecoration === false) {
      renderTexts.push(pluginRenderText(editor, plugin));
    }
    if (plugin.node.textProps) {
      textPropsPlugins.push(plugin);
    }
  });
  return function render({ attributes, ...props }) {
    const readOnly = (0, import_slate_react2.useReadOnly)();
    renderTexts.forEach((renderText) => {
      const newChildren = renderText(props);
      if (newChildren !== void 0) {
        props.children = newChildren;
      }
    });
    textPropsPlugins.forEach((plugin) => {
      if (props.text[plugin.node.type ?? plugin.key]) {
        const pluginTextProps = typeof plugin.node.textProps === "function" ? plugin.node.textProps(props) : plugin.node.textProps ?? {};
        if (pluginTextProps.className) {
          pluginTextProps.className = (0, import_clsx10.default)(
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
    const ctxProps = getRenderNodeProps({
      editor,
      props: { attributes, ...props },
      readOnly
    });
    return /* @__PURE__ */ import_react13.default.createElement(PlateText, { ...ctxProps }, props.children);
  };
};

// src/react/hooks/useEditableProps.ts
var useEditableProps = ({
  disabled,
  readOnly,
  ...editableProps
} = {}) => {
  const { id } = editableProps;
  const editor = useEditorRef(id);
  const store = usePlateStore(id);
  const versionDecorate = (0, import_jotai_x2.useAtomStoreValue)(store, "versionDecorate");
  const storeDecorate = (0, import_jotai_x2.useAtomStoreValue)(store, "decorate");
  const storeRenderChunk = (0, import_jotai_x2.useAtomStoreValue)(store, "renderChunk");
  const storeRenderElement = (0, import_jotai_x2.useAtomStoreValue)(store, "renderElement");
  const storeRenderLeaf = (0, import_jotai_x2.useAtomStoreValue)(store, "renderLeaf");
  const storeRenderText = (0, import_jotai_x2.useAtomStoreValue)(store, "renderText");
  const decorateMemo = import_react14.default.useMemo(() => {
    return pipeDecorate(
      editor,
      storeDecorate ?? editableProps?.decorate
    );
  }, [editableProps?.decorate, editor, storeDecorate]);
  const decorate = import_react14.default.useMemo(() => {
    if (!versionDecorate || !decorateMemo) return;
    return (entry) => decorateMemo(entry);
  }, [decorateMemo, versionDecorate]);
  const defaultRenderChunk = usePluginOption(
    ChunkingPlugin,
    "contentVisibilityAuto"
  ) ? ContentVisibilityChunk : void 0;
  const renderChunk = storeRenderChunk ?? editableProps?.renderChunk ?? defaultRenderChunk;
  const renderElement = import_react14.default.useMemo(() => {
    return pipeRenderElement(
      editor,
      storeRenderElement ?? editableProps?.renderElement
    );
  }, [editableProps?.renderElement, editor, storeRenderElement]);
  const renderLeaf = import_react14.default.useMemo(() => {
    return pipeRenderLeaf(editor, storeRenderLeaf ?? editableProps?.renderLeaf);
  }, [editableProps?.renderLeaf, editor, storeRenderLeaf]);
  const renderText = import_react14.default.useMemo(() => {
    return pipeRenderText(editor, storeRenderText ?? editableProps?.renderText);
  }, [editableProps?.renderText, editor, storeRenderText]);
  const props = (0, import_use_deep_compare.useDeepCompareMemo)(() => {
    const _props = {
      decorate,
      renderChunk,
      renderElement,
      renderLeaf,
      renderText
    };
    DOM_HANDLERS.forEach((handlerKey) => {
      const handler = pipeHandler(editor, { editableProps, handlerKey });
      if (handler) {
        _props[handlerKey] = handler;
      }
    });
    return _props;
  }, [
    decorate,
    editableProps,
    renderChunk,
    renderElement,
    renderLeaf,
    renderText
  ]);
  return (0, import_use_deep_compare.useDeepCompareMemo)(
    () => ({
      ...(0, import_omit.default)(editableProps, [
        ...DOM_HANDLERS,
        "renderChunk",
        "renderElement",
        "renderLeaf",
        "renderText",
        "decorate"
      ]),
      ...props,
      "aria-disabled": disabled,
      className: (0, import_clsx11.default)(
        "slate-editor",
        "ignore-click-outside/toolbar",
        editableProps.className
      ),
      "data-readonly": readOnly ? "true" : void 0,
      readOnly
    }),
    [editableProps, props, readOnly]
  );
};

// src/react/hooks/useNodePath.ts
var import_slate29 = require("@platejs/slate");
var import_react_utils2 = require("@udecode/react-utils");
var useNodePath = (node) => {
  const editor = useEditorRef();
  return (0, import_react_utils2.useMemoizedSelector)(
    () => {
      return editor.api.findPath(node);
    },
    [editor, node],
    (a, b) => {
      return !!a && !!b && import_slate29.PathApi.equals(a, b);
    }
  );
};

// src/react/hooks/useSlateProps.ts
var import_react15 = __toESM(require("react"));
var import_jotai_x3 = require("jotai-x");
var useSlateProps = ({
  id
}) => {
  const editor = useEditorRef(id);
  const store = usePlateStore(id);
  const onChangeProp = (0, import_jotai_x3.useAtomStoreValue)(store, "onChange");
  const onValueChangeProp = (0, import_jotai_x3.useAtomStoreValue)(store, "onValueChange");
  const onSelectionChangeProp = (0, import_jotai_x3.useAtomStoreValue)(store, "onSelectionChange");
  const updateVersionEditor = useIncrementVersion("versionEditor", id);
  const updateVersionSelection = useIncrementVersion("versionSelection", id);
  const updateVersionValue = useIncrementVersion("versionValue", id);
  const onChange = import_react15.default.useCallback(
    (newValue) => {
      updateVersionEditor();
      const eventIsHandled = pipeOnChange(editor, newValue);
      if (!eventIsHandled) {
        onChangeProp?.({ editor, value: newValue });
      }
    },
    [editor, onChangeProp, updateVersionEditor]
  );
  const onValueChange = import_react15.default.useMemo(
    () => (value) => {
      updateVersionValue();
      onValueChangeProp?.({ editor, value });
    },
    [editor, onValueChangeProp, updateVersionValue]
  );
  const onSelectionChange = import_react15.default.useMemo(
    () => (selection) => {
      updateVersionSelection();
      onSelectionChangeProp?.({ editor, selection });
    },
    [editor, onSelectionChangeProp, updateVersionSelection]
  );
  return import_react15.default.useMemo(() => {
    return {
      key: editor.meta.key,
      editor,
      initialValue: editor.children,
      value: editor.children,
      onChange,
      onSelectionChange,
      onValueChange
    };
  }, [editor, onChange, onSelectionChange, onValueChange]);
};

// src/react/utils/pluginRenderElement.tsx
var import_react17 = __toESM(require("react"));

// src/react/stores/element/useElementStore.tsx
var import_react16 = __toESM(require("react"));
var import_slate30 = require("@platejs/slate");

// src/react/stores/element/usePath.ts
var import_jotai_x4 = require("jotai-x");
var usePath = (pluginKey) => {
  const editor = useEditorRef();
  const value = (0, import_jotai_x4.useAtomStoreValue)(useElementStore(pluginKey), "path");
  if (!value) {
    editor.api.debug.warn(
      `usePath(${pluginKey}) hook must be used inside the node component's context`,
      "USE_ELEMENT_CONTEXT"
    );
    return void 0;
  }
  return value;
};

// src/react/stores/element/useElementStore.tsx
var SCOPE_ELEMENT = "element";
var initialState = {
  element: null,
  entry: null,
  path: null
};
var { ElementProvider, elementStore, useElementStore } = (0, import_jotai_x.createAtomStore)(
  initialState,
  { effect: Effect, name: "element", suppressWarnings: true }
);
function Effect() {
  const path = usePath();
  if (path && import_slate30.PathApi.equals(path, [0])) {
    return /* @__PURE__ */ import_react16.default.createElement(FirstBlockEffect, null);
  }
  return null;
}
function FirstBlockEffect() {
  const editor = useEditorRef();
  const store = usePlateStore();
  const composing = (0, import_slate_react2.useComposing)();
  const readOnly = (0, import_slate_react2.useReadOnly)();
  editor.dom.readOnly = readOnly;
  editor.dom.composing = composing;
  import_react16.default.useLayoutEffect(() => {
    store.set("composing", composing);
  }, [composing, store]);
  return null;
}

// src/react/utils/pluginRenderElement.tsx
function ElementContent({ editor, plugin, ...props }) {
  const element = useElement();
  const readOnly = (0, import_slate_react2.useReadOnly)();
  if (isEditOnly(readOnly, plugin, "render")) return null;
  const { children: _children } = props;
  const Component = plugin.render?.node;
  const Element = Component ?? PlateElement;
  props = getRenderNodeProps({
    attributes: element.attributes,
    editor,
    plugin,
    props,
    readOnly
  });
  let children = _children;
  editor.meta.pluginCache.render.belowNodes.forEach((key) => {
    const plugin2 = editor.getPlugin({ key });
    const withHOC2 = plugin2.render.belowNodes;
    const hoc = withHOC2({ ...props, key });
    if (hoc && !isEditOnly(readOnly, plugin2, "render")) {
      children = hoc({ ...props, children });
    }
  });
  const defaultProps = Component ? {} : { as: plugin.render?.as };
  let component = /* @__PURE__ */ import_react17.default.createElement(Element, { ...defaultProps, ...props }, children, /* @__PURE__ */ import_react17.default.createElement(BelowRootNodes, { ...defaultProps, ...props }));
  editor.meta.pluginCache.render.aboveNodes.forEach((key) => {
    const plugin2 = editor.getPlugin({ key });
    const withHOC2 = plugin2.render.aboveNodes;
    const hoc = withHOC2({ ...props, key });
    if (hoc && !isEditOnly(readOnly, plugin2, "render")) {
      component = hoc({ ...props, children: component });
    }
  });
  return component;
}
function BelowRootNodes(props) {
  const editor = useEditorRef();
  const readOnly = (0, import_slate_react2.useReadOnly)();
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, editor.meta.pluginCache.render.belowRootNodes.map((key) => {
    const plugin = editor.getPlugin({ key });
    if (isEditOnly(readOnly, plugin, "render")) return null;
    const Component = plugin.render.belowRootNodes;
    return /* @__PURE__ */ import_react17.default.createElement(Component, { key, ...props });
  }));
}
var pluginRenderElement = (editor, plugin) => function render(props) {
  const { element, path } = props;
  return /* @__PURE__ */ import_react17.default.createElement(
    ElementProvider,
    {
      element,
      entry: [element, path],
      path,
      scope: plugin.key
    },
    /* @__PURE__ */ import_react17.default.createElement(ElementContent, { editor, plugin, ...props })
  );
};

// src/react/utils/pipeRenderElement.tsx
var pipeRenderElement = (editor, renderElementProp) => {
  return function render(props) {
    const readOnly = (0, import_slate_react2.useReadOnly)();
    const path = useNodePath(props.element);
    const plugin = getPluginByType(editor, props.element.type);
    if (plugin?.node.isElement) {
      return pluginRenderElement(
        editor,
        plugin
      )({
        ...props,
        path
      });
    }
    if (renderElementProp) {
      return renderElementProp({ ...props, path });
    }
    const ctxProps = getRenderNodeProps({
      // `transformProps` can run hooks, so we need to disable it for default elements.
      disableInjectNodeProps: true,
      editor,
      props: { ...props, path },
      readOnly
    });
    return /* @__PURE__ */ import_react18.default.createElement(
      ElementProvider,
      {
        element: ctxProps.element,
        entry: [ctxProps.element, path],
        path,
        scope: ctxProps.element.type ?? "default"
      },
      /* @__PURE__ */ import_react18.default.createElement(PlateElement, { ...ctxProps }, props.children, /* @__PURE__ */ import_react18.default.createElement(BelowRootNodes, { ...ctxProps }))
    );
  };
};

// src/react/stores/plate-controller/plateControllerStore.ts
var import_react19 = __toESM(require("react"));
var import_jotai3 = require("jotai");
var {
  PlateControllerProvider: PlateController,
  plateControllerStore,
  usePlateControllerStore: _usePlateControllerStore
} = (0, import_jotai_x.createAtomStore)(
  {
    activeId: (0, import_jotai3.atom)(null),
    editorStores: (0, import_jotai3.atom)({}),
    primaryEditorIds: (0, import_jotai3.atom)([])
  },
  {
    name: "plateController"
  }
);
var usePlateControllerLocalStore = (options) => _usePlateControllerStore({
  scope: typeof options === "string" ? options : void 0,
  warnIfNoStore: false,
  ...typeof options === "object" ? options : {}
});
var usePlateControllerExists = () => !!usePlateControllerLocalStore().store;
var usePlateControllerStore = (idProp) => {
  const storeAtom = import_react19.default.useMemo(
    () => (0, import_jotai3.atom)((get) => {
      const editorStores = get(plateControllerStore.atom.editorStores);
      const forId = (id) => {
        if (!id) return null;
        return editorStores[id] ?? null;
      };
      if (idProp) return forId(idProp);
      const lookupOrder = [
        get(plateControllerStore.atom.activeId),
        ...get(plateControllerStore.atom.primaryEditorIds)
      ];
      for (const id of lookupOrder) {
        const store = forId(id);
        if (store) return store;
      }
      return null;
    }),
    [idProp]
  );
  return (0, import_jotai_x.useStoreAtomValue)(usePlateControllerLocalStore(), storeAtom);
};

// src/react/stores/plate/createPlateStore.ts
var PLATE_SCOPE = "plate";
var GLOBAL_PLATE_SCOPE = Symbol("global-plate");
var createPlateStore = ({
  id,
  composing = false,
  containerRef = { current: null },
  decorate = null,
  editor,
  isMounted = false,
  primary = true,
  readOnly = null,
  renderChunk = null,
  renderElement = null,
  renderLeaf = null,
  renderText = null,
  scrollRef = { current: null },
  versionDecorate = 1,
  versionEditor = 1,
  versionSelection = 1,
  versionValue = 1,
  onChange = null,
  onNodeChange = null,
  onSelectionChange = null,
  onTextChange = null,
  onValueChange = null,
  ...state
} = {}) => (0, import_jotai_x.createAtomStore)(
  {
    composing,
    containerRef,
    decorate,
    editor,
    isMounted,
    primary,
    readOnly,
    renderChunk,
    renderElement,
    renderLeaf,
    renderText,
    scrollRef,
    versionDecorate,
    versionEditor,
    versionSelection,
    versionValue,
    onChange,
    onNodeChange,
    onSelectionChange,
    onTextChange,
    onValueChange,
    ...state
  },
  {
    name: "plate",
    suppressWarnings: true,
    extend: (atoms) => ({
      trackedEditor: (0, import_jotai4.atom)((get) => ({
        editor: get(atoms.editor),
        version: get(atoms.versionEditor)
      })),
      trackedSelection: (0, import_jotai4.atom)((get) => ({
        selection: get(atoms.editor).selection,
        version: get(atoms.versionSelection)
      })),
      trackedValue: (0, import_jotai4.atom)((get) => ({
        value: get(atoms.editor).children,
        version: get(atoms.versionValue)
      }))
    })
  }
);
var {
  PlateProvider: PlateStoreProvider,
  plateStore,
  usePlateSet: usePlateLocalSet,
  usePlateState: usePlateLocalState,
  usePlateStore: usePlateLocalStore,
  usePlateValue: usePlateLocalValue
} = createPlateStore();
var { usePlateStore: useFallbackPlateStore } = createPlateStore();
var usePlateStore = (id) => {
  const localStore = usePlateLocalStore({ scope: id, warnIfNoStore: false }) ?? null;
  const [localStoreExists] = import_react20.default.useState(!!localStore.store);
  const store = localStoreExists ? localStore : (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePlateControllerStore(id)
  );
  const plateControllerExists = usePlateControllerExists();
  const fallbackStore = useFallbackPlateStore();
  if (!store) {
    if (plateControllerExists) {
      return fallbackStore;
    }
    throw new Error(
      `Plate hooks must be used inside a Plate or PlateController`
    );
  }
  return store;
};
var usePlateSet = (key, options) => {
  const store = usePlateStore(
    typeof options === "string" ? options : options?.scope
  );
  return (0, import_jotai_x5.useAtomStoreSet)(store, key);
};
var usePlateValue = (key, options) => {
  const store = usePlateStore(
    typeof options === "string" ? options : options?.scope
  );
  return (0, import_jotai_x5.useAtomStoreValue)(store, key);
};
var usePlateState = (key, options) => {
  const store = usePlateStore(
    typeof options === "string" ? options : options?.scope
  );
  return (0, import_jotai_x5.useAtomStoreState)(store, key);
};
var useEditorId = () => (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(), "editor").id;
var useEditorContainerRef = (id) => {
  return (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "containerRef");
};
var useEditorScrollRef = (id) => {
  return (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "scrollRef");
};
var useScrollRef = (id) => {
  const scrollRef = useEditorScrollRef(id);
  const containerRef = useEditorContainerRef(id);
  return scrollRef.current ? scrollRef : containerRef;
};
var useEditorMounted = (id) => {
  return !!(0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "isMounted");
};
var useEditorReadOnly = (id) => {
  return !!(0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "readOnly");
};
var useEditorComposing = (id) => {
  return !!(0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "composing");
};
var useEditorRef = (id) => {
  const store = usePlateStore(id);
  const editor = (0, import_jotai_x5.useAtomStoreValue)(store, "editor") ?? createPlateFallbackEditor();
  editor.store = store;
  return editor;
};
var useEditorSelection = (id) => usePlateStore(id).useTrackedSelectionValue().selection;
var useEditorState = (id) => {
  return usePlateStore(id).useTrackedEditorValue().editor;
};
var useEditorVersion = (id) => {
  return (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "versionEditor");
};
var useSelectionVersion = (id) => {
  return (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "versionSelection");
};
var useEditorValue = (id) => usePlateStore(id).useTrackedValueValue().value;
var useValueVersion = (id) => {
  return (0, import_jotai_x5.useAtomStoreValue)(usePlateStore(id), "versionValue");
};
var useIncrementVersion = (key, id) => {
  const previousVersionRef = import_react20.default.useRef(1);
  const store = usePlateStore(id);
  const setVersionDecorate = (0, import_jotai_x5.useAtomStoreSet)(store, "versionDecorate");
  const setVersionSelection = (0, import_jotai_x5.useAtomStoreSet)(store, "versionSelection");
  const setVersionValue = (0, import_jotai_x5.useAtomStoreSet)(store, "versionValue");
  const setVersionEditor = (0, import_jotai_x5.useAtomStoreSet)(store, "versionEditor");
  return import_react20.default.useCallback(() => {
    const nextVersion = previousVersionRef.current + 1;
    switch (key) {
      case "versionDecorate": {
        setVersionDecorate(nextVersion);
        break;
      }
      case "versionEditor": {
        setVersionEditor(nextVersion);
        break;
      }
      case "versionSelection": {
        setVersionSelection(nextVersion);
        break;
      }
      case "versionValue": {
        setVersionValue(nextVersion);
        break;
      }
    }
    previousVersionRef.current = nextVersion;
  }, [
    key,
    setVersionDecorate,
    setVersionEditor,
    setVersionSelection,
    setVersionValue
  ]);
};
var useRedecorate = (id) => {
  const updateDecorate = useIncrementVersion("versionDecorate", id);
  return import_react20.default.useCallback(() => {
    updateDecorate();
  }, [updateDecorate]);
};

// src/react/stores/plate/useEditorPlugin.ts
var import_react21 = __toESM(require("react"));
function useEditorPlugin(p, id) {
  const editor = useEditorRef(id);
  return import_react21.default.useMemo(
    () => ({
      ...getEditorPlugin2(editor, p),
      store: editor.store
    }),
    [editor, p]
  );
}

// src/react/stores/plate/useEditorSelector.ts
var import_react22 = __toESM(require("react"));
var import_jotai_x6 = require("jotai-x");
var import_utils19 = require("jotai/utils");
var useEditorSelector = (selector, deps, { id, equalityFn = (a, b) => a === b } = {}) => {
  const selectorAtom = import_react22.default.useMemo(
    () => (0, import_utils19.selectAtom)(
      plateStore.atom.trackedEditor,
      ({ editor }, prev) => selector(editor, prev),
      equalityFn
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  return (0, import_jotai_x6.useStoreAtomValue)(usePlateStore(id), selectorAtom);
};

// src/react/stores/plate/usePluginOption.ts
var import_zustand_x4 = require("zustand-x");
function usePluginOption(plugin, key, ...args) {
  const editor = useEditorRef();
  return useEditorPluginOption(editor, plugin, key, ...args);
}
function useEditorPluginOption(editor, plugin, key, ...args) {
  const store = editor.getOptionsStore(plugin);
  if (!store) {
    return void 0;
  }
  if (!(key in store.get("state")) && !(key in store.selectors)) {
    editor.api.debug.error(
      `usePluginOption: ${key} option is not defined in plugin ${plugin.key}`,
      "OPTION_UNDEFINED"
    );
    return void 0;
  }
  return (0, import_zustand_x4.useStoreValue)(store, key, ...args);
}
function usePluginOptions(plugin, selector, {
  id,
  equalityFn
} = {}) {
  const editor = useEditorRef(id);
  return useEditorPluginOptions(editor, plugin, selector, {
    equalityFn
  });
}
function useEditorPluginOptions(editor, plugin, selector, {
  equalityFn
} = {}) {
  const store = editor.getOptionsStore(plugin);
  if (!store) {
    return void 0;
  }
  return (0, import_zustand_x4.useStoreSelect)(store, selector, equalityFn);
}

// src/react/stores/element/useElement.ts
var useElement = (pluginKey = SCOPE_ELEMENT) => {
  const editor = useEditorRef();
  const value = (0, import_jotai_x7.useAtomStoreValue)(useElementStore(pluginKey), "element");
  if (!value) {
    editor.api.debug.warn(
      `useElement(${pluginKey}) hook must be used inside the node component's context`,
      "USE_ELEMENT_CONTEXT"
    );
    return {};
  }
  return value;
};

// src/react/stores/element/useElementSelector.ts
var import_react23 = __toESM(require("react"));
var import_jotai_x8 = require("jotai-x");
var import_utils20 = require("jotai/utils");
var useElementSelector = (selector, deps, {
  key,
  equalityFn = (a, b) => a === b
} = {}) => {
  const selectorAtom = import_react23.default.useMemo(
    () => (0, import_utils20.selectAtom)(
      elementStore.atom.entry,
      (entry, prev) => selector(entry, prev),
      equalityFn
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  return (0, import_jotai_x8.useStoreAtomValue)(useElementStore(key), selectorAtom);
};

// src/react/stores/event-editor/useEventPlateId.ts
var useEventPlateId = (id) => {
  const focus = useEventEditorValue("focus");
  const blur = useEventEditorValue("blur");
  const last = useEventEditorValue("last");
  const providerId = useEditorRef().id;
  if (id) return id;
  if (focus) return focus;
  if (blur) return blur;
  return last ?? providerId ?? PLATE_SCOPE;
};

// src/react/components/EditorHotkeysEffect.tsx
function EditorHotkeysEffect({
  id,
  editableRef
}) {
  const editor = useEditorRef(id);
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, Object.entries(editor.meta.shortcuts).map(
    ([hotkeyString, hotkeyConfig]) => {
      if (!hotkeyConfig || !(0, import_utils21.isDefined)(hotkeyConfig.keys) || !hotkeyConfig.handler) {
        return null;
      }
      return /* @__PURE__ */ import_react24.default.createElement(
        HotkeyEffect,
        {
          id,
          key: hotkeyString,
          editableRef,
          hotkeyConfig
        }
      );
    }
  ));
}
function HotkeyEffect({
  id,
  editableRef,
  hotkeyConfig
}) {
  const editor = useEditorRef(id);
  const { keys, handler, ...options } = hotkeyConfig;
  const setHotkeyRef = (0, import_react_hotkeys2.useHotkeys)(
    keys,
    (event, eventDetails) => {
      if (handler({
        editor,
        event,
        eventDetails
      }) !== false && !(0, import_utils21.isDefined)(options.preventDefault)) {
        event.preventDefault();
        event.stopPropagation?.();
      }
    },
    {
      enableOnContentEditable: true,
      ...options
    },
    []
  );
  (0, import_react24.useEffect)(() => {
    if (editableRef.current) {
      setHotkeyRef(editableRef.current);
    }
  }, [setHotkeyRef, editableRef]);
  return null;
}

// src/react/components/EditorMethodsEffect.ts
var import_react25 = __toESM(require("react"));
var EditorMethodsEffect = ({ id }) => {
  const editor = useEditorRef(id);
  const redecorate = useRedecorate(id);
  import_react25.default.useEffect(() => {
    editor.api.redecorate = redecorate;
  }, [editor, redecorate]);
  return null;
};

// src/react/components/EditorRefEffect.tsx
var import_react26 = __toESM(require("react"));
var import_jotai_x9 = require("jotai-x");
function EditorRefPluginEffect({
  id,
  plugin
}) {
  const editor = useEditorRef(id);
  plugin.useHooks?.(getEditorPlugin2(editor, plugin));
  return null;
}
function EditorRefEffect({ id }) {
  const store = usePlateStore(id);
  const editor = (0, import_jotai_x9.useAtomStoreValue)(store, "editor");
  const setIsMounted = (0, import_jotai_x9.useAtomStoreSet)(store, "isMounted");
  import_react26.default.useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [setIsMounted]);
  return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, editor.meta.pluginCache.useHooks.map((key) => {
    return /* @__PURE__ */ import_react26.default.createElement(
      EditorRefPluginEffect,
      {
        id,
        key,
        plugin: getPlugin(editor, { key })
      }
    );
  }));
}

// src/react/components/Plate.tsx
var import_react28 = __toESM(require("react"));

// src/internal/hooks/usePlateInstancesWarn.ts
var import_react27 = __toESM(require("react"));
function checkPlateInstances() {
  globalThis.__PLATE_INSTANCES__ = (globalThis.__PLATE_INSTANCES__ || 0) + 1;
}
checkPlateInstances();
function usePlateInstancesWarn(disabled) {
  import_react27.default.useEffect(() => {
    if (!disabled && globalThis.__PLATE_INSTANCES__ && globalThis.__PLATE_INSTANCES__ > 1) {
      console.warn("Detected multiple @platejs/core instances!");
    }
  }, [disabled]);
}

// src/react/components/Plate.tsx
function PlateInner({
  children,
  containerRef,
  decorate,
  editor,
  primary,
  readOnly,
  renderElement,
  renderLeaf,
  scrollRef,
  onChange,
  onNodeChange,
  onSelectionChange,
  onTextChange,
  onValueChange
}) {
  return /* @__PURE__ */ import_react28.default.createElement(
    PlateStoreProvider,
    {
      readOnly: readOnly ?? editor?.dom.readOnly,
      onChange,
      onNodeChange,
      onSelectionChange,
      onTextChange,
      onValueChange,
      containerRef,
      decorate,
      editor,
      primary,
      renderElement,
      renderLeaf,
      scope: editor.id,
      scrollRef
    },
    children
  );
}
function Plate(props) {
  const id = (0, import_react28.useId)();
  const containerRef = import_react28.default.useRef(null);
  const scrollRef = import_react28.default.useRef(null);
  usePlateInstancesWarn(props.suppressInstanceWarning);
  if (!props.editor) return null;
  props.editor.meta.uid = "e-" + id.replaceAll(":", "");
  return /* @__PURE__ */ import_react28.default.createElement(
    PlateInner,
    {
      key: props.editor.meta.key,
      containerRef,
      scrollRef,
      ...props
    }
  );
}

// src/react/components/PlateContainer.tsx
var import_react29 = __toESM(require("react"));
var PlateContainer = ({
  children,
  ...props
}) => {
  const editor = useEditorRef();
  const readOnly = useEditorReadOnly();
  const containerRef = useEditorContainerRef();
  let afterContainer = null;
  let beforeContainer = null;
  const mainContainer = /* @__PURE__ */ import_react29.default.createElement("div", { id: editor.meta.uid, ref: containerRef, ...props }, children);
  editor.meta.pluginCache.render.beforeContainer.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (isEditOnly(readOnly, plugin, "render")) return;
    const BeforeContainer = plugin.render.beforeContainer;
    beforeContainer = /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, beforeContainer, /* @__PURE__ */ import_react29.default.createElement(BeforeContainer, { ...props }));
  });
  editor.meta.pluginCache.render.afterContainer.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    if (isEditOnly(readOnly, plugin, "render")) return;
    const AfterContainer = plugin.render.afterContainer;
    afterContainer = /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, afterContainer, /* @__PURE__ */ import_react29.default.createElement(AfterContainer, { ...props }));
  });
  return /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, beforeContainer, mainContainer, afterContainer);
};
PlateContainer.displayName = "PlateContainer";

// src/react/components/PlateContent.tsx
var import_react32 = __toESM(require("react"));
var import_react_utils4 = require("@udecode/react-utils");
var import_utils22 = require("@udecode/utils");
var import_jotai_x11 = require("jotai-x");

// src/react/components/PlateControllerEffect.ts
var import_react30 = __toESM(require("react"));
var import_react_utils3 = require("@udecode/react-utils");
var import_jotai_optics = require("jotai-optics");
var import_jotai_x10 = require("jotai-x");
var PlateControllerEffect = ({
  id: idProp
}) => {
  const idFromStore = useEditorId();
  const id = idProp ?? idFromStore;
  const currentStoreAtom = import_react30.default.useMemo(
    () => (0, import_jotai_optics.focusAtom)(
      plateControllerStore.atom.editorStores,
      (optic) => optic.prop(id)
    ),
    [id]
  );
  const setCurrentStore = (0, import_react_utils3.useStableFn)(
    usePlateControllerLocalStore().setAtom(currentStoreAtom),
    [currentStoreAtom]
  );
  const setPrimaryEditorIds = (0, import_react_utils3.useStableFn)(
    (0, import_jotai_x10.useAtomStoreSet)(usePlateControllerLocalStore(), "primaryEditorIds")
  );
  const setActiveId = (0, import_react_utils3.useStableFn)(
    (0, import_jotai_x10.useAtomStoreSet)(usePlateControllerLocalStore(), "activeId")
  );
  const store = usePlateStore(id);
  const primary = (0, import_jotai_x10.useAtomStoreValue)(store, "primary");
  const focused = (0, import_slate_react2.useFocused)();
  import_react30.default.useEffect(() => {
    setCurrentStore(store ?? null);
    return () => {
      setCurrentStore(null);
      setActiveId((activeId) => activeId === id ? null : activeId);
    };
  }, [store, setCurrentStore, setActiveId, id]);
  import_react30.default.useEffect(() => {
    if (primary) {
      setPrimaryEditorIds((ids) => [...ids, id]);
      return () => {
        setPrimaryEditorIds((ids) => ids.filter((i) => i !== id));
      };
    }
  }, [id, primary, setPrimaryEditorIds]);
  import_react30.default.useEffect(() => {
    if (id && focused) {
      setActiveId(id);
    }
  }, [id, focused, setActiveId]);
  return null;
};

// src/react/components/PlateSlate.tsx
var import_react31 = __toESM(require("react"));
function PlateSlate({
  id,
  children
}) {
  const slateProps = useSlateProps({ id });
  const editor = useEditorRef(id);
  let aboveSlate = /* @__PURE__ */ import_react31.default.createElement(import_slate_react.Slate, { ...slateProps }, children);
  editor.meta.pluginCache.render.aboveSlate.forEach((key) => {
    const plugin = editor.getPlugin({ key });
    const AboveSlate = plugin.render.aboveSlate;
    aboveSlate = /* @__PURE__ */ import_react31.default.createElement(AboveSlate, null, aboveSlate);
  });
  return aboveSlate;
}

// src/react/components/PlateContent.tsx
var PlateContent = import_react32.default.forwardRef(
  ({
    autoFocusOnEditable,
    readOnly: readOnlyProp,
    renderEditable,
    ...props
  }, ref) => {
    const { id } = props;
    const editor = useEditorRef(id);
    const storeReadOnly = useEditorReadOnly();
    const readOnly = props.disabled ? true : readOnlyProp ?? storeReadOnly;
    editor.dom.readOnly = readOnly;
    if (!editor) {
      throw new Error(
        "Editor not found. Please ensure that PlateContent is rendered below Plate."
      );
    }
    const editableProps = useEditableProps({ ...props, readOnly });
    const editableRef = (0, import_react32.useRef)(null);
    const combinedRef = (0, import_react_utils4.useComposedRef)(ref, editableRef);
    if (!editor.children || editor.children.length === 0) {
      return null;
    }
    const editable = /* @__PURE__ */ import_react32.default.createElement(import_slate_react.Editable, { ref: combinedRef, ...editableProps });
    let afterEditable = null;
    let beforeEditable = null;
    editor.meta.pluginCache.render.beforeEditable.forEach((key) => {
      const plugin = editor.getPlugin({ key });
      if (isEditOnly(readOnly, plugin, "render")) return;
      const BeforeEditable = plugin.render.beforeEditable;
      beforeEditable = /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, beforeEditable, /* @__PURE__ */ import_react32.default.createElement(BeforeEditable, { ...editableProps }));
    });
    editor.meta.pluginCache.render.afterEditable.forEach((key) => {
      const plugin = editor.getPlugin({ key });
      if (isEditOnly(readOnly, plugin, "render")) return;
      const AfterEditable = plugin.render.afterEditable;
      afterEditable = /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, afterEditable, /* @__PURE__ */ import_react32.default.createElement(AfterEditable, { ...editableProps }));
    });
    let aboveEditable = /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, renderEditable ? renderEditable(editable) : editable, /* @__PURE__ */ import_react32.default.createElement(EditorMethodsEffect, { id }), /* @__PURE__ */ import_react32.default.createElement(EditorHotkeysEffect, { id, editableRef }), /* @__PURE__ */ import_react32.default.createElement(EditorRefEffect, { id }), /* @__PURE__ */ import_react32.default.createElement(PlateControllerEffect, { id }));
    editor.meta.pluginCache.render.aboveEditable.forEach((key) => {
      const plugin = editor.getPlugin({ key });
      if (isEditOnly(readOnly, plugin, "render")) return;
      const AboveEditable = plugin.render.aboveEditable;
      aboveEditable = /* @__PURE__ */ import_react32.default.createElement(AboveEditable, null, aboveEditable);
    });
    return /* @__PURE__ */ import_react32.default.createElement(PlateSlate, { id }, /* @__PURE__ */ import_react32.default.createElement(
      EditorStateEffect,
      {
        id,
        disabled: props.disabled,
        readOnly: readOnlyProp,
        autoFocusOnEditable,
        editor
      }
    ), beforeEditable, aboveEditable, afterEditable);
  }
);
PlateContent.displayName = "PlateContent";
function EditorStateEffect({
  id,
  autoFocusOnEditable,
  disabled,
  editor,
  readOnly
}) {
  const store = usePlateStore(id);
  import_react32.default.useLayoutEffect(() => {
    if (disabled) {
      store.setReadOnly(true);
      return;
    }
    if ((0, import_utils22.isDefined)(readOnly)) {
      store.setReadOnly(readOnly);
    }
  }, [disabled, editor.dom, readOnly, store]);
  const onNodeChange = (0, import_jotai_x11.useAtomStoreValue)(store, "onNodeChange");
  import_react32.default.useLayoutEffect(() => {
    if (onNodeChange) {
      editor.setOption(
        SlateExtensionPlugin,
        "onNodeChange",
        onNodeChange
      );
    }
  }, [editor, onNodeChange]);
  const onTextChange = (0, import_jotai_x11.useAtomStoreValue)(store, "onTextChange");
  import_react32.default.useLayoutEffect(() => {
    if (onTextChange) {
      editor.setOption(
        SlateExtensionPlugin,
        "onTextChange",
        onTextChange
      );
    }
  }, [editor, onTextChange]);
  const prevReadOnly = import_react32.default.useRef(readOnly);
  import_react32.default.useEffect(() => {
    if (autoFocusOnEditable && prevReadOnly.current && !readOnly) {
      editor.tf.focus({ edge: "endEditor" });
    }
    prevReadOnly.current = readOnly;
  }, [autoFocusOnEditable, editor, readOnly]);
  return null;
}

// src/react/components/PlateTest.tsx
var import_react35 = __toESM(require("react"));

// src/react/editor/usePlateEditor.ts
var import_react33 = __toESM(require("react"));
function usePlateEditor(options = {}, deps = []) {
  const [, forceRender] = import_react33.default.useState({});
  const isMountedRef = import_react33.default.useRef(false);
  import_react33.default.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return import_react33.default.useMemo(
    () => {
      if (options.enabled === false) return null;
      const editor = createPlateEditor({
        ...options,
        onReady: (ctx) => {
          if (ctx.isAsync && isMountedRef.current) {
            forceRender({});
          }
          options.onReady?.(ctx);
        }
      });
      return editor;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options.id, options.enabled, ...deps]
  );
}

// src/react/editor/usePlateViewEditor.ts
var import_react34 = __toESM(require("react"));
function usePlateViewEditor(options = {}, deps = []) {
  const isMountedRef = import_react34.default.useRef(false);
  const [, forceRender] = import_react34.default.useState({});
  import_react34.default.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return import_react34.default.useMemo(
    () => {
      if (options.enabled === false) return null;
      return createStaticEditor({
        ...options,
        onReady: (ctx) => {
          if (ctx.isAsync && isMountedRef.current) {
            forceRender({});
          }
          options.onReady?.(ctx);
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options && options.id, options && options.enabled, ...deps]
  );
}

// src/react/components/PlateTest.tsx
function PlateTest({
  editableProps,
  shouldNormalizeEditor,
  variant = "wordProcessor",
  ...props
}) {
  const { id, editor: _editor, plugins } = props;
  let editor = _editor;
  if (editor && !editor.meta.pluginList) {
    editor = createPlateEditor({
      id,
      editor,
      plugins,
      shouldNormalizeEditor
    });
  }
  return /* @__PURE__ */ import_react35.default.createElement(Plate, { ...props, editor }, /* @__PURE__ */ import_react35.default.createElement(
    PlateContent,
    {
      "data-testid": "slate-content-editable",
      "data-variant": variant,
      autoFocus: true,
      ...editableProps
    }
  ));
}

// src/react/components/PlateView.tsx
var import_react36 = __toESM(require("react"));
var PlateView = (props) => {
  return /* @__PURE__ */ import_react36.default.createElement(
    PlateStatic,
    {
      onCopy: (0, import_react36.useCallback)(
        (e) => {
          props.editor.tf.setFragmentData(e.clipboardData, "copy");
          if (e.clipboardData.getData("application/x-slate-fragment")) {
            e.preventDefault();
          }
        },
        [props.editor.tf]
      ),
      ...props
    }
  );
};

// src/react/components/withHOC.tsx
var import_react37 = __toESM(require("react"));
var withHOC = (HOC, Component, hocProps, hocRef) => import_react37.default.forwardRef((props, componentRef) => /* @__PURE__ */ import_react37.default.createElement(HOC, { ...hocProps, ref: hocRef }, /* @__PURE__ */ import_react37.default.createElement(Component, { ...props, ref: componentRef })));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BLUR_EDITOR_EVENT,
  BelowRootNodes,
  ContentVisibilityChunk,
  DOM_HANDLERS,
  DefaultPlaceholder,
  Editable,
  EditorHotkeysEffect,
  EditorMethodsEffect,
  EditorRefEffect,
  EditorRefPluginEffect,
  ElementProvider,
  EventEditorPlugin,
  EventEditorStore,
  FOCUS_EDITOR_EVENT,
  GLOBAL_PLATE_SCOPE,
  PLATE_SCOPE,
  ParagraphPlugin,
  Plate,
  PlateContainer,
  PlateContent,
  PlateController,
  PlateControllerEffect,
  PlateElement,
  PlateLeaf,
  PlateSlate,
  PlateStoreProvider,
  PlateTest,
  PlateText,
  PlateView,
  ReactPlugin,
  SCOPE_ELEMENT,
  Slate,
  SlateReactExtensionPlugin,
  atom,
  convertDomEventToSyntheticEvent,
  createAtomStore,
  createPlateEditor,
  createPlateFallbackEditor,
  createPlatePlugin,
  createPlateStore,
  createTPlatePlugin,
  elementStore,
  getEditorPlugin,
  getEventPlateId,
  getPlateCorePlugins,
  getPlugin,
  getRenderNodeProps,
  isEventHandled,
  omitPluginContext,
  pipeHandler,
  pipeOnChange,
  pipeRenderElement,
  pipeRenderLeaf,
  pipeRenderText,
  plateControllerStore,
  plateStore,
  pluginRenderElement,
  pluginRenderLeaf,
  pluginRenderText,
  toPlatePlugin,
  toTPlatePlugin,
  useComposing,
  useEditableProps,
  useEditorComposing,
  useEditorContainerRef,
  useEditorId,
  useEditorMounted,
  useEditorPlugin,
  useEditorPluginOption,
  useEditorPluginOptions,
  useEditorReadOnly,
  useEditorRef,
  useEditorScrollRef,
  useEditorSelection,
  useEditorSelector,
  useEditorState,
  useEditorValue,
  useEditorVersion,
  useElement,
  useElementSelector,
  useElementStore,
  useEventEditorValue,
  useEventPlateId,
  useFocusEditorEvents,
  useFocused,
  useFocusedLast,
  useIncrementVersion,
  useNodeAttributes,
  useNodePath,
  usePath,
  usePlateControllerExists,
  usePlateControllerLocalStore,
  usePlateControllerStore,
  usePlateEditor,
  usePlateLocalStore,
  usePlateSet,
  usePlateState,
  usePlateStore,
  usePlateValue,
  usePlateViewEditor,
  usePluginOption,
  usePluginOptions,
  useReadOnly,
  useRedecorate,
  useScrollRef,
  useSelected,
  useSelectionVersion,
  useSlateProps,
  useStoreAtomState,
  useStoreAtomValue,
  useStoreSelect,
  useStoreSetAtom,
  useStoreState,
  useStoreValue,
  useTracked,
  useTrackedStore,
  useValueVersion,
  withHOC,
  withPlate,
  withPlateReact,
  withReact
});
//# sourceMappingURL=index.js.map