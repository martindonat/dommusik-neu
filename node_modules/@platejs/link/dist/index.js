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
  BaseLinkPlugin: () => BaseLinkPlugin,
  createLinkNode: () => createLinkNode,
  encodeUrlIfNeeded: () => encodeUrlIfNeeded,
  getLinkAttributes: () => getLinkAttributes,
  insertLink: () => insertLink,
  safeDecodeUrl: () => safeDecodeUrl,
  unwrapLink: () => unwrapLink,
  upsertLink: () => upsertLink,
  upsertLinkText: () => upsertLinkText,
  validateUrl: () => validateUrl,
  withLink: () => withLink,
  wrapLink: () => wrapLink
});
module.exports = __toCommonJS(index_exports);

// src/lib/BaseLinkPlugin.ts
var import_platejs11 = require("platejs");

// src/lib/utils/createLinkNode.ts
var import_platejs = require("platejs");
var createLinkNode = (editor, { children, target, text = "", url }) => {
  const type = editor.getType(import_platejs.KEYS.link);
  return {
    children: children ?? [{ text }],
    target,
    type,
    url
  };
};

// src/lib/utils/encodeUrlIfNeeded.ts
var encodeUrlIfNeeded = (url) => {
  try {
    const isEncoded = url !== decodeURIComponent(url);
    return isEncoded ? url : encodeURI(url);
  } catch (error) {
    if (error instanceof URIError) {
      return url;
    }
    throw error;
  }
};

// src/lib/utils/getLinkAttributes.ts
var import_platejs2 = require("platejs");
var getLinkAttributes = (editor, link) => {
  const { allowedSchemes, dangerouslySkipSanitization, defaultLinkAttributes } = editor.getOptions({ key: import_platejs2.KEYS.link });
  const attributes = { ...defaultLinkAttributes };
  const href = dangerouslySkipSanitization ? link.url : (0, import_platejs2.sanitizeUrl)(link.url, { allowedSchemes }) || void 0;
  if (href !== void 0) {
    attributes.href = href;
  }
  if ("target" in link && link.target !== void 0) {
    attributes.target = link.target;
  }
  return attributes;
};

// src/lib/utils/safeDecodeUrl.ts
var safeDecodeUrl = (url) => {
  try {
    return decodeURI(url);
  } catch (error) {
    if (error instanceof URIError) {
      return url;
    }
    throw error;
  }
};

// src/lib/utils/validateUrl.ts
var import_platejs3 = require("platejs");
var validateUrl = (editor, url) => {
  const { allowedSchemes, dangerouslySkipSanitization, isUrl: isUrl2 } = editor.getOptions(BaseLinkPlugin);
  if (url.startsWith("/")) {
    return true;
  }
  if (url.startsWith("#")) {
    const markdownHeadingPattern = /^#{1,6}\s+/;
    if (markdownHeadingPattern.test(url)) {
      return false;
    }
    return true;
  }
  if (isUrl2 && !isUrl2(url)) {
    return false;
  }
  if (!dangerouslySkipSanitization && !(0, import_platejs3.sanitizeUrl)(url, {
    allowedSchemes,
    permitInvalid: true
  })) {
    return false;
  }
  return true;
};

// src/lib/withLink.ts
var import_platejs10 = require("platejs");

// src/lib/transforms/insertLink.ts
var insertLink = (editor, createLinkNodeOptions, options) => {
  editor.tf.insertNodes(
    [createLinkNode(editor, createLinkNodeOptions)],
    options
  );
};

// src/lib/transforms/unwrapLink.ts
var import_platejs4 = require("platejs");
var import_platejs5 = require("platejs");
var unwrapLink = (editor, options) => {
  return editor.tf.withoutNormalizing(() => {
    if (options?.split) {
      const linkAboveAnchor = editor.api.above({
        at: editor.selection?.anchor,
        match: { type: editor.getType(import_platejs5.KEYS.link) }
      });
      if (linkAboveAnchor) {
        editor.tf.splitNodes({
          at: editor.selection?.anchor,
          match: (n) => import_platejs4.ElementApi.isElement(n) && n.type === editor.getType(import_platejs5.KEYS.link)
        });
        unwrapLink(editor, {
          at: editor.selection?.anchor
        });
        return true;
      }
      const linkAboveFocus = editor.api.above({
        at: editor.selection?.focus,
        match: { type: editor.getType(import_platejs5.KEYS.link) }
      });
      if (linkAboveFocus) {
        editor.tf.splitNodes({
          at: editor.selection?.focus,
          match: (n) => import_platejs4.ElementApi.isElement(n) && n.type === editor.getType(import_platejs5.KEYS.link)
        });
        unwrapLink(editor, {
          at: editor.selection?.focus
        });
        return true;
      }
    }
    editor.tf.unwrapNodes({
      match: { type: editor.getType(import_platejs5.KEYS.link) },
      ...options
    });
  });
};

// src/lib/transforms/upsertLink.ts
var import_platejs8 = require("platejs");
var import_platejs9 = require("platejs");

// src/lib/transforms/upsertLinkText.ts
var import_platejs6 = require("platejs");
var upsertLinkText = (editor, { text }) => {
  const newLink = editor.api.above({
    match: { type: editor.getType(import_platejs6.KEYS.link) }
  });
  if (newLink) {
    const [newLinkNode, newLinkPath] = newLink;
    if (text?.length && text !== editor.api.string(newLinkPath)) {
      const firstText = newLinkNode.children[0];
      editor.tf.replaceNodes(
        { ...firstText, text },
        {
          at: newLinkPath,
          children: true,
          select: true
        }
      );
    }
  }
};

// src/lib/transforms/wrapLink.ts
var import_platejs7 = require("platejs");
var wrapLink = (editor, { target, url, ...options }) => {
  editor.tf.wrapNodes(
    {
      children: [],
      target,
      type: editor.getType(import_platejs7.KEYS.link),
      url
    },
    { split: true, ...options }
  );
};

// src/lib/transforms/upsertLink.ts
var upsertLink = (editor, {
  insertNodesOptions,
  insertTextInLink,
  skipValidation = false,
  target,
  text,
  url
}) => {
  const at = editor.selection;
  if (!at) return;
  const linkAbove = editor.api.above({
    at,
    match: { type: editor.getType(import_platejs9.KEYS.link) }
  });
  if (insertTextInLink && linkAbove) {
    editor.tf.insertText(url);
    return true;
  }
  if (!skipValidation && !validateUrl(editor, url)) return;
  if ((0, import_platejs8.isDefined)(text) && text.length === 0) {
    text = url;
  }
  if (linkAbove) {
    if (url !== linkAbove[0]?.url || target !== linkAbove[0]?.target) {
      editor.tf.setNodes(
        { target, url },
        {
          at: linkAbove[1]
        }
      );
    }
    upsertLinkText(editor, { target, text, url });
    return true;
  }
  const linkEntry = editor.api.node({
    at,
    match: { type: editor.getType(import_platejs9.KEYS.link) }
  });
  const [linkNode, linkPath] = linkEntry ?? [];
  let shouldReplaceText = false;
  if (linkPath && text?.length) {
    const linkText = editor.api.string(linkPath);
    if (text !== linkText) {
      shouldReplaceText = true;
    }
  }
  if (import_platejs8.RangeApi.isExpanded(at)) {
    if (linkAbove) {
      unwrapLink(editor, {
        at: linkAbove[1]
      });
    } else {
      unwrapLink(editor, {
        split: true
      });
    }
    wrapLink(editor, {
      target,
      url
    });
    upsertLinkText(editor, { target, text, url });
    return true;
  }
  if (shouldReplaceText) {
    editor.tf.removeNodes({
      at: linkPath
    });
  }
  const props = import_platejs8.NodeApi.extractProps(linkNode ?? {});
  const path = editor.selection?.focus.path;
  if (!path) return;
  const leaf = import_platejs8.NodeApi.leaf(editor, path);
  if (!text?.length) {
    text = url;
  }
  insertLink(
    editor,
    {
      ...props,
      children: [
        {
          ...leaf,
          text
        }
      ],
      target,
      url
    },
    insertNodesOptions
  );
  return true;
};

// src/lib/withLink.ts
var withLink = ({
  editor,
  getOptions,
  tf: { insertBreak, insertData, insertText, normalizeNode },
  type
}) => {
  const wrapLink2 = () => {
    const { getUrlHref, isUrl: isUrl2, rangeBeforeOptions } = getOptions();
    editor.tf.withoutNormalizing(() => {
      const selection = editor.selection;
      let beforeWordRange = editor.api.range("before", selection, {
        before: rangeBeforeOptions
      });
      if (!beforeWordRange) {
        beforeWordRange = editor.api.range("start", editor.selection);
      }
      if (!beforeWordRange) return;
      const hasLink = editor.api.some({
        at: beforeWordRange,
        match: { type }
      });
      if (hasLink) return;
      let beforeWordText = editor.api.string(beforeWordRange);
      beforeWordText = getUrlHref?.(beforeWordText) ?? beforeWordText;
      if (!isUrl2(beforeWordText)) return;
      editor.tf.select(beforeWordRange);
      upsertLink(editor, {
        url: beforeWordText
      });
      editor.tf.collapse({ edge: "end" });
    });
  };
  return {
    transforms: {
      insertBreak() {
        if (!editor.api.isCollapsed()) return insertBreak();
        wrapLink2();
        insertBreak();
      },
      insertData(data) {
        const { getUrlHref, keepSelectedTextOnPaste } = getOptions();
        const text = data.getData("text/plain");
        const textHref = getUrlHref?.(text);
        if (text) {
          const value = textHref || text;
          const inserted = upsertLink(editor, {
            insertTextInLink: true,
            text: keepSelectedTextOnPaste ? void 0 : value,
            url: value
          });
          if (inserted) return;
        }
        insertData(data);
      },
      insertText(text, options) {
        if (text === " " && editor.api.isCollapsed()) {
          wrapLink2();
        }
        insertText(text, options);
      },
      normalizeNode([node, path]) {
        if (node.type === type) {
          const range = editor.selection;
          if (range && editor.api.isCollapsed() && editor.api.isEnd(range.focus, path)) {
            const nextPoint = editor.api.start(path, { next: true });
            if (!nextPoint) {
              const nextPath = import_platejs10.PathApi.next(path);
              editor.tf.insertNodes({ text: "" }, { at: nextPath });
              editor.tf.select(nextPath);
            }
          }
        }
        normalizeNode([node, path]);
      }
    }
  };
};

// src/lib/BaseLinkPlugin.ts
var BaseLinkPlugin = (0, import_platejs11.createTSlatePlugin)({
  key: import_platejs11.KEYS.link,
  node: {
    dangerouslyAllowAttributes: ["target"],
    isElement: true,
    isInline: true,
    props: ({ editor, element }) => getLinkAttributes(editor, element)
  },
  options: {
    allowedSchemes: ["http", "https", "mailto", "tel"],
    dangerouslySkipSanitization: false,
    defaultLinkAttributes: {},
    isUrl: import_platejs11.isUrl,
    keepSelectedTextOnPaste: true,
    rangeBeforeOptions: {
      afterMatch: true,
      matchBlockStart: true,
      matchString: " ",
      skipInvalid: true
    }
  },
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: "A"
          }
        ],
        parse: ({ editor, element, type }) => {
          const url = element.getAttribute("href");
          if (url && validateUrl(editor, url)) {
            return {
              target: element.getAttribute("target") || "_blank",
              type,
              url
            };
          }
        }
      }
    }
  },
  rules: {
    normalize: { removeEmpty: true },
    selection: { affinity: "directional" }
  }
}).overrideEditor(withLink);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseLinkPlugin,
  createLinkNode,
  encodeUrlIfNeeded,
  getLinkAttributes,
  insertLink,
  safeDecodeUrl,
  unwrapLink,
  upsertLink,
  upsertLinkText,
  validateUrl,
  withLink,
  wrapLink
});
//# sourceMappingURL=index.js.map