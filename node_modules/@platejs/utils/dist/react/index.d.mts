import * as _platejs_slate from '@platejs/slate';
import { TElement, EditorPropOptions, Path } from '@platejs/slate';
import * as _platejs_core_react from '@platejs/core/react';
import { PlatePluginContext } from '@platejs/core/react';
import { PluginConfig } from '@platejs/core';

declare const useEditorString: () => string;

interface InputProps {
    /**
     * Should we activate the onKeyDownCapture handler to preventDefault when the
     * user presses enter?
     */
    preventDefaultOnEnterKeydown?: boolean;
}
/**
 * Hook to allow the user to spread a set of predefined props to the Div wrapper
 * of an Input element
 *
 * @param param0 An options object which can be expanded to add further
 *   functionality
 * @returns A props object which can be spread onto the element
 */
declare const useFormInputProps: (options?: InputProps) => {
    props: {
        onKeyDownCapture?: undefined;
    };
} | {
    props: {
        onKeyDownCapture: ((e: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    };
};

declare const useMarkToolbarButtonState: ({ clear, nodeType, }: {
    nodeType: string;
    clear?: string[] | string;
}) => {
    clear: string | string[] | undefined;
    nodeType: string;
    pressed: boolean;
};
declare const useMarkToolbarButton: (state: ReturnType<typeof useMarkToolbarButtonState>) => {
    props: {
        pressed: boolean;
        onClick: () => void;
        onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
    };
};

declare const useRemoveNodeButton: ({ element }: {
    element: TElement;
}) => {
    props: {
        onClick: () => void;
        onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
    };
};

declare function useSelectionCollapsed(): boolean;
declare function useSelectionExpanded(): boolean;
declare function useSelectionWithinBlock(): boolean;
declare function useSelectionAcrossBlocks(): boolean;

declare const useSelectionFragment: () => _platejs_slate.ElementOrTextIn<_platejs_slate.Value>[];
declare const useSelectionFragmentProp: (options?: Omit<EditorPropOptions, "nodes">) => string | undefined;

type BlockPlaceholderConfig = PluginConfig<'blockPlaceholder', {
    _target: {
        node: TElement;
        placeholder: string;
    } | null;
    placeholders: Record<string, string>;
    query: (context: PlatePluginContext<BlockPlaceholderConfig> & {
        node: TElement;
        path: Path;
    }) => boolean;
    className?: string;
}>;
declare const BlockPlaceholderPlugin: _platejs_core_react.PlatePlugin<PluginConfig<"blockPlaceholder", {
    _target: {
        node: TElement;
        placeholder: string;
    } | null;
    placeholders: Record<string, string>;
    query: (context: PlatePluginContext<BlockPlaceholderConfig> & {
        node: TElement;
        path: Path;
    }) => boolean;
    className?: string;
}, {}, {}, {
    placeholder: (node: TElement) => string | undefined;
}>>;

export { type BlockPlaceholderConfig, BlockPlaceholderPlugin, useEditorString, useFormInputProps, useMarkToolbarButton, useMarkToolbarButtonState, useRemoveNodeButton, useSelectionAcrossBlocks, useSelectionCollapsed, useSelectionExpanded, useSelectionFragment, useSelectionFragmentProp, useSelectionWithinBlock };
