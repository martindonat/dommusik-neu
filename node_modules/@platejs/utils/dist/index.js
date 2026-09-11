"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ExitBreakPlugin: () => ExitBreakPlugin,
  KEYS: () => KEYS,
  NODES: () => NODES,
  NormalizeTypesPlugin: () => NormalizeTypesPlugin,
  STYLE_KEYS: () => STYLE_KEYS,
  SingleBlockPlugin: () => SingleBlockPlugin,
  SingleLinePlugin: () => SingleLinePlugin,
  TrailingBlockPlugin: () => TrailingBlockPlugin,
  withNormalizeTypes: () => withNormalizeTypes,
  withTrailingBlock: () => withTrailingBlock
});
module.exports = __toCommonJS(index_exports);

// src/lib/plate-keys.ts
var NODES = {
  a: "a",
  ai: "ai",
  aiChat: "aiChat",
  audio: "audio",
  blockquote: "blockquote",
  bold: "bold",
  callout: "callout",
  code: "code",
  codeBlock: "code_block",
  codeLine: "code_line",
  codeSyntax: "code_syntax",
  column: "column",
  columnGroup: "column_group",
  comment: "comment",
  date: "date",
  emojiInput: "emoji_input",
  equation: "equation",
  excalidraw: "excalidraw",
  file: "file",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  highlight: "highlight",
  hr: "hr",
  img: "img",
  inlineEquation: "inline_equation",
  italic: "italic",
  kbd: "kbd",
  li: "li",
  lic: "lic",
  link: "a",
  listTodoClassic: "action_item",
  mediaEmbed: "media_embed",
  mention: "mention",
  mentionInput: "mention_input",
  olClassic: "ol",
  p: "p",
  searchHighlight: "search_highlight",
  slashInput: "slash_input",
  strikethrough: "strikethrough",
  sub: "subscript",
  suggestion: "suggestion",
  sup: "superscript",
  table: "table",
  tag: "tag",
  taskList: "taskList",
  td: "td",
  th: "th",
  toc: "toc",
  toggle: "toggle",
  tr: "tr",
  ulClassic: "ul",
  underline: "underline",
  video: "video"
};
var STYLE_KEYS = {
  backgroundColor: "backgroundColor",
  color: "color",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontWeight: "fontWeight",
  indent: "indent",
  lineHeight: "lineHeight",
  listType: "listStyleType",
  textAlign: "textAlign",
  textIndent: "textIndent"
};
var KEYS = {
  ...NODES,
  ...STYLE_KEYS,
  autoformat: "autoformat",
  blockMenu: "blockMenu",
  blockPlaceholder: "blockPlaceholder",
  blockSelection: "blockSelection",
  caption: "caption",
  copilot: "copilot",
  csv: "csv",
  cursorOverlay: "cursorOverlay",
  delete: "delete",
  dnd: "dnd",
  docx: "docx",
  emoji: "emoji",
  exitBreak: "exitBreak",
  heading: ["h1", "h2", "h3", "h4", "h5", "h6"],
  html: "html",
  juice: "juice",
  list: "list",
  listChecked: "checked",
  listClassic: "listClassic",
  listRestart: "listRestart",
  listRestartPolite: "listRestartPolite",
  listStart: "listStart",
  listTodo: "todo",
  markdown: "markdown",
  nodeId: "nodeId",
  normalizeTypes: "normalizeTypes",
  ol: "decimal",
  placeholder: "placeholder",
  playwright: "playwright",
  removeEmptyNodes: "removeEmptyNodes",
  resetNode: "resetNode",
  singleBlock: "singleBlock",
  singleLine: "singleLine",
  slashCommand: "slash_command",
  softBreak: "softBreak",
  tabbable: "tabbable",
  trailingBlock: "trailingBlock",
  ul: "disc",
  yjs: "yjs"
};

// src/lib/plugins/ExitBreakPlugin.ts
var import_core = require("@platejs/core");
var ExitBreakPlugin = (0, import_core.createSlatePlugin)({
  key: KEYS.exitBreak,
  editOnly: true
}).extendTransforms(({ editor }) => ({
  insert: (options) => editor.tf.insertExitBreak(options),
  insertBefore: (options) => editor.tf.insertExitBreak({ ...options, reverse: true })
}));

// src/lib/plugins/normalize-types/NormalizeTypesPlugin.ts
var import_core2 = require("@platejs/core");

// src/lib/plugins/normalize-types/withNormalizeTypes.ts
var import_slate = require("@platejs/slate");
var withNormalizeTypes = ({
  editor,
  getOptions,
  tf: { normalizeNode }
}) => ({
  transforms: {
    normalizeNode([currentNode, currentPath]) {
      const { rules, onError } = getOptions();
      if (currentPath.length === 0) {
        const endCurrentNormalizationPass = rules.some(
          ({ path, strictType, type }) => {
            const node = import_slate.NodeApi.get(editor, path);
            if (node) {
              if (strictType && import_slate.ElementApi.isElement(node) && node.type !== strictType) {
                const { children, ...props } = editor.api.create.block({
                  type: strictType
                });
                editor.tf.setNodes(props, {
                  at: path
                });
                return true;
              }
            } else {
              try {
                editor.tf.insertNodes(
                  editor.api.create.block({ type: strictType ?? type }),
                  { at: path }
                );
                return true;
              } catch (error) {
                onError?.(error);
              }
            }
            return false;
          }
        );
        if (endCurrentNormalizationPass) {
          return;
        }
      }
      return normalizeNode([currentNode, currentPath]);
    }
  }
});

// src/lib/plugins/normalize-types/NormalizeTypesPlugin.ts
var NormalizeTypesPlugin = (0, import_core2.createTSlatePlugin)({
  key: KEYS.normalizeTypes,
  options: {
    rules: []
  }
}).overrideEditor(withNormalizeTypes);

// src/lib/plugins/single-block/SingleBlockPlugin.ts
var import_core3 = require("@platejs/core");
var SingleBlockPlugin = (0, import_core3.createSlatePlugin)({
  key: KEYS.singleBlock,
  override: {
    enabled: {
      [KEYS.trailingBlock]: false
    }
  }
}).overrideEditor(({ editor, tf: { normalizeNode } }) => ({
  transforms: {
    insertBreak() {
      editor.tf.insertSoftBreak();
    },
    normalizeNode(entry) {
      const [node, path] = entry;
      if (path.length === 0 && editor.children.length > 1) {
        editor.tf.withoutNormalizing(() => {
          while (editor.children.length > 1) {
            editor.tf.insertText("\n", { at: editor.api.start([1]) });
            editor.tf.mergeNodes({
              at: [1],
              match: (_, path2) => path2.length === 1
            });
          }
        });
        return;
      }
      normalizeNode(entry);
    }
  }
}));

// src/lib/plugins/single-block/SingleLinePlugin.ts
var import_core4 = require("@platejs/core");

// ../../node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function die(error, ...args) {
  if (process.env.NODE_ENV !== "production") {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (process.env.NODE_ENV !== "production" && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (process.env.NODE_ENV !== "production" && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (process.env.NODE_ENV !== "production" && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);

// ../../node_modules/slate/dist/index.es.js
var Path = {
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path, another) {
    var common = [];
    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];
      if (av !== bv) {
        break;
      }
      common.push(av);
    }
    return common;
  },
  compare(path, another) {
    var min = Math.min(path.length, another.length);
    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }
    return 0;
  },
  endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },
  endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },
  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }
    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];
    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }
    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;
      default:
        return false;
    }
  },
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }
    return path.slice(0, -1);
  },
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }
    var last = path[path.length - 1];
    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }
    return path.slice(0, -1).concat(last - 1);
  },
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }
    return path.slice(ancestor.length);
  },
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!path) return null;
    var p = [...path];
    var {
      affinity = "forward"
    } = options;
    if (path.length === 0) {
      return p;
    }
    switch (operation.type) {
      case "insert_node": {
        var {
          path: op
        } = operation;
        if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
          p[op.length - 1] += 1;
        }
        break;
      }
      case "remove_node": {
        var {
          path: _op
        } = operation;
        if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
          return null;
        } else if (Path.endsBefore(_op, p)) {
          p[_op.length - 1] -= 1;
        }
        break;
      }
      case "merge_node": {
        var {
          path: _op2,
          position
        } = operation;
        if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
          p[_op2.length - 1] -= 1;
        } else if (Path.isAncestor(_op2, p)) {
          p[_op2.length - 1] -= 1;
          p[_op2.length] += position;
        }
        break;
      }
      case "split_node": {
        var {
          path: _op3,
          position: _position
        } = operation;
        if (Path.equals(_op3, p)) {
          if (affinity === "forward") {
            p[p.length - 1] += 1;
          } else if (affinity === "backward") ;
          else {
            return null;
          }
        } else if (Path.endsBefore(_op3, p)) {
          p[_op3.length - 1] += 1;
        } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
          p[_op3.length - 1] += 1;
          p[_op3.length] -= _position;
        }
        break;
      }
      case "move_node": {
        var {
          path: _op4,
          newPath: onp
        } = operation;
        if (Path.equals(_op4, onp)) {
          return p;
        }
        if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
          var copy = onp.slice();
          if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
            copy[_op4.length - 1] -= 1;
          }
          return copy.concat(p.slice(_op4.length));
        } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
          if (Path.endsBefore(_op4, p)) {
            p[_op4.length - 1] -= 1;
          } else {
            p[_op4.length - 1] += 1;
          }
        } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
          if (Path.endsBefore(_op4, p)) {
            p[_op4.length - 1] -= 1;
          }
          p[onp.length - 1] += 1;
        } else if (Path.endsBefore(_op4, p)) {
          if (Path.equals(onp, p)) {
            p[onp.length - 1] += 1;
          }
          p[_op4.length - 1] -= 1;
        }
        break;
      }
    }
    return p;
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$e(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$e(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$e(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var insertChildren = function insertChildren2(xs, index) {
  for (var _len = arguments.length, newValues = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    newValues[_key - 2] = arguments[_key];
  }
  return [...xs.slice(0, index), ...newValues, ...xs.slice(index)];
};
var replaceChildren = function replaceChildren2(xs, index, removeCount) {
  for (var _len2 = arguments.length, newValues = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    newValues[_key2 - 3] = arguments[_key2];
  }
  return [...xs.slice(0, index), ...newValues, ...xs.slice(index + removeCount)];
};
var removeChildren = replaceChildren;
var modifyDescendant = (editor, path, f) => {
  if (path.length === 0) {
    throw new Error("Cannot modify the editor");
  }
  var node = Node.get(editor, path);
  var slicedPath = path.slice();
  var modifiedNode = f(node);
  while (slicedPath.length > 1) {
    var _index = slicedPath.pop();
    var ancestorNode = Node.get(editor, slicedPath);
    modifiedNode = _objectSpread$e(_objectSpread$e({}, ancestorNode), {}, {
      children: replaceChildren(ancestorNode.children, _index, 1, modifiedNode)
    });
  }
  var index = slicedPath.pop();
  editor.children = replaceChildren(editor.children, index, 1, modifiedNode);
};
var modifyChildren = (editor, path, f) => {
  if (path.length === 0) {
    editor.children = f(editor.children);
  } else {
    modifyDescendant(editor, path, (node) => {
      if (Text.isText(node)) {
        throw new Error("Cannot get the element at path [".concat(path, "] because it refers to a leaf node: ").concat(Scrubber.stringify(node)));
      }
      return _objectSpread$e(_objectSpread$e({}, node), {}, {
        children: f(node.children)
      });
    });
  }
};
var modifyLeaf = (editor, path, f) => modifyDescendant(editor, path, (node) => {
  if (!Text.isText(node)) {
    throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
  }
  return f(node);
});
var GeneralTransforms = {
  transform(editor, op) {
    var transformSelection = false;
    switch (op.type) {
      case "insert_node": {
        var {
          path,
          node
        } = op;
        modifyChildren(editor, Path.parent(path), (children) => {
          var index2 = path[path.length - 1];
          if (index2 > children.length) {
            throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
          }
          return insertChildren(children, index2, node);
        });
        transformSelection = true;
        break;
      }
      case "insert_text": {
        var {
          path: _path,
          offset,
          text
        } = op;
        if (text.length === 0) break;
        modifyLeaf(editor, _path, (node2) => {
          var before = node2.text.slice(0, offset);
          var after = node2.text.slice(offset);
          return _objectSpread$e(_objectSpread$e({}, node2), {}, {
            text: before + text + after
          });
        });
        transformSelection = true;
        break;
      }
      case "merge_node": {
        var {
          path: _path2
        } = op;
        var index = _path2[_path2.length - 1];
        var prevPath = Path.previous(_path2);
        var prevIndex = prevPath[prevPath.length - 1];
        modifyChildren(editor, Path.parent(_path2), (children) => {
          var node2 = children[index];
          var prev2 = children[prevIndex];
          var newNode;
          if (Text.isText(node2) && Text.isText(prev2)) {
            newNode = _objectSpread$e(_objectSpread$e({}, prev2), {}, {
              text: prev2.text + node2.text
            });
          } else if (!Text.isText(node2) && !Text.isText(prev2)) {
            newNode = _objectSpread$e(_objectSpread$e({}, prev2), {}, {
              children: prev2.children.concat(node2.children)
            });
          } else {
            throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(node2), " ").concat(Scrubber.stringify(prev2)));
          }
          return replaceChildren(children, prevIndex, 2, newNode);
        });
        transformSelection = true;
        break;
      }
      case "move_node": {
        var {
          path: _path3,
          newPath
        } = op;
        var _index2 = _path3[_path3.length - 1];
        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }
        var _node = Node.get(editor, _path3);
        modifyChildren(editor, Path.parent(_path3), (children) => removeChildren(children, _index2, 1));
        var truePath = Path.transform(_path3, op);
        var newIndex = truePath[truePath.length - 1];
        modifyChildren(editor, Path.parent(truePath), (children) => insertChildren(children, newIndex, _node));
        transformSelection = true;
        break;
      }
      case "remove_node": {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];
        modifyChildren(editor, Path.parent(_path4), (children) => removeChildren(children, _index3, 1));
        if (editor.selection) {
          var selection = _objectSpread$e({}, editor.selection);
          for (var [point, key] of Range.points(selection)) {
            var result = Point.transform(point, op);
            if (selection != null && result != null) {
              selection[key] = result;
            } else {
              var prev = void 0;
              var next = void 0;
              for (var [n, p] of Node.texts(editor)) {
                if (Path.compare(p, _path4) === -1) {
                  prev = [n, p];
                } else {
                  next = [n, p];
                  break;
                }
              }
              var preferNext = false;
              if (prev && next) {
                if (Path.isSibling(prev[1], _path4)) {
                  preferNext = false;
                } else if (Path.equals(next[1], _path4)) {
                  preferNext = true;
                } else {
                  preferNext = Path.common(prev[1], _path4).length < Path.common(next[1], _path4).length;
                }
              }
              if (prev && !preferNext) {
                selection[key] = {
                  path: prev[1],
                  offset: prev[0].text.length
                };
              } else if (next) {
                selection[key] = {
                  path: next[1],
                  offset: 0
                };
              } else {
                selection = null;
              }
            }
          }
          if (!selection || !Range.equals(selection, editor.selection)) {
            editor.selection = selection;
          }
        }
        break;
      }
      case "remove_text": {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0) break;
        modifyLeaf(editor, _path5, (node2) => {
          var before = node2.text.slice(0, _offset);
          var after = node2.text.slice(_offset + _text.length);
          return _objectSpread$e(_objectSpread$e({}, node2), {}, {
            text: before + after
          });
        });
        transformSelection = true;
        break;
      }
      case "set_node": {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;
        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }
        modifyDescendant(editor, _path6, (node2) => {
          var newNode = _objectSpread$e({}, node2);
          for (var _key3 in newProperties) {
            if (_key3 === "children" || _key3 === "text") {
              throw new Error('Cannot set the "'.concat(_key3, '" property of nodes!'));
            }
            var value2 = newProperties[_key3];
            if (value2 == null) {
              delete newNode[_key3];
            } else {
              newNode[_key3] = value2;
            }
          }
          for (var _key4 in properties) {
            if (!newProperties.hasOwnProperty(_key4)) {
              delete newNode[_key4];
            }
          }
          return newNode;
        });
        break;
      }
      case "set_selection": {
        var {
          newProperties: _newProperties
        } = op;
        if (_newProperties == null) {
          editor.selection = null;
          break;
        }
        if (editor.selection == null) {
          if (!Range.isRange(_newProperties)) {
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
          }
          editor.selection = _objectSpread$e({}, _newProperties);
          break;
        }
        var _selection = _objectSpread$e({}, editor.selection);
        for (var _key5 in _newProperties) {
          var value = _newProperties[_key5];
          if (value == null) {
            if (_key5 === "anchor" || _key5 === "focus") {
              throw new Error('Cannot remove the "'.concat(_key5, '" selection property'));
            }
            delete _selection[_key5];
          } else {
            _selection[_key5] = value;
          }
        }
        editor.selection = _selection;
        break;
      }
      case "split_node": {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;
        var _index4 = _path7[_path7.length - 1];
        if (_path7.length === 0) {
          throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
        }
        modifyChildren(editor, Path.parent(_path7), (children) => {
          var node2 = children[_index4];
          var newNode;
          var nextNode;
          if (Text.isText(node2)) {
            var before = node2.text.slice(0, position);
            var after = node2.text.slice(position);
            newNode = _objectSpread$e(_objectSpread$e({}, node2), {}, {
              text: before
            });
            nextNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
              text: after
            });
          } else {
            var _before = node2.children.slice(0, position);
            var _after = node2.children.slice(position);
            newNode = _objectSpread$e(_objectSpread$e({}, node2), {}, {
              children: _before
            });
            nextNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
              children: _after
            });
          }
          return replaceChildren(children, _index4, 1, newNode, nextNode);
        });
        transformSelection = true;
        break;
      }
    }
    if (transformSelection && editor.selection) {
      var _selection2 = _objectSpread$e({}, editor.selection);
      for (var [_point, _key6] of Range.points(_selection2)) {
        _selection2[_key6] = Point.transform(_point, op);
      }
      if (!Range.equals(_selection2, editor.selection)) {
        editor.selection = _selection2;
      }
    }
  }
};
var NodeTransforms = {
  insertNodes(editor, nodes, options) {
    editor.insertNodes(nodes, options);
  },
  liftNodes(editor, options) {
    editor.liftNodes(options);
  },
  mergeNodes(editor, options) {
    editor.mergeNodes(options);
  },
  moveNodes(editor, options) {
    editor.moveNodes(options);
  },
  removeNodes(editor, options) {
    editor.removeNodes(options);
  },
  setNodes(editor, props, options) {
    editor.setNodes(props, options);
  },
  splitNodes(editor, options) {
    editor.splitNodes(options);
  },
  unsetNodes(editor, props, options) {
    editor.unsetNodes(props, options);
  },
  unwrapNodes(editor, options) {
    editor.unwrapNodes(options);
  },
  wrapNodes(editor, element, options) {
    editor.wrapNodes(element, options);
  }
};
var SelectionTransforms = {
  collapse(editor, options) {
    editor.collapse(options);
  },
  deselect(editor) {
    editor.deselect();
  },
  move(editor, options) {
    editor.move(options);
  },
  select(editor, target) {
    editor.select(target);
  },
  setPoint(editor, props, options) {
    editor.setPoint(props, options);
  },
  setSelection(editor, props) {
    editor.setSelection(props);
  }
};
var isObject = (value) => typeof value === "object" && value !== null;
var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a = node[key];
    var b = another[key];
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
    } else if (isObject(a) && isObject(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (a !== b) {
      return false;
    }
  }
  for (var _key in another) {
    if (node[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }
  return true;
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$4 = ["anchor", "focus"];
function ownKeys$d(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$d(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Range = {
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },
  surrounds(range, target) {
    var intersectionRange = Range.intersection(range, target);
    if (!intersectionRange) {
      return false;
    }
    return Range.equals(intersectionRange, target);
  },
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }
      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }
    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;
    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }
    return isAfterStart && isBeforeEnd;
  },
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$4);
    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$d({
        anchor: start,
        focus: end
      }, rest);
    }
  },
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },
  isForward(range) {
    return !Range.isBackward(range);
  },
  isRange(value) {
    return isObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },
  *points(range) {
    yield [range.anchor, "anchor"];
    yield [range.focus, "focus"];
  },
  start(range) {
    var [start] = Range.edges(range);
    return start;
  },
  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (range === null) {
      return null;
    }
    var {
      affinity = "inward"
    } = options;
    var affinityAnchor;
    var affinityFocus;
    if (affinity === "inward") {
      var isCollapsed = Range.isCollapsed(range);
      if (Range.isForward(range)) {
        affinityAnchor = "forward";
        affinityFocus = isCollapsed ? affinityAnchor : "backward";
      } else {
        affinityAnchor = "backward";
        affinityFocus = isCollapsed ? affinityAnchor : "forward";
      }
    } else if (affinity === "outward") {
      if (Range.isForward(range)) {
        affinityAnchor = "backward";
        affinityFocus = "forward";
      } else {
        affinityAnchor = "forward";
        affinityFocus = "backward";
      }
    } else {
      affinityAnchor = affinity;
      affinityFocus = affinity;
    }
    var anchor = Point.transform(range.anchor, op, {
      affinity: affinityAnchor
    });
    var focus = Point.transform(range.focus, op, {
      affinity: affinityFocus
    });
    if (!anchor || !focus) {
      return null;
    }
    return {
      anchor,
      focus
    };
  }
};
var isElement = function isElement2(value) {
  var {
    deep = false
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!isObject(value)) return false;
  var isEditor3 = typeof value.apply === "function";
  if (isEditor3) return false;
  var isChildrenValid = deep ? Node.isNodeList(value.children) : Array.isArray(value.children);
  return isChildrenValid;
};
var Element = {
  isAncestor(value) {
    var {
      deep = false
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return isObject(value) && Node.isNodeList(value.children, {
      deep
    });
  },
  isElement,
  isElementList(value) {
    var {
      deep = false
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Array.isArray(value) && value.every((val) => Element.isElement(val, {
      deep
    }));
  },
  isElementProps(props) {
    return props.children !== void 0;
  },
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }
      if (element[key] !== props[key]) {
        return false;
      }
    }
    return true;
  }
};
var _excluded$3 = ["children"];
var _excluded2$3 = ["text"];
var Node = {
  ancestor(root, path) {
    var node = Node.get(root, path);
    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.ancestors(path, options)) {
        var n = Node.ancestor(root, p);
        var entry = [n, p];
        yield entry;
      }
    }();
  },
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }
    var c = root.children[index];
    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }
    return c;
  },
  children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      var {
        reverse = false
      } = options;
      var ancestor = Node.ancestor(root, path);
      var {
        children
      } = ancestor;
      var index = reverse ? children.length - 1 : 0;
      while (reverse ? index >= 0 : index < children.length) {
        var child = Node.child(ancestor, index);
        var childPath = path.concat(index);
        yield [child, childPath];
        index = reverse ? index - 1 : index + 1;
      }
    }();
  },
  common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },
  descendant(root, path) {
    var node = Node.get(root, path);
    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node, path] of Node.nodes(root, options)) {
        if (path.length !== 0) {
          yield [node, path];
        }
      }
    }();
  },
  elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node, path] of Node.nodes(root, options)) {
        if (Element.isElement(node)) {
          yield [node, path];
        }
      }
    }();
  },
  extractProps(node) {
    if (Element.isAncestor(node)) {
      var properties = _objectWithoutProperties(node, _excluded$3);
      return properties;
    } else {
      var properties = _objectWithoutProperties(node, _excluded2$3);
      return properties;
    }
  },
  first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);
    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }
    return [n, p];
  },
  fragment(root, range) {
    var newRoot = produce({
      children: root.children
    }, (r) => {
      var [start, end] = Range.edges(range);
      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: (_ref) => {
          var [, path2] = _ref;
          return !Range.includes(range, path2);
        }
      });
      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }
        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }
        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r, path);
          _leaf.text = _leaf.text.slice(start.offset);
        }
      }
      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },
  get(root, path) {
    var node = Node.getIf(root, path);
    if (node === void 0) {
      throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
    }
    return node;
  },
  getIf(root, path) {
    var node = root;
    for (var i = 0; i < path.length; i++) {
      var p = path[i];
      if (Text.isText(node) || !node.children[p]) {
        return;
      }
      node = node.children[p];
    }
    return node;
  },
  has(root, path) {
    var node = root;
    for (var i = 0; i < path.length; i++) {
      var p = path[i];
      if (Text.isText(node) || !node.children[p]) {
        return false;
      }
      node = node.children[p];
    }
    return true;
  },
  isNode(value) {
    var {
      deep = false
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Text.isText(value) || Element.isElement(value, {
      deep
    }) || Editor.isEditor(value, {
      deep
    });
  },
  isNodeList(value) {
    var {
      deep = false
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Array.isArray(value) && value.every((val) => Node.isNode(val, {
      deep
    }));
  },
  last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);
    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }
    return [n, p];
  },
  leaf(root, path) {
    var node = Node.get(root, path);
    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.levels(path, options)) {
        var n = Node.get(root, p);
        yield [n, p];
      }
    }();
  },
  matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },
  nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      var {
        pass,
        reverse = false
      } = options;
      var {
        from = [],
        to
      } = options;
      var visited = /* @__PURE__ */ new Set();
      var p = [];
      var n = root;
      while (true) {
        if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
          break;
        }
        if (!visited.has(n)) {
          yield [n, p];
        }
        if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
          visited.add(n);
          var nextIndex = reverse ? n.children.length - 1 : 0;
          if (Path.isAncestor(p, from)) {
            nextIndex = from[p.length];
          }
          p = p.concat(nextIndex);
          n = Node.get(root, p);
          continue;
        }
        if (p.length === 0) {
          break;
        }
        if (!reverse) {
          var newPath = Path.next(p);
          if (Node.has(root, newPath)) {
            p = newPath;
            n = Node.get(root, p);
            continue;
          }
        }
        if (reverse && p[p.length - 1] !== 0) {
          var _newPath = Path.previous(p);
          p = _newPath;
          n = Node.get(root, p);
          continue;
        }
        p = Path.parent(p);
        n = Node.get(root, p);
        visited.add(n);
      }
    }();
  },
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);
    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }
    return p;
  },
  string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join("");
    }
  },
  texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node, path] of Node.nodes(root, options)) {
        if (Text.isText(node)) {
          yield [node, path];
        }
      }
    }();
  }
};
function ownKeys$c(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$c(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },
  isOperation(value) {
    if (!isObject(value)) {
      return false;
    }
    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && isObject(value.properties);
      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "set_node":
        return Path.isPath(value.path) && isObject(value.properties) && isObject(value.newProperties);
      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isObject(value.properties) && isObject(value.newProperties);
      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && isObject(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },
  inverse(op) {
    switch (op.type) {
      case "insert_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "remove_node"
        });
      }
      case "insert_text": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "remove_text"
        });
      }
      case "merge_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "split_node",
          path: Path.previous(op.path)
        });
      }
      case "move_node": {
        var {
          newPath,
          path
        } = op;
        if (Path.equals(newPath, path)) {
          return op;
        }
        if (Path.isSibling(path, newPath)) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            path: newPath,
            newPath: path
          });
        }
        var inversePath = Path.transform(path, op);
        var inverseNewPath = Path.transform(Path.next(path), op);
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          path: inversePath,
          newPath: inverseNewPath
        });
      }
      case "remove_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "insert_node"
        });
      }
      case "remove_text": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "insert_text"
        });
      }
      case "set_node": {
        var {
          properties,
          newProperties
        } = op;
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          properties: newProperties,
          newProperties: properties
        });
      }
      case "set_selection": {
        var {
          properties: _properties,
          newProperties: _newProperties
        } = op;
        if (_properties == null) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: _newProperties,
            newProperties: null
          });
        } else if (_newProperties == null) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: null,
            newProperties: _properties
          });
        } else {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: _newProperties,
            newProperties: _properties
          });
        }
      }
      case "split_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "merge_node",
          path: Path.next(op.path)
        });
      }
    }
  }
};
var isEditor = function isEditor2(value) {
  var {
    deep = false
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!isObject(value)) {
    return false;
  }
  var isEditor3 = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isElementReadOnly === "function" && typeof value.isInline === "function" && typeof value.isSelectable === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || isObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && (!deep || Node.isNodeList(value.children)) && Operation.isOperationList(value.operations);
  return isEditor3;
};
var Editor = {
  above(editor, options) {
    return editor.above(options);
  },
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },
  after(editor, at, options) {
    return editor.after(at, options);
  },
  before(editor, at, options) {
    return editor.before(at, options);
  },
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor, options) {
    editor.deleteFragment(options);
  },
  edges(editor, at) {
    return editor.edges(at);
  },
  elementReadOnly(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return editor.elementReadOnly(options);
  },
  end(editor, at) {
    return editor.end(at);
  },
  first(editor, at) {
    return editor.first(at);
  },
  fragment(editor, at) {
    return editor.fragment(at);
  },
  hasBlocks(editor, element) {
    return editor.hasBlocks(element);
  },
  hasInlines(editor, element) {
    return editor.hasInlines(element);
  },
  hasPath(editor, path) {
    return editor.hasPath(path);
  },
  hasTexts(editor, element) {
    return editor.hasTexts(element);
  },
  insertBreak(editor) {
    editor.insertBreak();
  },
  insertFragment(editor, fragment, options) {
    editor.insertFragment(fragment, options);
  },
  insertNode(editor, node) {
    editor.insertNode(node);
  },
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },
  insertText(editor, text) {
    editor.insertText(text);
  },
  isBlock(editor, value) {
    return editor.isBlock(value);
  },
  isEdge(editor, point, at) {
    return editor.isEdge(point, at);
  },
  isEditor(value) {
    return isEditor(value);
  },
  isElementReadOnly(editor, element) {
    return editor.isElementReadOnly(element);
  },
  isEmpty(editor, element) {
    return editor.isEmpty(element);
  },
  isEnd(editor, point, at) {
    return editor.isEnd(point, at);
  },
  isInline(editor, value) {
    return editor.isInline(value);
  },
  isNormalizing(editor) {
    return editor.isNormalizing();
  },
  isSelectable(editor, value) {
    return editor.isSelectable(value);
  },
  isStart(editor, point, at) {
    return editor.isStart(point, at);
  },
  isVoid(editor, value) {
    return editor.isVoid(value);
  },
  last(editor, at) {
    return editor.last(at);
  },
  leaf(editor, at, options) {
    return editor.leaf(at, options);
  },
  levels(editor, options) {
    return editor.levels(options);
  },
  marks(editor) {
    return editor.getMarks();
  },
  next(editor, options) {
    return editor.next(options);
  },
  node(editor, at, options) {
    return editor.node(at, options);
  },
  nodes(editor, options) {
    return editor.nodes(options);
  },
  normalize(editor, options) {
    editor.normalize(options);
  },
  parent(editor, at, options) {
    return editor.parent(at, options);
  },
  path(editor, at, options) {
    return editor.path(at, options);
  },
  pathRef(editor, path, options) {
    return editor.pathRef(path, options);
  },
  pathRefs(editor) {
    return editor.pathRefs();
  },
  point(editor, at, options) {
    return editor.point(at, options);
  },
  pointRef(editor, point, options) {
    return editor.pointRef(point, options);
  },
  pointRefs(editor) {
    return editor.pointRefs();
  },
  positions(editor, options) {
    return editor.positions(options);
  },
  previous(editor, options) {
    return editor.previous(options);
  },
  range(editor, at, to) {
    return editor.range(at, to);
  },
  rangeRef(editor, range, options) {
    return editor.rangeRef(range, options);
  },
  rangeRefs(editor) {
    return editor.rangeRefs();
  },
  removeMark(editor, key) {
    editor.removeMark(key);
  },
  setNormalizing(editor, isNormalizing) {
    editor.setNormalizing(isNormalizing);
  },
  start(editor, at) {
    return editor.start(at);
  },
  string(editor, at, options) {
    return editor.string(at, options);
  },
  unhangRange(editor, range, options) {
    return editor.unhangRange(range, options);
  },
  void(editor, options) {
    return editor.void(options);
  },
  withoutNormalizing(editor, fn) {
    editor.withoutNormalizing(fn);
  },
  shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) => {
    return editor.shouldMergeNodesRemovePrevNode(prevNode, curNode);
  }
};
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Point = {
  compare(point, another) {
    var result = Path.compare(point.path, another.path);
    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }
    return result;
  },
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },
  equals(point, another) {
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },
  isPoint(value) {
    return isObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (point === null) {
      return null;
    }
    var {
      affinity = "forward"
    } = options;
    var {
      path,
      offset
    } = point;
    switch (op.type) {
      case "insert_node":
      case "move_node": {
        path = Path.transform(path, op, options);
        break;
      }
      case "insert_text": {
        if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
          offset += op.text.length;
        }
        break;
      }
      case "merge_node": {
        if (Path.equals(op.path, path)) {
          offset += op.position;
        }
        path = Path.transform(path, op, options);
        break;
      }
      case "remove_text": {
        if (Path.equals(op.path, path) && op.offset <= offset) {
          offset -= Math.min(offset - op.offset, op.text.length);
        }
        break;
      }
      case "remove_node": {
        if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
          return null;
        }
        path = Path.transform(path, op, options);
        break;
      }
      case "split_node": {
        if (Path.equals(op.path, path)) {
          if (op.position === offset && affinity == null) {
            return null;
          } else if (op.position < offset || op.position === offset && affinity === "forward") {
            offset -= op.position;
            path = Path.transform(path, op, _objectSpread$b(_objectSpread$b({}, options), {}, {
              affinity: "forward"
            }));
          }
        } else {
          path = Path.transform(path, op, options);
        }
        break;
      }
      default:
        return point;
    }
    return {
      path,
      offset
    };
  }
};
var _scrubber = void 0;
var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};
var _excluded$2 = ["text"];
var _excluded2$2 = ["anchor", "focus", "merge"];
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Text = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;
    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$2);
      return rest;
    }
    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value) {
    return isObject(value) && typeof value.text === "string";
  },
  isTextList(value) {
    return Array.isArray(value) && value.every((val) => Text.isText(val));
  },
  isTextProps(props) {
    return props.text !== void 0;
  },
  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }
      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }
    return true;
  },
  decorations(node, decorations) {
    var leaves = [{
      leaf: _objectSpread$a({}, node)
    }];
    for (var dec of decorations) {
      var {
        anchor,
        focus,
        merge: mergeDecoration
      } = dec, rest = _objectWithoutProperties(dec, _excluded2$2);
      var [start, end] = Range.edges(dec);
      var next = [];
      var leafEnd = 0;
      var decorationStart = start.offset;
      var decorationEnd = end.offset;
      var merge = mergeDecoration !== null && mergeDecoration !== void 0 ? mergeDecoration : Object.assign;
      for (var {
        leaf
      } of leaves) {
        var {
          length
        } = leaf.text;
        var leafStart = leafEnd;
        leafEnd += length;
        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
          merge(leaf, rest);
          next.push({
            leaf
          });
          continue;
        }
        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next.push({
            leaf
          });
          continue;
        }
        var middle = leaf;
        var before = void 0;
        var after = void 0;
        if (decorationEnd < leafEnd) {
          var off = decorationEnd - leafStart;
          after = {
            leaf: _objectSpread$a(_objectSpread$a({}, middle), {}, {
              text: middle.text.slice(off)
            })
          };
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (decorationStart > leafStart) {
          var _off = decorationStart - leafStart;
          before = {
            leaf: _objectSpread$a(_objectSpread$a({}, middle), {}, {
              text: middle.text.slice(0, _off)
            })
          };
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }
        merge(middle, rest);
        if (before) {
          next.push(before);
        }
        next.push({
          leaf: middle
        });
        if (after) {
          next.push(after);
        }
      }
      leaves = next;
    }
    if (leaves.length > 1) {
      var currentOffset = 0;
      for (var [index, item] of leaves.entries()) {
        var _start = currentOffset;
        var _end = _start + item.leaf.text.length;
        var position = {
          start: _start,
          end: _end
        };
        if (index === 0) position.isFirst = true;
        if (index === leaves.length - 1) position.isLast = true;
        item.position = position;
        currentOffset = _end;
      }
    }
    return leaves;
  }
};
var getDefaultInsertLocation = (editor) => {
  if (editor.selection) {
    return editor.selection;
  } else if (editor.children.length > 0) {
    return Editor.end(editor, []);
  } else {
    return [0];
  }
};
var CodepointType;
(function(CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));
var NonBoundaryPairs = [
  // GB6
  [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
  // GB7
  [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
  // GB8
  [CodepointType.LVT | CodepointType.T, CodepointType.T],
  // GB9
  [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
  // GB9a
  [CodepointType.Any, CodepointType.SpacingMark],
  // GB9b
  [CodepointType.Prepend, CodepointType.Any],
  // GB11
  [CodepointType.ZWJ, CodepointType.ExtPict],
  // GB12 and GB13
  [CodepointType.RI, CodepointType.RI]
];
var TextTransforms = {
  delete(editor, options) {
    editor.delete(options);
  },
  insertFragment(editor, fragment, options) {
    editor.insertFragment(fragment, options);
  },
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = getDefaultInsertLocation(editor)
      } = options;
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }
          var start = Range.start(at);
          var startRef = Editor.pointRef(editor, start);
          var endRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      }) || Editor.elementReadOnly(editor, {
        at
      })) {
        return;
      }
      var {
        path,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: "insert_text",
        path,
        offset,
        text
      });
    });
  }
};
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

// src/lib/plugins/single-block/SingleLinePlugin.ts
var SingleLinePlugin = (0, import_core4.createSlatePlugin)({
  key: KEYS.singleLine,
  override: {
    enabled: {
      [KEYS.trailingBlock]: false
    }
  }
}).overrideEditor(({ editor, tf: { normalizeNode } }) => ({
  transforms: {
    insertBreak() {
      return;
    },
    insertSoftBreak() {
      return;
    },
    normalizeNode(entry) {
      const [node, path] = entry;
      if (Text.isText(node)) {
        const filteredText = node.text.replace(/[\r\n\u2028\u2029]/g, "");
        if (filteredText !== node.text) {
          editor.tf.insertText(filteredText, { at: path });
          return;
        }
      }
      if (path.length === 0 && editor.children.length > 1) {
        editor.tf.withoutNormalizing(() => {
          while (editor.children.length > 1) {
            editor.tf.mergeNodes({
              at: [1],
              match: (_, path2) => path2.length === 1
            });
          }
        });
        return;
      }
      normalizeNode(entry);
    }
  }
}));

// src/lib/plugins/trailing-block/TrailingBlockPlugin.ts
var import_core5 = require("@platejs/core");

// src/lib/plugins/trailing-block/withTrailingBlock.ts
var import_slate3 = require("@platejs/slate");
var withTrailingBlock = ({
  editor,
  getOptions,
  tf: { normalizeNode }
}) => ({
  transforms: {
    normalizeNode([currentNode, currentPath]) {
      const { level, type, ...query } = getOptions();
      if (currentPath.length === 0) {
        const lastChild = editor.api.last([], { level });
        const lastChildNode = lastChild?.[0];
        if (!lastChildNode || lastChildNode.type !== type && (0, import_slate3.queryNode)(lastChild, query)) {
          const at = lastChild ? import_slate3.PathApi.next(lastChild[1]) : [0];
          editor.tf.insertNodes(editor.api.create.block({ type }, at), { at });
          return;
        }
      }
      return normalizeNode([currentNode, currentPath]);
    }
  }
});

// src/lib/plugins/trailing-block/TrailingBlockPlugin.ts
var TrailingBlockPlugin = (0, import_core5.createTSlatePlugin)({
  key: KEYS.trailingBlock,
  options: {
    level: 0
  }
}).overrideEditor(withTrailingBlock).extend(({ editor }) => ({
  options: {
    type: editor.getType(KEYS.p)
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExitBreakPlugin,
  KEYS,
  NODES,
  NormalizeTypesPlugin,
  STYLE_KEYS,
  SingleBlockPlugin,
  SingleLinePlugin,
  TrailingBlockPlugin,
  withNormalizeTypes,
  withTrailingBlock
});
//# sourceMappingURL=index.js.map