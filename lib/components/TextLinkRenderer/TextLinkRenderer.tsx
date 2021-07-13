import React, { CSSProperties, useContext, ReactElement } from 'react';
import dedent from 'dedent';
import assert from 'assert';
import clsx from 'clsx';
import TextLinkRendererContext from './TextLinkRendererContext';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import ActionsContext from '../Actions/ActionsContext';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { Box } from '../Box/Box';
import {
  useTextTone,
  useWeight,
  touchableText,
  useText,
} from '../../hooks/typography';
import { useBackground } from '../Box/BackgroundContext';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';
import * as styles from './TextLinkRenderer.css';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

type TextLinkWeight = 'regular' | 'weak';
export interface PrivateTextLinkRendererProps {
  reset?: Atoms['reset'] | false;
  weight?: TextLinkWeight;
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
  children: (styleProps: StyleProps) => ReactElement;
}

export const PrivateTextLinkRenderer = (
  props: PrivateTextLinkRendererProps,
) => {
  const actionsContext = useContext(ActionsContext);

  if (process.env.NODE_ENV !== 'production') {
    if (actionsContext !== null) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
      The "TextLink" and "TextLinkButton" components have been deprecated inside of "Actions". Use "ButtonLink" or "Button" with a "variant" of "transparent" instead.
        <Actions>
          <Button>...</Button>
      %c-   <TextLink href="...">...</TextLink>
      %c+   <ButtonLink href="..." variant="transparent">...</ButtonLink>
      %c  </Actions>
    `,
        'color: red',
        'color: green',
        'color: inherit',
      );
    }
  }

  assert(
    (() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inText = useContext(TextContext);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inHeading = useContext(HeadingContext);

      const inActions = actionsContext !== null;

      return inText || inHeading || inActions;
    })(),
    'TextLink components must be rendered within a Text or Heading component.',
  );

  if (actionsContext !== null) {
    return <ButtonLink size={actionsContext.size} {...props} />;
  }

  return <InlineLink {...props} />;
};

/** @deprecated `TextLinkRenderer` has been deprecated. Use [TextLink](https://seek-oss.github.io/braid-design-system/components/TextLink) or [TextLinkButton](https://seek-oss.github.io/braid-design-system/components/TextLinkButton) instead.  If your usage of `TextLinkRenderer` is not covered by either of these, please let us know. */
export const TextLinkRenderer = PrivateTextLinkRenderer;

function useDefaultLinkWeight() {
  const backgroundContext = useBackground();
  const inHeading = useContext(HeadingContext);
  const textContext = useContext(TextContext);

  const hasPlainBackground =
    backgroundContext === 'body' ||
    backgroundContext === 'card' ||
    backgroundContext === 'neutralLight';

  const inPlainText =
    !textContext ||
    textContext.tone === undefined ||
    textContext.tone === 'neutral' ||
    textContext.tone === 'secondary';

  return hasPlainBackground && (inHeading || inPlainText) ? 'regular' : 'weak';
}

function useLinkStyles(weight: TextLinkWeight, showVisited: boolean) {
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight('medium');
  const linkTone = useTextTone({ tone: 'link' });

  return [
    weight === 'weak'
      ? styles.underlineAlways
      : [linkTone, styles.underlineOnHoverOnly],
    !inHeading && weight !== 'weak' ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  reset = 'a',
  weight: weightProp,
  showVisited = false,
  hitArea = 'standard',
  children,
}: PrivateTextLinkRendererProps) {
  const defaultWeight = useDefaultLinkWeight();
  const weight = weightProp ?? defaultWeight;

  return (
    <TextLinkRendererContext.Provider value={weight}>
      {children({
        style: {},
        className: clsx(
          useLinkStyles(weight, showVisited),
          reset !== false
            ? atoms({
                reset: typeof reset === 'string' ? reset : 'a',
              })
            : null,
          atoms({
            cursor: 'pointer',
          }),
          hitArea === 'large' && virtualTouchable(),
        ),
      })}
    </TextLinkRendererContext.Provider>
  );
}

interface ButtonLinkProps extends PrivateTextLinkRendererProps {
  size?: PrivateButtonRendererProps['size'];
}
function ButtonLink({
  reset = 'a',
  size = 'standard',
  weight,
  showVisited = false,
  hitArea,
  children,
}: ButtonLinkProps) {
  const textLinkWeight = useDefaultLinkWeight();
  const tone = textLinkWeight === 'weak' ? 'neutral' : 'link';
  const buttonLinkTextProps = {
    size,
    tone,
    baseline: false,
  } as const;

  assert(!weight, 'TextLink components should not set "weight" within Actions');

  assert(
    !hitArea,
    'TextLink components should not set "hitArea" within Actions',
  );

  return (
    <Box position="relative">
      <TextLinkRendererContext.Provider value={textLinkWeight}>
        <TextContext.Provider value={buttonLinkTextProps}>
          {children({
            style: {},
            className: clsx(
              styles.button,
              useLinkStyles(textLinkWeight, showVisited),
              useText(buttonLinkTextProps),
              size === 'standard' ? touchableText.standard : null,
              reset !== false
                ? atoms({
                    reset: typeof reset === 'string' ? reset : 'a',
                  })
                : null,
              atoms({
                cursor: 'pointer',
                outline: 'none',
                display: 'block',
                width: 'full',
                paddingX: size === 'small' ? 'xsmall' : 'small',
                paddingY: size === 'small' ? 'xsmall' : undefined,
                borderRadius: 'standard',
                textAlign: 'center',
                userSelect: 'none',
              }),
            ),
          })}
        </TextContext.Provider>
      </TextLinkRendererContext.Provider>
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
    </Box>
  );
}
