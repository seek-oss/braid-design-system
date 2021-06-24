interface TabListParams {
    label?: string;
}
interface TabParams {
    tabIndex: number;
    isSelected: boolean;
}
interface TabLabelParams {
    tabIndex: number;
}
interface TabPanelParams {
    panelIndex: number;
    isSelected: boolean;
}
interface TabA11yParams {
    uniqueId: string;
}
declare const _default: ({ uniqueId }: TabA11yParams) => {
    tabListProps: ({ label }: TabListParams) => {
        readonly role: "tablist";
        readonly 'aria-orientation': "horizontal";
        readonly 'aria-label': string | undefined;
    };
    tabProps: ({ tabIndex, isSelected }: TabParams) => {
        role: string;
        tabIndex: number | undefined;
        'aria-selected': boolean;
        'aria-controls': string;
        id: string;
    };
    tabLabelProps: ({ tabIndex }: TabLabelParams) => {
        id: string;
    };
    tabPanelProps: ({ panelIndex, isSelected }: TabPanelParams) => {
        role: string;
        'aria-labelledby': string;
        'aria-hidden': boolean | undefined;
        id: string;
        tabIndex: number | undefined;
    };
};
export default _default;
