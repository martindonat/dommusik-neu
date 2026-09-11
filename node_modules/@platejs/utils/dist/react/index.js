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
  BlockPlaceholderPlugin: () => BlockPlaceholderPlugin,
  useEditorString: () => useEditorString,
  useFormInputProps: () => useFormInputProps,
  useMarkToolbarButton: () => useMarkToolbarButton,
  useMarkToolbarButtonState: () => useMarkToolbarButtonState,
  useRemoveNodeButton: () => useRemoveNodeButton,
  useSelectionAcrossBlocks: () => useSelectionAcrossBlocks,
  useSelectionCollapsed: () => useSelectionCollapsed,
  useSelectionExpanded: () => useSelectionExpanded,
  useSelectionFragment: () => useSelectionFragment,
  useSelectionFragmentProp: () => useSelectionFragmentProp,
  useSelectionWithinBlock: () => useSelectionWithinBlock
});
module.exports = __toCommonJS(react_exports);

// src/react/hooks/useEditorString.ts
var import_react = require("@platejs/core/react");
var useEditorString = () => {
  return (0, import_react.useEditorSelector)((editor) => editor.api.string([]), []);
};

// src/react/hooks/useFormInputProps.ts
var useFormInputProps = (options) => {
  if (!options) return { props: {} };
  const { preventDefaultOnEnterKeydown } = options;
  const handleEnterKeydownCapture = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
    }
  };
  return {
    props: {
      onKeyDownCapture: preventDefaultOnEnterKeydown ? (e) => handleEnterKeydownCapture(e) : void 0
    }
  };
};

// src/react/hooks/useMarkToolbarButton.ts
var import_react2 = require("@platejs/core/react");
var useMarkToolbarButtonState = ({
  clear,
  nodeType
}) => {
  const pressed = (0, import_react2.useEditorSelector)(
    (editor) => editor.api.hasMark(nodeType),
    [nodeType]
  );
  return {
    clear,
    nodeType,
    pressed
  };
};
var useMarkToolbarButton = (state) => {
  const editor = (0, import_react2.useEditorRef)();
  return {
    props: {
      pressed: state.pressed,
      onClick: () => {
        editor.tf.toggleMark(state.nodeType, { remove: state.clear });
        editor.tf.focus();
      },
      onMouseDown: (e) => {
        e.preventDefault();
      }
    }
  };
};

// src/react/hooks/useRemoveNodeButton.ts
var import_react3 = require("@platejs/core/react");
var useRemoveNodeButton = ({ element }) => {
  const editor = (0, import_react3.useEditorRef)();
  return {
    props: {
      onClick: () => {
        const path = editor.api.findPath(element);
        editor.tf.removeNodes({ at: path });
      },
      onMouseDown: (e) => {
        e.preventDefault();
      }
    }
  };
};

// src/react/hooks/useSelection.ts
var import_react4 = require("@platejs/core/react");
function useSelectionCollapsed() {
  return (0, import_react4.useEditorSelector)((editor) => !editor.api.isExpanded(), []);
}
function useSelectionExpanded() {
  return (0, import_react4.useEditorSelector)((editor) => editor.api.isExpanded(), []);
}
function useSelectionWithinBlock() {
  return (0, import_react4.useEditorSelector)((editor) => editor.api.isAt({ block: true }), []);
}
function useSelectionAcrossBlocks() {
  return (0, import_react4.useEditorSelector)((editor) => editor.api.isAt({ blocks: true }), []);
}

// src/react/hooks/useSelectionFragment.ts
var import_core = require("@platejs/core");
var import_react5 = require("@platejs/core/react");
var useSelectionFragment = () => {
  return (0, import_react5.useEditorSelector)((editor) => {
    return editor.api.fragment(editor.selection, {
      unwrap: (0, import_core.getContainerTypes)(editor)
    });
  }, []);
};
var useSelectionFragmentProp = (options = {}) => {
  return (0, import_react5.useEditorSelector)((editor) => {
    const fragment = editor.api.fragment(editor.selection, {
      unwrap: (0, import_core.getContainerTypes)(editor)
    });
    return editor.api.prop({ nodes: fragment, ...options });
  }, []);
};

// src/react/plugins/BlockPlaceholderPlugin.tsx
var import_react6 = __toESM(require("react"));
var import_react7 = require("@platejs/core/react");

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

// src/react/plugins/BlockPlaceholderPlugin.tsx
var BlockPlaceholderPlugin = (0, import_react7.createTPlatePlugin)({
  key: KEYS.blockPlaceholder,
  editOnly: true,
  options: {
    _target: null,
    placeholders: {
      [KEYS.p]: "Type something..."
    },
    query: ({ path }) => {
      return path.length === 1;
    }
  },
  useHooks: (ctx) => {
    const { editor, getOptions, setOption } = ctx;
    const focused = (0, import_react7.useFocused)();
    const readOnly = (0, import_react7.useEditorReadOnly)();
    const composing = (0, import_react7.useEditorComposing)();
    const entry = (0, import_react7.useEditorSelector)(() => {
      if (readOnly || composing || !focused || !editor.selection || editor.api.isExpanded())
        return null;
      return editor.api.block();
    }, [readOnly, composing, focused]);
    import_react6.default.useEffect(() => {
      if (!entry) {
        setOption("_target", null);
        return;
      }
      const { placeholders, query } = getOptions();
      const [element, path] = entry;
      const placeholder = Object.keys(placeholders).find(
        (key) => editor.getType(key) === element.type
      );
      if (query({ ...ctx, node: element, path }) && placeholder && editor.api.isEmpty(element) && !editor.api.isEmpty()) {
        setOption("_target", {
          node: element,
          placeholder: placeholders[placeholder]
        });
      } else {
        setOption("_target", null);
      }
    }, [editor, entry, setOption, getOptions]);
  }
}).extendSelectors(({ getOption }) => ({
  placeholder: (node) => {
    const target = getOption("_target");
    if (target?.node === node) {
      return target.placeholder;
    }
  }
})).extend({
  inject: {
    isBlock: true,
    nodeProps: {
      transformProps: (props) => {
        const placeholder = (0, import_react7.usePluginOption)(
          props.plugin,
          "placeholder",
          props.element
        );
        if (placeholder) {
          return {
            className: props.getOption("className"),
            placeholder
          };
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlockPlaceholderPlugin,
  useEditorString,
  useFormInputProps,
  useMarkToolbarButton,
  useMarkToolbarButtonState,
  useRemoveNodeButton,
  useSelectionAcrossBlocks,
  useSelectionCollapsed,
  useSelectionExpanded,
  useSelectionFragment,
  useSelectionFragmentProp,
  useSelectionWithinBlock
});
//# sourceMappingURL=index.js.map