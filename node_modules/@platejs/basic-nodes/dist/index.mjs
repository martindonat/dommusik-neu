// src/lib/BaseBasicBlocksPlugin.ts
import { createSlatePlugin as createSlatePlugin3 } from "platejs";

// src/lib/BaseBlockquotePlugin.ts
import { createSlatePlugin, KEYS } from "platejs";
var BaseBlockquotePlugin = createSlatePlugin({
  key: KEYS.blockquote,
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
import {
  createTSlatePlugin
} from "platejs";
var node = {
  isElement: true
};
var rules = {
  break: { splitReset: true },
  merge: { removeEmpty: true }
};
var BaseH1Plugin = createTSlatePlugin({
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
var BaseH2Plugin = createTSlatePlugin({
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
var BaseH3Plugin = createTSlatePlugin({
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
var BaseH4Plugin = createTSlatePlugin({
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
var BaseH5Plugin = createTSlatePlugin({
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
var BaseH6Plugin = createTSlatePlugin({
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
var BaseHeadingPlugin = createTSlatePlugin({
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
import { createSlatePlugin as createSlatePlugin2, KEYS as KEYS2 } from "platejs";
var BaseHorizontalRulePlugin = createSlatePlugin2({
  key: KEYS2.hr,
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
var BaseBasicBlocksPlugin = createSlatePlugin3({
  plugins: [BaseBlockquotePlugin, BaseHeadingPlugin, BaseHorizontalRulePlugin]
});

// src/lib/BaseBasicMarksPlugin.ts
import { createSlatePlugin as createSlatePlugin11 } from "platejs";

// src/lib/BaseBoldPlugin.ts
import { createSlatePlugin as createSlatePlugin4, KEYS as KEYS3, someHtmlElement } from "platejs";
var BaseBoldPlugin = createSlatePlugin4({
  key: KEYS3.bold,
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
        query: ({ element }) => !someHtmlElement(
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
import { createSlatePlugin as createSlatePlugin5, findHtmlParentElement, KEYS as KEYS4 } from "platejs";
var BaseCodePlugin = createSlatePlugin5({
  key: KEYS4.code,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["CODE"] },
          { validStyle: { fontFamily: "Consolas" } }
        ],
        query({ element }) {
          const blockAbove = findHtmlParentElement(element, "P");
          if (blockAbove?.style.fontFamily === "Consolas") return false;
          return !findHtmlParentElement(element, "PRE");
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
import { createSlatePlugin as createSlatePlugin6, KEYS as KEYS5, someHtmlElement as someHtmlElement2 } from "platejs";
var BaseItalicPlugin = createSlatePlugin6({
  key: KEYS5.italic,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["EM", "I"] },
          { validStyle: { fontStyle: "italic" } }
        ],
        query: ({ element }) => !someHtmlElement2(
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
import { createSlatePlugin as createSlatePlugin7, KEYS as KEYS6, someHtmlElement as someHtmlElement3 } from "platejs";
var BaseStrikethroughPlugin = createSlatePlugin7({
  key: KEYS6.strikethrough,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["S", "DEL", "STRIKE"] },
          { validStyle: { textDecoration: "line-through" } }
        ],
        query: ({ element }) => !someHtmlElement3(
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
import { createSlatePlugin as createSlatePlugin8, KEYS as KEYS7 } from "platejs";
var BaseSubscriptPlugin = createSlatePlugin8({
  key: KEYS7.sub,
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
      remove: editor.getType(KEYS7.sup)
    });
  }
}));

// src/lib/BaseSuperscriptPlugin.ts
import { createSlatePlugin as createSlatePlugin9, KEYS as KEYS8 } from "platejs";
var BaseSuperscriptPlugin = createSlatePlugin9({
  key: KEYS8.sup,
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
      remove: editor.getType(KEYS8.sub)
    });
  }
}));

// src/lib/BaseUnderlinePlugin.ts
import { createSlatePlugin as createSlatePlugin10, KEYS as KEYS9, someHtmlElement as someHtmlElement4 } from "platejs";
var BaseUnderlinePlugin = createSlatePlugin10({
  key: KEYS9.underline,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ["U"] },
          { validStyle: { textDecoration: ["underline"] } }
        ],
        query: ({ element }) => !someHtmlElement4(
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
var BaseBasicMarksPlugin = createSlatePlugin11({
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
import { createSlatePlugin as createSlatePlugin12, KEYS as KEYS10 } from "platejs";
var BaseHighlightPlugin = createSlatePlugin12({
  key: KEYS10.highlight,
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
import { createSlatePlugin as createSlatePlugin13, KEYS as KEYS11 } from "platejs";
var BaseKbdPlugin = createSlatePlugin13({
  key: KEYS11.kbd,
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
export {
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
};
//# sourceMappingURL=index.mjs.map