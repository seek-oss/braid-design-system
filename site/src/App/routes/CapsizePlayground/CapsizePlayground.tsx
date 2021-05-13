import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Column,
  Columns,
  ContentBlock,
  Stack,
  TextField,
} from '../../../../../lib/components';
import {
  highlightCapHeight,
  highlightLeading,
  highlightLineGap,
  roboto,
} from './CapsizePlayground.css';
import {
  fontSize as fontSizeVar,
  capHeight as capHeightVar,
  lineGap as lineGapVar,
  leading as leadingVar,
  capsize,
} from '../../../../../lib/hooks/typography/capsize.css';
import { setElementVar } from '@vanilla-extract/dynamic';

export const CapsizePlayground = () => {
  const [fontSize, setFontSize] = useState('');
  const [capHeight, setCapHeight] = useState('');
  const [leading, setLeading] = useState('');
  const [lineGap, setLineGap] = useState('');
  const [focusedField, setFocusedField] = useState<
    'fontSize' | 'capHeight' | 'lineGap' | 'leading' | null
  >(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      setElementVar(headingRef.current, fontSizeVar, fontSize);
    }
  }, [fontSize]);
  useEffect(() => {
    if (headingRef.current) {
      setElementVar(headingRef.current, capHeightVar, capHeight);
    }
  }, [capHeight]);
  useEffect(() => {
    if (headingRef.current) {
      setElementVar(headingRef.current, lineGapVar, lineGap);
    }
  }, [lineGap]);
  useEffect(() => {
    if (headingRef.current) {
      setElementVar(headingRef.current, leadingVar, leading);
    }
  }, [leading]);

  useEffect(() => {
    if (headingRef.current) {
      setElementVar(headingRef.current, lineGapVar, '10');
      setElementVar(headingRef.current, capHeightVar, '20');
    }
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Columns space="large">
        <Column>
          <Stack space="large">
            <TextField
              label="Font Size"
              id="fontSize"
              type="range"
              // @ts-ignore
              min="10"
              max="200"
              onChange={(e) => {
                setFontSize(e.currentTarget.value);
                setCapHeight('');
              }}
              onFocus={() => setFocusedField('fontSize')}
              value={fontSize}
            />
            <TextField
              label="Cap Height"
              id="capHeight"
              type="range"
              // @ts-ignore
              min="10"
              max="200"
              onChange={(e) => {
                setCapHeight(e.currentTarget.value);
                setFontSize('');
              }}
              onFocus={() => setFocusedField('capHeight')}
              value={capHeight}
            />
          </Stack>
        </Column>
        <Column>
          <Stack space="large">
            <TextField
              label="Leading"
              id="lineHeight"
              type="range"
              // @ts-ignore
              min={capHeight || fontSize}
              max="400"
              onChange={(e) => {
                setLeading(e.currentTarget.value);
                setLineGap('');
              }}
              onFocus={() => setFocusedField('leading')}
              value={leading}
            />
            <TextField
              label="Line Gap"
              id="lineGap"
              type="range"
              // @ts-ignore
              min="0"
              max="400"
              onChange={(e) => {
                setLineGap(e.currentTarget.value);
                setLeading('');
              }}
              onFocus={() => setFocusedField('lineGap')}
              value={lineGap}
            />
          </Stack>
        </Column>
      </Columns>
      <Box
        background="infoLight"
        borderRadius="standard"
        padding="large"
        marginTop="xlarge"
      >
        <ContentBlock width="small">
          <Box
            component="h2"
            ref={headingRef}
            className={[
              capsize,
              roboto,
              focusedField === 'lineGap' && highlightLineGap,
              focusedField === 'leading' && highlightLeading,
              focusedField === 'capHeight' && highlightCapHeight,
              // focusedField === 'fontSize' && highlightFontSize,
            ]}
          >
            Hello from vanilla-extract and Sprinkles
          </Box>
        </ContentBlock>
      </Box>
    </Box>
  );
};
