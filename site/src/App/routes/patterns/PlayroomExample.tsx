import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import type { ComponentExample } from '../../../types';
import { DocExample } from '../../DocNavigation/DocExample';

type PlayroomExampleProps = Pick<
  ComponentExample,
  'Example' | 'showCodeByDefault' | 'background' | 'Container' | 'playroom'
> & {
  Example: NonNullable<ComponentExample['Example']>;
};

export const PlayroomExample = ({
  Example,
  showCodeByDefault,
  background,
  Container,
  playroom,
}: PlayroomExampleProps) => (
  <PlayroomStateProvider>
    <DocExample
      Example={Example}
      showCodeByDefault={showCodeByDefault}
      background={background}
      Container={Container}
      playroom={playroom}
    />
  </PlayroomStateProvider>
);
