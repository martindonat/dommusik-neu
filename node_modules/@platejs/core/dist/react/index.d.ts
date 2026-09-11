export { DefaultPlaceholder, Editable, RenderPlaceholderProps, Slate, useComposing, useFocused, useReadOnly, useSelected, withReact } from 'slate-react';
import React$1, { HTMLAttributes } from 'react';
import * as _platejs_slate from '@platejs/slate';
import { Value, Editor, EditorApi, EditorTransforms, Operation, DescendantIn, NodeEntry, DecoratedRange, Descendant, NodeOperation, TextOperation, TText, TElement, Path, ElementEntry, TRange, ValueOf, TSelection, TNode } from '@platejs/slate';
import { UnionToIntersection, Nullable, Deep2Partial, AnyObject, Modify, UnknownObject } from '@udecode/utils';
import { P as PluginConfig, a as SlateEditor, aX as InitOptions, aZ as InsertExitBreakOptions, e as ScrollMode, f as AutoScrollOperationsMap, W as WithAutoScrollOptions, m as ExtendEditor$1, aM as DomConfig, ax as CorePlugin, i as AnyPluginConfig, r as BaseWithSlateOptions, p as InferPlugins, B as BaseEditor, a2 as InferApi, a5 as InferTransforms, j as WithRequiredKey, a1 as InferKey, z as BasePlugin, D as BasePluginContext, a8 as WithAnyKey, a3 as InferOptions, a4 as InferSelectors, n as AnySlatePlugin, as as SlatePluginConfig, k as SlatePluginContext, aB as CorePluginApi, aA as CorePluginTransforms, a6 as NodeComponent, a9 as HandlerReturnType, y as BaseInjectProps, $ as GetInjectNodePropsOptions, J as BaseTransformOptions, a0 as GetInjectNodePropsReturnType, a7 as NodeComponents, o as ParserOptions, v as BaseDeserializer, G as BaseSerializer, x as BaseHtmlDeserializer, E as EditableProps, Y as MatchRules, S as SlatePlugin, bk as createStaticEditor, bm as RenderChunkProps, b as RenderLeafProps, R as RenderElementProps, c as RenderTextProps, bl as RenderChunkFn, bn as RenderElementFn, bo as RenderLeafFn, bp as RenderTextFn, d as PlateStaticProps } from '../withSlate-B8gBzRNS.js';
import { HotkeysOptions, Keys, HotkeysEvent } from '@udecode/react-hotkeys';
import * as zustand_x from 'zustand-x';
import { TCreatedStoreType, TEqualityChecker } from 'zustand-x';
export { useStoreSelect, useStoreState, useStoreValue, useTracked, useTrackedStore } from 'zustand-x';
import * as jotai from 'jotai';
import { Atom } from 'jotai';
export { atom } from 'jotai';
import * as jotai_x from 'jotai-x';
import { JotaiStore } from 'jotai-x';
export { createAtomStore, useStoreAtomState, useStoreAtomValue, useStoreSetAtom } from 'jotai-x';
import 'mutative';
import 'is-hotkey';

declare const SlateReactExtensionPlugin: PlatePlugin<PluginConfig<"slateExtension", {
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
}, {
    redecorate: () => void;
}, {
    reset: (options: _platejs_slate.ResetOptions | undefined) => void;
    init: ((args_0: InitOptions) => void) & ((args_0: InitOptions) => void);
    insertExitBreak: ((args_0?: InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: InsertExitBreakOptions | undefined) => true | undefined);
    resetBlock: ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined) & ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined);
    setValue: ((value?: string | _platejs_slate.Value | undefined) => void) & ((value?: string | _platejs_slate.Value | undefined) => void);
    apply: <N extends _platejs_slate.TElement | _platejs_slate.TText>(operation: _platejs_slate.Operation<N>) => void;
}, {}>>;

declare const EventEditorPlugin: PlatePlugin<PluginConfig<"eventEditor", {}, {}, {}, {}>>;

type EventEditorState = {
    /** Last editor id that has been blurred. */
    blur: string | null;
    /** Editor id that is currently being focused. */
    focus: string | null;
    /** Last editor id. */
    last: string | null;
};
/** Store where the keys are event names and the values are editor ids. */
declare const EventEditorStore: zustand_x.TStateApi<EventEditorState, [["zustand/mutative-x", never]], {}, {}>;
declare const useEventEditorValue: {
    <K extends keyof EventEditorState>(key: K): EventEditorState[K];
    <K extends never>(key: K, ...args: Parameters<{}[K]>): ReturnType<{}[K]>;
    (key: "state"): EventEditorState;
    <K extends keyof EventEditorState>(key: K, equalityFn?: zustand_x.TEqualityChecker<EventEditorState[K]> | undefined): EventEditorState[K];
    <K extends never>(key: K, ...args: [...Parameters<{}[K]>, (zustand_x.TEqualityChecker<ReturnType<{}[K]>> | undefined)?]): ReturnType<{}[K]>;
};

declare const getEventPlateId: (id?: string) => string;

declare const FOCUS_EDITOR_EVENT = "focus-editor-event";
declare const BLUR_EDITOR_EVENT = "blur-editor-event";
declare const useFocusEditorEvents: ({ editorRef, onEditorBlur, onEditorFocus, }: {
    editorRef: PlateEditor | null;
    onEditorBlur?: () => void;
    onEditorFocus?: () => void;
}) => void;

/** Whether the current editor is the last focused editor. */
declare const useFocusedLast: (id?: string) => boolean;

declare const ParagraphPlugin: PlatePlugin<PluginConfig<"p", {}, {}, {}, {}>>;

/** @see {@link withReact} */
declare const ReactPlugin: PlatePlugin<PluginConfig<"dom", {
    scrollMode?: ScrollMode;
    scrollOperations?: AutoScrollOperationsMap;
    scrollOptions?: _platejs_slate.ScrollIntoViewOptions;
}, {
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>>;

declare const withPlateReact: ExtendEditor$1<DomConfig>;

type PlateCorePlugin = CorePlugin | typeof EventEditorPlugin | typeof SlateReactExtensionPlugin;
type WithPlateOptions<V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin> = BaseWithSlateOptions<P> & Pick<Partial<AnyPlatePlugin>, 'api' | 'decorate' | 'extendEditor' | 'handlers' | 'inject' | 'normalizeInitialValue' | 'options' | 'override' | 'priority' | 'render' | 'shortcuts' | 'transforms' | 'useHooks'> & {
    value?: ((editor: PlateEditor) => Promise<V> | V) | V | string;
    rootPlugin?: (plugin: AnyPlatePlugin) => AnyPlatePlugin;
    onReady?: (ctx: {
        editor: PlateEditor;
        isAsync: boolean;
        value: V;
    }) => void;
};
/**
 * Applies Plate enhancements to an editor instance (React version).
 *
 * @remarks
 *   This function supports React-specific features including component rendering,
 *   event handlers, and React hooks integration.
 * @see {@link createPlateEditor} for a higher-level React editor creation function.
 * @see {@link usePlateEditor} for a memoized version in React components.
 * @see {@link withSlate} for the non-React version of editor enhancement.
 */
declare const withPlate: <V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin>(e: Editor, { plugins, ...options }?: WithPlateOptions<V, P>) => TPlateEditor<V, InferPlugins<P[]>>;
type CreatePlateEditorOptions<V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin> = WithPlateOptions<V, P> & {
    /**
     * Initial editor to be extended with `withPlate`.
     *
     * @default createEditor()
     */
    editor?: Editor;
};
/**
 * Creates a Plate editor (React version).
 *
 * This function creates a fully configured Plate editor instance with
 * React-specific enhancements including component rendering, event handlers,
 * and hooks integration. It applies all specified plugins and configurations to
 * create a functional editor.
 *
 * Examples:
 *
 * ```ts
 * const editor = createPlateEditor({
 *   plugins: [ParagraphPlugin, HeadingPlugin],
 *   value: [{ type: 'p', children: [{ text: 'Hello world!' }] }],
 * });
 *
 * // Editor with custom components
 * const editor = createPlateEditor({
 *   plugins: [ParagraphPlugin.withComponent(ParagraphElement)],
 *   components: { [CodePlugin.key]: CodeLeaf },
 * });
 *
 * // Editor with React-specific options
 * const editor = createPlateEditor({
 *   plugins: [ParagraphPlugin],
 *   handlers: { onKeyDown: customKeyHandler },
 * });
 * ```
 *
 * @see {@link createSlateEditor} for a non-React version of editor creation.
 * @see {@link usePlateEditor} for a memoized version in React components.
 * @see {@link withPlate} for the underlying function that applies Plate enhancements to an editor.
 */
declare const createPlateEditor: <V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin>({ editor, ...options }?: CreatePlateEditorOptions<V, P>) => TPlateEditor<V, InferPlugins<P[]>>;

type PlateEditor = BaseEditor & {
    api: EditorApi & UnionToIntersection<InferApi<PlateCorePlugin>>;
    meta: BaseEditor['meta'] & {
        pluginList: AnyEditorPlatePlugin[];
        shortcuts: Shortcuts;
    };
    plugins: Record<string, AnyEditorPlatePlugin>;
    tf: EditorTransforms & UnionToIntersection<InferTransforms<PlateCorePlugin>>;
    transforms: EditorTransforms & UnionToIntersection<InferTransforms<PlateCorePlugin>>;
    getApi: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => PlateEditor['api'] & InferApi<C>;
    getPlugin: <C extends AnyPluginConfig = PluginConfig>(plugin: WithRequiredKey<C>) => C extends {
        node: any;
    } ? C : EditorPlatePlugin<C>;
    getTransforms: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => PlateEditor['tf'] & InferTransforms<C>;
    uid?: string;
};
type FilterKeys<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P];
};
type TPlateEditor<V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin> = FilterKeys<PlateEditor, 'children' | 'operations'> & {
    api: EditorApi<V> & UnionToIntersection<InferApi<P | PlateCorePlugin>>;
    children: V;
    meta: BaseEditor['meta'] & {
        pluginList: P[];
        shortcuts: Shortcuts;
    };
    operations: Operation<DescendantIn<V>>[];
    plugins: {
        [K in P['key']]: Extract<P, {
            key: K;
        }>;
    };
    tf: EditorTransforms<V> & UnionToIntersection<InferTransforms<P | PlateCorePlugin>>;
    transforms: EditorTransforms<V> & UnionToIntersection<InferTransforms<P | PlateCorePlugin>>;
    getApi: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => TPlateEditor<V>['api'] & InferApi<C>;
    getTransforms: <C extends AnyPluginConfig = PluginConfig>(plugin?: WithRequiredKey<C>) => TPlateEditor<V>['tf'] & InferTransforms<C>;
};
type KeyofPlugins<T extends AnyPluginConfig> = (string & {}) | InferKey<PlateCorePlugin | T>;

type AnyEditorPlatePlugin = EditorPlatePlugin<AnyPluginConfig>;
type AnyPlatePlugin = PlatePlugin<AnyPluginConfig>;
/**
 * Property used by Plate to decorate editor ranges. If the function returns
 * undefined then no ranges are modified. If the function returns an array the
 * returned ranges are merged with the ranges called by other plugins.
 */
type Decorate<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C> & {
    entry: NodeEntry;
}) => DecoratedRange[] | undefined;
type Deserializer<C extends AnyPluginConfig = PluginConfig> = BaseDeserializer & {
    parse?: (options: PlatePluginContext<C> & {
        element: any;
    }) => Partial<Descendant> | undefined | void;
    query?: (options: PlatePluginContext<C> & {
        element: any;
    }) => boolean;
};
type EditableSiblingComponent = (editableProps: EditableProps) => React$1.ReactElement<any> | null;
type EditorPlatePlugin<C extends AnyPluginConfig = PluginConfig> = Omit<PlatePlugin<C>, keyof PlatePluginMethods | 'override' | 'plugins'>;
/** Plate plugin overriding the `editor` methods. Naming convention is `with*`. */
type ExtendEditor<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C>) => PlateEditor;
type ExtendEditorApi<C extends AnyPluginConfig = PluginConfig, EA = {}> = (ctx: PlatePluginContext<C>) => EA & Deep2Partial<EditorApi & CorePluginApi> & {
    [K in keyof InferApi<C>]?: InferApi<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferApi<C>[K]>) => ReturnType<InferApi<C>[K]> : InferApi<C>[K] extends Record<string, (...args: any[]) => any> ? {
        [N in keyof InferApi<C>[K]]?: (...args: Parameters<InferApi<C>[K][N]>) => ReturnType<InferApi<C>[K][N]>;
    } : never;
};
type ExtendEditorTransforms<C extends AnyPluginConfig = PluginConfig, ET = {}> = (ctx: PlatePluginContext<C>) => ET & Deep2Partial<EditorTransforms & CorePluginTransforms> & {
    [K in keyof InferTransforms<C>]?: InferTransforms<C>[K] extends (...args: any[]) => any ? (...args: Parameters<InferTransforms<C>[K]>) => ReturnType<InferTransforms<C>[K]> : InferTransforms<C>[K] extends Record<string, (...args: any[]) => any> ? {
        [N in keyof InferTransforms<C>[K]]?: (...args: Parameters<InferTransforms<C>[K][N]>) => ReturnType<InferTransforms<C>[K][N]>;
    } : never;
};
type HtmlDeserializer<C extends AnyPluginConfig = PluginConfig> = BaseHtmlDeserializer & {
    parse?: (options: PlatePluginContext<C> & {
        element: HTMLElement;
        node: AnyObject;
    }) => Partial<Descendant> | undefined | void;
    query?: (options: PlatePluginContext<C> & {
        element: HTMLElement;
    }) => boolean;
};
type HtmlReactSerializer<C extends AnyPluginConfig = PluginConfig> = {
    parse?: React$1.FC<PlateElementProps<TElement, C> & PlateLeafProps<TText, C>>;
    query?: (options: PlateElementProps) => boolean;
};
type HtmlSerializer<C extends AnyPluginConfig = PluginConfig> = {
    parse?: (options: PlatePluginContext<C> & {
        node: Descendant;
    }) => string;
    query?: (options: PlatePluginContext<C> & {
        node: Descendant;
    }) => boolean;
};
type InferConfig<P> = P extends PlatePlugin<infer C> | SlatePlugin<infer C> ? C : never;
/** Properties used by Plate to inject props into any {@link NodeComponent}. */
type InjectNodeProps<C extends AnyPluginConfig = PluginConfig> = BaseInjectProps & {
    /** Whether to inject the props. If true, overrides all other checks. */
    query?: (options: NonNullable<NonNullable<InjectNodeProps>> & PlatePluginContext<C> & {
        nodeProps: GetInjectNodePropsOptions;
    }) => boolean;
    /**
     * Transform the className.
     *
     * @default clsx(className, classNames[value])
     */
    transformClassName?: (options: TransformOptions<C>) => any;
    /**
     * Transform the node value for the style or className.
     *
     * @default nodeValue
     */
    transformNodeValue?: (options: TransformOptions<C>) => any;
    /** Transform the injected props. */
    transformProps?: (options: TransformOptions<C> & {
        props: GetInjectNodePropsReturnType;
    }) => AnyObject | undefined;
    /**
     * Transform the style.
     *
     * @default { ...style, [styleKey]: value }
     */
    transformStyle?: (options: TransformOptions<C>) => CSSStyleDeclaration;
};
type LeafNodeProps<C extends AnyPluginConfig = PluginConfig> = ((props: PlateLeafProps<TText, C>) => AnyObject | undefined) | AnyObject;
/**
 * Property used by Plate to override node `component` props. If function, its
 * returning value will be shallow merged to the old props, with the old props
 * as parameter. If object, its value will be shallow merged to the old props.
 */
type NodeProps<C extends AnyPluginConfig = PluginConfig> = ((props: PlateElementProps<TElement, C> & PlateLeafProps<TText, C>) => AnyObject | undefined) | AnyObject;
/** @deprecated Use {@link RenderNodeWrapper} instead. */
type NodeWrapperComponent<C extends AnyPluginConfig = PluginConfig> = (props: NodeWrapperComponentProps<C>) => NodeWrapperComponentReturnType<C>;
/** @deprecated Use {@link RenderNodeWrapperProps} instead. */
interface NodeWrapperComponentProps<C extends AnyPluginConfig = PluginConfig> extends PlateElementProps<TElement, C> {
    key: string;
}
/** @deprecated Use {@link RenderNodeWrapperFunction} instead. */
type NodeWrapperComponentReturnType<C extends AnyPluginConfig = PluginConfig> = React$1.FC<PlateElementProps<TElement, C>> | undefined;
type NormalizeInitialValue<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C> & {
    value: Value;
}) => void;
/**
 * Function called whenever a change occurs in the editor. Return `false` to
 * prevent calling the next plugin handler.
 *
 * @see {@link SlatePropsOnChange}
 */
type OnChange<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C> & {
    value: Value;
}) => HandlerReturnType;
/**
 * Function called whenever a node operation occurs in the editor. Return `true`
 * to prevent calling the next plugin handler.
 */
type OnNodeChange<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C> & {
    node: Descendant;
    operation: NodeOperation;
    prevNode: Descendant;
}) => HandlerReturnType;
/**
 * Function called whenever a text operation occurs in the editor. Return `true`
 * to prevent calling the next plugin handler.
 */
type OnTextChange<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C> & {
    node: Descendant;
    operation: TextOperation;
    prevText: string;
    text: string;
}) => HandlerReturnType;
type OverrideEditor<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C>) => {
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
/**
 * Used by parser plugins like html to deserialize inserted data to a slate
 * fragment. The fragment will be inserted to the editor if not empty.
 */
type Parser<C extends AnyPluginConfig = PluginConfig> = {
    /** Format to get data. Example data types are text/plain and text/uri-list. */
    format?: string[] | string;
    mimeTypes?: string[];
    /** Deserialize data to fragment */
    deserialize?: (options: ParserOptions & PlatePluginContext<C>) => Descendant[] | undefined;
    /**
     * Function called on `editor.tf.insertData` just before
     * `editor.tf.insertFragment`. Default: if the block above the selection is
     * empty and the first fragment node type is not inline, set the selected node
     * type to the first fragment node type.
     *
     * @returns If true, the next handlers will be skipped.
     */
    preInsert?: (options: ParserOptions & PlatePluginContext<C> & {
        fragment: Descendant[];
    }) => HandlerReturnType;
    /** Query to skip this plugin. */
    query?: (options: ParserOptions & PlatePluginContext<C>) => boolean;
    /** Transform the inserted data. */
    transformData?: (options: ParserOptions & PlatePluginContext<C>) => string;
    /** Transform the fragment to insert. */
    transformFragment?: (options: ParserOptions & PlatePluginContext<C> & {
        fragment: Descendant[];
    }) => Descendant[];
};
/** The `PlatePlugin` interface is a React interface for all plugins. */
type PlatePlugin<C extends AnyPluginConfig = PluginConfig> = BasePlugin<C> & Nullable<{
    /** @see {@link Decorate} */
    decorate?: Decorate<WithAnyKey<C>>;
    /** @see {@link ExtendEditor} */
    extendEditor?: ExtendEditor<WithAnyKey<C>>;
    /** Normalize initial value before passing it into the editor. */
    normalizeInitialValue?: NormalizeInitialValue<WithAnyKey<C>>;
    /** @see {@link UseHooks} */
    useHooks?: UseHooks<WithAnyKey<C>>;
}> & PlatePluginMethods<C> & {
    /**
     * Handlers called whenever the corresponding event occurs in the editor.
     * Event handlers can return a boolean flag to specify whether the event
     * can be treated as being handled. If it returns `true`, the next
     * handlers will not be called.
     */
    handlers: Nullable<DOMHandlers<WithAnyKey<C>> & {
        /** @see {@link OnChange} */
        onChange?: OnChange<WithAnyKey<C>>;
        /** @see {@link OnNodeChange} */
        onNodeChange?: OnNodeChange<WithAnyKey<C>>;
        /** @see {@link OnTextChange} */
        onTextChange?: OnTextChange<WithAnyKey<C>>;
    }>;
    /** Plugin injection. */
    inject: Nullable<{
        nodeProps?: InjectNodeProps<WithAnyKey<C>>;
        /**
         * Property that can be used by a plugin to allow other plugins to
         * inject code. For example, if multiple plugins have defined
         * `inject.editor.tf.insertData.transformData` for `key=HtmlPlugin.key`,
         * `insertData` plugin will call all of these `transformData` for
         * `HtmlPlugin.key` plugin. Differs from `override.plugins` as this is
         * not overriding any plugin.
         */
        plugins?: Record<string, Partial<EditorPlatePlugin<AnyPluginConfig>>>;
        /**
         * A function that returns a plugin config to be injected into other
         * plugins `inject.plugins` specified by targetPlugins.
         */
        targetPluginToInject?: (ctx: PlatePluginContext<C> & {
            targetPlugin: string;
        }) => Partial<PlatePlugin<AnyPluginConfig>>;
    }>;
    node: {
        /** Override `data-slate-leaf` element attributes */
        leafProps?: LeafNodeProps<WithAnyKey<C>>;
        /** Override node attributes */
        props?: NodeProps<WithAnyKey<C>>;
        /** Override `data-slate-node="text"` element attributes */
        textProps?: TextNodeProps<WithAnyKey<C>>;
    };
    override: {
        /** Replace plugin {@link NodeComponent} by key. */
        components?: NodeComponents;
        /** Extend {@link PlatePlugin} by key. */
        plugins?: Record<string, Partial<EditorPlatePlugin<AnyPluginConfig>>>;
    };
    /** @see {@link Parser} */
    parser: Nullable<Parser<WithAnyKey<C>>>;
    parsers: (Record<string, {
        /** @see {@link Deserializer} */
        deserializer?: Deserializer<WithAnyKey<C>>;
        /** @see {@link Serializer} */
        serializer?: Serializer<WithAnyKey<C>>;
    }> & {
        html?: never;
        htmlReact?: never;
    }) | {
        html?: Nullable<{
            /** @see {@link HtmlDeserializer} */
            deserializer?: HtmlDeserializer<WithAnyKey<C>>;
            /** @see {@link HtmlSerializer} */
            serializer?: HtmlSerializer<WithAnyKey<C>>;
        }>;
        htmlReact?: Nullable<{
            /** Function to deserialize HTML to Slate nodes using React. */
            serializer?: HtmlReactSerializer<WithAnyKey<C>>;
        }>;
    };
    /**
     * Recursive plugin support to allow having multiple plugins in a single
     * plugin. Plate eventually flattens all the plugins into the editor.
     */
    plugins: any[];
    render: Nullable<{
        /**
         * When other plugins' node components are rendered, this function can
         * return an optional wrapper function that turns a node's props to a
         * wrapper React node as its parent. Useful for wrapping or decorating
         * nodes with additional UI elements.
         *
         * NOTE: The function can run React hooks. NOTE: Do not run React hooks
         * in the wrapper function. It is not equivalent to a React component.
         */
        aboveNodes?: RenderNodeWrapper<WithAnyKey<C>>;
        /** Renders a component after the `Container` component. */
        afterContainer?: EditableSiblingComponent;
        /**
         * Renders a component after the `Editable` component. This is the last
         * render position within the editor structure.
         */
        afterEditable?: EditableSiblingComponent;
        /** Renders a component before the `Container` component. */
        beforeContainer?: EditableSiblingComponent;
        /** Renders a component before the `Editable` component. */
        beforeEditable?: EditableSiblingComponent;
        /**
         * When other plugins' node components are rendered, this function can
         * return an optional wrapper function that turns a node's props to a
         * wrapper React node. The wrapper node is the node's child and its
         * original children's parent. Useful for wrapping or decorating nodes
         * with additional UI elements.
         *
         * NOTE: The function can run React hooks. NOTE: Do not run React hooks
         * in the wrapper function. It is not equivalent to a React component.
         */
        belowNodes?: RenderNodeWrapper<WithAnyKey<C>>;
        /**
         * Function to render content below the root element but above its
         * children. Similar to belowNodes but renders directly in the element
         * rather than wrapping. Multiple plugins can provide this, and all
         * their content will be rendered in sequence.
         */
        belowRootNodes?: (props: PlateElementProps<TElement, C>) => React$1.ReactNode;
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
        } & PlatePluginContext<C>) => boolean;
    };
    /**
     * Keyboard shortcuts configuration mapping shortcut names to their key
     * combinations and handlers. Each shortcut can link to a transform
     * method, an API method, or use a custom handler function.
     */
    shortcuts: Partial<Record<(string & {}) | Exclude<keyof InferApi<C>[C['key']], keyof InferTransforms<C>[C['key']]> | keyof InferTransforms<C>[C['key']], Shortcut | null>>;
    useOptionsStore: TCreatedStoreType<C['options'], [
        ['zustand/mutative-x', never]
    ]>;
};
type PlatePluginConfig$2<K extends string = any, O = {}, A = {}, T = {}, S = {}, EO = {}, EA = {}, ET = {}, ES = {}> = Partial<Omit<PlatePlugin<PluginConfig<K, Partial<O>, A, T, S>>, keyof PlatePluginMethods | 'api' | 'node' | 'optionsStore' | 'transforms' | 'useOptionsStore'> & {
    api: EA;
    node: Partial<PlatePlugin<PluginConfig<K, O, A, T, S>>['node']>;
    options: EO;
    selectors: ES;
    transforms: ET;
}>;
type PlatePluginContext<C extends AnyPluginConfig = PluginConfig, E extends PlateEditor = PlateEditor> = BasePluginContext<C> & {
    editor: E;
    plugin: EditorPlatePlugin<C>;
};
type PlatePluginMethods<C extends AnyPluginConfig = PluginConfig> = {
    __apiExtensions: ((ctx: PlatePluginContext<AnyPluginConfig>) => any)[];
    __configuration: ((ctx: PlatePluginContext<AnyPluginConfig>) => any) | null;
    __extensions: ((ctx: PlatePluginContext<AnyPluginConfig>) => any)[];
    __selectorExtensions: ((ctx: PlatePluginContext<AnyPluginConfig>) => any)[];
    clone: () => PlatePlugin<C>;
    configure: (config: ((ctx: PlatePluginContext<C>) => PlatePluginConfig$2<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>) | PlatePluginConfig$2<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>) => PlatePlugin<C>;
    configurePlugin: <P extends AnyPlatePlugin | AnySlatePlugin>(plugin: Partial<P>, config: (P extends AnyPlatePlugin ? PlatePluginConfig$2<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>> : SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>>) | ((ctx: P extends AnyPlatePlugin ? PlatePluginContext<P> : SlatePluginContext<P>) => P extends AnyPlatePlugin ? PlatePluginConfig$2<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>> : SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>>)) => PlatePlugin<C>;
    extend: <EO = {}, EA = {}, ET = {}, ES = {}>(extendConfig: ((ctx: PlatePluginContext<C>) => PlatePluginConfig$2<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>, EO, EA, ET, ES>) | PlatePluginConfig$2<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>, EO, EA, ET, ES>) => PlatePlugin<PluginConfig<C['key'], EO & InferOptions<C>, EA & InferApi<C>, ET & InferTransforms<C>, InferSelectors<C>>>;
    extendApi: <EA extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: PlatePluginContext<C>) => EA) => PlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C> & Record<C['key'], EA>, InferTransforms<C>, InferSelectors<C>>>;
    /**
     * Extends the plugin's API with new methods or nested objects.
     *
     * This method allows you to add new functionality to the plugin's API or
     * extend existing ones. You can add top-level methods, nested objects with
     * methods, or extend existing nested objects. The types of existing methods
     * and nested objects are preserved, while new ones are inferred.
     *
     * @remarks
     *   - New methods can be added at the top level or within nested objects.
     *   - Existing methods can be overridden, but their parameter and return types
     *       must match the original.
     *   - When extending nested objects, you don't need to specify all existing
     *       properties; they will be preserved.
     *   - Only one level of nesting is supported for API objects.
     *
     * @example
     *   ```typescript
     *   const extendedPlugin = basePlugin.extendEditorApi(({ plugin }) => ({
     *     newMethod: (param: string) => param.length,
     *     existingMethod: (n) => n * 2, // Must match original signature
     *     nested: {
     *       newNestedMethod: () => 'new nested method',
     *     },
     *   }));
     *   ```;
     *
     * @template EA - The type of the extended API, inferred from the returned
     *   object.
     * @param extendedApi - A function that returns an object with the new or
     *   extended API methods.
     * @returns A new instance of the plugin with the extended API.
     */
    extendEditorApi: <EA extends Record<string, ((...args: any[]) => any) | Record<string, (...args: any[]) => any>> = Record<string, never>>(extension: ExtendEditorApi<C, EA>) => PlatePlugin<PluginConfig<C['key'], InferOptions<C>, {
        [K in keyof (EA & InferApi<C>)]: (EA & InferApi<C>)[K] extends (...args: any[]) => any ? (EA & InferApi<C>)[K] : {
            [N in keyof (EA & InferApi<C>)[K]]: (EA & InferApi<C>)[K][N];
        };
    }, InferTransforms<C>, InferSelectors<C>>>;
    extendEditorTransforms: <ET extends Record<string, ((...args: any[]) => any) | Record<string, (...args: any[]) => any>> = Record<string, never>>(extension: ExtendEditorTransforms<C, ET>) => PlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, {
        [K in keyof (ET & InferTransforms<C>)]: (ET & InferTransforms<C>)[K] extends (...args: any[]) => any ? (ET & InferTransforms<C>)[K] : {
            [N in keyof (ET & InferTransforms<C>)[K]]: (ET & InferTransforms<C>)[K][N];
        };
    }, InferSelectors<C>>>;
    extendPlugin: <P extends AnyPlatePlugin | AnySlatePlugin, EO = {}, EA = {}, ET = {}>(plugin: Partial<P>, extendConfig: (P extends AnyPlatePlugin ? PlatePluginConfig$2<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET> : SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET>) | ((ctx: P extends AnyPlatePlugin ? PlatePluginContext<P> : SlatePluginContext<P>) => P extends AnyPlatePlugin ? PlatePluginConfig$2<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET> : SlatePluginConfig<any, InferOptions<P>, InferApi<P>, InferTransforms<P>, InferSelectors<P>, EO, EA, ET>)) => PlatePlugin<C>;
    extendSelectors: <ES extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: PlatePluginContext<C>) => ES) => PlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, ES & InferSelectors<C>>>;
    extendTransforms: <ET extends Record<string, (...args: any[]) => any> = Record<string, never>>(extension: (ctx: PlatePluginContext<C>) => ET) => PlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C> & Record<C['key'], ET>, InferSelectors<C>>>;
    overrideEditor: (override: OverrideEditor<C>) => PlatePlugin<C>;
    /** Returns a new instance of the plugin with the component. */
    withComponent: (component: NodeComponent) => PlatePlugin<C>;
    __resolved?: boolean;
};
type PlatePlugins = AnyPlatePlugin[];
type RenderNodeWrapper<C extends AnyPluginConfig = PluginConfig> = (props: RenderNodeWrapperProps<C>) => RenderNodeWrapperFunction;
type RenderNodeWrapperFunction = ((elementProps: PlateElementProps) => React$1.ReactNode) | undefined;
interface RenderNodeWrapperProps<C extends AnyPluginConfig = PluginConfig> extends PlateElementProps<TElement, C> {
    key: string;
}
type Serializer<C extends AnyPluginConfig = PluginConfig> = BaseSerializer & {
    parser?: (options: PlatePluginContext<C> & {
        node: Descendant;
    }) => any;
    query?: (options: PlatePluginContext<C> & {
        node: Descendant;
    }) => boolean;
};
type Shortcut = HotkeysOptions & {
    keys?: Keys | null;
    priority?: number;
    handler?: (ctx: {
        editor: PlateEditor;
        event: KeyboardEvent;
        eventDetails: HotkeysEvent;
    }) => boolean | void;
};
type Shortcuts = Record<string, Shortcut | null>;
type TextNodeProps<C extends AnyPluginConfig = PluginConfig> = ((props: PlateLeafProps<TText, C>) => AnyObject | undefined) | AnyObject;
type TransformOptions<C extends AnyPluginConfig = PluginConfig> = BaseTransformOptions & PlatePluginContext<C>;
/** Hook called when the editor is initialized. */
type UseHooks<C extends AnyPluginConfig = PluginConfig> = (ctx: PlatePluginContext<C>) => void;

type DOMHandler<C extends AnyPluginConfig = PluginConfig, EV = {}> = (ctx: PlatePluginContext<C> & {
    event: EV;
}) => HandlerReturnType;
interface DOMHandlers<C extends AnyPluginConfig = PluginConfig> {
    onAbort?: DOMHandler<C, React$1.SyntheticEvent>;
    onAbortCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onAnimationEnd?: DOMHandler<C, React$1.AnimationEvent>;
    onAnimationEndCapture?: DOMHandler<C, React$1.AnimationEvent>;
    onAnimationIteration?: DOMHandler<C, React$1.AnimationEvent>;
    onAnimationIterationCapture?: DOMHandler<C, React$1.AnimationEvent>;
    onAnimationStart?: DOMHandler<C, React$1.AnimationEvent>;
    onAnimationStartCapture?: DOMHandler<C, React$1.AnimationEvent>;
    onAuxClick?: DOMHandler<C, React$1.MouseEvent>;
    onAuxClickCapture?: DOMHandler<C, React$1.MouseEvent>;
    onBeforeInput?: DOMHandler<C, React$1.FormEvent>;
    onBeforeInputCapture?: DOMHandler<C, React$1.FormEvent>;
    onBlur?: DOMHandler<C, React$1.FocusEvent>;
    onBlurCapture?: DOMHandler<C, React$1.FocusEvent>;
    onCanPlay?: DOMHandler<C, React$1.SyntheticEvent>;
    onCanPlayCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onCanPlayThrough?: DOMHandler<C, React$1.SyntheticEvent>;
    onCanPlayThroughCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onClick?: DOMHandler<C, React$1.MouseEvent>;
    onClickCapture?: DOMHandler<C, React$1.MouseEvent>;
    onCompositionEnd?: DOMHandler<C, React$1.CompositionEvent>;
    onCompositionEndCapture?: DOMHandler<C, React$1.CompositionEvent>;
    onCompositionStart?: DOMHandler<C, React$1.CompositionEvent>;
    onCompositionStartCapture?: DOMHandler<C, React$1.CompositionEvent>;
    onCompositionUpdate?: DOMHandler<C, React$1.CompositionEvent>;
    onCompositionUpdateCapture?: DOMHandler<C, React$1.CompositionEvent>;
    onContextMenu?: DOMHandler<C, React$1.MouseEvent>;
    onContextMenuCapture?: DOMHandler<C, React$1.MouseEvent>;
    onCopy?: DOMHandler<C, React$1.ClipboardEvent>;
    onCopyCapture?: DOMHandler<C, React$1.ClipboardEvent>;
    onCut?: DOMHandler<C, React$1.ClipboardEvent>;
    onCutCapture?: DOMHandler<C, React$1.ClipboardEvent>;
    onDOMBeforeInput?: DOMHandler<C, Event>;
    onDoubleClick?: DOMHandler<C, React$1.MouseEvent>;
    onDoubleClickCapture?: DOMHandler<C, React$1.MouseEvent>;
    onDrag?: DOMHandler<C, React$1.DragEvent>;
    onDragCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragEnd?: DOMHandler<C, React$1.DragEvent>;
    onDragEndCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragEnter?: DOMHandler<C, React$1.DragEvent>;
    onDragEnterCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragExit?: DOMHandler<C, React$1.DragEvent>;
    onDragExitCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragLeave?: DOMHandler<C, React$1.DragEvent>;
    onDragLeaveCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragOver?: DOMHandler<C, React$1.DragEvent>;
    onDragOverCapture?: DOMHandler<C, React$1.DragEvent>;
    onDragStart?: DOMHandler<C, React$1.DragEvent>;
    onDragStartCapture?: DOMHandler<C, React$1.DragEvent>;
    onDrop?: DOMHandler<C, React$1.DragEvent>;
    onDropCapture?: DOMHandler<C, React$1.DragEvent>;
    onDurationChange?: DOMHandler<C, React$1.SyntheticEvent>;
    onDurationChangeCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onEmptied?: DOMHandler<C, React$1.SyntheticEvent>;
    onEmptiedCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onEncrypted?: DOMHandler<C, React$1.SyntheticEvent>;
    onEncryptedCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onEnded?: DOMHandler<C, React$1.SyntheticEvent>;
    onEndedCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onFocus?: DOMHandler<C, React$1.FocusEvent>;
    onFocusCapture?: DOMHandler<C, React$1.FocusEvent>;
    onGotPointerCapture?: DOMHandler<C, React$1.PointerEvent>;
    onGotPointerCaptureCapture?: DOMHandler<C, React$1.PointerEvent>;
    onInput?: DOMHandler<C, React$1.FormEvent>;
    onInputCapture?: DOMHandler<C, React$1.FormEvent>;
    onInvalid?: DOMHandler<C, React$1.FormEvent>;
    onInvalidCapture?: DOMHandler<C, React$1.FormEvent>;
    onKeyDown?: DOMHandler<C, React$1.KeyboardEvent>;
    onKeyDownCapture?: DOMHandler<C, React$1.KeyboardEvent>;
    onKeyPress?: DOMHandler<C, React$1.KeyboardEvent>;
    onKeyPressCapture?: DOMHandler<C, React$1.KeyboardEvent>;
    onKeyUp?: DOMHandler<C, React$1.KeyboardEvent>;
    onKeyUpCapture?: DOMHandler<C, React$1.KeyboardEvent>;
    onLoad?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadedData?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadedDataCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadedMetadata?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadedMetadataCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadStart?: DOMHandler<C, React$1.SyntheticEvent>;
    onLoadStartCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onLostPointerCapture?: DOMHandler<C, React$1.PointerEvent>;
    onLostPointerCaptureCapture?: DOMHandler<C, React$1.PointerEvent>;
    onMouseDown?: DOMHandler<C, React$1.MouseEvent>;
    onMouseDownCapture?: DOMHandler<C, React$1.MouseEvent>;
    onMouseEnter?: DOMHandler<C, React$1.MouseEvent>;
    onMouseLeave?: DOMHandler<C, React$1.MouseEvent>;
    onMouseMove?: DOMHandler<C, React$1.MouseEvent>;
    onMouseMoveCapture?: DOMHandler<C, React$1.MouseEvent>;
    onMouseOut?: DOMHandler<C, React$1.MouseEvent>;
    onMouseOutCapture?: DOMHandler<C, React$1.MouseEvent>;
    onMouseOver?: DOMHandler<C, React$1.MouseEvent>;
    onMouseOverCapture?: DOMHandler<C, React$1.MouseEvent>;
    onMouseUp?: DOMHandler<C, React$1.MouseEvent>;
    onMouseUpCapture?: DOMHandler<C, React$1.MouseEvent>;
    onPaste?: DOMHandler<C, React$1.ClipboardEvent>;
    onPasteCapture?: DOMHandler<C, React$1.ClipboardEvent>;
    onPause?: DOMHandler<C, React$1.SyntheticEvent>;
    onPauseCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onPlay?: DOMHandler<C, React$1.SyntheticEvent>;
    onPlayCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onPlaying?: DOMHandler<C, React$1.SyntheticEvent>;
    onPlayingCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onPointerCancel?: DOMHandler<C, React$1.PointerEvent>;
    onPointerCancelCapture?: DOMHandler<C, React$1.PointerEvent>;
    onPointerDown?: DOMHandler<C, React$1.PointerEvent>;
    onPointerDownCapture?: DOMHandler<C, React$1.PointerEvent>;
    onPointerEnter?: DOMHandler<C, React$1.PointerEvent>;
    onPointerLeave?: DOMHandler<C, React$1.PointerEvent>;
    onPointerMove?: DOMHandler<C, React$1.PointerEvent>;
    onPointerMoveCapture?: DOMHandler<C, React$1.PointerEvent>;
    onPointerOut?: DOMHandler<C, React$1.PointerEvent>;
    onPointerOutCapture?: DOMHandler<C, React$1.PointerEvent>;
    onPointerOver?: DOMHandler<C, React$1.PointerEvent>;
    onPointerOverCapture?: DOMHandler<C, React$1.PointerEvent>;
    onPointerUp?: DOMHandler<C, React$1.PointerEvent>;
    onPointerUpCapture?: DOMHandler<C, React$1.PointerEvent>;
    onProgress?: DOMHandler<C, React$1.SyntheticEvent>;
    onProgressCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onRateChange?: DOMHandler<C, React$1.SyntheticEvent>;
    onRateChangeCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onReset?: DOMHandler<C, React$1.FormEvent>;
    onResetCapture?: DOMHandler<C, React$1.FormEvent>;
    onScroll?: DOMHandler<C, React$1.UIEvent>;
    onScrollCapture?: DOMHandler<C, React$1.UIEvent>;
    onSeeked?: DOMHandler<C, React$1.SyntheticEvent>;
    onSeekedCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onSeeking?: DOMHandler<C, React$1.SyntheticEvent>;
    onSeekingCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onSelect?: DOMHandler<C, React$1.SyntheticEvent>;
    onSelectCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onStalled?: DOMHandler<C, React$1.SyntheticEvent>;
    onStalledCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onSubmit?: DOMHandler<C, React$1.FormEvent>;
    onSubmitCapture?: DOMHandler<C, React$1.FormEvent>;
    onSuspend?: DOMHandler<C, React$1.SyntheticEvent>;
    onSuspendCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onTimeUpdate?: DOMHandler<C, React$1.SyntheticEvent>;
    onTimeUpdateCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onTouchCancel?: DOMHandler<C, React$1.TouchEvent>;
    onTouchCancelCapture?: DOMHandler<C, React$1.TouchEvent>;
    onTouchEnd?: DOMHandler<C, React$1.TouchEvent>;
    onTouchEndCapture?: DOMHandler<C, React$1.TouchEvent>;
    onTouchMove?: DOMHandler<C, React$1.TouchEvent>;
    onTouchMoveCapture?: DOMHandler<C, React$1.TouchEvent>;
    onTouchStart?: DOMHandler<C, React$1.TouchEvent>;
    onTouchStartCapture?: DOMHandler<C, React$1.TouchEvent>;
    onTransitionEnd?: DOMHandler<C, React$1.TransitionEvent>;
    onTransitionEndCapture?: DOMHandler<C, React$1.TransitionEvent>;
    onVolumeChange?: DOMHandler<C, React$1.SyntheticEvent>;
    onVolumeChangeCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onWaiting?: DOMHandler<C, React$1.SyntheticEvent>;
    onWaitingCapture?: DOMHandler<C, React$1.SyntheticEvent>;
    onWheel?: DOMHandler<C, React$1.WheelEvent>;
    onWheelCapture?: DOMHandler<C, React$1.WheelEvent>;
}

type KeyboardHandler<C extends AnyPluginConfig = PluginConfig> = DOMHandler<C, React$1.KeyboardEvent>;

type PlatePluginConfig$1<K extends string = any, O = {}, A = {}, T = {}, S = {}> = Omit<Partial<Modify<PlatePlugin<PluginConfig<K, O, A, T, S>>, {
    node: Partial<PlatePlugin<PluginConfig<K, O, A, T, S>>['node']>;
}>>, keyof PlatePluginMethods | 'optionsStore' | 'useOptionsStore'>;
type TPlatePluginConfig<C extends AnyPluginConfig = PluginConfig> = Omit<Partial<Modify<PlatePlugin<C>, {
    node: Partial<PlatePlugin<C>['node']>;
}>>, keyof PlatePluginMethods | 'optionsStore' | 'useOptionsStore'>;
declare const createPlatePlugin: <K extends string = any, O = {}, A = {}, T = {}, S = {}>(config?: ((editor: PlateEditor) => PlatePluginConfig$1<K, O, A, T, S>) | PlatePluginConfig$1<K, O, A, T, S>) => PlatePlugin<PluginConfig<K, O, A, T, S>>;
/**
 * Explicitly typed version of `createPlatePlugin`.
 *
 * @remarks
 *   While `createPlatePlugin` uses type inference, this function requires an
 *   explicit type parameter. Use this when you need precise control over the
 *   plugin's type structure or when type inference doesn't provide the desired
 *   result.
 */
declare function createTPlatePlugin<C extends AnyPluginConfig = PluginConfig>(config?: ((editor: PlateEditor) => TPlatePluginConfig<C>) | TPlatePluginConfig<C>): PlatePlugin<C>;

declare const getPlateCorePlugins: () => (PlatePlugin<PluginConfig<"slateExtension", {
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
}, {
    redecorate: () => void;
}, {
    reset: (options: _platejs_slate.ResetOptions | undefined) => void;
    init: ((args_0: InitOptions) => void) & ((args_0: InitOptions) => void);
    insertExitBreak: ((args_0?: InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: InsertExitBreakOptions | undefined) => true | undefined);
    resetBlock: ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined) & ((args_0?: {
        at?: _platejs_slate.Path;
    } | undefined) => true | undefined);
    setValue: ((value?: string | _platejs_slate.Value | undefined) => void) & ((value?: string | _platejs_slate.Value | undefined) => void);
    apply: <N extends _platejs_slate.TElement | _platejs_slate.TText>(operation: _platejs_slate.Operation<N>) => void;
}, {}>> | PlatePlugin<PluginConfig<"eventEditor", {}, {}, {}, {}>> | PlatePlugin<PluginConfig<"dom", {
    scrollMode?: ScrollMode;
    scrollOperations?: AutoScrollOperationsMap;
    scrollOptions?: _platejs_slate.ScrollIntoViewOptions;
}, {
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>> | PlatePlugin<PluginConfig<"p", {}, {}, {}, {}>>)[];

/**
 * Creates a memoized Plate editor for React components.
 *
 * This hook creates a fully configured Plate editor instance that is memoized
 * based on the provided dependencies. It's optimized for React components to
 * prevent unnecessary re-creation of the editor on every render.
 *
 * Examples:
 *
 * ```ts
 * const editor = usePlateEditor({
 *   plugins: [ParagraphPlugin, HeadingPlugin],
 *   value: [{ type: 'p', children: [{ text: 'Hello world!' }] }],
 * });
 *
 * // Editor with custom dependencies
 * const editor = usePlateEditor(
 *   {
 *     plugins: [ParagraphPlugin],
 *     enabled,
 *   },
 *   [enabled]
 * ); // Re-create when enabled changes
 * ```
 *
 * @param options - Configuration options for creating the Plate editor
 * @param deps - Additional dependencies for the useMemo hook (default: [])
 * @see {@link createPlateEditor} for detailed information on React editor creation and configuration.
 * @see {@link createSlateEditor} for a non-React version of editor creation.
 * @see {@link withPlate} for the underlying React-specific enhancement function.
 */
declare function usePlateEditor<V extends Value = Value, P extends AnyPluginConfig = PlateCorePlugin, TEnabled extends boolean | undefined = undefined>(options?: CreatePlateEditorOptions<V, P> & {
    enabled?: TEnabled;
}, deps?: React$1.DependencyList): TEnabled extends false ? null : TEnabled extends true | undefined ? TPlateEditor<V, P> : TPlateEditor<V, P> | null;

/**
 * Creates a memoized static Plate editor for view-only React components.
 *
 * This hook creates a fully configured static Plate editor instance that is
 * memoized based on the provided dependencies. It's optimized for React
 * components to prevent unnecessary re-creation of the editor on every render.
 * Uses createStaticEditor.
 *
 * @param options - Configuration options for creating the static Plate editor
 * @param deps - Additional dependencies for the useMemo hook (default: [])
 * @see {@link createStaticEditor} for detailed information on static editor creation and configuration.
 */
declare function usePlateViewEditor<V extends Value = Value, P extends AnyPluginConfig = any, TEnabled extends boolean | undefined = undefined>(options?: Parameters<typeof createStaticEditor<V, P>>[0] & {
    enabled?: TEnabled;
}, deps?: React$1.DependencyList): TEnabled extends false ? null : TEnabled extends true | undefined ? ReturnType<typeof createStaticEditor<V, P>> : ReturnType<typeof createStaticEditor<V, P>> | null;

declare function getEditorPlugin<P extends AnyPluginConfig | PlatePlugin<AnyPluginConfig>>(editor: PlateEditor, plugin: WithRequiredKey<P>): PlatePluginContext<InferConfig<P> extends never ? P : InferConfig<P>>;

/** Get editor plugin by key or plugin object. */
declare function getPlugin<C extends AnyPluginConfig = PluginConfig>(editor: PlateEditor, plugin: WithRequiredKey<C>): C extends {
    node: any;
} ? C : PlatePlugin<C>;

declare const omitPluginContext: <T extends PlatePluginContext<AnyPlatePlugin>>(ctx: T) => Omit<T, "api" | "setOptions" | "tf" | "type" | "getOption" | "getOptions" | "setOption" | "editor" | "plugin">;

type PlatePluginConfig<C extends AnyPluginConfig, EO = {}, EA = {}, ET = {}, ES = {}> = Omit<Partial<PlatePlugin<PluginConfig<C['key'], EO & InferOptions<C>, EA & InferApi<C>, ET & InferTransforms<C>, ES & InferSelectors<C>>>>, keyof PlatePluginMethods | 'api' | 'node' | 'options' | 'transforms'> & {
    api?: EA & Partial<InferApi<C>>;
    node?: Partial<PlatePlugin<C>['node']>;
    options?: EO & Partial<InferOptions<C>>;
    selectors?: ES & Partial<InferSelectors<C>>;
    transforms?: ET & Partial<InferTransforms<C>>;
};
/**
 * Extends a SlatePlugin to create a React PlatePlugin.
 *
 * @remarks
 *   This function transforms a SlatePlugin into a React PlatePlugin, allowing for
 *   React-specific functionality to be added.
 * @param basePlugin - The base SlatePlugin to be extended.
 * @param extendConfig - A function or object that provides the extension
 *   configuration. If a function, it receives the plugin context and should
 *   return a partial PlatePlugin. If an object, it should be a partial
 *   PlatePlugin configuration.
 * @returns A new PlatePlugin that combines the base SlatePlugin functionality
 *   with React-specific features defined in the extension configuration.
 */
declare function toPlatePlugin<C extends AnyPluginConfig, EO = {}, EA = {}, ET = {}, ES = {}>(basePlugin: SlatePlugin<C>, extendConfig?: ((ctx: PlatePluginContext<C>) => PlatePluginConfig<C, EO, EA, ET>) | PlatePluginConfig<C, EO, EA, ET>): PlatePlugin<PluginConfig<C['key'], EO & InferOptions<C>, EA & InferApi<C>, ET & InferTransforms<C>, ES & InferSelectors<C>>>;
type ExtendPluginConfig<C extends AnyPluginConfig = PluginConfig> = Omit<Partial<PlatePlugin<PluginConfig<C['key'], Partial<InferOptions<C>>, Partial<InferApi<C>>, Partial<InferTransforms<C>>>>>, keyof PlatePluginMethods>;
/**
 * Explicitly typed version of {@link toPlatePlugin}.
 *
 * @remarks
 *   This function requires explicit type parameters for both the base plugin
 *   configuration and the extension configuration. Use this when you need
 *   precise control over the plugin's type structure or when type inference
 *   doesn't provide the desired result.
 * @typeParam C - The type of the extension configuration for the PlatePlugin
 *   (required).
 * @typeParam TContext - The type of the base SlatePlugin configuration
 *   (optional).
 */
declare function toTPlatePlugin<C extends AnyPluginConfig = PluginConfig, TContext extends AnyPluginConfig = AnyPluginConfig>(basePlugin: SlatePlugin<TContext>, extendConfig?: ((ctx: PlatePluginContext<TContext>) => ExtendPluginConfig<C>) | ExtendPluginConfig<C>): PlatePlugin<PluginConfig<C['key'], InferOptions<C>, InferApi<C>, InferTransforms<C>, InferSelectors<C>>>;

declare const useNodeAttributes: (props: any, ref?: any) => any;
type PlateChunkProps = RenderChunkProps;
type PlateElementProps<N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig> = PlateNodeProps<C> & RenderElementProps<N> & {
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
type PlateNodeProps<C extends AnyPluginConfig = PluginConfig> = PlatePluginContext<C> & {
    /**
     * Optional ref to be merged with `attributes.ref`
     *
     * @default undefined
     */
    ref?: any;
};
type PlateHTMLProps<C extends AnyPluginConfig = PluginConfig, T extends React$1.ComponentType<PlateElementProps> | keyof HTMLElementTagNameMap = 'div'> = PlateNodeProps<C> & {
    /** HTML attributes to pass to the underlying HTML element */
    attributes: React$1.PropsWithoutRef<T extends React$1.ComponentType<PlateElementProps> ? React$1.ComponentProps<T> : T extends keyof HTMLElementTagNameMap ? React$1.JSX.IntrinsicElements[T] : never>;
    as?: T;
    /** Class to be merged with `attributes.className` */
    className?: string;
    /** Style to be merged with `attributes.style` */
    style?: React$1.CSSProperties;
};
type StyledPlateElementProps<N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'div'> = Omit<PlateElementProps<N, C>, keyof DeprecatedNodeProps> & PlateHTMLProps<C, T> & {
    insetProp?: boolean;
};
declare const PlateElement: <N extends TElement = TElement, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "div">(props: StyledPlateElementProps<N, C, T>) => React$1.ReactElement;
type PlateTextProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = PlateNodeProps<C> & RenderTextProps<N> & DeprecatedNodeProps & {
    attributes: UnknownObject;
};
type StyledPlateTextProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'span'> = Omit<PlateTextProps<N, C>, keyof DeprecatedNodeProps> & PlateHTMLProps<C, T>;
declare const PlateText: <N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "span">(props: StyledPlateTextProps<N, C, T>) => React$1.ReactElement;
type PlateLeafProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig> = PlateNodeProps<C> & RenderLeafProps<N> & DeprecatedNodeProps & {
    attributes: UnknownObject;
    inset?: boolean;
};
type StyledPlateLeafProps<N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = 'span'> = Omit<PlateLeafProps<N, C>, keyof DeprecatedNodeProps> & PlateHTMLProps<C, T>;
declare const PlateLeaf: <N extends TText = TText, C extends AnyPluginConfig = PluginConfig, T extends keyof HTMLElementTagNameMap = "span">({ className, ...props }: StyledPlateLeafProps<N, C, T>) => React$1.ReactElement;

declare const ContentVisibilityChunk: ({ attributes, children, lowest, }: PlateChunkProps) => any;

declare function EditorHotkeysEffect({ id, editableRef, }: {
    editableRef: React$1.RefObject<HTMLDivElement | null>;
    id?: string;
}): React$1.JSX.Element;

declare const EditorMethodsEffect: ({ id }: {
    id?: string;
}) => null;

declare function EditorRefPluginEffect({ id, plugin, }: {
    plugin: AnyEditorPlatePlugin;
    id?: string;
}): null;
declare function EditorRefEffect({ id }: {
    id?: string;
}): React$1.JSX.Element;

/**
 * Get the element by plugin key. If no element is found in the context, it will
 * return an empty object.
 */
declare const useElement: <T extends TElement = TElement>(pluginKey?: string) => T;

interface UseElementSelectorOptions<T> {
    key?: string;
    equalityFn?: (a: T, b: T) => boolean;
}
declare const useElementSelector: <T>(selector: <N extends TElement>(state: NodeEntry<N>, prev?: T) => T, deps: React$1.DependencyList, { key, equalityFn, }?: UseElementSelectorOptions<T>) => T;

declare const SCOPE_ELEMENT = "element";
type ElementStoreState = {
    element: TElement;
    entry: ElementEntry;
    path: Path;
};
declare const ElementProvider: React$1.FC<jotai_x.ProviderProps<{
    element: TElement;
    entry: ElementEntry;
    path: Path;
}>>;
declare const elementStore: jotai_x.StoreApi<ElementStoreState, object, "element">;
declare const useElementStore: jotai_x.UseStoreApi<ElementStoreState, object>;

/** Get the memoized path of the closest element. */
declare const usePath: (pluginKey?: string) => Path;

/** Get last event editor id: focus, blur or last. */
declare const useEventPlateId: (id?: string) => string;

type PlateChangeKey = 'versionDecorate' | 'versionEditor' | 'versionSelection' | 'versionValue';
type PlateStoreState<E extends PlateEditor = PlateEditor> = Nullable<{
    composing: boolean;
    decorate: NonNullable<(options: {
        editor: E;
        entry: NodeEntry;
    }) => TRange[]>;
    /** Whether `Editable` is rendered so slate DOM is resolvable. */
    isMounted: boolean;
    /**
     * Whether the editor is primary. If no editor is active, then PlateController
     * will use the first-mounted primary editor.
     *
     * @default true
     */
    primary: boolean;
    readOnly: boolean;
    renderChunk: NonNullable<EditableProps['renderChunk']>;
    renderElement: NonNullable<EditableProps['renderElement']>;
    renderLeaf: NonNullable<EditableProps['renderLeaf']>;
    renderText: NonNullable<EditableProps['renderText']>;
    /**
     * Version incremented when calling `redecorate`. This is a dependency of the
     * `decorate` function.
     */
    versionDecorate: number;
    /** Version incremented on each editor change. */
    versionEditor: number;
    /** Version incremented on each editor.selection change. */
    versionSelection: number;
    /** Version incremented on each editor.children change. */
    versionValue: number;
    /** Controlled callback called when the editor state changes. */
    onChange: (options: {
        editor: E;
        value: ValueOf<E>;
    }) => void;
    /** Controlled callback called when a node operation is applied. */
    onNodeChange: (options: {
        editor: E;
        node: Descendant;
        operation: NodeOperation;
        prevNode: Descendant;
    }) => void;
    /** Controlled callback called when the editor.selection changes. */
    onSelectionChange: (options: {
        editor: E;
        selection: TSelection;
    }) => void;
    /** Controlled callback called when a text operation is applied. */
    onTextChange: (options: {
        editor: E;
        node: Descendant;
        operation: TextOperation;
        prevText: string;
        text: string;
    }) => void;
    /** Controlled callback called when the editor.children changes. */
    onValueChange: (options: {
        editor: E;
        value: ValueOf<E>;
    }) => void;
}> & {
    /**
     * A unique id used as a provider scope. Use it if you have multiple `Plate`
     * in the same React tree.
     *
     * @default random id
     */
    id: string;
    /** A reference to the editor container element. */
    containerRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Slate editor reference.
     *
     * @default createPlateFallbackEditor()
     */
    editor: E;
    /**
     * A reference to the editor scroll container element.
     *
     * @default containerRef
     */
    scrollRef: React.RefObject<HTMLDivElement | null>;
};

type PlateStore = ReturnType<typeof usePlateStore>;
declare const PLATE_SCOPE = "plate";
declare const GLOBAL_PLATE_SCOPE: unique symbol;
declare const createPlateStore: <E extends PlateEditor = PlateEditor>({ id, composing, containerRef, decorate, editor, isMounted, primary, readOnly, renderChunk, renderElement, renderLeaf, renderText, scrollRef, versionDecorate, versionEditor, versionSelection, versionValue, onChange, onNodeChange, onSelectionChange, onTextChange, onValueChange, ...state }?: Partial<PlateStoreState<E>>) => jotai_x.AtomStoreApi<PlateStoreState<E>, {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
}, "plate">;
declare const PlateStoreProvider: React$1.FC<jotai_x.ProviderProps<{
    composing: boolean | null;
    decorate: ((options: {
        editor: PlateEditor;
        entry: _platejs_slate.NodeEntry;
    }) => _platejs_slate.TRange[]) | null;
    isMounted: boolean | null;
    primary: boolean | null;
    readOnly: boolean | null;
    renderChunk: RenderChunkFn | null;
    renderElement: RenderElementFn | null;
    renderLeaf: RenderLeafFn | null;
    renderText: RenderTextFn | null;
    versionDecorate: number | null;
    versionEditor: number | null;
    versionSelection: number | null;
    versionValue: number | null;
    onChange: ((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null;
    onNodeChange: ((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.NodeOperation;
        prevNode: _platejs_slate.Descendant;
    }) => void) | null;
    onSelectionChange: ((options: {
        editor: PlateEditor;
        selection: _platejs_slate.TSelection;
    }) => void) | null;
    onTextChange: ((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.TextOperation;
        prevText: string;
        text: string;
    }) => void) | null;
    onValueChange: ((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null;
    id: string;
    containerRef: React$1.RefObject<HTMLDivElement | null>;
    editor: PlateEditor;
    scrollRef: React$1.RefObject<HTMLDivElement | null>;
}>>;
declare const plateStore: jotai_x.StoreApi<PlateStoreState<PlateEditor>, {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
}, "plate">;
declare const usePlateLocalSet: <K extends "editor" | "id" | "decorate" | "onChange" | "readOnly" | "composing" | "onNodeChange" | "onTextChange" | "renderElement" | "renderText" | "renderLeaf" | "versionDecorate" | "versionEditor" | "versionSelection" | "versionValue" | "renderChunk" | "onSelectionChange" | "onValueChange" | "primary" | "isMounted" | "containerRef" | "scrollRef" | "trackedEditor" | "trackedSelection" | "trackedValue">(key: K, options?: string | jotai_x.UseAtomOptions) => ({
    composing: jotai_x.SimpleWritableAtom<boolean | null>;
    decorate: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        entry: _platejs_slate.NodeEntry;
    }) => _platejs_slate.TRange[]) | null>;
    isMounted: jotai_x.SimpleWritableAtom<boolean | null>;
    primary: jotai_x.SimpleWritableAtom<boolean | null>;
    readOnly: jotai_x.SimpleWritableAtom<boolean | null>;
    renderChunk: jotai_x.SimpleWritableAtom<RenderChunkFn | null>;
    renderElement: jotai_x.SimpleWritableAtom<RenderElementFn | null>;
    renderLeaf: jotai_x.SimpleWritableAtom<RenderLeafFn | null>;
    renderText: jotai_x.SimpleWritableAtom<RenderTextFn | null>;
    versionDecorate: jotai_x.SimpleWritableAtom<number | null>;
    versionEditor: jotai_x.SimpleWritableAtom<number | null>;
    versionSelection: jotai_x.SimpleWritableAtom<number | null>;
    versionValue: jotai_x.SimpleWritableAtom<number | null>;
    onChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    onNodeChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.NodeOperation;
        prevNode: _platejs_slate.Descendant;
    }) => void) | null>;
    onSelectionChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        selection: _platejs_slate.TSelection;
    }) => void) | null>;
    onTextChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.TextOperation;
        prevText: string;
        text: string;
    }) => void) | null>;
    onValueChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    id: jotai_x.SimpleWritableAtom<string>;
    containerRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
    editor: jotai_x.SimpleWritableAtom<PlateEditor>;
    scrollRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
} & {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
})[K] extends jotai.WritableAtom<infer _V, infer A extends unknown[], infer R> ? (...args: A) => R : never;
declare const usePlateLocalState: <K extends "editor" | "id" | "decorate" | "onChange" | "readOnly" | "composing" | "onNodeChange" | "onTextChange" | "renderElement" | "renderText" | "renderLeaf" | "versionDecorate" | "versionEditor" | "versionSelection" | "versionValue" | "renderChunk" | "onSelectionChange" | "onValueChange" | "primary" | "isMounted" | "containerRef" | "scrollRef" | "trackedEditor" | "trackedSelection" | "trackedValue">(key: K, options?: string | jotai_x.UseAtomOptions) => ({
    composing: jotai_x.SimpleWritableAtom<boolean | null>;
    decorate: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        entry: _platejs_slate.NodeEntry;
    }) => _platejs_slate.TRange[]) | null>;
    isMounted: jotai_x.SimpleWritableAtom<boolean | null>;
    primary: jotai_x.SimpleWritableAtom<boolean | null>;
    readOnly: jotai_x.SimpleWritableAtom<boolean | null>;
    renderChunk: jotai_x.SimpleWritableAtom<RenderChunkFn | null>;
    renderElement: jotai_x.SimpleWritableAtom<RenderElementFn | null>;
    renderLeaf: jotai_x.SimpleWritableAtom<RenderLeafFn | null>;
    renderText: jotai_x.SimpleWritableAtom<RenderTextFn | null>;
    versionDecorate: jotai_x.SimpleWritableAtom<number | null>;
    versionEditor: jotai_x.SimpleWritableAtom<number | null>;
    versionSelection: jotai_x.SimpleWritableAtom<number | null>;
    versionValue: jotai_x.SimpleWritableAtom<number | null>;
    onChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    onNodeChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.NodeOperation;
        prevNode: _platejs_slate.Descendant;
    }) => void) | null>;
    onSelectionChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        selection: _platejs_slate.TSelection;
    }) => void) | null>;
    onTextChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.TextOperation;
        prevText: string;
        text: string;
    }) => void) | null>;
    onValueChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    id: jotai_x.SimpleWritableAtom<string>;
    containerRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
    editor: jotai_x.SimpleWritableAtom<PlateEditor>;
    scrollRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
} & {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
})[K] extends jotai.WritableAtom<infer V, infer A extends unknown[], infer R> ? [V, (...args: A) => R] : never;
declare const usePlateLocalStore: jotai_x.UseStoreApi<PlateStoreState<PlateEditor>, {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
}>;
declare const usePlateLocalValue: <K extends "editor" | "id" | "decorate" | "onChange" | "readOnly" | "composing" | "onNodeChange" | "onTextChange" | "renderElement" | "renderText" | "renderLeaf" | "versionDecorate" | "versionEditor" | "versionSelection" | "versionValue" | "renderChunk" | "onSelectionChange" | "onValueChange" | "primary" | "isMounted" | "containerRef" | "scrollRef" | "trackedEditor" | "trackedSelection" | "trackedValue", S = ({
    composing: jotai_x.SimpleWritableAtom<boolean | null>;
    decorate: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        entry: _platejs_slate.NodeEntry;
    }) => _platejs_slate.TRange[]) | null>;
    isMounted: jotai_x.SimpleWritableAtom<boolean | null>;
    primary: jotai_x.SimpleWritableAtom<boolean | null>;
    readOnly: jotai_x.SimpleWritableAtom<boolean | null>;
    renderChunk: jotai_x.SimpleWritableAtom<RenderChunkFn | null>;
    renderElement: jotai_x.SimpleWritableAtom<RenderElementFn | null>;
    renderLeaf: jotai_x.SimpleWritableAtom<RenderLeafFn | null>;
    renderText: jotai_x.SimpleWritableAtom<RenderTextFn | null>;
    versionDecorate: jotai_x.SimpleWritableAtom<number | null>;
    versionEditor: jotai_x.SimpleWritableAtom<number | null>;
    versionSelection: jotai_x.SimpleWritableAtom<number | null>;
    versionValue: jotai_x.SimpleWritableAtom<number | null>;
    onChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    onNodeChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.NodeOperation;
        prevNode: _platejs_slate.Descendant;
    }) => void) | null>;
    onSelectionChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        selection: _platejs_slate.TSelection;
    }) => void) | null>;
    onTextChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        node: _platejs_slate.Descendant;
        operation: _platejs_slate.TextOperation;
        prevText: string;
        text: string;
    }) => void) | null>;
    onValueChange: jotai_x.SimpleWritableAtom<((options: {
        editor: PlateEditor;
        value: _platejs_slate.Value;
    }) => void) | null>;
    id: jotai_x.SimpleWritableAtom<string>;
    containerRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
    editor: jotai_x.SimpleWritableAtom<PlateEditor>;
    scrollRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
} & {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
})[K] extends jotai.Atom<infer V> ? V : never>(key: K, options?: ({
    selector?: ((v: ({
        composing: jotai_x.SimpleWritableAtom<boolean | null>;
        decorate: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            entry: _platejs_slate.NodeEntry;
        }) => _platejs_slate.TRange[]) | null>;
        isMounted: jotai_x.SimpleWritableAtom<boolean | null>;
        primary: jotai_x.SimpleWritableAtom<boolean | null>;
        readOnly: jotai_x.SimpleWritableAtom<boolean | null>;
        renderChunk: jotai_x.SimpleWritableAtom<RenderChunkFn | null>;
        renderElement: jotai_x.SimpleWritableAtom<RenderElementFn | null>;
        renderLeaf: jotai_x.SimpleWritableAtom<RenderLeafFn | null>;
        renderText: jotai_x.SimpleWritableAtom<RenderTextFn | null>;
        versionDecorate: jotai_x.SimpleWritableAtom<number | null>;
        versionEditor: jotai_x.SimpleWritableAtom<number | null>;
        versionSelection: jotai_x.SimpleWritableAtom<number | null>;
        versionValue: jotai_x.SimpleWritableAtom<number | null>;
        onChange: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            value: _platejs_slate.Value;
        }) => void) | null>;
        onNodeChange: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            node: _platejs_slate.Descendant;
            operation: _platejs_slate.NodeOperation;
            prevNode: _platejs_slate.Descendant;
        }) => void) | null>;
        onSelectionChange: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            selection: _platejs_slate.TSelection;
        }) => void) | null>;
        onTextChange: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            node: _platejs_slate.Descendant;
            operation: _platejs_slate.TextOperation;
            prevText: string;
            text: string;
        }) => void) | null>;
        onValueChange: jotai_x.SimpleWritableAtom<((options: {
            editor: PlateEditor;
            value: _platejs_slate.Value;
        }) => void) | null>;
        id: jotai_x.SimpleWritableAtom<string>;
        containerRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
        editor: jotai_x.SimpleWritableAtom<PlateEditor>;
        scrollRef: jotai_x.SimpleWritableAtom<React$1.RefObject<HTMLDivElement | null>>;
    } & {
        trackedEditor: jotai.Atom<{
            editor: any;
            version: number | null;
        }>;
        trackedSelection: jotai.Atom<{
            selection: any;
            version: number | null;
        }>;
        trackedValue: jotai.Atom<{
            value: any;
            version: number | null;
        }>;
    })[K] extends jotai.Atom<infer V_1> ? V_1 : never, prevSelectorOutput?: S | undefined) => S) | undefined;
    equalityFn?: ((prev: S, next: S) => boolean) | undefined;
} & jotai_x.UseAtomOptions) | undefined, deps?: unknown[]) => S;

declare const usePlateStore: (id?: string) => jotai_x.ReturnOfUseStoreApi<PlateStoreState<PlateEditor>, {
    trackedEditor: jotai.Atom<{
        editor: any;
        version: number | null;
    }>;
    trackedSelection: jotai.Atom<{
        selection: any;
        version: number | null;
    }>;
    trackedValue: jotai.Atom<{
        value: any;
        version: number | null;
    }>;
}>;
declare const usePlateSet: typeof usePlateLocalSet;
declare const usePlateValue: typeof usePlateLocalValue;
declare const usePlateState: typeof usePlateLocalState;
/** Get the closest `Plate` id. */
declare const useEditorId: () => string;
declare const useEditorContainerRef: (id?: string) => React$1.RefObject<HTMLDivElement | null>;
declare const useEditorScrollRef: (id?: string) => React$1.RefObject<HTMLDivElement | null>;
/** Returns the scrollRef if it exists, otherwise returns the containerRef. */
declare const useScrollRef: (id?: string) => React$1.RefObject<HTMLDivElement | null>;
declare const useEditorMounted: (id?: string) => boolean;
/**
 * Whether the editor is read-only. You can also use `useReadOnly` from
 * `slate-react` in node components.
 */
declare const useEditorReadOnly: (id?: string) => boolean;
/** Whether the editor is composing. */
declare const useEditorComposing: (id?: string) => boolean;
/**
 * Get a reference to the editor instance that remains stable across re-renders.
 * The editor object is enhanced with a `store` property that provides access to
 * the Plate store.
 *
 * @example
 *   ```tsx
 *   const editor = useEditorRef();
 *   const readOnly = useAtomStoreValue(editor.store, 'readOnly');
 */
declare const useEditorRef: <E extends PlateEditor = PlateEditor>(id?: string) => E & {
    store: PlateStore;
};
/** Get the editor selection (deeply memoized). */
declare const useEditorSelection: (id?: string) => any;
/** Get editor state which is updated on editor change. */
declare const useEditorState: <E extends PlateEditor = PlateEditor>(id?: string) => E;
/** Version incremented on each editor change. */
declare const useEditorVersion: (id?: string) => number | null;
/** Version incremented on selection change. */
declare const useSelectionVersion: (id?: string) => number | null;
/** Get the editor value (deeply memoized). */
declare const useEditorValue: (id?: string) => any;
/** Version incremented on value change. */
declare const useValueVersion: (id?: string) => number | null;
declare const useIncrementVersion: (key: PlateChangeKey, id?: string) => () => void;
declare const useRedecorate: (id?: string) => () => void;

/** Get editor and plugin context. */
declare function useEditorPlugin<P extends AnyPluginConfig | PlatePlugin<AnyPluginConfig>, E extends PlateEditor = PlateEditor>(p: WithRequiredKey<P>, id?: string): PlatePluginContext<InferConfig<P> extends never ? P : InferConfig<P>, E> & {
    store: PlateStore;
};

interface UseEditorSelectorOptions<T> {
    id?: string;
    equalityFn?: (a: T, b: T) => boolean;
}
declare const useEditorSelector: <T, E extends PlateEditor = PlateEditor>(selector: (editor: E, prev?: T) => T, deps: React$1.DependencyList, { id, equalityFn }?: UseEditorSelectorOptions<T>) => T;

/**
 * Hook to access plugin options. For usage outside `<Plate>`, use
 * `useEditorPluginOption` instead.
 *
 * @example
 *   const value = usePluginOption(plugin, 'value');
 *   const doubleValue = usePluginOption(plugin, 'doubleValue', 2);
 */
declare function usePluginOption<C extends AnyPluginConfig, StateType extends InferOptions<C>, TSelectors extends InferSelectors<C>, K extends keyof StateType | keyof TSelectors | 'state'>(plugin: WithRequiredKey<C>, key: K, ...args: [
    ...(K extends keyof TSelectors ? Parameters<TSelectors[K]> : unknown[]),
    TEqualityChecker<K extends 'state' ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never>?
]): K extends 'state' ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never;
declare function useEditorPluginOption<C extends AnyPluginConfig, StateType extends InferOptions<C>, TSelectors extends InferSelectors<C>, K extends keyof StateType | keyof TSelectors | 'state'>(editor: PlateEditor, plugin: WithRequiredKey<C>, key: K, ...args: [
    ...(K extends keyof TSelectors ? Parameters<TSelectors[K]> : unknown[]),
    TEqualityChecker<K extends 'state' ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never>?
]): K extends 'state' ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never;
/**
 * Use zustand store selector.
 *
 * @example
 *   const name = usePluginOptions(plugin, (state) => state.name, equalityFn);
 */
declare function usePluginOptions<C extends AnyPluginConfig, U>(plugin: WithRequiredKey<C>, selector: (state: InferOptions<C>) => U, { id, equalityFn, }?: {
    id?: string;
    equalityFn?: (a: U, b: U) => boolean;
}): U;
declare function useEditorPluginOptions<C extends AnyPluginConfig, U>(editor: PlateEditor, plugin: WithRequiredKey<C>, selector: (state: InferOptions<C>) => U, { equalityFn, }?: {
    equalityFn?: (a: U, b: U) => boolean;
}): U;

declare const PlateController: React$1.FC<jotai_x.ProviderProps<{
    activeId: string | null;
    editorStores: Record<string, ({
        get: <Value>(atom: Atom<Value>) => Value;
        set: <Value, Args extends unknown[], Result>(atom: jotai.WritableAtom<Value, Args, Result>, ...args: Args) => Result;
        sub: (atom: Atom<unknown>, listener: () => void) => () => void;
    } & Partial<{
        dev_subscribe_store: (l: (action: {
            type: "write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "async-write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "sub";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "unsub";
        } | {
            type: "restore";
            flushed: Set<Atom<unknown>>;
        }) => void, rev: 2) => () => void;
        dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
        dev_get_atom_state: (a: Atom<unknown>) => ({
            d: Map<Atom<unknown>, /*elided*/ any & ({
                e: unknown;
            } | {
                v: unknown;
            })>;
        } & ({
            e: unknown;
        } | {
            v: unknown;
        })) | undefined;
        dev_get_mounted: (a: Atom<unknown>) => {
            l: Set<() => void>;
            t: Set<Atom<unknown>>;
            u?: () => void;
        } | undefined;
        dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
    }>) | null>;
    primaryEditorIds: string[];
}>>;
declare const plateControllerStore: jotai_x.StoreApi<{
    activeId: jotai.PrimitiveAtom<string | null> & {
        init: string | null;
    };
    editorStores: jotai.PrimitiveAtom<Record<string, ({
        get: <Value>(atom: Atom<Value>) => Value;
        set: <Value, Args extends unknown[], Result>(atom: jotai.WritableAtom<Value, Args, Result>, ...args: Args) => Result;
        sub: (atom: Atom<unknown>, listener: () => void) => () => void;
    } & Partial<{
        dev_subscribe_store: (l: (action: {
            type: "write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "async-write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "sub";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "unsub";
        } | {
            type: "restore";
            flushed: Set<Atom<unknown>>;
        }) => void, rev: 2) => () => void;
        dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
        dev_get_atom_state: (a: Atom<unknown>) => ({
            d: Map<Atom<unknown>, /*elided*/ any & ({
                e: unknown;
            } | {
                v: unknown;
            })>;
        } & ({
            e: unknown;
        } | {
            v: unknown;
        })) | undefined;
        dev_get_mounted: (a: Atom<unknown>) => {
            l: Set<() => void>;
            t: Set<Atom<unknown>>;
            u?: () => void;
        } | undefined;
        dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
    }>) | null>> & {
        init: Record<string, ({
            get: <Value>(atom: Atom<Value>) => Value;
            set: <Value, Args extends unknown[], Result>(atom: jotai.WritableAtom<Value, Args, Result>, ...args: Args) => Result;
            sub: (atom: Atom<unknown>, listener: () => void) => () => void;
        } & Partial<{
            dev_subscribe_store: (l: (action: {
                type: "write";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "async-write";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "sub";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "unsub";
            } | {
                type: "restore";
                flushed: Set<Atom<unknown>>;
            }) => void, rev: 2) => () => void;
            dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
            dev_get_atom_state: (a: Atom<unknown>) => ({
                d: Map<Atom<unknown>, /*elided*/ any & ({
                    e: unknown;
                } | {
                    v: unknown;
                })>;
            } & ({
                e: unknown;
            } | {
                v: unknown;
            })) | undefined;
            dev_get_mounted: (a: Atom<unknown>) => {
                l: Set<() => void>;
                t: Set<Atom<unknown>>;
                u?: () => void;
            } | undefined;
            dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
        }>) | null>;
    };
    primaryEditorIds: jotai.PrimitiveAtom<string[]> & {
        init: string[];
    };
}, object, "plateController">;
declare const _usePlateControllerStore: jotai_x.UseStoreApi<{
    activeId: jotai.PrimitiveAtom<string | null> & {
        init: string | null;
    };
    editorStores: jotai.PrimitiveAtom<Record<string, ({
        get: <Value>(atom: Atom<Value>) => Value;
        set: <Value, Args extends unknown[], Result>(atom: jotai.WritableAtom<Value, Args, Result>, ...args: Args) => Result;
        sub: (atom: Atom<unknown>, listener: () => void) => () => void;
    } & Partial<{
        dev_subscribe_store: (l: (action: {
            type: "write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "async-write";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "sub";
            flushed: Set<Atom<unknown>>;
        } | {
            type: "unsub";
        } | {
            type: "restore";
            flushed: Set<Atom<unknown>>;
        }) => void, rev: 2) => () => void;
        dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
        dev_get_atom_state: (a: Atom<unknown>) => ({
            d: Map<Atom<unknown>, /*elided*/ any & ({
                e: unknown;
            } | {
                v: unknown;
            })>;
        } & ({
            e: unknown;
        } | {
            v: unknown;
        })) | undefined;
        dev_get_mounted: (a: Atom<unknown>) => {
            l: Set<() => void>;
            t: Set<Atom<unknown>>;
            u?: () => void;
        } | undefined;
        dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
    }>) | null>> & {
        init: Record<string, ({
            get: <Value>(atom: Atom<Value>) => Value;
            set: <Value, Args extends unknown[], Result>(atom: jotai.WritableAtom<Value, Args, Result>, ...args: Args) => Result;
            sub: (atom: Atom<unknown>, listener: () => void) => () => void;
        } & Partial<{
            dev_subscribe_store: (l: (action: {
                type: "write";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "async-write";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "sub";
                flushed: Set<Atom<unknown>>;
            } | {
                type: "unsub";
            } | {
                type: "restore";
                flushed: Set<Atom<unknown>>;
            }) => void, rev: 2) => () => void;
            dev_get_mounted_atoms: () => IterableIterator<Atom<unknown>>;
            dev_get_atom_state: (a: Atom<unknown>) => ({
                d: Map<Atom<unknown>, /*elided*/ any & ({
                    e: unknown;
                } | {
                    v: unknown;
                })>;
            } & ({
                e: unknown;
            } | {
                v: unknown;
            })) | undefined;
            dev_get_mounted: (a: Atom<unknown>) => {
                l: Set<() => void>;
                t: Set<Atom<unknown>>;
                u?: () => void;
            } | undefined;
            dev_restore_atoms: (values: Iterable<readonly [Atom<unknown>, unknown]>) => void;
        }>) | null>;
    };
    primaryEditorIds: jotai.PrimitiveAtom<string[]> & {
        init: string[];
    };
}, object>;

declare const usePlateControllerLocalStore: typeof _usePlateControllerStore;
declare const usePlateControllerExists: () => boolean;
/**
 * Retrieve from PlateController the JotaiStore for the editor with a given ID,
 * or the active editor if no ID is provided, or the first primary editor if no
 * editor is active, or null.
 */
declare const usePlateControllerStore: (idProp?: string) => JotaiStore | null;

interface PlateProps<E extends PlateEditor = PlateEditor> extends Partial<Pick<PlateStoreState<E>, 'decorate' | 'onChange' | 'onNodeChange' | 'onSelectionChange' | 'onTextChange' | 'onValueChange' | 'primary' | 'readOnly'>> {
    children: React$1.ReactNode;
    editor: E | null;
    renderElement?: EditableProps['renderElement'];
    renderLeaf?: EditableProps['renderLeaf'];
    suppressInstanceWarning?: boolean;
}
declare function Plate<E extends PlateEditor = PlateEditor>(props: PlateProps<E>): React$1.JSX.Element | null;

declare const PlateContainer: {
    ({ children, ...props }: HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};

type PlateContentProps = Omit<EditableProps, 'decorate'> & {
    /** Autofocus when it becomes editable (readOnly false -> readOnly true) */
    autoFocusOnEditable?: boolean;
    decorate?: PlateStoreState['decorate'];
    disabled?: boolean;
    /** R enders the editable content. */
    renderEditable?: (editable: React$1.ReactElement<any>) => React$1.ReactNode;
};
/**
 * Editable with plugins.
 *
 * - Decorate prop
 * - DOM handler props
 * - ReadOnly prop
 * - Render.afterEditable
 * - Render.beforeEditable
 * - RenderElement prop
 * - RenderLeaf prop
 * - UseHooks
 */
declare const PlateContent: React$1.ForwardRefExoticComponent<Omit<EditableProps, "decorate"> & {
    /** Autofocus when it becomes editable (readOnly false -> readOnly true) */
    autoFocusOnEditable?: boolean;
    decorate?: PlateStoreState["decorate"];
    disabled?: boolean;
    /** R enders the editable content. */
    renderEditable?: (editable: React$1.ReactElement<any>) => React$1.ReactNode;
} & React$1.RefAttributes<unknown>>;

interface PlateControllerEffectProps {
    id?: string;
}
declare const PlateControllerEffect: ({ id: idProp, }: PlateControllerEffectProps) => null;

/**
 * Slate with plugins.
 *
 * - OnChange prop
 * - RenderAboveSlate
 */
declare function PlateSlate({ id, children, }: {
    children: React$1.ReactNode;
    id?: string;
}): React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>;

declare function PlateTest({ editableProps, shouldNormalizeEditor, variant, ...props }: CreatePlateEditorOptions & PlateProps & {
    editableProps?: PlateContentProps;
    variant?: 'comment' | 'wordProcessor';
}): React$1.JSX.Element;

type PlateViewProps = PlateStaticProps & {};
declare const PlateView: (props: PlateViewProps) => React$1.JSX.Element;

type RefComponent<P, R> = React$1.FC<P> & {
    ref?: React$1.Ref<R>;
};
declare const withHOC: <ComponentProps, HOCProps, ComponentRef, HOCRef>(HOC: RefComponent<HOCProps, HOCRef>, Component: RefComponent<ComponentProps, ComponentRef>, hocProps?: Omit<HOCProps, "children">, hocRef?: React$1.Ref<HOCRef>) => React$1.ForwardRefExoticComponent<React$1.PropsWithoutRef<ComponentProps> & React$1.RefAttributes<ComponentRef>>;

declare const useEditableProps: ({ disabled, readOnly, ...editableProps }?: Omit<EditableProps, "decorate"> & Pick<PlateProps, "decorate">) => EditableProps;

/**
 * Returns the path of a node every time the node changes. Note, however, that
 * if another node is updated in a way that affects this node's path, this hook
 * will not return the new path.
 */
declare const useNodePath: (node: TNode) => _platejs_slate.Path | undefined;

interface SlateProps extends UnknownObject {
    children: React$1.ReactNode;
    editor: Editor;
    initialValue: Value;
    onChange?: (value: Value) => void;
    onSelectionChange?: (selection: TSelection) => void;
    onValueChange?: (value: Value) => void;
}
/** Get Slate props stored in a global store. */
declare const useSlateProps: ({ id, }: {
    id?: string;
}) => Omit<SlateProps, "children">;

declare const createPlateFallbackEditor: (options?: CreatePlateEditorOptions) => TPlateEditor<_platejs_slate.Value, PlateCorePlugin>;

declare const DOM_HANDLERS: (keyof DOMHandlers)[];

/**
 * Override node props with plugin props. Allowed properties in
 * `props.element.attributes` are passed into `props.attributes`. Extend the
 * class name with the node type.
 */
declare const getRenderNodeProps: ({ attributes: nodeAttributes, disableInjectNodeProps, editor, plugin, props, readOnly, }: {
    editor: PlateEditor;
    props: PlateHTMLProps;
    attributes?: AnyObject;
    disableInjectNodeProps?: boolean;
    plugin?: AnyEditorPlatePlugin;
    readOnly?: boolean;
}) => PlateHTMLProps;

declare const convertDomEventToSyntheticEvent: (domEvent: Event) => React$1.SyntheticEvent<unknown, unknown>;
/** Check if an event is overrided by a handler. */
declare const isEventHandled: <EventType extends React$1.SyntheticEvent<unknown, unknown>>(event: EventType, handler?: (event: EventType) => boolean | void) => boolean;
/**
 * Generic pipe for handlers.
 *
 * - Get all the plugins handlers by `handlerKey`.
 * - If there is no plugin handler or editable prop handler for this key, return
 *   `undefined`.
 * - Return a handler calling all the plugins handlers then the prop handler.
 * - Any handler returning true will stop the next handlers to be called,
 *   including slate internal handler.
 */
declare const pipeHandler: <K extends keyof DOMHandlers>(editor: PlateEditor, { editableProps, handlerKey, }: {
    handlerKey: K;
    editableProps?: Omit<EditableProps, "decorate"> | null;
}) => ((event: any) => void) | undefined;

declare const pipeOnChange: (editor: PlateEditor, value: Value) => boolean;

/** @see {@link RenderElement} */
declare const pipeRenderElement: (editor: PlateEditor, renderElementProp?: EditableProps["renderElement"]) => EditableProps["renderElement"];

/** @see {@link RenderLeaf} */
declare const pipeRenderLeaf: (editor: PlateEditor, renderLeafProp?: EditableProps["renderLeaf"]) => EditableProps["renderLeaf"];

/** @see {@link RenderText} */
declare const pipeRenderText: (editor: PlateEditor, renderTextProp?: EditableProps["renderText"]) => EditableProps["renderText"];

/**
 * Function used to render an element. If the function returns undefined then
 * the next RenderElement function is called. If the function renders a JSX
 * element then that JSX element is rendered.
 */
type RenderElement = (props: PlateElementProps) => React$1.ReactElement<any> | undefined;
declare function BelowRootNodes(props: any): React$1.JSX.Element;
/**
 * Get a `Editable.renderElement` handler for `plugin.node.type`. If the type is
 * equals to the slate element type, render `plugin.render.node`. Else, return
 * `undefined` so the pipeline can check the next plugin.
 */
declare const pluginRenderElement: (editor: PlateEditor, plugin: AnyEditorPlatePlugin) => RenderElement;

type RenderLeaf = (props: PlateLeafProps) => React$1.ReactElement<any>;
/**
 * Get a `Editable.renderLeaf` handler for `plugin.node.type`. If the type is
 * equals to the slate leaf type, render `plugin.render.node`. Else, return
 * `children`.
 */
declare const pluginRenderLeaf: (editor: PlateEditor, plugin: AnyEditorPlatePlugin) => RenderLeaf;

type RenderText = (props: PlateTextProps) => React$1.ReactElement<any>;
/**
 * Get a `Editable.renderText` handler for `plugin.node.type`. If the type is
 * equals to the slate text type and isDecoration is false, render
 * `plugin.render.node`. Else, return the default text rendering.
 */
declare const pluginRenderText: (editor: PlateEditor, plugin: AnyEditorPlatePlugin) => RenderText;

export { type AnyEditorPlatePlugin, type AnyPlatePlugin, BLUR_EDITOR_EVENT, BelowRootNodes, ContentVisibilityChunk, type CreatePlateEditorOptions, type DOMHandler, type DOMHandlers, DOM_HANDLERS, type Decorate, type Deserializer, type EditableSiblingComponent, EditorHotkeysEffect, EditorMethodsEffect, type EditorPlatePlugin, EditorRefEffect, EditorRefPluginEffect, ElementProvider, type ElementStoreState, EventEditorPlugin, type EventEditorState, EventEditorStore, type ExtendEditor, type ExtendEditorApi, type ExtendEditorTransforms, FOCUS_EDITOR_EVENT, GLOBAL_PLATE_SCOPE, type HtmlDeserializer, type HtmlReactSerializer, type HtmlSerializer, type InferConfig, type InjectNodeProps, type KeyboardHandler, type KeyofPlugins, type LeafNodeProps, type NodeProps, type NodeWrapperComponent, type NodeWrapperComponentProps, type NodeWrapperComponentReturnType, type NormalizeInitialValue, type OnChange, type OnNodeChange, type OnTextChange, type OverrideEditor, PLATE_SCOPE, ParagraphPlugin, type Parser, Plate, type PlateChangeKey, type PlateChunkProps, PlateContainer, PlateContent, type PlateContentProps, PlateController, PlateControllerEffect, type PlateControllerEffectProps, type PlateCorePlugin, type PlateEditor, PlateElement, type PlateElementProps, type PlateHTMLProps, PlateLeaf, type PlateLeafProps, type PlateNodeProps, type PlatePlugin, type PlatePluginConfig$2 as PlatePluginConfig, type PlatePluginContext, type PlatePluginMethods, type PlatePlugins, type PlateProps, PlateSlate, type PlateStore, PlateStoreProvider, type PlateStoreState, PlateTest, PlateText, type PlateTextProps, PlateView, type PlateViewProps, ReactPlugin, type RenderElement, type RenderLeaf, type RenderNodeWrapper, type RenderNodeWrapperFunction, type RenderNodeWrapperProps, type RenderText, SCOPE_ELEMENT, type Serializer, type Shortcut, type Shortcuts, SlateReactExtensionPlugin, type StyledPlateElementProps, type StyledPlateLeafProps, type StyledPlateTextProps, type TPlateEditor, type TextNodeProps, type TransformOptions, type UseEditorSelectorOptions, type UseHooks, type WithPlateOptions, convertDomEventToSyntheticEvent, createPlateEditor, createPlateFallbackEditor, createPlatePlugin, createPlateStore, createTPlatePlugin, elementStore, getEditorPlugin, getEventPlateId, getPlateCorePlugins, getPlugin, getRenderNodeProps, isEventHandled, omitPluginContext, pipeHandler, pipeOnChange, pipeRenderElement, pipeRenderLeaf, pipeRenderText, plateControllerStore, plateStore, pluginRenderElement, pluginRenderLeaf, pluginRenderText, toPlatePlugin, toTPlatePlugin, useEditableProps, useEditorComposing, useEditorContainerRef, useEditorId, useEditorMounted, useEditorPlugin, useEditorPluginOption, useEditorPluginOptions, useEditorReadOnly, useEditorRef, useEditorScrollRef, useEditorSelection, useEditorSelector, useEditorState, useEditorValue, useEditorVersion, useElement, useElementSelector, useElementStore, useEventEditorValue, useEventPlateId, useFocusEditorEvents, useFocusedLast, useIncrementVersion, useNodeAttributes, useNodePath, usePath, usePlateControllerExists, usePlateControllerLocalStore, usePlateControllerStore, usePlateEditor, usePlateLocalStore, usePlateSet, usePlateState, usePlateStore, usePlateValue, usePlateViewEditor, usePluginOption, usePluginOptions, useRedecorate, useScrollRef, useSelectionVersion, useSlateProps, useValueVersion, withHOC, withPlate, withPlateReact };
