import React$1, { JSX } from 'react';
import * as _platejs_slate from '@platejs/slate';
import { TElement, TText, LeafPosition, NodeEntry, TRange, Editor, DOMRange, Value, DecoratedRange, Path, EditorApi, EditorTransforms, Descendant, NodeOperation, TextOperation, ScrollIntoViewOptions, Operation, TSelection, EditorAboveOptions, QueryNodeOptions, Ancestor, EditorBase } from '@platejs/slate';
import { AnyObject, UnknownObject, Nullable, Deep2Partial, OmitFirst, UnionToIntersection } from '@udecode/utils';
import { Draft } from 'mutative';
import { TStateApi } from 'zustand-x';
import { KeyboardEventLike } from 'is-hotkey';

/** If true, the next handlers will be skipped. */
type HandlerReturnType = boolean | void;

type RenderElementFn = (props: RenderElementProps) => React$1.ReactElement<any>;
interface RenderElementProps<N extends TElement = TElement> {
    attributes: {
        'data-slate-node': 'element';
        ref: any;
        className?: string;
        'data-slate-inline'?: true;
        'data-slate-void'?: true;
        dir?: 'rtl';
        style?: React$1.CSSProperties;
    };
    children: any;
    element: N;
}

type RenderLeafFn = (props: RenderLeafProps) => React.ReactElement<any>;
interface RenderLeafProps<N extends TText = TText> {
    attributes: {
        className?: string;
        'data-slate-leaf'?: true;
        style?: React.CSSProperties;
    };
    children: any;
    leaf: N;
    text: N;
    /**
     * The position of the leaf within the Text node, only present when the text
     * node is split by decorations.
     */
    leafPosition?: LeafPosition;
}

type RenderTextFn = (props: RenderTextProps) => React$1.ReactElement<any>;
interface RenderTextProps<N extends TText = TText> {
    /** The text node being rendered. */
    text: N;
    /** The children (leaves) rendered within this text node. */
    children: any;
    /**
     * HTML attributes to be spread onto the rendered container element. Includes
     * `data-slate-node="text"` and `ref`.
     */
    attributes: {
        'data-slate-node': 'text';
        ref: any;
        className?: string;
        style?: React$1.CSSProperties;
    };
}

type RenderChunkFn = (props: RenderChunkProps) => React$1.ReactElement<any>;
interface RenderChunkProps {
    attributes: {
        'data-slate-chunk': true;
    };
    children: any;
    highest: boolean;
    lowest: boolean;
}

/** `EditableProps` are passed to the <Editable> component. */
type EditableProps = {
    as?: React.ElementType;
    disableDefaultStyles?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    renderChunk?: RenderChunkFn;
    renderElement?: RenderElementFn;
    renderLeaf?: RenderLeafFn;
    renderText?: RenderTextFn;
    role?: string;
    style?: React.CSSProperties;
    decorate?: (entry: NodeEntry) => TRange[];
    renderPlaceholder?: (props: {
        attributes: {
            contentEditable: boolean;
            'data-slate-placeholder': boolean;
            ref: React.RefCallback<any>;
            style: React.CSSProperties;
            dir?: 'rtl';
        };
        children: any;
    }) => JSX.Element;
    scrollSelectionIntoView?: (editor: Editor, domRange: DOMRange) => void;
    onDOMBeforeInput?: (event: InputEvent) => void;
} & React.TextareaHTMLAttributes<HTMLDivElement>;

declare function BaseElementStatic({ decorate, decorations, editor, element, }: {
    decorate: EditableProps['decorate'];
    decorations: DecoratedRange[];
    editor: SlateEditor;
    element: TElement;
    style?: React$1.CSSProperties;
}): React$1.JSX.Element;
declare const ElementStatic: React$1.MemoExoticComponent<typeof BaseElementStatic>;
declare function BaseLeafStatic({ decorations, editor, text: text, }: {
    decorations: DecoratedRange[];
    editor: SlateEditor;
    text: TText;
}): React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | undefined;
declare const LeafStatic: React$1.MemoExoticComponent<typeof BaseLeafStatic>;
type PlateStaticProps = {
    /** Editor instance. */
    editor: SlateEditor;
    style?: React$1.CSSProperties;
    /** Controlled value. Alias to `editor.children`. */
    value?: Value;
} & React$1.HTMLAttributes<HTMLDivElement>;
declare function PlateStatic(props: PlateStaticProps): React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>>;

type BoxStaticProps = React.ComponentProps<'div'> & {
    as?: React.ElementType;
};
type SlateRenderElementProps<N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig> = SlateRenderNodeProps<C> & RenderElementProps<N>;
type SlateRenderLeafProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = SlateRenderNodeProps<C> & RenderLeafProps<N>;
type SlateRenderNodeProps<C extends AnyPluginConfig = PluginConfig> = SlatePluginContext<C> & {
    attributes?: AnyObject;
    className?: string;
    /** @see {@link NodeProps} */
    nodeProps?: AnyObject;
};
type SlateRenderTextProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = SlateRenderNodeProps<C> & RenderTextProps<N>;

declare const useNodeAttributes: (props: any, ref?: any) => any;
type SlateElementProps<N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig> = SlateNodeProps<C> & RenderElementProps<N> & {
    attributes: UnknownObject;
    path: Path;
} & DeprecatedNodeProps;
type DeprecatedNodeProps = {
    /**
     * @deprecated Optional class to be merged with `attributes.className`.
     * @default undefined
     */
    className?: string;
    /**
     * @deprecated Optional style to be merged with `attributes.style`
     * @default undefined
     */
    style?: React$1.CSSProperties;
};
type SlateNodeProps<C extends AnyPluginConfig = PluginConfig> = SlatePluginContext<C> & {
    /**
     * Optional ref to be merged with `attributes.ref`
     *
     * @default undefined
     */
    ref?: any;
};
type SlateHTMLProps<C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'div'> = SlateNodeProps<C> & {
    /** HTML attributes to pass to the underlying HTML element */
    attributes: React$1.PropsWithoutRef<React$1.JSX.IntrinsicElements[T]> & UnknownObject;
    as?: T;
    /** Class to be merged with `attributes.className` */
    className?: string;
    /** Style to be merged with `attributes.style` */
    style?: React$1.CSSProperties;
};
type StyledSlateElementProps<N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'div'> = Omit<SlateElementProps<N, C>, keyof DeprecatedNodeProps> & SlateHTMLProps<C, T>;
declare const SlateElement: <N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "div">(props: StyledSlateElementProps<N, C, T>) => React$1.ReactElement;
type SlateTextProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = SlateNodeProps<C> & RenderTextProps<N> & DeprecatedNodeProps & {
    attributes: UnknownObject;
};
type StyledSlateTextProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'span'> = Omit<SlateTextProps<N, C>, keyof DeprecatedNodeProps> & SlateHTMLProps<C, T>;
declare const SlateText: <N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "span">(props: StyledSlateTextProps<N, C, T>) => React$1.ReactElement;
type SlateLeafProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = SlateNodeProps<C> & RenderLeafProps<N> & DeprecatedNodeProps & {
    attributes: UnknownObject;
    inset?: boolean;
};
type StyledSlateLeafProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'span'> = Omit<SlateLeafProps<N, C>, keyof DeprecatedNodeProps> & SlateHTMLProps<C, T>;
declare const SlateLeaf: <N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "span">({ className, ...props }: StyledSlateLeafProps<N, C, T>) => React$1.ReactElement;

type CreateStaticEditorOptions<V extends Value = Value, P extends AnyPluginConfig = CorePlugin> = CreateSlateEditorOptions<V, P> & {};
declare const createStaticEditor: <V extends Value = Value, P extends AnyPluginConfig = CorePlugin>({ editor, ...options }?: CreateStaticEditorOptions<V, P>) => TSlateEditor<V, P>;

type AnyEditorPlugin = EditorPlugin<AnyPluginConfig>;
type AnySlatePlugin = SlatePlugin<AnyPluginConfig>;
/**
 * Property used by Plate to decorate editor ranges. If the function returns
 * undefined then no ranges are modified. If the function returns an array the
 * returned ranges are merged with the ranges called by other plugins.
 */
type Decorate<C extends AnyPluginConfig = PluginConfig> = (ctx: SlatePluginContext<C> & {
    entry: NodeEntry;
}) => DecoratedRange[] | undefined;
type Deserializer<C extends AnyPluginConfig = PluginConfig> = BaseDeserializer & {
    parse?: (options: AnyObject & SlatePluginContext<C> & {
        element: any;
    }) => Partial<Descendant> | undefined | void;
    query?: (options: AnyObject & SlatePluginContext<C> & {
        element: any;
    }) => boolean;
};
type EditorPlugin<C extends AnyPluginConfig = PluginConfig> = Omit<SlatePlugin<C>, keyof SlatePluginMethods | 'override' | 'plugins'>;
/** Plate plugin overriding the `editor` methods. Naming convention is `with*`. */
type ExtendEditor<C extends AnyPluginConfig = PluginConfig> = (ctx: SlatePluginContext<C>) => SlateEditor;
type ExtendEditorApi<C extends AnyPluginConfig = PluginConfig, EA = {}> = (ctx: SlatePluginContext<C>) => EA & Deep2Partial<EditorApi & CorePluginApi> & {
    [K in keyof InferApi<C>]?: InferApi<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferApi<C>[K]>) => ReturnType<InferApi<C>[K]> : InferApi<C>[K] extends Record<string, (...args: any[]) => any> ? {
        [N in keyof InferApi<C>[K]]?: (...args: Parameters<InferApi<C>[K][N]>) => ReturnType<InferApi<C>[K][N]>;
    } : never;
};
type ExtendEditorTransforms<C extends AnyPluginConfig = PluginConfig, EA = {}> = (ctx: SlatePluginContext<C>) => EA & Deep2Partial<EditorTransforms & CorePluginTransforms> & {
    [K in keyof InferTransforms<C>]?: InferTransforms<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferTransforms<C>[K]>) => ReturnType<InferTransforms<C>[K]> : InferTransforms<C>[K] extends Record<string, (...args: any[]) => any> ? {
        [N in keyof InferTransforms<C>[K]]?: (...args: Parameters<InferTransforms<C>[K][N]>) => ReturnType<InferTransforms<C>[K][N]>;
    } : never;
};
type HtmlDeserializer<C extends AnyPluginConfig = PluginConfig> = BaseHtmlDeserializer & {
    /**
     * Whether to disable the default node props parsing logic. By default, all
     * data-slate-* attributes will be parsed into node props.
     *
     * @default false
     */
    disableDefaultNodeProps?: boolean;
    parse?: (options: SlatePluginContext<C> & {
        element: HTMLElement;
        node: AnyObject;
    }) => Partial<Descendant> | undefined | void;
    query?: (options: SlatePluginContext<C> & {
        element: HTMLElement;
    }) => boolean;
    toNodeProps?: (options: SlatePluginContext<C> & {
        element: HTMLElement;
    }) => Partial<Descendant> | undefined | void;
};
type HtmlSerializer<C extends AnyPluginConfig = PluginConfig> = BaseSerializer & {
    parse?: (options: SlatePluginContext<C> & {
        node: Descendant;
    }) => string;
    query?: (options: SlatePluginContext<C> & {
        node: Descendant;
    }) => boolean;
};
type InferConfig<P> = P extends SlatePlugin<infer C> ? C : never;
type InjectNodeProps<C extends AnyPluginConfig = PluginConfig> = BaseInjectProps & {
    query?: (options: NonNullable<NonNullable<InjectNodeProps>> & SlatePluginContext<C> & {
        nodeProps: GetInjectNodePropsOptions;
    }) => boolean;
    transformClassName?: (options: TransformOptions<C>) => any;
    transformNodeValue?: (options: TransformOptions<C>) => any;
    transformProps?: (options: TransformOptions<C> & {
        props: GetInjectNodePropsReturnType;
    }) => AnyObject | undefined;
    transformStyle?: (options: TransformOptions<C>) => CSSStyleDeclaration;
};
type LeafStaticProps<C extends AnyPluginConfig = PluginConfig> = ((props: SlateRenderLeafProps<TText, C>) => AnyObject | undefined) | AnyObject;
type NodeStaticProps<C extends AnyPluginConfig = PluginConfig> = ((props: SlateRenderElementProps<TElement, C> & SlateRenderLeafProps<TText, C>) => AnyObject | undefined) | AnyObject;
/** @deprecated Use {@link RenderStaticNodeWrapper} instead. */
type NodeStaticWrapperComponent<C extends AnyPluginConfig = PluginConfig> = (props: NodeStaticWrapperComponentProps<C>) => NodeStaticWrapperComponentReturnType<C>;
/** @deprecated Use {@link RenderStaticNodeWrapperProps} instead. */
interface NodeStaticWrapperComponentProps<C extends AnyPluginConfig = PluginConfig> extends SlateRenderElementProps<TElement, C> {
    key: string;
}
/** @deprecated Use {@link RenderStaticNodeWrapperFunction} instead. */
type NodeStaticWrapperComponentReturnType<C extends AnyPluginConfig = PluginConfig> = React.FC<SlateRenderElementProps<TElement, C>> | undefined;
type NormalizeInitialValue<C extends AnyPluginConfig = PluginConfig> = (ctx: SlatePluginContext<C> & {
    value: Value;
}) => void;
type OverrideEditor<C extends AnyPluginConfig = PluginConfig> = (ctx: SlatePluginContext<C>) => {
    api?: Deep2Partial<EditorApi & CorePluginApi> & {
        [K in keyof InferApi<C>]?: InferApi<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferApi<C>[K]>) => ReturnType<InferApi<C>[K]> : InferApi<C>[K] extends Record<string, (...args: any[]) => any> ? {
            [N in keyof InferApi<C>[K]]?: (...args: Parameters<InferApi<C>[K][N]>) => ReturnType<InferApi<C>[K][N]>;
        } : never;
    };
    transforms?: Deep2Partial<EditorTransforms & CorePluginTransforms> & {
        [K in keyof InferTransforms<C>]?: InferTransforms<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferTransforms<C>[K]>) => ReturnType<InferTransforms<C>[K]> : InferTransforms<C>[K] extends Record<string, (...args: any[]) => any> ? {
            [N in keyof InferTransforms<C>[K]]?: (...args: Parameters<InferTransforms<C>[K][N]>) => ReturnType<InferTransforms<C>[K][N]>;
        } : never;
    };
};
type Parser<C extends AnyPluginConfig = PluginConfig> = {
    format?: string[] | string;
    mimeTypes?: string[];
    deserialize?: (options: ParserOptions & SlatePluginContext<C>) => Descendant[] | undefined;
    preInsert?: (options: ParserOptions & SlatePluginContext<C> & {
        fragment: Descendant[];
    }) => HandlerReturnType;
    query?: (options: ParserOptions & SlatePluginContext<C>) => boolean;
    transformData?: (options: ParserOptions & SlatePluginContext<C>) => string;
    transformFragment?: (options: ParserOptions & SlatePluginContext<C> & {
        fragment: Descendant[];
    }) => Descendant[];
};
type PartialEditorPlugin<C extends AnyPluginConfig = PluginConfig> = Omit<Partial<EditorPlugin<C>>, 'node'> & {
    node?: Partial<EditorPlugin<C>['node']>;
};
type RenderStaticNodeWrapper<C extends AnyPluginConfig = PluginConfig> = (props: RenderStaticNodeWrapperProps<C>) => RenderStaticNodeWrapperFunction;
type RenderStaticNodeWrapperFunction = ((hocProps: SlateRenderElementProps) => React.ReactNode) | undefined;
interface RenderStaticNodeWrapperProps<C extends AnyPluginConfig = PluginConfig> extends SlateRenderElementProps<TElement, C> {
    key: string;
}
type Serializer<C extends AnyPluginConfig = PluginConfig> = BaseSerializer & {
    parse?: (options: AnyObject & SlatePluginContext<C> & {
        node: Descendant;
    }) => any;
    query?: (options: AnyObject & SlatePluginContext<C> & {
        node: Descendant;
    }) => boolean;
};
/** The `PlatePlugin` interface is a base interface for all plugins. */
type SlatePlugin<C extends AnyPluginConfig = PluginConfig> = BasePlugin<C> & Nullable<{
    decorate?: Decorate<WithAnyKey<C>>;
    extendEditor?: ExtendEditor<WithAnyKey<C>>;
    normalizeInitialValue?: NormalizeInitialValue<WithAnyKey<C>>;
}> & SlatePluginMethods<C> & {
    handlers: Nullable<{
        onNodeChange?: (ctx: SlatePluginContext<C> & {
            node: Descendant;
            operation: NodeOperation;
            prevNode: Descendant;
        }) => HandlerReturnType;
        onTextChange?: (ctx: SlatePluginContext<C> & {
            node: Descendant;
            operation: TextOperation;
            prevText: string;
            text: string;
        }) => HandlerReturnType;
    }>;
    inject: Nullable<{
        nodeProps?: InjectNodeProps<WithAnyKey<C>>;
        plugins?: Record<string, PartialEditorPlugin<AnyPluginConfig>>;
        targetPluginToInject?: (ctx: SlatePluginContext<C> & {
            targetPlugin: string;
        }) => Partial<SlatePlugin<AnyPluginConfig>>;
    }>;
    node: {
        /** Override `data-slate-leaf` element attributes */
        leafProps?: LeafStaticProps<WithAnyKey<C>>;
        /** Override node attributes */
        props?: NodeStaticProps<WithAnyKey<C>>;
        /** Override `data-slate-node="text"` element attributes */
        textProps?: TextStaticProps<WithAnyKey<C>>;
    };
    override: {
        components?: NodeComponents;
        plugins?: Record<string, PartialEditorPlugin<AnyPluginConfig>>;
    };
    parser: Nullable<Parser<WithAnyKey<C>>>;
    parsers: (Record<string, {
        deserializer?: Deserializer<WithAnyKey<C>>;
        serializer?: Serializer<WithAnyKey<C>>;
    }> & {
        html?: never;
    }) | {
        html?: Nullable<{
            deserializer?: HtmlDeserializer<WithAnyKey<C>>;
            serializer?: HtmlSerializer<WithAnyKey<C>>;
        }>;
    };
    /**
     * Recursive plugin support to allow having multiple plugins in a single
     * plugin. Plate eventually flattens all the plugins into the editor.
     */
    plugins: any[];
    render: Nullable<{
        /**
         * When other plugins' `node` components are rendered, this function can
         * return an optional wrapper function that turns a `node`'s props to a
         * wrapper React node as its parent. Useful for wrapping or decorating
         * nodes with additional UI elements.
         *
         * NOTE: The function can run React hooks. NOTE: Do not run React hooks
         * in the wrapper function. It is not equivalent to a React component.
         */
        aboveNodes?: RenderStaticNodeWrapper<WithAnyKey<C>>;
        /**
         * When other plugins' `node` components are rendered, this function can
         * return an optional wrapper function that turns a `node`'s props to a
         * wrapper React node. The wrapper node is the `node`'s child and its
         * original children's parent. Useful for wrapping or decorating nodes
         * with additional UI elements.
         *
         * NOTE: The function can run React hooks. NOTE: Do not run React hooks
         * in the wrapper function. It is not equivalent to a React component.
         */
        belowNodes?: RenderStaticNodeWrapper<WithAnyKey<C>>;
        /** Renders a component above the main Slate component, as its sibling. */
        aboveSlate?: () => React.ReactElement<any> | null;
        /** Renders a component after the main editor container. */
        afterContainer?: () => React.ReactElement<any> | null;
        /**
         * Renders a component after the `Editable` component. This is the last
         * render position within the editor structure.
         */
        afterEditable?: () => React.ReactElement<any> | null;
        /** Renders a component before the main editor container. */
        beforeContainer?: () => React.ReactElement<any> | null;
        /** Renders a component before the `Editable` component. */
        beforeEditable?: () => React.ReactElement<any> | null;
        /**
         * Function to render content below the root element but above its
         * children. Similar to belowNodes but renders directly in the element
         * rather than wrapping. Multiple plugins can provide this, and all
         * their content will be rendered in sequence.
         */
        belowRootNodes?: (props: SlateElementProps<TElement, AnySlatePlugin>) => React.ReactNode;
    }>;
    rules: {
        /**
         * Function to determine if this plugin's rules should apply to a node.
         * Used to override behavior based on node properties beyond just type
         * matching.
         *
         * Example: List plugin sets `match: ({ node }) => !!node.listStyleType`
         * to override paragraph behavior when the paragraph is a list item.
         *
         * @default type === node.type
         */
        match?: (options: {
            node: TElement;
            path: Path;
            rule: MatchRules;
        } & SlatePluginContext<C>) => boolean;
    };
    /**
     * Keyboard shortcuts configuration mapping shortcut names to their key
     * combinations and handlers. Each shortcut can link to a transform
     * method, an API method, or use a custom handler function.
     */
    shortcuts: Partial<Record<(string & {}) | Exclude<keyof InferApi<C>[C['key']], keyof InferTransforms<C>[C['key']]> | keyof InferTransforms<C>[C['key']], SlateShortcut | null>>;
};
type SlatePluginConfig<K extends string = any, O = {}, A = {}, T = {}, S = {}, EO = {}, EA = {}, ET = {}, ES = {}> = Partial<Omit<SlatePlugin<PluginConfig<K, Partial<O>, A, T, S>>, keyof SlatePluginMethods | 'api' | 'node' | 'optionsStore' | 'transforms'> & {
    api: EA;
    node: Partial<SlatePlugin['node']>;
    options: EO;
    selectors: ES;
    transforms: ET;
}>;
type SlatePluginContext<C extends AnyPluginConfig = PluginConfig> = BasePluginContext<C> & {
    editor: SlateEditor;
    plugin: EditorPlugin<C>;
};
type SlatePluginMethods<C extends AnyPluginConfig = PluginConfig> = {
    __apiExtensions: ((ctx: SlatePluginContext<AnyPluginConfig>) => any)[];
    __configuration: ((ctx: SlatePluginContext<AnyPluginConfig>) => any) | null;
    __extensions: ((ctx: SlatePluginContext<AnyPluginConfig>) => any)[];
    __selectorExtensions: ((ctx: SlatePluginContext<AnyPluginConfig>) => any)[];
    clone: () => SlatePlugin<C>;
    configure: (config: ((ctx: SlatePluginContext<C>) => SlatePluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>) | SlatePluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>) => SlatePlugin<C>;
    configurePlugin: <P extends AnySlatePlugin>(plugin: Partial<P>, config: ((ctx: SlatePluginContext<P>) => SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>>) | SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>>) => SlatePlugin<C>;
    extend: <EO = {}, EA = {}, ET = {}, ES = {}>(extendConfig: ((ctx: SlatePluginContext<C>) => SlatePluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>, EO, EA, ET, ES>) | SlatePluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>, EO, EA, ET, ES>) => SlatePlugin<PluginConfig<C['key'], EO & InferOptions<C>, EA & InferApi<C>, ET & InferTransforms<C>, ES & InferSelectors<C>>>;
    extendApi: <EA extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: SlatePluginContext<C>) => EA) => SlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C> & Record<C['key'], EA>, InferTransforms<C>, InferSelectors<C>>>;
    extendEditorApi: <EA extends Record<string, ((...args: any[]) => any) | Record<string, (...args: any[]) => any>> = Record<string, never>>(extension: ExtendEditorApi<C, EA>) => SlatePlugin<PluginConfig<C['key'], InferOptions<C>, {
        [K in keyof (EA & InferApi<C>)]: (EA & InferApi<C>)[K] extends (...args: any[]) => any ? (EA & InferApi<C>)[K] : {
            [N in keyof (EA & InferApi<C>)[K]]: (EA & InferApi<C>)[K][N];
        };
    }, InferTransforms<C>, InferSelectors<C>>>;
    extendEditorTransforms: <ET extends Record<string, ((...args: any[]) => any) | Record<string, (...args: any[]) => any>> = Record<string, never>>(extension: ExtendEditorTransforms<C, ET>) => SlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, {
        [K in keyof (ET & InferTransforms<C>)]: (ET & InferTransforms<C>)[K] extends (...args: any[]) => any ? (ET & InferTransforms<C>)[K] : {
            [N in keyof (ET & InferTransforms<C>)[K]]: (ET & InferTransforms<C>)[K][N];
        };
    }, InferSelectors<C>>>;
    extendPlugin: <P extends AnySlatePlugin, EO = {}, EA = {}, ET = {}, ES = {}>(plugin: Partial<P>, extendConfig: ((ctx: SlatePluginContext<P>) => SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET, ES>) | SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET, ES>) => SlatePlugin<C>;
    extendSelectors: <ES extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: SlatePluginContext<C>) => ES) => SlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, ES & InferSelectors<C>>>;
    extendTransforms: <ET extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: SlatePluginContext<C>) => ET) => SlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C> & Record<C['key'], ET>, InferSelectors<C>>>;
    overrideEditor: (override: OverrideEditor<C>) => SlatePlugin<C>;
    /** Returns a new instance of the plugin with the component. */
    withComponent: (component: NodeComponent) => SlatePlugin<C>;
    __resolved?: boolean;
};
type SlatePlugins = AnySlatePlugin[];
type TextStaticProps<C extends AnyPluginConfig = PluginConfig> = ((props: SlateRenderTextProps<TText, C>) => AnyObject | undefined) | AnyObject;
type TransformOptions<C extends AnyPluginConfig = PluginConfig> = BaseTransformOptions & SlatePluginContext<C>;
type SlateShortcut = {
    keys?: (({} & string)[][] | readonly string[] | string) | null;
    delimiter?: string;
    description?: string;
    document?: Document;
    enabled?: Trigger;
    enableOnContentEditable?: boolean;
    enableOnFormTags?: boolean;
    ignoreEventWhenPrevented?: boolean;
    ignoreModifiers?: boolean;
    keydown?: boolean;
    keyup?: boolean;
    preventDefault?: Trigger;
    priority?: number;
    scopes?: readonly string[] | string;
    splitKey?: string;
    useKey?: boolean;
    handler?: (ctx: {
        editor: SlateEditor;
        event: KeyboardEvent;
        eventDetails: any;
    }) => boolean | void;
    ignoreEventWhen?: (e: KeyboardEvent) => boolean;
};
type Trigger = ((keyboardEvent: KeyboardEvent, hotkeysEvent: any) => boolean) | boolean;

type ElementAffinity = {
    affinity: 'backward' | 'forward';
    at: Path;
    type: string;
};
type AffinityConfig = PluginConfig<'affinity'>;
declare const AffinityPlugin: SlatePlugin<AffinityConfig>;

interface WithAutoScrollOptions {
    mode?: ScrollMode;
    operations?: AutoScrollOperationsMap;
    scrollOptions?: ScrollIntoViewOptions;
}
declare const withScrolling: (editor: SlateEditor, fn: () => void, options?: WithAutoScrollOptions) => void;

declare const AUTO_SCROLL: WeakMap<SlateEditor, boolean>;
type AutoScrollOperationsMap = Partial<Record<Operation['type'], boolean>>;
type DomConfig = PluginConfig<'dom', {
    /** Choose the first or last matching operation as the scroll target */
    scrollMode?: ScrollMode;
    /**
     * Operations map; false to disable an operation, true or undefined to
     * enable
     */
    scrollOperations?: AutoScrollOperationsMap;
    /** Options passed to scrollIntoView */
    scrollOptions?: ScrollIntoViewOptions;
}>;
/** Mode for picking target op when multiple enabled */
type ScrollMode = 'first' | 'last';
/**
 * Placeholder plugin for DOM interaction, that could be replaced with
 * ReactPlugin.
 */
declare const DOMPlugin: SlatePlugin<PluginConfig<"dom", {
    /** Choose the first or last matching operation as the scroll target */
    scrollMode?: ScrollMode;
    /**
     * Operations map; false to disable an operation, true or undefined to
     * enable
     */
    scrollOperations?: AutoScrollOperationsMap;
    /** Options passed to scrollIntoView */
    scrollOptions?: ScrollIntoViewOptions;
}, {
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>>;

type InitOptions = {
    autoSelect?: boolean | 'end' | 'start';
    selection?: TSelection;
    shouldNormalizeEditor?: boolean;
    value?: any;
    onReady?: (ctx: {
        editor: SlateEditor;
        isAsync: boolean;
        value: Value;
    }) => void;
};
declare const init: (editor: SlateEditor, { autoSelect, selection, shouldNormalizeEditor, value, onReady }: InitOptions) => void;

type InsertExitBreakOptions = {
    match?: EditorAboveOptions['match'];
    reverse?: boolean;
};
/**
 * Exits the current block structure by creating a new block next to the
 * appropriate ancestor.
 *
 * This function automatically determines the exit point by finding the first
 * ancestor that doesn't have strict sibling constraints (`isStrictSiblings:
 * false`), allowing standard text blocks to be inserted as siblings.
 *
 * For example:
 *
 * - In `column_group > column > codeblock > codeline`, exits after `codeblock`,
 *   then after `column_group`
 * - In `table > tr > td > p`, exits after `table`
 */
declare const insertExitBreak: (editor: SlateEditor, { match, reverse }?: InsertExitBreakOptions) => true | undefined;

/**
 * Reset the current block to a paragraph, removing all properties except id and
 * type.
 */
declare const resetBlock: (editor: SlateEditor, { at }?: {
    at?: Path;
}) => true | undefined;

declare const setValue: <V extends Value>(editor: SlateEditor, value?: V | string) => void;

type SlateExtensionConfig = PluginConfig<'slateExtension', {
    onNodeChange: (options: {
        editor: SlateEditor;
        node: Descendant;
        operation: NodeOperation;
        prevNode: Descendant;
    }) => void;
    onTextChange: (options: {
        editor: SlateEditor;
        node: Descendant;
        operation: TextOperation;
        prevText: string;
        text: string;
    }) => void;
}, {}, {
    init: OmitFirst<typeof init>;
    insertExitBreak: OmitFirst<typeof insertExitBreak>;
    resetBlock: OmitFirst<typeof resetBlock>;
    setValue: OmitFirst<typeof setValue>;
}>;
/** Opinionated extension of slate default behavior. */
declare const SlateExtensionPlugin: SlatePlugin<PluginConfig<"slateExtension", {
    onNodeChange: (options: {
        editor: SlateEditor;
        node: Descendant;
        operation: NodeOperation;
        prevNode: Descendant;
    }) => void;
    onTextChange: (options: {
        editor: SlateEditor;
        node: Descendant;
        operation: TextOperation;
        prevText: string;
        text: string;
    }) => void;
}, {}, {
    init: ((args_0: InitOptions) => void) & ((args_0: InitOptions) => void);
    insertExitBreak: ((args_0?: InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: InsertExitBreakOptions | undefined) => true | undefined);
    resetBlock: ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined) & ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined);
    setValue: ((value?: string | _platejs_slate.Value | undefined) => void) & ((value?: string | _platejs_slate.Value | undefined) => void);
    apply: <N extends _platejs_slate.TElement | TText>(operation: _platejs_slate.Operation<N>) => void;
}, {}>>;

type DebugErrorType = (string & {}) | 'DEFAULT' | 'OPTION_UNDEFINED' | 'OVERRIDE_MISSING' | 'PLUGIN_DEPENDENCY_MISSING' | 'PLUGIN_MISSING' | 'USE_CREATE_PLUGIN' | 'USE_ELEMENT_CONTEXT';
type LogLevel = 'error' | 'info' | 'log' | 'warn';
declare class PlateError extends Error {
    type: DebugErrorType;
    constructor(message: string, type?: DebugErrorType);
}
declare const DebugPlugin: SlatePlugin<PluginConfig<"debug", {
    isProduction: boolean;
    logger: Partial<Record<LogLevel, (message: string, type?: DebugErrorType, details?: any) => void>>;
    logLevel: LogLevel;
    throwErrors: boolean;
}, {
    debug: {
        error: (message: string | unknown, type?: DebugErrorType, details?: any) => void;
        info: (message: string, type?: DebugErrorType, details?: any) => void;
        log: (message: string, type?: DebugErrorType, details?: any) => void;
        warn: (message: string, type?: DebugErrorType, details?: any) => void;
    };
}, {}, {}>>;

type NodeIdOptions = {
    /**
     * By default, when a node inserted using editor.tf.insertNode(s) has an id,
     * it will be used instead of the id generator, except if it already exists in
     * the document. Set this option to true to disable this behavior.
     */
    disableInsertOverrides?: boolean;
    /**
     * Filter inline `Element` nodes.
     *
     * @default true
     */
    filterInline?: boolean;
    /**
     * Filter `Text` nodes.
     *
     * @default true
     */
    filterText?: boolean;
    /**
     * Node key to store the id.
     *
     * @default 'id'
     */
    idKey?: string;
    /**
     * Normalize initial value. If false, normalize only the first and last node
     * are missing id. To disable this behavior, use `NodeIdPlugin.configure({
     * normalizeInitialValue: null })`.
     *
     * @default false
     */
    normalizeInitialValue?: boolean;
    /**
     * Reuse ids on undo/redo and copy/pasting if not existing in the document.
     * This is disabled by default to avoid duplicate ids across documents.
     *
     * @default false
     */
    reuseId?: boolean;
    /**
     * A function that generates and returns a unique ID.
     *
     * @default () => nanoid(10)
     */
    idCreator?: () => any;
} & QueryNodeOptions;
type NormalizeNodeIdOptions = Pick<NodeIdOptions, 'allow' | 'exclude' | 'filter' | 'filterInline' | 'filterText' | 'idCreator' | 'idKey'>;
/**
 * Normalize node IDs in a value without using editor operations. This is a pure
 * function that returns a new normalized value.
 */
declare const normalizeNodeId: <V extends Value>(value: V, options?: NormalizeNodeIdOptions) => V;
type NodeIdConfig = PluginConfig<'nodeId', NodeIdOptions, {}, {
    nodeId: {
        normalize: () => void;
    };
}>;
/** @see {@link withNodeId} */
declare const NodeIdPlugin: SlatePlugin<PluginConfig<"nodeId", {
    /**
     * By default, when a node inserted using editor.tf.insertNode(s) has an id,
     * it will be used instead of the id generator, except if it already exists in
     * the document. Set this option to true to disable this behavior.
     */
    disableInsertOverrides?: boolean;
    /**
     * Filter inline `Element` nodes.
     *
     * @default true
     */
    filterInline?: boolean;
    /**
     * Filter `Text` nodes.
     *
     * @default true
     */
    filterText?: boolean;
    /**
     * Node key to store the id.
     *
     * @default 'id'
     */
    idKey?: string;
    /**
     * Normalize initial value. If false, normalize only the first and last node
     * are missing id. To disable this behavior, use `NodeIdPlugin.configure({
     * normalizeInitialValue: null })`.
     *
     * @default false
     */
    normalizeInitialValue?: boolean;
    /**
     * Reuse ids on undo/redo and copy/pasting if not existing in the document.
     * This is disabled by default to avoid duplicate ids across documents.
     *
     * @default false
     */
    reuseId?: boolean;
    /**
     * A function that generates and returns a unique ID.
     *
     * @default () => nanoid(10)
     */
    idCreator?: () => any;
} & QueryNodeOptions, {}, {
    nodeId: {
        normalize: () => void;
    };
} & Record<"nodeId", {
    normalize(): void;
}>, {}>>;

type ChunkingConfig = PluginConfig<'chunking', {
    /**
     * The number of blocks per chunk.
     *
     * @default 1000
     */
    chunkSize?: number;
    /**
     * Whether to render each chunk as a DOM element with `content-visibility:
     * auto`, which optimizes DOM painting. When set to `false`, no DOM element
     * will be rendered for each chunk.
     *
     * @default true
     */
    contentVisibilityAuto?: boolean;
    /**
     * Determine which ancestors should have chunking applied to their children.
     * Only blocks containing other blocks can have chunking applied.
     *
     * @default NodeApi.isEditor
     */
    query?: (ancestor: Ancestor) => boolean;
}>;
declare const ChunkingPlugin: SlatePlugin<ChunkingConfig>;

type CorePlugin = ReturnType<typeof getCorePlugins>[number];
type GetCorePluginsOptions = {
    /** Enable mark/element affinity. */
    affinity?: boolean;
    /** Configure Slate's chunking optimization. */
    chunking?: ChunkingConfig['options'] | boolean;
    /** Specifies the maximum number of characters allowed in the editor. */
    maxLength?: number;
    /** Configure the node id plugin. */
    nodeId?: NodeIdConfig['options'] | boolean;
    /** Override the core plugins using the same key. */
    plugins?: AnyPluginConfig[];
};
declare const getCorePlugins: ({ affinity, chunking, maxLength, nodeId, plugins, }: GetCorePluginsOptions) => (SlatePlugin<DebugConfig> | SlatePlugin<PluginConfig<"slateExtension", {
    onNodeChange: (options: {
        editor: SlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.NodeOperation;
        prevNode: _platejs_slate.Descendant;
    }) => void;
    onTextChange: (options: {
        editor: SlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.TextOperation;
        prevText: string;
        text: string;
    }) => void;
}, {}, {
    init: ((args_0: InitOptions) => void) & ((args_0: InitOptions) => void);
    insertExitBreak: ((args_0?: InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: InsertExitBreakOptions | undefined) => true | undefined);
    resetBlock: ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined) & ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined);
    setValue: ((value?: string | _platejs_slate.Value | undefined) => void) & ((value?: string | _platejs_slate.Value | undefined) => void);
    apply: <N extends _platejs_slate.TElement | _platejs_slate.TText>(operation: _platejs_slate.Operation<N>) => void;
}, {}>> | SlatePlugin<PluginConfig<"dom", {
    scrollMode?: ScrollMode;
    scrollOperations?: AutoScrollOperationsMap;
    scrollOptions?: _platejs_slate.ScrollIntoViewOptions;
}, {
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>> | SlatePlugin<PluginConfig<"history", {}, {}, {}, {}>> | SlatePlugin<PluginConfig<"override", {}, {}, {}, {}>> | SlatePlugin<PluginConfig<"parser", {}, {}, {}, {}>> | SlatePlugin<LengthConfig> | SlatePlugin<PluginConfig<"html", {}, Record<"html", {
    deserialize: (args_0: {
        element: HTMLElement | string;
        collapseWhiteSpace?: boolean;
        defaultElementPlugin?: WithRequiredKey;
    }) => _platejs_slate.Descendant[];
}>, {}, {}>> | SlatePlugin<PluginConfig<"ast", {}, {}, {}, {}>> | SlatePlugin<PluginConfig<"nodeId", {
    disableInsertOverrides?: boolean;
    filterInline?: boolean;
    filterText?: boolean;
    idKey?: string;
    normalizeInitialValue?: boolean;
    reuseId?: boolean;
    idCreator?: () => any;
} & _platejs_slate.QueryNodeOptions, {}, {
    nodeId: {
        normalize: () => void;
    };
} & Record<"nodeId", {
    normalize(): void;
}>, {}>> | SlatePlugin<AffinityConfig> | SlatePlugin<PluginConfig<"p", {}, {}, {}, {}>> | SlatePlugin<ChunkingConfig>)[];
type CorePluginTransforms = SlateExtensionConfig['transforms'];
type CorePluginApi = SlateExtensionConfig['api'];
type DebugConfig = PluginConfig<'debug', {
    isProduction: boolean;
    logger: Partial<Record<LogLevel, LogFunction>>;
    logLevel: LogLevel;
    throwErrors: boolean;
}, {
    debug: {
        error: (message: string | unknown, type?: DebugErrorType, details?: any) => void;
        info: (message: string, type?: DebugErrorType, details?: any) => void;
        log: (message: string, type?: DebugErrorType, details?: any) => void;
        warn: (message: string, type?: DebugErrorType, details?: any) => void;
    };
}>;
type LengthConfig = PluginConfig<'length', {
    maxLength: number;
}>;
type LogFunction = (message: string, type?: DebugErrorType, details?: any) => void;

type ParagraphConfig = PluginConfig<'p'>;
declare const BaseParagraphPlugin: SlatePlugin<PluginConfig<"p", {}, {}, {}, {}>>;

type AnyPluginConfig = {
    key: any;
    api: any;
    options: any;
    selectors: any;
    transforms: any;
};
type BaseDeserializer = AnyObject & {
    /**
     * Deserialize an element. Overrides plugin.isElement.
     *
     * @default plugin.isElement
     */
    isElement?: boolean;
    /**
     * Deserialize a leaf. Overrides plugin.isLeaf.
     *
     * @default plugin.isLeaf
     */
    isLeaf?: boolean;
};
type BaseHtmlDeserializer = BaseDeserializer & {
    /** List of HTML attribute names to store their values in `node.attributes`. */
    attributeNames?: string[];
    rules?: {
        /**
         * Deserialize an element:
         *
         * - If this option (string) is in the element attribute names.
         * - If this option (object) values match the element attributes.
         */
        validAttribute?: Record<string, string[] | string> | string;
        /** Valid element `className`. */
        validClassName?: string;
        /** Valid element `nodeName`. Set '*' to allow any node name. */
        validNodeName?: string[] | string;
        /**
         * Valid element style values. Can be a list of string (only one match is
         * needed).
         */
        validStyle?: Partial<Record<keyof CSSStyleDeclaration, string[] | string | undefined>>;
    }[];
    /** Whether or not to include deserialized children on this node */
    withoutChildren?: boolean;
};
type BaseInjectProps = {
    /**
     * Object whose keys are node values and values are classNames which will be
     * extended.
     */
    classNames?: AnyObject;
    /**
     * Default node value. The node key would be unset if the node value =
     * defaultNodeValue.
     */
    defaultNodeValue?: any;
    /** Node key to map to the styles. */
    nodeKey?: string;
    /**
     * Style key to override.
     *
     * @default nodeKey
     */
    styleKey?: keyof CSSStyleDeclaration;
    /** List of supported node values. */
    validNodeValues?: any[];
};
type BasePlugin<C extends AnyPluginConfig = PluginConfig> = {
    /** Unique identifier for this plugin. */
    key: C['key'];
    /** API methods provided by this plugin. */
    api: InferApi<C>;
    /**
     * An array of plugin keys that this plugin depends on. These plugins will be
     * loaded before this plugin.
     */
    dependencies: string[];
    inject: Nullable<{
        /** Plugin keys of elements to exclude the children from */
        excludeBelowPlugins?: string[];
        /** Plugin keys of elements to exclude */
        excludePlugins?: string[];
        /** Whether to filter blocks */
        isBlock?: boolean;
        /** Whether to filter elements */
        isElement?: boolean;
        /** Whether to filter leaves */
        isLeaf?: boolean;
        /** Filter nodes with path above this level. */
        maxLevel?: number;
        /**
         * Plugin keys used by {@link InjectNodeProps} and the targetPluginToInject
         * function. For plugin injection by key, use the inject.plugins property.
         *
         * @default [ParagraphPlugin.key]
         */
        targetPlugins?: string[];
    }>;
    /** Node-specific configuration for this plugin. */
    node: BasePluginNode<C>;
    /** Extended properties used by any plugin as options. */
    options: InferOptions<C>;
    /** Store for managing plugin options. */
    optionsStore: TStateApi<C['options'], [
        ['zustand/mutative-x', never]
    ], {}, C['selectors']>;
    override: {
        /** Enable or disable plugins */
        enabled?: Partial<Record<string, boolean>>;
    };
    /**
     * Defines the order in which plugins are registered and executed.
     *
     * Plugins with higher priority values are registered and executed before
     * those with lower values. This affects two main aspects:
     *
     * 1. Plugin Order: Plugins with higher priority will be added to the editor
     *    earlier.
     * 2. Execution Order: For operations that involve multiple plugins (e.g., editor
     *    methods), plugins with higher priority will be processed first.
     *
     * @default 100
     */
    priority: number;
    render: Nullable<{
        /**
         * Renders a component above the `Editable` component but within the `Slate`
         * wrapper. Useful for adding UI elements that should appear above the
         * editable area.
         */
        aboveEditable?: React.FC<{
            children: React.ReactNode;
        }>;
        /**
         * Renders a component above the `Slate` wrapper. This is the outermost
         * render position in the editor structure.
         */
        aboveSlate?: React.FC<{
            children: React.ReactNode;
        }>;
        /**
         * Specifies the HTML tag name to use when rendering the node component.
         * Only used when no custom `component` is provided for the plugin.
         *
         * @default 'div' for elements, 'span' for leaves
         */
        as?: keyof HTMLElementTagNameMap;
        /**
         * Renders a component below leaf nodes when `isLeaf: true` and
         * `isDecoration: false`. Use `render.node` instead when `isDecoration:
         * true`.
         */
        leaf?: NodeComponent;
        /**
         * Renders a component for:
         *
         * - Elements nodes if `isElement: true`
         * - Below text nodes if `isLeaf: true` and `isDecoration: false`
         * - Below leaf if `isLeaf: true` and `isDecoration: true`
         */
        node?: NodeComponent;
    }>;
    rules: {
        /**
         * Defines actions on insert break based on block state.
         *
         * - `'default'`: Default behavior
         * - `'exit'`: Exit the current block
         * - `'reset'`: Reset block to default paragraph type
         * - `'lineBreak'`: Insert newline character
         * - `'deleteExit'`: Delete backward then exit
         */
        break?: BreakRules;
        /**
         * Defines actions on delete based on block state.
         *
         * - `'default'`: Default behavior
         * - `'reset'`: Reset block to default paragraph type
         */
        delete?: DeleteRules;
        /** Defines the behavior of merging nodes. */
        merge?: MergeRules;
        /** Defines the behavior of normalizing nodes. */
        normalize?: NormalizeRules;
        /** Defines the behavior of selection. */
        selection?: SelectionRules;
    };
    /** Selectors for the plugin. */
    selectors: InferSelectors<C>;
    /** Transforms (state-modifying operations) that can be applied to the editor. */
    transforms: InferTransforms<C>;
    /**
     * Configures edit-only behavior for various plugin functionalities.
     *
     * - If `true` (boolean):
     *
     *   - `render`, `handlers`, and `inject.nodeProps` are active only when the
     *       editor is NOT read-only.
     * - If an object ({@link EditOnlyConfig}): Allows fine-grained control:
     *
     *   - `render`: Edit-only by default (true if not specified). Set to `false` to
     *       always be active.
     *   - `handlers`: Edit-only by default (true if not specified). Set to `false` to
     *       always be active.
     *   - `inject` (for `inject.nodeProps`): Edit-only by default (true if not
     *       specified). Set to `false` to always be active.
     *   - `normalizeInitialValue`: NOT edit-only by default (false if not specified).
     *       Set to `true` to make it edit-only.
     */
    editOnly?: EditOnlyConfig | boolean;
    /**
     * Enables or disables the plugin. Used by Plate to determine if the plugin
     * should be used.
     */
    enabled?: boolean;
};
type BasePluginContext<C extends AnyPluginConfig = PluginConfig> = {
    api: C['api'] & EditorApi & CorePluginApi;
    setOptions: {
        (options: (state: Draft<Partial<InferOptions<C>>>) => void): void;
        (options: Partial<InferOptions<C>>): void;
    };
    tf: C['transforms'] & EditorTransforms & CorePluginTransforms;
    type: string;
    getOption: <K extends keyof InferOptions<C> | keyof InferSelectors<C> | 'state'>(key: K, ...args: K extends keyof InferSelectors<C> ? Parameters<InferSelectors<C>[K]> : unknown[]) => K extends 'state' ? InferOptions<C> : K extends keyof InferSelectors<C> ? ReturnType<InferSelectors<C>[K]> : K extends keyof InferOptions<C> ? InferOptions<C>[K] : never;
    getOptions: () => InferOptions<C>;
    setOption: <K extends keyof InferOptions<C>>(optionKey: K, value: InferOptions<C>[K]) => void;
};
type BasePluginNode<C extends AnyPluginConfig = PluginConfig> = {
    /**
     * Specifies the type identifier for this plugin's nodes.
     *
     * For elements (when {@link isElement} is `true`):
     *
     * - The {@link NodeComponent} will be used for any node where `node.type ===
     *   type`.
     *
     * For leaves/marks (when {@link isLeaf} is `true`):
     *
     * - The {@link NodeComponent} will be used for any leaf where `node[type] ===
     *   true`.
     *
     * This property is crucial for Plate to correctly match nodes to their
     * respective plugins.
     *
     * @default plugin.key
     */
    type: string;
    component?: NodeComponent | null;
    /**
     * Controls which (if any) attribute names in the `attributes` property of an
     * element will be passed as `nodeProps` to the {@link NodeComponent}, and
     * subsequently rendered as DOM attributes.
     *
     * WARNING: If used improperly, this property WILL make your application
     * vulnerable to cross-site scripting (XSS) or information exposure attacks.
     *
     * For example, if the `href` attribute is allowed and the component passes
     * `nodeProps` to an `<a>` element, then attackers can direct users to open a
     * document containing a malicious link element:
     *
     * { type: 'link', url: 'https://safesite.com/', attributes: { href:
     * 'javascript:alert("xss")' }, children: [{ text: 'Click me' }], }
     *
     * The same is true of the `src` attribute when passed to certain HTML
     * elements, such as `<iframe>`.
     *
     * If the `style` attribute (or another attribute that can load URLs, such as
     * `background`) is allowed, then attackers can direct users to open a
     * document that will send a HTTP request to an arbitrary URL. This can leak
     * the victim's IP address or confirm to the attacker that the victim opened
     * the document.
     *
     * Before allowing any attribute name, ensure that you thoroughly research and
     * assess any potential risks associated with it.
     *
     * @default [ ]
     */
    dangerouslyAllowAttributes?: string[];
    /**
     * Indicates if this plugin's elements are primarily containers for other
     * content. Container elements are typically unwrapped when querying
     * fragments.
     *
     * Examples: table, tr, td, column, column_group
     *
     * @default false
     */
    isContainer?: boolean;
    /**
     * Indicates if this plugin's nodes can be rendered as decorated leaf. Set to
     * false to render node component only once per text node.
     *
     * @default true
     */
    isDecoration?: boolean;
    /**
     * Indicates if this plugin's nodes should be rendered as elements. Used by
     * Plate for {@link NodeComponent} rendering as elements.
     */
    isElement?: boolean;
    /**
     * Indicates if this plugin's elements should be treated as inline. Used by
     * the inlineVoid core plugin.
     */
    isInline?: boolean;
    /**
     * Indicates if this plugin's nodes should be rendered as leaves. Used by
     * Plate for {@link NodeComponent} rendering as leaves.
     */
    isLeaf?: boolean;
    /**
     * Indicates if this plugin's void elements should be markable. Used by the
     * inlineVoid core plugin.
     */
    isMarkableVoid?: boolean;
    /**
     * Whether the node is selectable.
     *
     * @default true
     */
    isSelectable?: boolean;
    /**
     * Indicates whether this element enforces strict sibling type constraints.
     * Set to true `true` when the element only allows specific siblings (e.g.,
     * `td` can only have `td` siblings, `column` can only have `column` siblings)
     * and prevents standard text blocks like paragraphs from being inserted as
     * siblings.
     */
    isStrictSiblings?: boolean;
    /**
     * Property used by `inlineVoid` core plugin to set elements of this `type` as
     * void.
     */
    isVoid?: boolean;
    /**
     * Function that returns an object of data attributes to be added to the
     * element.
     */
    toDataAttributes?: (options: BasePluginContext<C> & {
        node: TElement;
    }) => AnyObject | undefined;
};
type BaseSerializer = AnyObject;
type BaseTransformOptions = GetInjectNodePropsOptions & {
    nodeValue?: any;
    value?: any;
};
interface BreakRules {
    /** Action when Enter is pressed in an empty block. */
    empty?: 'default' | 'deleteExit' | 'exit' | 'reset';
    /**
     * Action when Enter is pressed at the end of an empty line. This is typically
     * used with `default: 'lineBreak'`.
     *
     * Example:
     *
     * ```tsx
     *     <blockquote>
     *     This is some text\n
     *     |
     *     </blockquote>
     * ```
     */
    emptyLineEnd?: 'default' | 'deleteExit' | 'exit';
    /** Default action when Enter is pressed. Defaults to splitting the block. */
    default?: 'default' | 'deleteExit' | 'exit' | 'lineBreak';
    /** If true, the new block after splitting will be reset to the default type. */
    splitReset?: boolean;
}
interface MergeRules {
    /** Whether to remove the node when it's empty. */
    removeEmpty?: boolean;
}
interface NormalizeRules {
    /** Whether to remove nodes with empty text. */
    removeEmpty?: boolean;
}
interface DeleteRules {
    /**
     * Action when Backspace is pressed at the start of the block. This applies
     * whether the block is empty or not.
     *
     * Example:
     *
     * ```tsx
     *     <blockquote>
     *     |Text
     *     </blockquote>
     * ```
     */
    start?: 'default' | 'reset';
    /** Action when Backspace is pressed and the block is empty. */
    empty?: 'default' | 'reset';
}
interface SelectionRules {
    /**
     * Defines the selection behavior at the boundaries of nodes.
     *
     * - `directional`: Selection affinity is determined by the direction of cursor
     *   movement. Maintains inward or outward affinity based on approach.
     * - `outward`: Forces outward affinity. Typing at the edge of a mark will not
     *   apply the mark to new text.
     * - `hard`: Creates a 'hard' edge that requires two key presses to move across.
     *   Uses offset-based navigation.
     * - `default`: Uses Slate's default behavior.
     */
    affinity?: 'default' | 'directional' | 'hard' | 'outward';
}
type MatchRules = 'break.default' | 'break.empty' | 'break.emptyLineEnd' | 'break.splitReset' | 'delete.empty' | 'delete.start' | 'merge.removeEmpty' | 'normalize.removeEmpty' | 'selection.affinity';
type EditOnlyConfig = {
    /**
     * If true, `handlers` are only active when the editor is not read-only.
     *
     * @default true (when `editOnly` is an object or `true` boolean)
     */
    handlers?: boolean;
    /**
     * If true, `inject.nodeProps` is only active when the editor is not
     * read-only.
     *
     * @default true (when `editOnly` is an object or `true` boolean)
     */
    inject?: boolean;
    /**
     * If true, `normalizeInitialValue` is only called when the editor is not
     * read-only.
     *
     * @default false (This is an exception. It's not edit-only by default, even if `editOnly` is true or an object, unless explicitly set to true here).
     */
    normalizeInitialValue?: boolean;
    /**
     * If true, `render` functions are only active when the editor is not
     * read-only.
     *
     * @default true (when `editOnly` is an object or `true` boolean)
     */
    render?: boolean;
};
type ExtendConfig<C extends PluginConfig, EO = {}, EA = {}, ET = {}, ES = {}> = {
    key: C['key'];
    api: C['api'] & EA;
    options: C['options'] & EO;
    selectors: C['selectors'] & ES;
    transforms: C['transforms'] & ET;
};
interface GetInjectNodePropsOptions {
    /** Existing className. */
    className?: string;
    /** Style value or className key. */
    element?: TElement;
    /** Existing style. */
    style?: CSSStyleDeclaration;
    /** Style value or className key. */
    text?: TText;
}
interface GetInjectNodePropsReturnType extends AnyObject {
    className?: string;
    style?: CSSStyleDeclaration;
}
type InferKey<P> = P extends PluginConfig ? P['key'] : never;
type InferApi<P> = P extends PluginConfig ? P['api'] : never;
type InferOptions<P> = P extends PluginConfig ? P['options'] : never;
type InferSelectors<P> = P extends PluginConfig ? P['selectors'] : never;
type InferTransforms<P> = P extends PluginConfig ? P['transforms'] : never;
/**
 * Renders a component for Slate Nodes (elements if `isElement: true` or leaves
 * if `isLeaf: true`) that match this plugin's type. This is the primary render
 * method for plugin-specific node content.
 *
 * @default DefaultElement for elements, DefaultLeaf for leaves
 */
type NodeComponent<T = any> = React.FC<T>;
type NodeComponents = Record<string, NodeComponent>;
type ParserOptions = {
    data: string;
    dataTransfer: DataTransfer;
    mimeType: string;
};
type PluginConfig<K extends string = any, O = {}, A = {}, T = {}, S = {}> = {
    key: K;
    api: A;
    options: O;
    selectors: S;
    transforms: T;
};
type WithAnyKey<C extends AnyPluginConfig = PluginConfig> = PluginConfig<any, InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>;
type WithRequiredKey<P = {}> = (P extends {
    key: string;
} ? P : never) | {
    key: string;
};

type BaseEditor = EditorBase & {
    /** DOM state */
    dom: {
        /** Whether the editor is composing text. */
        composing: boolean;
        /** The current keyboard event. */
        currentKeyboardEvent: KeyboardEventLike | null;
        /** Whether the editor is focused. */
        focused: boolean;
        /** The previous selection. */
        prevSelection: TRange | null;
        /** Whether the editor is read-only. */
        readOnly: boolean;
    };
    meta: EditorBase['meta'] & {
        /**
         * A key that can be used to uniquely identify the editor. For RSC usage,
         * use `uid` instead.
         */
        key: any;
        /** A record of plugin components. */
        components: NodeComponents;
        /** Whether the editor is a fallback editor. */
        isFallback: boolean;
        /** Plugin cache by feature. */
        pluginCache: {
            decorate: string[];
            handlers: {
                onChange: string[];
                onNodeChange: string[];
                onTextChange: string[];
            };
            inject: {
                nodeProps: string[];
            };
            node: {
                isContainer: string[];
                isLeaf: string[];
                isText: string[];
                leafProps: string[];
                textProps: string[];
                /** Node types to plugin keys. */
                types: Record<string, string>;
            };
            normalizeInitialValue: string[];
            render: {
                aboveEditable: string[];
                aboveNodes: string[];
                aboveSlate: string[];
                afterContainer: string[];
                afterEditable: string[];
                beforeContainer: string[];
                beforeEditable: string[];
                belowNodes: string[];
                belowRootNodes: string[];
            };
            rules: {
                match: string[];
            };
            useHooks: string[];
        };
        /** All plugins. */
        pluginList: any[];
        /**
         * A stable unique identifier that remains constant from Plate RSC to client
         * hydration.
         */
        uid?: string;
    };
    plugins: Record<string, any>;
    setOptions: {
        <C extends AnyPluginConfig>(plugin: WithRequiredKey<C>, options: (state: Draft<Partial<InferOptions<C>>>) => void): void;
        <C extends AnyPluginConfig>(plugin: WithRequiredKey<C>, options: Partial<InferOptions<C>>): void;
    };
    getInjectProps: <C extends AnyPluginConfig = PluginConfig>(plugin: WithRequiredKey<C>) => InjectNodeProps<C>;
    getOption: <C extends AnyPluginConfig, StateType extends InferOptions<C>, TSelectors extends InferSelectors<C>, K extends keyof StateType | keyof TSelectors | 'state'>(plugin: WithRequiredKey<C>, key: K, ...args: K extends keyof TSelectors ? Parameters<TSelectors[K]> : []) => K extends 'state' ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never;
    getOptions: <C extends AnyPluginConfig = PluginConfig>(plugin: WithRequiredKey<C>) => InferOptions<C>;
    getOptionsStore: <C extends AnyPluginConfig>(plugin: WithRequiredKey<C>) => TStateApi<InferOptions<C>, [
        ['zustand/mutative-x', never]
    ], {}, InferSelectors<C>>;
    getPlugin: <C extends AnyPluginConfig = PluginConfig>(plugin: WithRequiredKey<C>) => C extends {
        node: any;
    } ? C : EditorPlugin<C>;
    getType: (pluginKey: string) => string;
    setOption: <C extends AnyPluginConfig, K extends keyof InferOptions<C>>(plugin: WithRequiredKey<C>, optionKey: K, value: InferOptions<C>[K]) => void;
};
type InferPlugins<T extends AnyPluginConfig[]> = T[number];
type KeyofPlugins<T extends AnyPluginConfig> = (string & {}) | InferKey<CorePlugin | T>;
type KeyofNodePlugins<T extends AnyPluginConfig> = (string & {}) | InferKey<T | typeof BaseParagraphPlugin>;
type SlateEditor = BaseEditor & {
    api: EditorApi & UnionToIntersection<InferApi<CorePlugin>>;
    meta: BaseEditor['meta'] & {
        /** An array of plugins that are currently being used by the editor. */
        pluginList: AnyEditorPlugin[];
        shortcuts: any;
    };
    plugins: Record<string, AnyEditorPlugin>;
    tf: EditorTransforms & UnionToIntersection<InferTransforms<CorePlugin>>;
    transforms: EditorTransforms & UnionToIntersection<InferTransforms<CorePlugin>>;
    getApi: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => SlateEditor['api'] & InferApi<C>;
    getPlugin: <C extends AnyPluginConfig = PluginConfig>(plugin: WithRequiredKey<C>) => C extends {
        node: any;
    } ? C : EditorPlugin<C>;
    getTransforms: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => SlateEditor['tf'] & InferTransforms<C>;
};
type TSlateEditor<V extends Value = Value, P extends AnyPluginConfig = CorePlugin> = SlateEditor & {
    api: EditorApi<V> & UnionToIntersection<InferApi<CorePlugin | P>>;
    children: V;
    meta: BaseEditor['meta'] & {
        pluginList: P[];
        shortcuts: any;
    };
    plugins: {
        [K in P['key']]: Extract<P, {
            key: K;
        }>;
    };
    tf: EditorTransforms<V> & UnionToIntersection<InferTransforms<CorePlugin | P>>;
    transforms: EditorTransforms<V> & UnionToIntersection<InferTransforms<CorePlugin | P>>;
    getApi: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => TSlateEditor<V>['api'] & InferApi<C>;
    getTransforms: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => TSlateEditor<V>['tf'] & InferTransforms<C>;
};

type BaseWithSlateOptions<P extends AnyPluginConfig = CorePlugin> = {
    /**
     * Unique identifier for the editor instance.
     *
     * @default nanoid()
     */
    id?: string;
    /**
     * Determines which mark/element to apply at boundaries between different
     * marks, based on cursor movement using the left/right arrow keys.
     *
     * Example: <text bold>Bold</text><cursor><text italic>Italic</text>
     *
     * If the cursor moved here from the left (via → key), typing applies
     * **bold**.
     *
     * If the cursor moved here from the right (via ← key), typing applies
     * _italic_.
     *
     * Without mark affinity, the preceding mark (**bold**) is always applied
     * regardless of direction.
     *
     * @default true
     */
    affinity?: boolean;
    /**
     * Select the editor after initialization.
     *
     * @default false
     *
     * - `true` | 'end': Select the end of the editor
     * - `false`: Do not select anything
     * - `'start'`: Select the start of the editor
     */
    autoSelect?: boolean | 'end' | 'start';
    /**
     * Configure Slate's chunking optimization, which reduces latency while
     * typing. Set to `false` to disable.
     *
     * @default true
     * @see https://docs.slatejs.org/walkthroughs/09-performance
     */
    chunking?: ChunkingConfig['options'] | boolean;
    /** Specifies the component for each plugin key. */
    components?: NodeComponents;
    /** Specifies the component for each plugin key. */
    /**
     * Specifies the maximum number of characters allowed in the editor. When the
     * limit is reached, further input will be prevented.
     */
    maxLength?: number;
    /**
     * Configuration for automatic node ID generation and management.
     *
     * Unless set to `false`, the editor automatically adds unique IDs to nodes
     * through the core NodeIdPlugin:
     *
     * - Normalizes the initial value for missing IDs
     * - Adds IDs to new nodes during insertion
     * - Preserves or reuses IDs on undo/redo and copy/paste operations
     * - Handles ID conflicts and duplicates
     *
     * @default { idKey: 'id', filterInline: true, filterText: true, idCreator: () => nanoid(10) }
     */
    nodeId?: NodeIdConfig['options'] | boolean;
    /**
     * Array of plugins to be loaded into the editor. Plugins extend the editor's
     * functionality and define custom behavior.
     */
    plugins?: P[];
    /**
     * Editor read-only initial state. For dynamic read-only control, use the
     * `Plate.readOnly` prop instead.
     *
     * @default false
     */
    readOnly?: boolean;
    /**
     * Initial selection state for the editor. Defines where the cursor should be
     * positioned when the editor loads.
     */
    selection?: TSelection;
    /**
     * When `true`, normalizes the initial `value` passed to the editor. This is
     * useful when adding normalization rules to already existing content or when
     * the initial value might not conform to the current schema.
     *
     * Note: Normalization may take time for large documents.
     *
     * @default false
     */
    shouldNormalizeEditor?: boolean;
    /**
     * When `true`, skips the initial value, selection, and normalization logic.
     * Useful when the editor state is managed externally (e.g., with Yjs
     * collaboration) or when you want to manually control the initialization
     * process.
     *
     * @default false
     */
    skipInitialization?: boolean;
};
type WithSlateOptions<V extends Value = Value, P extends AnyPluginConfig = CorePlugin> = BaseWithSlateOptions<P> & Pick<Partial<AnySlatePlugin>, 'api' | 'decorate' | 'extendEditor' | 'inject' | 'normalizeInitialValue' | 'options' | 'override' | 'transforms'> & {
    /**
     * Initial content for the editor.
     *
     * Can be:
     *
     * - A static value (array of nodes)
     * - An HTML string that will be deserialized
     * - A function that returns a value or Promise<value>
     * - `null` for an empty editor
     *
     * @default [{ type: 'p'; children: [{ text: '' }] }]
     */
    value?: ((editor: SlateEditor) => Promise<V> | V) | V | string | null;
    /** Function to configure the root plugin */
    rootPlugin?: (plugin: AnySlatePlugin) => AnySlatePlugin;
    /**
     * Callback called when the editor is ready (after initialization
     * completes).
     */
    onReady?: (ctx: {
        editor: SlateEditor;
        isAsync: boolean;
        value: V;
    }) => void;
};
/**
 * Applies Plate enhancements to an editor instance (non-React version).
 *
 * @remarks
 *   This function supports server-side usage as it doesn't include React-specific
 *   features like component rendering or hooks integration.
 * @see {@link createSlateEditor} for a higher-level non-React editor creation function.
 * @see {@link createPlateEditor} for a React-specific version of editor creation.
 * @see {@link usePlateEditor} for a memoized React version.
 * @see {@link withPlate} for the React-specific enhancement function.
 */
declare const withSlate: <V extends Value = Value, P extends AnyPluginConfig = CorePlugin>(e: Editor, { id, affinity, autoSelect, chunking, maxLength, nodeId, plugins, readOnly, rootPlugin, selection, shouldNormalizeEditor, skipInitialization, value, onReady, ...pluginConfig }?: WithSlateOptions<V, P>) => TSlateEditor<V, InferPlugins<P[]>>;
type CreateSlateEditorOptions<V extends Value = Value, P extends AnyPluginConfig = CorePlugin> = WithSlateOptions<V, P> & {
    /**
     * Initial editor to be extended with `withSlate`.
     *
     * @default createEditor()
     */
    editor?: Editor;
};
/**
 * Creates a Slate editor (non-React version).
 *
 * This function creates a fully configured Plate editor instance that can be
 * used in non-React environments or server-side contexts. It applies all the
 * specified plugins and configurations to create a functional editor.
 *
 * Examples:
 *
 * ```ts
 * const editor = createSlateEditor({
 *   plugins: [ParagraphPlugin, HeadingPlugin],
 *   value: [{ type: 'p', children: [{ text: 'Hello world!' }] }],
 * });
 *
 * // Editor with custom configuration
 * const editor = createSlateEditor({
 *   plugins: [ParagraphPlugin],
 *   maxLength: 1000,
 *   nodeId: { idCreator: () => uuidv4() },
 *   autoSelect: 'end',
 * });
 *
 * // Server-side editor
 * const editor = createSlateEditor({
 *   plugins: [ParagraphPlugin],
 *   value: '<p>HTML content</p>',
 *   skipInitialization: true,
 * });
 * ```
 *
 * @see {@link createPlateEditor} for a React-specific version of editor creation.
 * @see {@link usePlateEditor} for a memoized React version.
 * @see {@link withSlate} for the underlying function that applies Slate enhancements to an editor.
 */
declare const createSlateEditor: <V extends Value = Value, P extends AnyPluginConfig = CorePlugin>({ editor, ...options }?: CreateSlateEditorOptions<V, P>) => TSlateEditor<V, P>;

export { type GetInjectNodePropsOptions as $, type AnyEditorPlugin as A, type BaseEditor as B, type ChunkingConfig as C, type BasePluginContext as D, type EditableProps as E, type BasePluginNode as F, type BaseSerializer as G, type HtmlDeserializer as H, type InferConfig as I, type BaseTransformOptions as J, type KeyofPlugins as K, type LengthConfig as L, type BreakRules as M, type NodeIdConfig as N, type OverrideEditor as O, type PluginConfig as P, type MergeRules as Q, type RenderElementProps as R, type SlatePlugin as S, type TSlateEditor as T, type NormalizeRules as U, type DeleteRules as V, type WithAutoScrollOptions as W, type SelectionRules as X, type MatchRules as Y, type EditOnlyConfig as Z, type ExtendConfig as _, type SlateEditor as a, resetBlock as a$, type GetInjectNodePropsReturnType as a0, type InferKey as a1, type InferApi as a2, type InferOptions as a3, type InferSelectors as a4, type InferTransforms as a5, type NodeComponent as a6, type NodeComponents as a7, type WithAnyKey as a8, type HandlerReturnType as a9, type CorePluginTransforms as aA, type CorePluginApi as aB, type DebugConfig as aC, type ElementAffinity as aD, type AffinityConfig as aE, AffinityPlugin as aF, ChunkingPlugin as aG, type DebugErrorType as aH, type LogLevel as aI, PlateError as aJ, DebugPlugin as aK, AUTO_SCROLL as aL, type DomConfig as aM, DOMPlugin as aN, withScrolling as aO, type NodeIdOptions as aP, type NormalizeNodeIdOptions as aQ, normalizeNodeId as aR, NodeIdPlugin as aS, type ParagraphConfig as aT, BaseParagraphPlugin as aU, type SlateExtensionConfig as aV, SlateExtensionPlugin as aW, type InitOptions as aX, init as aY, type InsertExitBreakOptions as aZ, insertExitBreak as a_, type Decorate as aa, type Deserializer as ab, type ExtendEditorApi as ac, type ExtendEditorTransforms as ad, type HtmlSerializer as ae, type InjectNodeProps as af, type LeafStaticProps as ag, type NodeStaticProps as ah, type NodeStaticWrapperComponent as ai, type NodeStaticWrapperComponentProps as aj, type NodeStaticWrapperComponentReturnType as ak, type NormalizeInitialValue as al, type Parser as am, type PartialEditorPlugin as an, type RenderStaticNodeWrapper as ao, type RenderStaticNodeWrapperFunction as ap, type RenderStaticNodeWrapperProps as aq, type Serializer as ar, type SlatePluginConfig as as, type SlatePlugins as at, type TextStaticProps as au, type TransformOptions as av, type SlateShortcut as aw, type CorePlugin as ax, type GetCorePluginsOptions as ay, getCorePlugins as az, type RenderLeafProps as b, setValue as b0, type BoxStaticProps as b1, type SlateRenderElementProps as b2, type SlateRenderLeafProps as b3, type SlateRenderTextProps as b4, ElementStatic as b5, LeafStatic as b6, PlateStatic as b7, useNodeAttributes as b8, type SlateElementProps as b9, type SlateNodeProps as ba, type SlateHTMLProps as bb, type StyledSlateElementProps as bc, SlateElement as bd, type SlateTextProps as be, type StyledSlateTextProps as bf, SlateText as bg, type SlateLeafProps as bh, type StyledSlateLeafProps as bi, SlateLeaf as bj, createStaticEditor as bk, type RenderChunkFn as bl, type RenderChunkProps as bm, type RenderElementFn as bn, type RenderLeafFn as bo, type RenderTextFn as bp, type RenderTextProps as c, type PlateStaticProps as d, type ScrollMode as e, type AutoScrollOperationsMap as f, type SlateRenderNodeProps as g, type SlatePluginMethods as h, type AnyPluginConfig as i, type WithRequiredKey as j, type SlatePluginContext as k, type EditorPlugin as l, type ExtendEditor as m, type AnySlatePlugin as n, type ParserOptions as o, type InferPlugins as p, type KeyofNodePlugins as q, type BaseWithSlateOptions as r, type WithSlateOptions as s, type CreateSlateEditorOptions as t, createSlateEditor as u, type BaseDeserializer as v, withSlate as w, type BaseHtmlDeserializer as x, type BaseInjectProps as y, type BasePlugin as z };
