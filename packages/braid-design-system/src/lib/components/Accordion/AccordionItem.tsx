import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type FC,
  type ReactElement,
  type ReactNode,
  cloneElement,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { useFallbackId } from '../../hooks/useFallbackId';
import type { BadgeProps } from '../Badge/Badge';
import { Box } from '../Box/Box';
import {
  type UseDisclosureProps,
  type DisclosureStateProps,
  useDisclosure,
} from '../Disclosure/useDisclosure';
import { Spread } from '../Spread/Spread';
import { type TextProps, Text } from '../Text/Text';
import { IconChevron } from '../icons';
import { badgeSlotSpace } from '../private/badgeSlotSpace';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { defaultSize } from './Accordion';
import {
  type AccordionContextValue,
  AccordionContext,
  validTones,
} from './AccordionContext';

import * as styles from './AccordionItem.css';

const itemSpaceForSize = {
  xsmall: 'small',
  small: 'small',
  standard: 'medium',
  large: 'medium',
} as const;

const minDurationMs = 200;
const maxDurationMs = 500;
const pixelsPerSecond = 320;

const durationMsForHeight = (height: number) =>
  Math.round(
    Math.min(
      maxDurationMs,
      Math.max(minDurationMs, (height / pixelsPerSecond) * 1000),
    ),
  );

export interface AccordionItemBaseProps {
  label: string;
  children: ReactNode;
  size?: TextProps['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  icon?: TextProps['icon'];
  data?: DataAttributeMap;
  badge?: ReactElement<BadgeProps> | null;
}

export type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export type AccordionItemStateProps = DisclosureStateProps;

export const AccordionItem: FC<AccordionItemProps> = ({
  id,
  label,
  children,
  badge,
  size: sizeProp,
  tone: toneProp,
  weight: weightProp,
  icon,
  data,
  ...restProps
}) => {
  const accordionContext = useContext(AccordionContext);

  assert(
    !(accordionContext && sizeProp),
    'Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.',
  );
  assert(
    !(accordionContext && toneProp),
    'Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.',
  );
  assert(
    !(accordionContext && weightProp),
    'Weight cannot be set on AccordionItem when inside Accordion. Weight should be set on Accordion instead.',
  );

  assert(
    toneProp === undefined || validTones.includes(toneProp),
    `The 'tone' prop should be one of the following: ${validTones
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );

  assert(
    // @ts-expect-error
    !badge || badge.type.__isBadge__,
    `AccordionItem badge prop can only be an instance of Badge. e.g. <AccordionItem badge={<Badge>New</Badge>}>`,
  );

  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to an AccordionItem component",
  );

  assert(
    !icon || (icon.props.size === undefined && icon.props.tone === undefined),
    "Icons cannot set the 'size' or 'tone' prop when passed to an AccordionItem component",
  );

  const size = accordionContext?.size ?? sizeProp ?? defaultSize;
  const tone = accordionContext?.tone ?? toneProp ?? 'neutral';
  const weight = accordionContext?.weight ?? weightProp ?? 'medium';
  const itemSpace = itemSpaceForSize[size] ?? 'none';
  const [durationMs, setDurationMs] = useState(minDurationMs);
  const contentSizeRef = useRef<HTMLElement>(null);

  assert(
    typeof label === 'undefined' || typeof label === 'string',
    'Label must be a string',
  );

  const resolvedId = useFallbackId(id);
  const autoCollapse = Boolean(accordionContext?.autoCollapse);

  assert(
    !(autoCollapse && restProps.expanded !== undefined),
    'expanded cannot be set on AccordionItem when autoCollapse is set on Accordion. Accordions with autoCollapse start collapsed and manage expansion themselves. Use onToggle to observe changes, or omit autoCollapse and control expanded on the item.',
  );

  let disclosureState: DisclosureStateProps = {
    onToggle: restProps.onToggle,
  };

  if (autoCollapse) {
    disclosureState = {
      expanded: accordionContext?.openItemId === resolvedId,
      onToggle: (nextExpanded) => {
        accordionContext?.onItemToggle?.(resolvedId, nextExpanded);
        restProps.onToggle?.(nextExpanded);
      },
    };
  } else if (restProps.expanded !== undefined) {
    disclosureState = {
      expanded: restProps.expanded,
      onToggle: restProps.onToggle,
    };
  }

  const { expanded, buttonProps, contentProps } = useDisclosure({
    id: resolvedId,
    ...disclosureState,
  });

  useLayoutEffect(() => {
    if (!autoCollapse) {
      return;
    }

    return accordionContext?.registerItemToggle?.(
      resolvedId,
      restProps.onToggle,
    );
  }, [accordionContext, autoCollapse, resolvedId, restProps.onToggle]);

  useLayoutEffect(() => {
    const node = contentSizeRef.current;

    if (!node) {
      return;
    }

    const updateDuration = () => {
      setDurationMs(durationMsForHeight(node.scrollHeight));
    };

    updateDuration();

    const observer = new ResizeObserver(updateDuration);
    observer.observe(node);

    return () => observer.disconnect();
  }, [children, itemSpace, size]);

  if (process.env.NODE_ENV !== 'production') {
    /**
     * Validate that consumers are not passing `data-*`props,
     * which will not work and are not validated by TypeScript.
     */
    buildDataAttributes({ data, validateRestProps: restProps });
  }

  return (
    <Box data={data}>
      <Box position="relative" display="flex">
        <Box
          component="button"
          type="button"
          cursor="pointer"
          className={[styles.button, styles.focusRing]}
          width="full"
          textAlign="left"
          {...buttonProps}
        >
          {/*
            This seemingly pointless use of Box makes button overflow visible in Safari.
            If we don't add this, the bottom of the text node is visibly cropped.
            https://stackoverflow.com/questions/41100273/overflowing-button-text-is-being-clipped-in-safari
          */}
          <Box component="span" position="relative">
            <Spread component="span" space={itemSpace}>
              <Text size={size} weight={weight} tone={tone} icon={icon}>
                {badge ? (
                  <Box component="span" paddingRight={badgeSlotSpace}>
                    {label}
                  </Box>
                ) : (
                  label
                )}
                {badge ? cloneElement(badge, {}) : null}
              </Text>
              <Text
                size={size}
                weight={weight}
                tone={tone === 'neutral' ? 'secondary' : tone}
              >
                <IconChevron direction={expanded ? 'up' : 'down'} />
              </Text>
            </Spread>
          </Box>
        </Box>
      </Box>
      <Box
        className={[
          styles.content,
          expanded ? styles.contentExpanded : undefined,
        ]}
        style={assignInlineVars({
          [styles.animationDuration]: `${durationMs}ms`,
        })}
        aria-hidden={expanded ? undefined : true}
        inert={expanded ? undefined : true}
        {...contentProps}
      >
        <Box className={styles.contentInner}>
          <Box ref={contentSizeRef} paddingTop={itemSpace}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
