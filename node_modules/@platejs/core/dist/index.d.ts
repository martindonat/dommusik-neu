import { S as SlatePlugin, P as PluginConfig, R as RenderElementProps, a as SlateEditor, A as AnyEditorPlugin, b as RenderLeafProps, c as RenderTextProps, d as PlateStaticProps, e as ScrollMode, f as AutoScrollOperationsMap, W as WithAutoScrollOptions, g as SlateRenderNodeProps, E as EditableProps, h as SlatePluginMethods, i as AnyPluginConfig, j as WithRequiredKey, k as SlatePluginContext, I as InferConfig, l as EditorPlugin, m as ExtendEditor, O as OverrideEditor, C as ChunkingConfig, H as HtmlDeserializer, L as LengthConfig, N as NodeIdConfig, n as AnySlatePlugin, o as ParserOptions } from './withSlate-B8gBzRNS.js';
export { aL as AUTO_SCROLL, aE as AffinityConfig, aF as AffinityPlugin, v as BaseDeserializer, B as BaseEditor, x as BaseHtmlDeserializer, y as BaseInjectProps, aU as BaseParagraphPlugin, z as BasePlugin, D as BasePluginContext, F as BasePluginNode, G as BaseSerializer, J as BaseTransformOptions, r as BaseWithSlateOptions, b1 as BoxStaticProps, M as BreakRules, aG as ChunkingPlugin, ax as CorePlugin, aB as CorePluginApi, aA as CorePluginTransforms, t as CreateSlateEditorOptions, aN as DOMPlugin, aC as DebugConfig, aH as DebugErrorType, aK as DebugPlugin, aa as Decorate, V as DeleteRules, ab as Deserializer, aM as DomConfig, Z as EditOnlyConfig, aD as ElementAffinity, b5 as ElementStatic, _ as ExtendConfig, ac as ExtendEditorApi, ad as ExtendEditorTransforms, ay as GetCorePluginsOptions, $ as GetInjectNodePropsOptions, a0 as GetInjectNodePropsReturnType, a9 as HandlerReturnType, ae as HtmlSerializer, a2 as InferApi, a1 as InferKey, a3 as InferOptions, p as InferPlugins, a4 as InferSelectors, a5 as InferTransforms, aX as InitOptions, af as InjectNodeProps, aZ as InsertExitBreakOptions, q as KeyofNodePlugins, K as KeyofPlugins, b6 as LeafStatic, ag as LeafStaticProps, aI as LogLevel, Y as MatchRules, Q as MergeRules, a6 as NodeComponent, a7 as NodeComponents, aP as NodeIdOptions, aS as NodeIdPlugin, ah as NodeStaticProps, ai as NodeStaticWrapperComponent, aj as NodeStaticWrapperComponentProps, ak as NodeStaticWrapperComponentReturnType, al as NormalizeInitialValue, aQ as NormalizeNodeIdOptions, U as NormalizeRules, aT as ParagraphConfig, am as Parser, an as PartialEditorPlugin, aJ as PlateError, b7 as PlateStatic, bl as RenderChunkFn, bm as RenderChunkProps, bn as RenderElementFn, bo as RenderLeafFn, ao as RenderStaticNodeWrapper, ap as RenderStaticNodeWrapperFunction, aq as RenderStaticNodeWrapperProps, bp as RenderTextFn, X as SelectionRules, ar as Serializer, bd as SlateElement, b9 as SlateElementProps, aV as SlateExtensionConfig, aW as SlateExtensionPlugin, bb as SlateHTMLProps, bj as SlateLeaf, bh as SlateLeafProps, ba as SlateNodeProps, as as SlatePluginConfig, at as SlatePlugins, b2 as SlateRenderElementProps, b3 as SlateRenderLeafProps, b4 as SlateRenderTextProps, aw as SlateShortcut, bg as SlateText, be as SlateTextProps, bc as StyledSlateElementProps, bi as StyledSlateLeafProps, bf as StyledSlateTextProps, T as TSlateEditor, au as TextStaticProps, av as TransformOptions, a8 as WithAnyKey, s as WithSlateOptions, u as createSlateEditor, bk as createStaticEditor, az as getCorePlugins, aY as init, a_ as insertExitBreak, aR as normalizeNodeId, a$ as resetBlock, b0 as setValue, b8 as useNodeAttributes, aO as withScrolling, w as withSlate } from './withSlate-B8gBzRNS.js';
export { nanoid } from 'nanoid';
export { TStateApi as ZustandStoreApi, createZustandStore } from 'zustand-x';
import { AnyObject, Modify, Nullable } from '@udecode/utils';
import * as _platejs_slate from '@platejs/slate';
import { TElement, TText, Descendant, NodeEntry, TRange, TNode, NodeOf, Path, QueryNodeOptions, Editor, NodeOperation, TextOperation } from '@platejs/slate';
import { NodeEntry as NodeEntry$1 } from 'slate';
import React$1 from 'react';
import { KeyboardEventLike } from 'is-hotkey';
export { isHotkey } from 'is-hotkey';
import 'mutative';

/**
 * Enables support for deserializing inserted content from Slate Ast format to
 * Slate format while apply a small bug fix.
 */
declare const AstPlugin: SlatePlugin<PluginConfig<"ast", {}, {}, {}, {}>>;

type SlateRenderElement = (props: RenderElementProps) => React$1.ReactElement<any> | undefined;
declare const pluginRenderElementStatic: (editor: SlateEditor, plugin: AnyEditorPlugin) => SlateRenderElement;

declare const pipeRenderElementStatic: (editor: SlateEditor, { renderElement: renderElementProp, }?: {
    renderElement?: SlateRenderElement;
}) => SlateRenderElement;

type SlateRenderLeaf = (props: RenderLeafProps) => React$1.ReactElement<any> | undefined;
declare const pluginRenderLeafStatic: (editor: SlateEditor, plugin: SlatePlugin) => SlateRenderLeaf;
/** @see {@link RenderLeaf} */
declare const pipeRenderLeafStatic: (editor: SlateEditor, { renderLeaf: renderLeafProp }?: {
    renderLeaf?: SlateRenderLeaf;
}) => SlateRenderLeaf;

type SlateRenderText = (props: RenderTextProps) => React$1.ReactElement<any> | undefined;
declare const pluginRenderTextStatic: (editor: SlateEditor, plugin: SlatePlugin) => SlateRenderText;
/** @see {@link RenderText} */
declare const pipeRenderTextStatic: (editor: SlateEditor, { renderText: renderTextProp }?: {
    renderText?: SlateRenderText;
}) => SlateRenderText;

type SerializeHtmlOptions<T extends PlateStaticProps = PlateStaticProps> = {
    /** The component used to render the editor content */
    editorComponent?: React$1.ComponentType<T>;
    /** List of className prefixes to preserve from being stripped out */
    preserveClassNames?: string[];
    /** Props to pass to the editor component */
    props?: Partial<T>;
    /** Enable stripping class names */
    stripClassNames?: boolean;
    /** Enable stripping data attributes */
    stripDataAttributes?: boolean;
};
/**
 * Serialize the editor content to HTML. By default, uses `PlateStatic` as the
 * editor component, but you can provide a custom component (e.g.
 * `EditorStatic`).
 */
declare const serializeHtml: <T extends PlateStaticProps = PlateStaticProps>(editor: SlateEditor, { editorComponent: EditorComponent, preserveClassNames, props, stripClassNames, stripDataAttributes, }?: SerializeHtmlOptions<T>) => Promise<string>;

declare const isSlateVoid: (element: HTMLElement) => boolean;
declare const isSlateElement: (element: HTMLElement) => boolean;
declare const isSlateText: (element: HTMLElement) => boolean;
declare const isSlateString: (element: HTMLElement) => boolean;
declare const isSlateLeaf: (element: HTMLElement) => boolean;
declare const isSlateEditor: (element: HTMLElement) => boolean;
declare const isSlateNode: (element: HTMLElement) => boolean;
declare const isSlatePluginElement: (element: HTMLElement, pluginKey: string) => boolean;
declare const isSlatePluginNode: (element: HTMLElement, pluginKey: string) => boolean;
declare const getSlateElements: (element: HTMLElement) => HTMLElement[];

/**
 * Convert HTML string exported from Plate into HTML element.
 *
 * @param html - The HTML string to convert exported from Plate.
 * @returns The Editor element without head and body.
 */
declare const getEditorDOMFromHtmlString: (html: string) => HTMLElement;

declare const ViewPlugin: SlatePlugin<PluginConfig<"dom", {
    scrollMode?: ScrollMode;
    scrollOperations?: AutoScrollOperationsMap;
    scrollOptions?: _platejs_slate.ScrollIntoViewOptions;
}, {
    getFragment: () => _platejs_slate.Descendant[];
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>>;

declare const getStaticPlugins: () => SlatePlugin<PluginConfig<"dom", {
    scrollMode?: ScrollMode;
    scrollOperations?: AutoScrollOperationsMap;
    scrollOptions?: _platejs_slate.ScrollIntoViewOptions;
}, {
    getFragment: () => _platejs_slate.Descendant[];
    isScrolling: () => boolean;
}, {
    withScrolling: (fn: () => void, options?: WithAutoScrollOptions | undefined) => void;
}, {}>>[];

declare function createStaticString({ text }: {
    text: string;
}): React$1.ReactElement<{
    'data-slate-string': boolean;
}, string | React$1.JSXElementConstructor<any>>;

declare const getNodeDataAttributes: (editor: SlateEditor, node: TElement | TText, { isElement, isLeaf, isText, }: {
    isElement?: boolean;
    isLeaf?: boolean;
    isText?: boolean;
}) => {};
declare const getPluginDataAttributes: (editor: SlateEditor, plugin: AnyEditorPlugin, node: TElement | TText) => {};
declare const getNodeDataAttributeKeys: (node: TElement | TText) => string[];
declare const keyToDataAttribute: (key: string) => string;

declare const getRenderNodeStaticProps: ({ attributes: nodeAttributes, editor, node, plugin, props, }: {
    editor: SlateEditor;
    props: SlateRenderNodeProps;
    attributes?: AnyObject;
    node?: TElement | TText;
    plugin?: AnyEditorPlugin;
}) => SlateRenderNodeProps;

/** Get the slate nodes from the DOM selection */
/** @deprecated Use getSelectedDomFragment instead */
declare const getSelectedDomBlocks: () => Element[] | undefined;

declare const getSelectedDomFragment: (editor: SlateEditor) => Descendant[];

/** Get the DOM node from the DOM selection */
declare const getSelectedDomNode: () => HTMLDivElement | undefined;

/** Check if the DOM selection is outside the editor */
declare const isSelectOutside: (html?: HTMLElement) => boolean;

/**
 * @see {@link Decorate} .
 * Optimization: return undefined if empty list so Editable uses a memo.
 */
declare const pipeDecorate: (editor: SlateEditor, decorateProp?: ((ctx: {
    editor: SlateEditor;
    entry: NodeEntry;
}) => TRange[] | undefined) | null) => EditableProps["decorate"];

/**
 * Remove all class names that do not start with one of preserveClassNames
 * (`slate-` by default)
 */
declare const stripHtmlClassNames: (html: string, { preserveClassNames }: {
    preserveClassNames?: string[];
}) => string;

declare const stripSlateDataAttributes: (rawHtml: string) => string;

type SlatePluginConfig<K extends string = any, O = {}, A = {}, T = {}, S = {}> = Omit<Partial<Modify<SlatePlugin<PluginConfig<K, O, A, T, S>>, {
    node?: Partial<SlatePlugin<PluginConfig<K, O, A, T, S>>['node']>;
}>>, keyof SlatePluginMethods | 'optionsStore'>;
type TSlatePluginConfig<C extends AnyPluginConfig = PluginConfig> = Omit<Partial<Modify<SlatePlugin<C>, {
    node?: Partial<SlatePlugin<C>['node']>;
}>>, keyof SlatePluginMethods | 'optionsStore'>;
/**
 * Creates a new Plate plugin with the given configuration.
 *
 * @remarks
 *   - The plugin's key is required and specified by the K generic.
 *   - The `__extensions` array stores functions to be applied when `resolvePlugin`
 *       is called with an editor.
 *   - The `extend` method adds new extensions to be applied later.
 *   - The `extendPlugin` method extends an existing plugin (including nested
 *       plugins) or adds a new one if not found.
 *
 * @example
 *   const myPlugin = createSlatePlugin<
 *     'myPlugin',
 *     MyOptions,
 *     MyApi,
 *     MyTransforms
 *   >({
 *     key: 'myPlugin',
 *     options: { someOption: true },
 *     transforms: { someTransform: () => {} },
 *   });
 *
 *   const extendedPlugin = myPlugin.extend({
 *     options: { anotherOption: false },
 *   });
 *
 *   const pluginWithNestedExtension = extendedPlugin.extendPlugin(
 *     nestedPlugin,
 *     { options: { nestedOption: true } }
 *   );
 *
 * @template K - The literal type of the plugin key.
 * @template O - The type of the plugin options.
 * @template A - The type of the plugin utilities.
 * @template T - The type of the plugin transforms.
 * @template S - The type of the plugin storage.
 * @param {Partial<SlatePlugin<K, O, A, T, S>>} config - The configuration
 *   object for the plugin.
 * @returns {SlatePlugin<K, O, A, T, S>} A new Plate plugin instance with the
 *   following properties and methods:
 *
 *   - All properties from the input config, merged with default values.
 *   - `configure`: A method to create a new plugin instance with updated options.
 *   - `extend`: A method to create a new plugin instance with additional
 *       configuration.
 *   - `extendPlugin`: A method to extend an existing plugin (including nested
 *       plugins) or add a new one if not found.
 */
declare function createSlatePlugin<K extends string = any, O = {}, A = {}, T = {}, S = {}>(config?: ((editor: SlateEditor) => SlatePluginConfig<K, O, A, T, S>) | SlatePluginConfig<K, O, A, T, S>): SlatePlugin<PluginConfig<K, O, A, T, S>>;
/**
 * Explicitly typed version of `createSlatePlugin`.
 *
 * @remarks
 *   While `createSlatePlugin` uses type inference, this function requires an
 *   explicit type parameter. Use this when you need precise control over the
 *   plugin's type structure or when type inference doesn't provide the desired
 *   result.
 */
declare function createTSlatePlugin<C extends AnyPluginConfig = PluginConfig>(config?: ((editor: SlateEditor) => TSlatePluginConfig<C>) | TSlatePluginConfig<C>): SlatePlugin<C>;

declare function getEditorPlugin<P extends AnyPluginConfig | SlatePlugin<AnyPluginConfig>>(editor: SlateEditor, p: WithRequiredKey<P>): SlatePluginContext<InferConfig<P> extends never ? P : InferConfig<P>>;

/** Get editor plugin by key or plugin object. */
declare function getSlatePlugin<C extends AnyPluginConfig = PluginConfig>(editor: SlateEditor, p: WithRequiredKey<C>): C extends {
    node: any;
} ? C : SlatePlugin<C>;
/** Get editor plugin type by key or plugin object. */
declare function getPluginType(editor: SlateEditor, key: string): string;
/** Get editor plugin types by key. */
declare const getPluginTypes: (editor: SlateEditor, keys: string[]) => string[];
declare const getPluginKey: (editor: SlateEditor, type: string) => string | undefined;
declare const getPluginKeys: (editor: SlateEditor, types: string[]) => string[];
declare const getPluginByType: (editor: SlateEditor, type: string) => EditorPlugin<AnyPluginConfig> | null;
declare const getContainerTypes: (editor: SlateEditor) => string[];

declare const withPlateHistory: ExtendEditor;
/** @see {@link withHistory} */
declare const HistoryPlugin: SlatePlugin<PluginConfig<"history", {}, {}, {}, {}>>;

declare const ParserPlugin: SlatePlugin<PluginConfig<"parser", {}, {}, {}, {}>>;

type EdgeNodes = [NodeEntry$1<TElement | TText>, NodeEntry$1<TElement | TText>] | [NodeEntry$1<TElement | TText>, null] | [null, NodeEntry$1<TElement | TText>];

/**
 * When the cursor is at a mark edge, this function returns the inward node and
 * the outward node (if any). If the cursor is at the start of the text, then
 * the node before the text is returned. If the cursor is at the end of the
 * text, then the node after the text is returned. Otherwise, null is returned.
 */
declare const getEdgeNodes: (editor: SlateEditor) => EdgeNodes | null;

declare const getMarkBoundaryAffinity: (editor: SlateEditor, markBoundary: EdgeNodes) => "backward" | "forward" | undefined;

declare const isNodeAffinity: (editor: SlateEditor, node: TElement | TText, affinity: "directional" | "hard" | "outward") => boolean;
declare const isNodesAffinity: (editor: SlateEditor, edgeNodes: EdgeNodes, affinity: "directional" | "hard" | "outward") => boolean | null;

declare const setAffinitySelection: (editor: SlateEditor, edgeNodes: EdgeNodes, affinity: "backward" | "forward") => void;

declare const withChunking: OverrideEditor<ChunkingConfig>;

/**
 * Enables support for deserializing inserted content from HTML format to Slate
 * format and serializing Slate content to HTML format.
 */
declare const HtmlPlugin: SlatePlugin<PluginConfig<"html", {}, Record<"html", {
    deserialize: (args_0: {
        element: HTMLElement | string;
        collapseWhiteSpace?: boolean;
        defaultElementPlugin?: WithRequiredKey;
    }) => _platejs_slate.Descendant[];
}>, {}, {}>>;

declare const CARRIAGE_RETURN = "\r";
declare const LINE_FEED = "\n";
declare const NO_BREAK_SPACE = "\u00A0";
declare const SPACE = " ";
declare const TAB = "\t";
declare const ZERO_WIDTH_SPACE = "\u200B";

type DeserializeHtmlChildren = ChildNode | Descendant | string | null;
/** De */
type DeserializeHtmlNodeReturnType = Descendant | Descendant[] | DeserializeHtmlChildren[] | string | null;

/** Replace BR elements with line feeds. */
declare const cleanHtmlBrElements: (rootNode: Node) => void;

/** Replace \r\n and \r with \n */
declare const cleanHtmlCrLf: (html: string) => string;

/** Remove empty elements from rootNode. Allowed empty elements: BR, IMG. */
declare const cleanHtmlEmptyElements: (rootNode: Node) => void;

/**
 * Replace FONT elements with SPAN elements if there is textContent (remove
 * otherwise).
 */
declare const cleanHtmlFontElements: (rootNode: Node) => void;

/** Remove fragment hrefs and spans without inner text. */
declare const cleanHtmlLinkElements: (rootNode: Node) => void;

declare const cleanHtmlTextNodes: (rootNode: Node) => void;

/**
 * Set HTML blocks mark styles to a new child span element if any. This allows
 * Plate to use block marks.
 */
declare const copyBlockMarksToSpanChild: (rootNode: Node) => void;

/** Deserialize HTML element to a valid document fragment. */
declare const deserializeHtml: (editor: SlateEditor, { collapseWhiteSpace: shouldCollapseWhiteSpace, defaultElementPlugin, element, }: {
    element: HTMLElement | string;
    collapseWhiteSpace?: boolean;
    defaultElementPlugin?: WithRequiredKey;
}) => Descendant[];

/** Deserialize HTML element to fragment. */
declare const deserializeHtmlElement: (editor: SlateEditor, element: HTMLElement) => DeserializeHtmlNodeReturnType;

/** Deserialize HTML element or child node. */
declare const deserializeHtmlNode: (editor: SlateEditor) => (node: ChildNode | HTMLElement) => DeserializeHtmlNodeReturnType;

declare const deserializeHtmlNodeChildren: (editor: SlateEditor, node: ChildNode | HTMLElement, isSlateParent?: boolean) => DeserializeHtmlChildren[];

/**
 * Find the first HTML element that matches the given selector.
 *
 * @param rootNode
 * @param predicate
 */
declare const findHtmlElement: (rootNode: Node, predicate: (node: HTMLElement) => boolean) => null;
declare const someHtmlElement: (rootNode: Node, predicate: (node: HTMLElement) => boolean) => boolean;

declare const getDataNodeProps: ({ editor, element, plugin, }: {
    editor: SlateEditor;
    element: HTMLElement;
    plugin: AnyEditorPlugin;
}) => Record<string, any> | undefined;

declare const getHtmlComments: (node: Node) => string[];

/** Deserialize HTML body element to Fragment. */
declare const htmlBodyToFragment: (editor: SlateEditor, element: HTMLElement) => Descendant[] | undefined;

/** Deserialize HTML to break line. */
declare const htmlBrToNewLine: (node: ChildNode | HTMLElement) => "\n" | undefined;

/** Deserialize HTML to Element. */
declare const htmlElementToElement: (editor: SlateEditor, element: HTMLElement, isSlate?: boolean) => Descendant | undefined;

/**
 * Deserialize HTML to Descendant[] with marks on Text. Build the leaf from the
 * leaf deserializers of each plugin.
 */
declare const htmlElementToLeaf: (editor: SlateEditor, element: HTMLElement) => Descendant[];

/** Convert HTML string into HTML element. */
declare const htmlStringToDOMNode: (rawHtml: string) => HTMLBodyElement;

declare const htmlTextNodeToString: (node: ChildNode | HTMLElement) => string | undefined;

/**
 * # Methodology
 *
 * ## Step 1. Get the list of all standard tag names
 *
 * Go to https://developer.mozilla.org/en-US/docs/Web/HTML/Element and run the
 * following in the console to generate a JSON array of tag names:
 *
 * ```js
 * JSON.stringify(
 *   Array.from(document.querySelectorAll('article table td:first-child'))
 *     .map((td) => {
 *       const body = document.createElement('body');
 *       body.innerHTML = td.textContent;
 *       return body.firstChild?.tagName;
 *     })
 *     .filter((tagName) => tagName)
 * );
 * ```
 *
 * Output (as of 2023-11-06):
 *
 * ```json
 * '["BASE","LINK","META","STYLE","TITLE","ADDRESS","ARTICLE","ASIDE","FOOTER","HEADER","H1","HGROUP","MAIN","NAV","SECTION","SEARCH","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","HR","LI","MENU","OL","P","PRE","UL","A","ABBR","B","BDI","BDO","BR","CITE","CODE","DATA","DFN","EM","I","KBD","MARK","Q","RP","RT","RUBY","S","SAMP","SMALL","SPAN","STRONG","SUB","SUP","TIME","U","VAR","WBR","AREA","AUDIO","IMG","MAP","TRACK","VIDEO","EMBED","IFRAME","OBJECT","PICTURE","PORTAL","SOURCE","svg","math","CANVAS","NOSCRIPT","SCRIPT","DEL","INS","TABLE","BUTTON","DATALIST","FIELDSET","FORM","INPUT","LABEL","LEGEND","METER","OPTGROUP","OPTION","OUTPUT","PROGRESS","SELECT","TEXTAREA","DETAILS","DIALOG","SUMMARY","SLOT","TEMPLATE","ACRONYM","BIG","CENTER","CONTENT","DIR","FONT","IMG","MARQUEE","MENUITEM","NOBR","NOEMBED","NOFRAMES","PARAM","PLAINTEXT","RB","RTC","SHADOW","STRIKE","TT","XMP"]'
 * ```
 *
 * ## Step 2. For each tag name, determine the default browser style
 *
 * Open an empty HTML file in the browser and run the following in the console:
 *
 * ```js
 * const tagNames = JSON.parse(<JSON string from step 1>);
 *
 * JSON.stringify(
 *   tagNames.filter((tagName) => {
 *     const element = document.createElement(tagName);
 *     document.body.appendChild(element);
 *     const display = window.getComputedStyle(element).display;
 *     element.remove();
 *     return display.startsWith('inline');
 *   })
 * );
 * ```
 *
 * Place the result in the array below (accurate as of 2023-11-06).
 */
declare const inlineTagNames: Set<string>;

declare const isHtmlBlockElement: (node: Node) => boolean;

declare const isHtmlComment: (node: Node) => node is Comment;

declare const isHtmlElement: (node: Node) => node is Element;

/** If href starts with '#'. */
declare const isHtmlFragmentHref: (href: string) => boolean;

declare const isHtmlInlineElement: (node: Node) => boolean;

declare const isHtmlTable: (element: Element) => boolean;

declare const isHtmlText: (node: Node) => node is Text;

declare const isOlSymbol: (symbol: string) => boolean;

declare const parseHtmlDocument: (html: string) => Document;

declare const parseHtmlElement: (html: string) => HTMLElement;

declare const pipeDeserializeHtmlElement: (editor: SlateEditor, element: HTMLElement) => (Nullable<HtmlDeserializer> & {
    node: AnyObject;
}) | undefined;

declare const pipeDeserializeHtmlLeaf: (editor: SlateEditor, element: HTMLElement) => AnyObject;

/** Get a deserializer by type, node names, class names and styles. */
declare const pluginDeserializeHtml: (editor: SlateEditor, plugin: AnyEditorPlugin, { deserializeLeaf, element: el, }: {
    element: HTMLElement;
    deserializeLeaf?: boolean;
}) => (Nullable<HtmlDeserializer> & {
    node: AnyObject;
}) | undefined;

/** Trim the html and remove zero width spaces, then wrap it with a body element. */
declare const postCleanHtml: (html: string) => string;

/** Remove HTML surroundings and clean HTML from CR/LF */
declare const preCleanHtml: (html: string) => string;

/** Removes HTML nodes between HTML comments. */
declare const removeHtmlNodesBetweenComments: (rootNode: Node, start: string, end: string) => void;

/** Remove string before <html and after </html> */
declare const removeHtmlSurroundings: (html: string) => string;

/**
 * Replace `element` tag name by `tagName`. Attributes, innerHTML and parent
 * relationship is kept.
 */
declare const replaceTagName: (element: Element, tagName: string) => Element;

type Callback$3 = (node: Comment) => boolean;
/** Traverse HTML comments. */
declare const traverseHtmlComments: (rootNode: Node, callback: Callback$3) => void;

type Callback$2 = (node: Element) => boolean;
/**
 * Traverse the HTML elements of the given HTML node.
 *
 * @param rootNode The root HTML node to traverse.
 * @param callback The callback to call for each HTML element.
 */
declare const traverseHtmlElements: (rootNode: Node, callback: Callback$2) => void;

type Callback$1 = (node: Node) => boolean;
/**
 * Depth-first pre-order tree traverse the given HTML node and calls the given
 * callback for each node. see:
 * https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR)
 *
 * @param callback Returns a boolean indicating whether traversal should be
 *   continued
 */
declare const traverseHtmlNode: (node: Node, callback: Callback$1) => void;

type Callback = (node: Text) => boolean;
declare const traverseHtmlTexts: (rootNode: Node, callback: Callback) => void;

/** Unwrap the given HTML element. */
declare const unwrapHtmlElement: (element: Element) => void;

type CollapseWhiteSpaceState = {
    inlineFormattingContext: {
        atStart: boolean;
        lastHasTrailingWhiteSpace: boolean;
    } | null;
    whiteSpaceRule: WhiteSpaceRule;
};
type TrimEndRule = 'collapse' | 'single-newline';
type TrimStartRule = 'all' | 'collapse';
type WhiteSpaceRule = 'normal' | 'pre' | 'pre-line';

declare const collapseString: (text: string, { shouldCollapseWhiteSpace, trimEnd, trimStart, whiteSpaceIncludesNewlines, }?: {
    shouldCollapseWhiteSpace?: boolean;
    trimEnd?: TrimEndRule;
    trimStart?: TrimStartRule;
    whiteSpaceIncludesNewlines?: boolean;
}) => string;

declare const collapseWhiteSpace: (element: HTMLElement) => HTMLElement;

declare const collapseWhiteSpaceChildren: (node: Node, state: CollapseWhiteSpaceState) => void;

/**
 * Note: We do not want to start an inline formatting context until we encounter
 * a text node.
 */
declare const collapseWhiteSpaceElement: (element: HTMLElement, state: CollapseWhiteSpaceState) => void;

declare const collapseWhiteSpaceNode: (node: Node, state: CollapseWhiteSpaceState) => void;

declare const collapseWhiteSpaceText: (text: Text, state: CollapseWhiteSpaceState) => void;

declare const inferWhiteSpaceRule: (element: HTMLElement) => WhiteSpaceRule | null;

declare const isLastNonEmptyTextOfInlineFormattingContext: (initialText: Text) => boolean;

declare const upsertInlineFormattingContext: (state: CollapseWhiteSpaceState) => void;
declare const endInlineFormattingContext: (state: CollapseWhiteSpaceState) => void;

declare const LengthPlugin: SlatePlugin<LengthConfig>;

/** Enables support for inserting nodes with an id key. */
declare const withNodeId: OverrideEditor<NodeIdConfig>;

/**
 * Merge and register all the inline types and void types from the plugins and
 * options, using `editor.api.isInline`, `editor.api.markableVoid` and
 * `editor.api.isVoid`
 */
declare const withOverrides: OverrideEditor;
/** Override the editor api and transforms based on the plugins. */
declare const OverridePlugin: SlatePlugin<PluginConfig<"override", {}, {}, {}, {}>>;

declare const withBreakRules: OverrideEditor;

declare const withDeleteRules: OverrideEditor;

declare const withMergeRules: OverrideEditor;

declare const withNormalizeRules: OverrideEditor;

interface ApplyDeepToNodesOptions<N extends TNode> {
    apply: (node: NodeOf<N>, source: (() => Record<string, any>) | Record<string, any>) => void;
    node: N;
    source: (() => Record<string, any>) | Record<string, any>;
    path?: Path;
    query?: QueryNodeOptions;
}
/** Recursively apply an operation to children nodes with a query. */
declare const applyDeepToNodes: <N extends TNode>({ apply, node, path, query, source, }: ApplyDeepToNodesOptions<N>) => void;

/** Recursively merge a source object to children nodes with a query. */
declare const defaultsDeepToNodes: <N extends TNode>(options: Omit<ApplyDeepToNodesOptions<N>, "apply">) => void;

declare const getInjectMatch: <E extends SlateEditor>(editor: E, plugin: EditorPlugin) => (node: TNode, path: Path) => boolean;

/**
 * Get all plugins having a defined `inject.plugins[plugin.key]`. It includes
 * `plugin` itself.
 */
declare const getInjectedPlugins: (editor: SlateEditor, plugin: AnyEditorPlugin) => Partial<AnyEditorPlugin>[];

declare const getPluginNodeProps: ({ attributes: nodeAttributes, node, plugin, props, }: {
    props: SlateRenderNodeProps;
    attributes?: AnyObject;
    node?: TElement | TText;
    plugin?: AnyEditorPlugin;
}) => any;

/** Get slate class name: slate-<type> */
declare const getSlateClass: (type?: string) => string;

/** Create a platform-aware hotkey checker. */
declare const createHotkey: (key: string) => (event: KeyboardEventLike) => boolean;
declare const Hotkeys: {
    isBold: (event: KeyboardEventLike) => boolean;
    isCompose: (event: KeyboardEventLike) => boolean;
    isDeleteBackward: (event: KeyboardEventLike) => boolean;
    isDeleteForward: (event: KeyboardEventLike) => boolean;
    isDeleteLineBackward: (event: KeyboardEventLike) => boolean;
    isDeleteLineForward: (event: KeyboardEventLike) => boolean;
    isDeleteWordBackward: (event: KeyboardEventLike) => boolean;
    isDeleteWordForward: (event: KeyboardEventLike) => boolean;
    isEscape: (event: KeyboardEventLike) => boolean;
    isExtendBackward: (event: KeyboardEventLike) => boolean;
    isExtendDownward: (event: KeyboardEventLike) => boolean;
    isExtendForward: (event: KeyboardEventLike) => boolean;
    isExtendLineBackward: (event: KeyboardEventLike) => boolean;
    isExtendLineForward: (event: KeyboardEventLike) => boolean;
    isExtendUpward: (event: KeyboardEventLike) => boolean;
    isItalic: (event: KeyboardEventLike) => boolean;
    isMoveBackward: (event: KeyboardEventLike) => boolean;
    isMoveDownward: (event: KeyboardEventLike) => boolean;
    isMoveForward: (event: KeyboardEventLike) => boolean;
    isMoveLineBackward: (event: KeyboardEventLike) => boolean;
    isMoveLineForward: (event: KeyboardEventLike) => boolean;
    isMoveUpward: (event: KeyboardEventLike) => boolean;
    isMoveWordBackward: (event: KeyboardEventLike) => boolean;
    isMoveWordForward: (event: KeyboardEventLike) => boolean;
    isRedo: (event: KeyboardEventLike) => boolean;
    isSelectAll: (event: KeyboardEventLike) => boolean;
    isSoftBreak: (event: KeyboardEventLike) => boolean;
    isSplitBlock: (event: KeyboardEventLike) => boolean;
    isTab: (editor: Editor, event: React.KeyboardEvent, { composing, }?: {
        /** Ignore the event if composing. */
        composing?: boolean;
    }) => boolean;
    isTransposeCharacter: (event: KeyboardEventLike) => boolean;
    isUndo: (event: KeyboardEventLike) => boolean;
    isUntab: (editor: Editor, event: React.KeyboardEvent, { composing, }?: {
        /** Ignore the event if composing. */
        composing?: boolean;
    }) => boolean;
};

/** Does the node match the type provided. */
declare const isType: (editor: SlateEditor, node: any, key?: string[] | string) => boolean;

/** Recursively merge a source object to children nodes with a query. */
declare const mergeDeepToNodes: <N extends TNode>(options: Omit<ApplyDeepToNodesOptions<N>, "apply">) => void;

/** Normalize the descendants to a valid document fragment. */
declare const normalizeDescendantsToDocumentFragment: (editor: SlateEditor, { defaultElementPlugin, descendants, }: {
    descendants: Descendant[];
    defaultElementPlugin?: WithRequiredKey;
}) => Descendant[];

declare const omitPluginContext: <T extends SlatePluginContext<AnySlatePlugin>>(ctx: T) => Omit<T, "api" | "setOptions" | "tf" | "type" | "getOption" | "getOptions" | "setOption" | "editor" | "plugin">;

/**
 * Recursive deep merge of each plugin from `override.plugins` into plugin with
 * same key (plugin > plugin.plugins).
 */
declare const overridePluginsByKey: (plugin: AnySlatePlugin, overrideByKey?: Record<string, Partial<AnySlatePlugin>>, nested?: boolean) => AnySlatePlugin;

/** Is the plugin disabled by another plugin. */
declare const pipeInsertDataQuery: (editor: SlateEditor, plugins: Partial<AnyEditorPlugin>[], options: ParserOptions) => boolean;

declare const pipeOnNodeChange: (editor: SlateEditor, node: Descendant, prevNode: Descendant, operation: NodeOperation) => boolean;

declare const pipeOnTextChange: (editor: SlateEditor, node: Descendant, text: string, prevText: string, operation: TextOperation) => boolean;

export { AnyEditorPlugin, AnyPluginConfig, AnySlatePlugin, type ApplyDeepToNodesOptions, AstPlugin, AutoScrollOperationsMap, CARRIAGE_RETURN, ChunkingConfig, type CollapseWhiteSpaceState, type DeserializeHtmlChildren, type DeserializeHtmlNodeReturnType, type EdgeNodes, EditableProps, EditorPlugin, ExtendEditor, HistoryPlugin, Hotkeys, HtmlDeserializer, HtmlPlugin, InferConfig, LINE_FEED, LengthConfig, LengthPlugin, NO_BREAK_SPACE, NodeIdConfig, OverrideEditor, OverridePlugin, ParserOptions, ParserPlugin, PlateStaticProps, PluginConfig, RenderElementProps, RenderLeafProps, RenderTextProps, SPACE, ScrollMode, type SerializeHtmlOptions, SlateEditor, SlatePlugin, SlatePluginContext, SlatePluginMethods, type SlateRenderElement, type SlateRenderLeaf, SlateRenderNodeProps, type SlateRenderText, TAB, type TrimEndRule, type TrimStartRule, ViewPlugin, type WhiteSpaceRule, WithAutoScrollOptions, WithRequiredKey, ZERO_WIDTH_SPACE, applyDeepToNodes, cleanHtmlBrElements, cleanHtmlCrLf, cleanHtmlEmptyElements, cleanHtmlFontElements, cleanHtmlLinkElements, cleanHtmlTextNodes, collapseString, collapseWhiteSpace, collapseWhiteSpaceChildren, collapseWhiteSpaceElement, collapseWhiteSpaceNode, collapseWhiteSpaceText, copyBlockMarksToSpanChild, createHotkey, createSlatePlugin, createStaticString, createTSlatePlugin, defaultsDeepToNodes, deserializeHtml, deserializeHtmlElement, deserializeHtmlNode, deserializeHtmlNodeChildren, endInlineFormattingContext, findHtmlElement, getContainerTypes, getDataNodeProps, getEdgeNodes, getEditorDOMFromHtmlString, getEditorPlugin, getHtmlComments, getInjectMatch, getInjectedPlugins, getMarkBoundaryAffinity, getNodeDataAttributeKeys, getNodeDataAttributes, getPluginByType, getPluginDataAttributes, getPluginKey, getPluginKeys, getPluginNodeProps, getPluginType, getPluginTypes, getRenderNodeStaticProps, getSelectedDomBlocks, getSelectedDomFragment, getSelectedDomNode, getSlateClass, getSlateElements, getSlatePlugin, getStaticPlugins, htmlBodyToFragment, htmlBrToNewLine, htmlElementToElement, htmlElementToLeaf, htmlStringToDOMNode, htmlTextNodeToString, inferWhiteSpaceRule, inlineTagNames, isHtmlBlockElement, isHtmlComment, isHtmlElement, isHtmlFragmentHref, isHtmlInlineElement, isHtmlTable, isHtmlText, isLastNonEmptyTextOfInlineFormattingContext, isNodeAffinity, isNodesAffinity, isOlSymbol, isSelectOutside, isSlateEditor, isSlateElement, isSlateLeaf, isSlateNode, isSlatePluginElement, isSlatePluginNode, isSlateString, isSlateText, isSlateVoid, isType, keyToDataAttribute, mergeDeepToNodes, normalizeDescendantsToDocumentFragment, omitPluginContext, overridePluginsByKey, parseHtmlDocument, parseHtmlElement, pipeDecorate, pipeDeserializeHtmlElement, pipeDeserializeHtmlLeaf, pipeInsertDataQuery, pipeOnNodeChange, pipeOnTextChange, pipeRenderElementStatic, pipeRenderLeafStatic, pipeRenderTextStatic, pluginDeserializeHtml, pluginRenderElementStatic, pluginRenderLeafStatic, pluginRenderTextStatic, postCleanHtml, preCleanHtml, removeHtmlNodesBetweenComments, removeHtmlSurroundings, replaceTagName, serializeHtml, setAffinitySelection, someHtmlElement, stripHtmlClassNames, stripSlateDataAttributes, traverseHtmlComments, traverseHtmlElements, traverseHtmlNode, traverseHtmlTexts, unwrapHtmlElement, upsertInlineFormattingContext, withBreakRules, withChunking, withDeleteRules, withMergeRules, withNodeId, withNormalizeRules, withOverrides, withPlateHistory };
