export interface BoxShadowParams {
  focusColor: string;
}

export default ({ focusColor }: BoxShadowParams) => ({
  '.boxShadow_focus': { boxShadow: `0 0 0 1px ${focusColor}` },
});
