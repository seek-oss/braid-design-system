import { type TagProps, Tag as BraidTag, tagSizes } from './Tag';

export const Tag = ({ icon, size, ...restProps }: TagProps) => (
  <BraidTag
    icon={typeof icon !== 'boolean' ? icon : undefined}
    size={size && tagSizes.includes(size) ? size : undefined}
    {...restProps}
  />
);
