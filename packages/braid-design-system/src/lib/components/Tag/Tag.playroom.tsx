import { useFallbackId } from '../../playroom/utils';

import { type TagProps, Tag as BraidTag, tagSizes } from './Tag';

export const Tag = ({ icon, id, size, ...restProps }: TagProps) => {
  const fallbackId = useFallbackId();
  return (
    <BraidTag
      id={id ?? fallbackId}
      icon={typeof icon !== 'boolean' ? icon : undefined}
      size={size && tagSizes.includes(size) ? size : undefined}
      {...restProps}
    />
  );
};
