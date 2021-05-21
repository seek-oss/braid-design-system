import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Column,
  Columns,
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
      paddingY="xxlarge"
    >
      <Columns space="xlarge">
        <Column>
          <Stack space="large">
            <TextField
              label="Font Size"
              id="fontSize"
              type="number"
              description={
                <input
                  aria-label="Font Size"
                  type="range"
                  min="10"
                  max="200"
                  style={{ width: '100%' }}
                  onChange={(e) => {
                    setFontSize(e.currentTarget.value);
                    setCapHeight('');
                  }}
                  onFocus={() => setFocusedField('fontSize')}
                  value={fontSize}
                />
              }
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
              type="number"
              description={
                <input
                  aria-label="Cap Height"
                  type="range"
                  min="10"
                  max="200"
                  style={{ width: '100%' }}
                  onChange={(e) => {
                    setCapHeight(e.currentTarget.value);
                    setFontSize('');
                  }}
                  onFocus={() => setFocusedField('capHeight')}
                  value={capHeight}
                />
              }
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
              type="number"
              description={
                <input
                  aria-label="Leading"
                  type="range"
                  min={capHeight || fontSize}
                  max="400"
                  style={{ width: '100%' }}
                  onChange={(e) => {
                    setLeading(e.currentTarget.value);
                    setLineGap('');
                  }}
                  onFocus={() => setFocusedField('leading')}
                  value={leading}
                />
              }
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
              type="number"
              description={
                <input
                  aria-label="Line Gap"
                  type="range"
                  min="0"
                  max="400"
                  style={{ width: '100%' }}
                  onChange={(e) => {
                    setLineGap(e.currentTarget.value);
                    setLeading('');
                  }}
                  onFocus={() => setFocusedField('lineGap')}
                  value={lineGap}
                />
              }
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
        padding="xlarge"
        marginTop="xlarge"
        width="full"
        style={{ maxHeight: '70vh', maxWidth: '70vw', overflow: 'auto' }}
      >
        <Box
          component="h2"
          background="card"
          ref={headingRef}
          className={[
            capsize,
            roboto,
            focusedField === 'lineGap' && highlightLineGap,
            focusedField === 'leading' && highlightLeading,
            focusedField === 'capHeight' && highlightCapHeight,
          ]}
        >
          Lorem ipsum Lolor sit amet, Lonsectetur adipiscing elit. Duis eu
          ornare nisi, sed feugiat metus. Pellentesque rutrum vel metus non
          dignissim. Aenean egestas neque mattis mi maximus luctus. Praesent et
          commodo dui, nec eleifend lectus. Pellentesque blandit nisi tellus, id
          efficitur urna consectetur id. Sed convallis tempor dui vel aliquet.
        </Box>
      </Box>
    </Box>
  );
};
