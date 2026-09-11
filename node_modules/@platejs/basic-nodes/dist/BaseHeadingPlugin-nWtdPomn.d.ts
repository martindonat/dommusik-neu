import { PluginConfig, SlatePlugin } from 'platejs';

type HeadingConfig = PluginConfig<'heading', {
    /** Heading levels supported from 1 to `levels` */
    levels?: HeadingLevel | HeadingLevel[];
}>;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
declare const BaseH1Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const BaseH2Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const BaseH3Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const BaseH4Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const BaseH5Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
declare const BaseH6Plugin: SlatePlugin<PluginConfig<any, {}, {}, Record<any, {
    toggle: () => void;
}>, {}>>;
/** Enables support for headings with configurable levels (from 1 to 6). */
declare const BaseHeadingPlugin: SlatePlugin<PluginConfig<"heading", {
    /** Heading levels supported from 1 to `levels` */
    levels?: HeadingLevel | HeadingLevel[];
}, {}, {}, {}>>;

export { BaseH1Plugin as B, type HeadingConfig as H, type HeadingLevel as a, BaseH2Plugin as b, BaseH3Plugin as c, BaseH4Plugin as d, BaseH5Plugin as e, BaseH6Plugin as f, BaseHeadingPlugin as g };
