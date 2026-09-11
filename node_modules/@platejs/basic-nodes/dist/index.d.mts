import * as platejs from 'platejs';
export { B as BaseH1Plugin, b as BaseH2Plugin, c as BaseH3Plugin, d as BaseH4Plugin, e as BaseH5Plugin, f as BaseH6Plugin, g as BaseHeadingPlugin, H as HeadingConfig, a as HeadingLevel } from './BaseHeadingPlugin-nWtdPomn.mjs';

declare const BaseBasicBlocksPlugin: platejs.SlatePlugin<platejs.PluginConfig<any, {}, {}, {}, {}>>;

declare const BaseBasicMarksPlugin: platejs.SlatePlugin<platejs.PluginConfig<any, {}, {}, {}, {}>>;

/** Enables support for block quotes, useful for quotations and passages. */
declare const BaseBlockquotePlugin: platejs.SlatePlugin<platejs.PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
    toggle: () => void;
}>, {}>>;

/** Enables support for bold formatting */
declare const BaseBoldPlugin: platejs.SlatePlugin<platejs.PluginConfig<"bold", {}, {}, Record<"bold", {
    toggle: () => void;
}>, {}>>;

/** Enables support for code formatting */
declare const BaseCodePlugin: platejs.SlatePlugin<platejs.PluginConfig<"code", {}, {}, Record<"code", {
    toggle: () => void;
}>, {}>>;

/**
 * Enables support for highlights, useful when reviewing content or highlighting
 * it for future reference.
 */
declare const BaseHighlightPlugin: platejs.SlatePlugin<platejs.PluginConfig<"highlight", {}, {}, Record<"highlight", {
    toggle: () => void;
}>, {}>>;

declare const BaseHorizontalRulePlugin: platejs.SlatePlugin<platejs.PluginConfig<"hr", {}, {}, {}, {}>>;

/** Enables support for italic formatting. */
declare const BaseItalicPlugin: platejs.SlatePlugin<platejs.PluginConfig<"italic", {}, {}, Record<"italic", {
    toggle: () => void;
}>, {}>>;

/** Enables support for code formatting */
declare const BaseKbdPlugin: platejs.SlatePlugin<platejs.PluginConfig<"kbd", {}, {}, Record<"kbd", {
    toggle: () => void;
}>, {}>>;

/** Enables support for strikethrough formatting. */
declare const BaseStrikethroughPlugin: platejs.SlatePlugin<platejs.PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
    toggle: () => void;
}>, {}>>;

/** Enables support for subscript formatting. */
declare const BaseSubscriptPlugin: platejs.SlatePlugin<platejs.PluginConfig<"subscript", {}, {}, Record<"subscript", {
    toggle: () => void;
}>, {}>>;

/** Enables support for superscript formatting. */
declare const BaseSuperscriptPlugin: platejs.SlatePlugin<platejs.PluginConfig<"superscript", {}, {}, Record<"superscript", {
    toggle: () => void;
}>, {}>>;

/** Enables support for underline formatting. */
declare const BaseUnderlinePlugin: platejs.SlatePlugin<platejs.PluginConfig<"underline", {}, {}, Record<"underline", {
    toggle: () => void;
}>, {}>>;

export { BaseBasicBlocksPlugin, BaseBasicMarksPlugin, BaseBlockquotePlugin, BaseBoldPlugin, BaseCodePlugin, BaseHighlightPlugin, BaseHorizontalRulePlugin, BaseItalicPlugin, BaseKbdPlugin, BaseStrikethroughPlugin, BaseSubscriptPlugin, BaseSuperscriptPlugin, BaseUnderlinePlugin };
