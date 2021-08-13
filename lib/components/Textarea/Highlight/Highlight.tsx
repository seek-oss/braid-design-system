import { Box } from '../../Box/Box';
import * as styles from './Highlight.css';

export interface HighlightProps {
  children: string;
}

export const Highlight = ({ children }: HighlightProps) => (
  <Box
    component="mark"
    borderRadius="standard"
    background="critical"
    className={styles.root}
  >
    {children}
  </Box>
);
