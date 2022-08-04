import * as React from 'react';
import { Text } from 'ink';
import { highlight, Theme } from 'cli-highlight';

export interface Props {
  code: string;
  language?: string;
  theme?: Theme;
}
/**
 * SyntaxHighlight.
 */
const SyntaxHighlight: React.FC<Props> = ({ code, language, theme }) => {
  const highlightedCode = React.useMemo(
    () => highlight(code, { language, theme }),
    [code, language, theme],
  );

  return <Text>{highlightedCode}</Text>;
};

export default SyntaxHighlight;
