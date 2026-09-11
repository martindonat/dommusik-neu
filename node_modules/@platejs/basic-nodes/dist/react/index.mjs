// src/react/BasicBlocksPlugin.tsx
import { createPlatePlugin } from "platejs/react";

// src/react/BlockquotePlugin.tsx
import { toPlatePlugin } from "platejs/react";

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

// src/react/BlockquotePlugin.tsx
var BlockquotePlugin = toPlatePlugin(BaseBlockquotePlugin);

// src/react/HeadingPlugin.tsx
import { toPlatePlugin as toPlatePlugin2 } from "platejs/react";

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

// src/react/HeadingPlugin.tsx
var HeadingPlugin = toPlatePlugin2(BaseHeadingPlugin);
var H1Plugin = toPlatePlugin2(BaseH1Plugin);
var H2Plugin = toPlatePlugin2(BaseH2Plugin);
var H3Plugin = toPlatePlugin2(BaseH3Plugin);
var H4Plugin = toPlatePlugin2(BaseH4Plugin);
var H5Plugin = toPlatePlugin2(BaseH5Plugin);
var H6Plugin = toPlatePlugin2(BaseH6Plugin);

// src/react/HorizontalRulePlugin.tsx
import { toPlatePlugin as toPlatePlugin3 } from "platejs/react";

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

// src/lib/BaseBasicMarksPlugin.ts
import { createSlatePlugin as createSlatePlugin10 } from "platejs";

// src/lib/BaseBoldPlugin.ts
import { createSlatePlugin as createSlatePlugin3, KEYS as KEYS3, someHtmlElement } from "platejs";
var BaseBoldPlugin = createSlatePlugin3({
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
import { createSlatePlugin as createSlatePlugin4, findHtmlParentElement, KEYS as KEYS4 } from "platejs";
var BaseCodePlugin = createSlatePlugin4({
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
import { createSlatePlugin as createSlatePlugin5, KEYS as KEYS5, someHtmlElement as someHtmlElement2 } from "platejs";
var BaseItalicPlugin = createSlatePlugin5({
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
import { createSlatePlugin as createSlatePlugin6, KEYS as KEYS6, someHtmlElement as someHtmlElement3 } from "platejs";
var BaseStrikethroughPlugin = createSlatePlugin6({
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
import { createSlatePlugin as createSlatePlugin7, KEYS as KEYS7 } from "platejs";
var BaseSubscriptPlugin = createSlatePlugin7({
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
import { createSlatePlugin as createSlatePlugin8, KEYS as KEYS8 } from "platejs";
var BaseSuperscriptPlugin = createSlatePlugin8({
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
import { createSlatePlugin as createSlatePlugin9, KEYS as KEYS9, someHtmlElement as someHtmlElement4 } from "platejs";
var BaseUnderlinePlugin = createSlatePlugin9({
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
var BaseBasicMarksPlugin = createSlatePlugin10({
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
import { createSlatePlugin as createSlatePlugin11, KEYS as KEYS10 } from "platejs";
var BaseHighlightPlugin = createSlatePlugin11({
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
import { createSlatePlugin as createSlatePlugin12, KEYS as KEYS11 } from "platejs";
var BaseKbdPlugin = createSlatePlugin12({
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

// src/react/HorizontalRulePlugin.tsx
var HorizontalRulePlugin = toPlatePlugin3(BaseHorizontalRulePlugin);

// src/react/BasicBlocksPlugin.tsx
var BasicBlocksPlugin = createPlatePlugin({
  plugins: [BlockquotePlugin, HeadingPlugin, HorizontalRulePlugin]
});

// src/react/BasicMarksPlugin.tsx
import { toPlatePlugin as toPlatePlugin11 } from "platejs/react";

// src/react/BoldPlugin.tsx
import { Key, toPlatePlugin as toPlatePlugin4 } from "platejs/react";
var BoldPlugin = toPlatePlugin4(BaseBoldPlugin, {
  shortcuts: { toggle: { keys: [[Key.Mod, "b"]] } }
});

// src/react/CodePlugin.tsx
import { toPlatePlugin as toPlatePlugin5 } from "platejs/react";
var CodePlugin = toPlatePlugin5(BaseCodePlugin);

// src/react/ItalicPlugin.tsx
import { Key as Key2, toPlatePlugin as toPlatePlugin6 } from "platejs/react";
var ItalicPlugin = toPlatePlugin6(BaseItalicPlugin, {
  shortcuts: { toggle: { keys: [[Key2.Mod, "i"]] } }
});

// src/react/StrikethroughPlugin.tsx
import { toPlatePlugin as toPlatePlugin7 } from "platejs/react";
var StrikethroughPlugin = toPlatePlugin7(BaseStrikethroughPlugin);

// src/react/SubscriptPlugin.tsx
import { toPlatePlugin as toPlatePlugin8 } from "platejs/react";
var SubscriptPlugin = toPlatePlugin8(BaseSubscriptPlugin);

// src/react/SuperscriptPlugin.tsx
import { toPlatePlugin as toPlatePlugin9 } from "platejs/react";
var SuperscriptPlugin = toPlatePlugin9(BaseSuperscriptPlugin);

// src/react/UnderlinePlugin.tsx
import { Key as Key3, toPlatePlugin as toPlatePlugin10 } from "platejs/react";
var UnderlinePlugin = toPlatePlugin10(BaseUnderlinePlugin, {
  shortcuts: { toggle: { keys: [[Key3.Mod, "u"]] } }
});

// src/react/BasicMarksPlugin.tsx
var BasicMarksPlugin = toPlatePlugin11(BaseBasicMarksPlugin, {
  plugins: [
    BoldPlugin,
    CodePlugin,
    ItalicPlugin,
    StrikethroughPlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
    UnderlinePlugin
  ]
});

// src/react/HighlightPlugin.tsx
import { toPlatePlugin as toPlatePlugin12 } from "platejs/react";
var HighlightPlugin = toPlatePlugin12(BaseHighlightPlugin);

// src/react/KbdPlugin.tsx
import { toPlatePlugin as toPlatePlugin13 } from "platejs/react";
var KbdPlugin = toPlatePlugin13(BaseKbdPlugin);
export {
  BasicBlocksPlugin,
  BasicMarksPlugin,
  BlockquotePlugin,
  BoldPlugin,
  CodePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  HeadingPlugin,
  HighlightPlugin,
  HorizontalRulePlugin,
  ItalicPlugin,
  KbdPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin
};
//# sourceMappingURL=index.mjs.map