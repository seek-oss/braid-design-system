export interface TransformParams {
  touchable: string;
}

export default (transforms: TransformParams) => ({
  '.transform_touchable': {
    '&:active': { transform: transforms.touchable },
  },
});
