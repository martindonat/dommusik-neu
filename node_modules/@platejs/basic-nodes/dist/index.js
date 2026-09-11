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
  BaseBasicBlocksPlugin: () => BaseBasicBlocksPlugin,
  BaseBasicMarksPlugin: () => BaseBasicMarksPlugin,
  BaseBlockquotePlugin: () => BaseBlockquotePlugin,
  BaseBoldPlugin: () => BaseBoldPlugin,
  BaseCodePlugin: () => BaseCodePlugin,
  BaseH1Plugin: () => BaseH1Plugin,
  BaseH2Plugin: () => BaseH2Plugin,
  BaseH3Plugin: () => BaseH3Plugin,
  BaseH4Plugin: () => BaseH4Plugin,
  BaseH5Plugin: () => BaseH5Plugin,
  BaseH6Plugin: () => BaseH6Plugin,
  BaseHeadingPlugin: () => BaseHeadingPlugin,
  BaseHighlightPlugin: () => BaseHighlightPlugin,
  BaseHorizontalRulePlugin: () => BaseHorizontalRulePlugin,
  BaseItalicPlugin: () => BaseItalicPlugin,
  BaseKbdPlugin: () => BaseKbdPlugin,
  BaseStrikethroughPlugin: () => BaseStrikethroughPlugin,
  BaseSubscriptPlugin: () => BaseSubscriptPlugin,
  BaseSuperscriptPlugin: () => BaseSuperscriptPlugin,
  BaseUnderlinePlugin: () => BaseUnderlinePlugin
});
module.exports = __toCommonJS(index_exports);

// src/lib/BaseBasicBlocksPlugin.ts
var import_platejs4 = require("platejs");

// src/lib/BaseBlockquotePlugin.ts
var import_platejs = require("platejs");
var BaseBlockquotePlugin = (0, import_platejs.createSlatePlugin)({
  key: import_platejs.KEYS.blockquote,
  node: {
    isElement: true
  },
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: "BLOCKQUOTE"
          }
        ]
      }
    }
  },
  render: { as: "blockquote" },
  rules: {
    break: {
      default: "lineBreak",
      empty: "reset",
      emptyLineEnd: "deleteExit"
    },
    delete: {
      start: "reset"
    }
  }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));

// src/lib/BaseHeadingPlugin.ts
var import_platejs2 = require("platejs");
var node = {
  isElement: true
};
var rules = {
  break: { splitReset: true },
  merge: { removeEmpty: true }
};
var BaseH1Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h1",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H1" }] } } },
  render: { as: "h1" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseH2Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h2",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H2" }] } } },
  render: { as: "h2" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseH3Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h3",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H3" }] } } },
  render: { as: "h3" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseH4Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h4",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H4" }] } } },
  render: { as: "h4" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseH5Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h5",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H5" }] } } },
  render: { as: "h5" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseH6Plugin = (0, import_platejs2.createTSlatePlugin)({
  key: "h6",
  node,
  parsers: { html: { deserializer: { rules: [{ validNodeName: "H6" }] } } },
  render: { as: "h6" },
  rules
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleBlock(type);
  }
}));
var BaseHeadingPlugin = (0, import_platejs2.createTSlatePlugin)({
  key: "heading",
  options: {
    levels: [1, 2, 3, 4, 5, 6]
  }
}).extend(({ plugin }) => {
  const {
    options: { levels }
  } = plugin;
  const headingPlugins = {
    1: BaseH1Plugin,
    2: BaseH2Plugin,
    3: BaseH3Plugin,
    4: BaseH4Plugin,
    5: BaseH5Plugin,
    6: BaseH6Plugin
  };
  const headingLevels = Array.isArray(levels) ? levels : Array.from({ length: levels || 6 }, (_, i) => i + 1);
  const plugins = headingLevels.map(
    (level) => headingPlugins[level]
  );
  return { plugins };
});

// src/lib/BaseHorizontalRulePlugin.ts
var import_platejs3 = require("platejs");
var BaseHorizontalRulePlugin = (0, import_platejs3.createSlatePlugin)({
  key: import_platejs3.KEYS.hr,
  node: { isElement: true, isVoid: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: "HR"
          }
        ]
      }
    }
  },
  render: { as: "hr" }
});

// src/lib/BaseBasicBlocksPlugin.ts
var BaseBasicBlocksPlugin = (0, import_platejs4.createSlatePlugin)({
  plugins: [BaseBlockquotePlugin, BaseHeadingPlugin, BaseHorizontalRulePlugin]
});

// src/lib/BaseBasicMarksPlugin.ts
var import_platejs12 = require("platejs");

// src/lib/BaseBoldPlugin.ts
var import_platejs5 = require("platejs");
var BaseBoldPlugin = (0, import_platejs5.createSlatePlugin)({
  key: import_platejs5.KEYS.bold,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["STRONG", "B"] },
          {
            validStyle: {
              fontWeight: ["600", "700", "bold"]
            }
          }
        ],
        query: ({ element }) => !(0, import_platejs5.someHtmlElement)(
          element,
          (node2) => node2.style.fontWeight === "normal"
        )
      }
    }
  },
  render: { as: "strong" }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseCodePlugin.ts
var import_platejs6 = require("platejs");
var BaseCodePlugin = (0, import_platejs6.createSlatePlugin)({
  key: import_platejs6.KEYS.code,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["CODE"] },
          { validStyle: { fontFamily: "Consolas" } }
        ],
        query({ element }) {
          const blockAbove = (0, import_platejs6.findHtmlParentElement)(element, "P");
          if (blockAbove?.style.fontFamily === "Consolas") return false;
          return !(0, import_platejs6.findHtmlParentElement)(element, "PRE");
        }
      }
    }
  },
  render: { as: "code" },
  rules: { selection: { affinity: "hard" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseItalicPlugin.ts
var import_platejs7 = require("platejs");
var BaseItalicPlugin = (0, import_platejs7.createSlatePlugin)({
  key: import_platejs7.KEYS.italic,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["EM", "I"] },
          { validStyle: { fontStyle: "italic" } }
        ],
        query: ({ element }) => !(0, import_platejs7.someHtmlElement)(
          element,
          (node2) => node2.style.fontStyle === "normal"
        )
      }
    }
  },
  render: { as: "em" }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseStrikethroughPlugin.ts
var import_platejs8 = require("platejs");
var BaseStrikethroughPlugin = (0, import_platejs8.createSlatePlugin)({
  key: import_platejs8.KEYS.strikethrough,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["S", "DEL", "STRIKE"] },
          { validStyle: { textDecoration: "line-through" } }
        ],
        query: ({ element }) => !(0, import_platejs8.someHtmlElement)(
          element,
          (node2) => node2.style.textDecoration === "none"
        )
      }
    }
  },
  render: { as: "s" },
  rules: { selection: { affinity: "directional" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseSubscriptPlugin.ts
var import_platejs9 = require("platejs");
var BaseSubscriptPlugin = (0, import_platejs9.createSlatePlugin)({
  key: import_platejs9.KEYS.sub,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["SUB"] },
          { validStyle: { verticalAlign: "sub" } }
        ]
      }
    }
  },
  render: { as: "sub" },
  rules: { selection: { affinity: "directional" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type, {
      remove: editor.getType(import_platejs9.KEYS.sup)
    });
  }
}));

// src/lib/BaseSuperscriptPlugin.ts
var import_platejs10 = require("platejs");
var BaseSuperscriptPlugin = (0, import_platejs10.createSlatePlugin)({
  key: import_platejs10.KEYS.sup,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["SUP"] },
          { validStyle: { verticalAlign: "super" } }
        ]
      }
    }
  },
  render: { as: "sup" },
  rules: { selection: { affinity: "directional" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type, {
      remove: editor.getType(import_platejs10.KEYS.sub)
    });
  }
}));

// src/lib/BaseUnderlinePlugin.ts
var import_platejs11 = require("platejs");
var BaseUnderlinePlugin = (0, import_platejs11.createSlatePlugin)({
  key: import_platejs11.KEYS.underline,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["U"] },
          { validStyle: { textDecoration: ["underline"] } }
        ],
        query: ({ element }) => !(0, import_platejs11.someHtmlElement)(
          element,
          (node2) => node2.style.textDecoration === "none"
        )
      }
    }
  },
  render: { as: "u" }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseBasicMarksPlugin.ts
var BaseBasicMarksPlugin = (0, import_platejs12.createSlatePlugin)({
  plugins: [
    BaseBoldPlugin,
    BaseCodePlugin,
    BaseItalicPlugin,
    BaseStrikethroughPlugin,
    BaseSubscriptPlugin,
    BaseSuperscriptPlugin,
    BaseUnderlinePlugin
  ]
});

// src/lib/BaseHighlightPlugin.ts
var import_platejs13 = require("platejs");
var BaseHighlightPlugin = (0, import_platejs13.createSlatePlugin)({
  key: import_platejs13.KEYS.highlight,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: ["MARK"]
          }
        ]
      }
    }
  },
  render: { as: "mark" },
  rules: { selection: { affinity: "directional" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));

// src/lib/BaseKbdPlugin.ts
var import_platejs14 = require("platejs");
var BaseKbdPlugin = (0, import_platejs14.createSlatePlugin)({
  key: import_platejs14.KEYS.kbd,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [{ validNodeName: ["KBD"] }]
      }
    }
  },
  render: { as: "kbd" },
  rules: { selection: { affinity: "hard" } }
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  }
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseBasicBlocksPlugin,
  BaseBasicMarksPlugin,
  BaseBlockquotePlugin,
  BaseBoldPlugin,
  BaseCodePlugin,
  BaseH1Plugin,
  BaseH2Plugin,
  BaseH3Plugin,
  BaseH4Plugin,
  BaseH5Plugin,
  BaseH6Plugin,
  BaseHeadingPlugin,
  BaseHighlightPlugin,
  BaseHorizontalRulePlugin,
  BaseItalicPlugin,
  BaseKbdPlugin,
  BaseStrikethroughPlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseUnderlinePlugin
});
//# sourceMappingURL=index.js.map