// src/react/hooks/useEditorString.ts
import { useEditorSelector } from "@platejs/core/react";
var useEditorString = () => {
  return useEditorSelector((editor) => editor.api.string([]), []);
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
import { useEditorRef, useEditorSelector as useEditorSelector2 } from "@platejs/core/react";
var useMarkToolbarButtonState = ({
  clear,
  nodeType
}) => {
  const pressed = useEditorSelector2(
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
  const editor = useEditorRef();
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
import { useEditorRef as useEditorRef2 } from "@platejs/core/react";
var useRemoveNodeButton = ({ element }) => {
  const editor = useEditorRef2();
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
import { useEditorSelector as useEditorSelector3 } from "@platejs/core/react";
function useSelectionCollapsed() {
  return useEditorSelector3((editor) => !editor.api.isExpanded(), []);
}
function useSelectionExpanded() {
  return useEditorSelector3((editor) => editor.api.isExpanded(), []);
}
function useSelectionWithinBlock() {
  return useEditorSelector3((editor) => editor.api.isAt({ block: true }), []);
}
function useSelectionAcrossBlocks() {
  return useEditorSelector3((editor) => editor.api.isAt({ blocks: true }), []);
}

// src/react/hooks/useSelectionFragment.ts
import { getContainerTypes } from "@platejs/core";
import { useEditorSelector as useEditorSelector4 } from "@platejs/core/react";
var useSelectionFragment = () => {
  return useEditorSelector4((editor) => {
    return editor.api.fragment(editor.selection, {
      unwrap: getContainerTypes(editor)
    });
  }, []);
};
var useSelectionFragmentProp = (options = {}) => {
  return useEditorSelector4((editor) => {
    const fragment = editor.api.fragment(editor.selection, {
      unwrap: getContainerTypes(editor)
    });
    return editor.api.prop({ nodes: fragment, ...options });
  }, []);
};

// src/react/plugins/BlockPlaceholderPlugin.tsx
import React from "react";
import {
  createTPlatePlugin,
  useEditorComposing,
  useEditorReadOnly,
  useEditorSelector as useEditorSelector5,
  useFocused,
  usePluginOption
} from "@platejs/core/react";

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
var BlockPlaceholderPlugin = createTPlatePlugin({
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
    const focused = useFocused();
    const readOnly = useEditorReadOnly();
    const composing = useEditorComposing();
    const entry = useEditorSelector5(() => {
      if (readOnly || composing || !focused || !editor.selection || editor.api.isExpanded())
        return null;
      return editor.api.block();
    }, [readOnly, composing, focused]);
    React.useEffect(() => {
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
        const placeholder = usePluginOption(
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
export {
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
};
//# sourceMappingURL=index.mjs.map