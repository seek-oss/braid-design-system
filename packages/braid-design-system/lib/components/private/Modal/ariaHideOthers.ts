// Adapted from https://github.com/theKashey/aria-hidden
// Adds a 'delay' option to improve performance of animated transitions on mobile.
// Also ensures that script and style tags aren't marked as aria-hidden.

export type Cleanup = () => void;

const defaultParent = typeof document !== 'undefined' ? document.body : null;

let counterMap = new WeakMap<HTMLElement, number>();
let uncontrolledNodes = new WeakMap<HTMLElement, boolean>();
let markerMap: Record<string, WeakMap<HTMLElement, number>> = {};
let lockCount = 0;

type Options = {
  parentNode?: typeof defaultParent;
  markerName?: string;
  delay?: number;
};

export const ariaHideOthers = (
  originalTarget: HTMLElement | HTMLElement[],
  {
    parentNode = defaultParent,
    markerName = 'data-aria-hidden',
    delay = 0,
  }: Options = {},
): Cleanup => {
  const targets = Array.isArray(originalTarget)
    ? originalTarget
    : [originalTarget];

  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  const hiddenNodes: HTMLElement[] = [];

  const walk = (parent: HTMLElement | null) => {
    if (!parent || targets.indexOf(parent) >= 0) {
      return;
    }

    Array.prototype.forEach.call(parent.children, (node: HTMLElement) => {
      if (targets.some((target) => node.contains(target))) {
        walk(node);
      } else if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
        const attr = node.getAttribute('aria-hidden');
        const alreadyHidden = attr !== null && attr !== 'false';
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;

        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);

        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }

        if (markerValue === 1) {
          node.setAttribute(markerName, 'true');
        }

        if (!alreadyHidden) {
          node.setAttribute('aria-hidden', 'true');
        }
      }
    });
  };

  const timeout = delay
    ? setTimeout(() => walk(parentNode), delay)
    : (walk(parentNode), null);

  lockCount++;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    hiddenNodes.forEach((node) => {
      const counterValue = (counterMap.get(node) ?? 1) - 1;
      const markerValue = (markerCounter.get(node) ?? 1) - 1;

      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);

      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute('aria-hidden');
        }
        uncontrolledNodes.delete(node);
      }

      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });

    lockCount--;
    if (!lockCount) {
      // clear
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledNodes = new WeakMap();
      markerMap = {};
    }
  };
};
