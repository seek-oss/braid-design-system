import React from 'react';
import { Text } from '../../Text/Text';

interface CharacterLimitProps {
  characterLimit: number;
  value: string | number | ReadonlyArray<string>;
}

export const getCharacterLimitStatus = ({
  characterLimit,
  value,
}: CharacterLimitProps) => {
  const inputLength = String(value).length;

  if (inputLength < Math.ceil((characterLimit * 0.7) / 10) * 10) {
    return null;
  }

  const diff = characterLimit - inputLength;
  const valid = diff >= 0;

  return (
    <Text size="small" tone={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};
