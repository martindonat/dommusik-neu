import * as platejs_react from 'platejs/react';
import * as platejs from 'platejs';
import { a as HeadingLevel } from '../BaseHeadingPlugin-nWtdPomn.js';

/**
 * Enables support for basic elements:
 *
 * - Block quote
 * - Code block
 * - Heading
 * - Paragraph
 */
declare const BasicBlocksPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, {}, {}>>;

/**
 * Enables support for basic marks:
 *
 * - Bold
 * - Code
 * - Italic
 * - Strikethrough
 * - Subscript
 * - Superscript
 * - Underline
 */
declare const BasicMarksPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, {}, {}>>;

declare const BlockquotePlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
    toggle: () => void;
}>, {}>>;

declare const BoldPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"bold", {}, {}, Record<"bold", {
    toggle: () => void;
}>, {}>>;

declare const CodePlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"code", {}, {}, Record<"code", {
    toggle: () => void;
}>, {}>>;

declare const HeadingPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"heading", {
    levels?: HeadingLevel | HeadingLevel[];
}, {}, {}, {}>>;
declare const H1Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const H2Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const H3Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const H4Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const H5Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const H6Plugin: platejs_react.PlatePlugin<platejs.PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;

declare const HighlightPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"highlight", {}, {}, Record<"highlight", {
    toggle: () => void;
}>, {}>>;

declare const HorizontalRulePlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"hr", {}, {}, {}, {}>>;

declare const ItalicPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"italic", {}, {}, Record<"italic", {
    toggle: () => void;
}>, {}>>;

/** Enables support for code formatting with React-specific features */
declare const KbdPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"kbd", {}, {}, Record<"kbd", {
    toggle: () => void;
}>, {}>>;

declare const StrikethroughPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
    toggle: () => void;
}>, {}>>;

declare const SubscriptPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"subscript", {}, {}, Record<"subscript", {
    toggle: () => void;
}>, {}>>;

declare const SuperscriptPlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"superscript", {}, {}, Record<"superscript", {
    toggle: () => void;
}>, {}>>;

declare const UnderlinePlugin: platejs_react.PlatePlugin<platejs.PluginConfig<"underline", {}, {}, Record<"underline", {
    toggle: () => void;
}>, {}>>;

export { BasicBlocksPlugin, BasicMarksPlugin, BlockquotePlugin, BoldPlugin, CodePlugin, H1Plugin, H2Plugin, H3Plugin, H4Plugin, H5Plugin, H6Plugin, HeadingPlugin, HighlightPlugin, HorizontalRulePlugin, ItalicPlugin, KbdPlugin, StrikethroughPlugin, SubscriptPlugin, SuperscriptPlugin, UnderlinePlugin };
