const transitionSpeed = '0.15s';

export default {
  '.enter': {
    opacity: 0,
  },
  '.enterActive': {
    opacity: 1,
    transition: `opacity ${transitionSpeed}`,
    transitionDelay: transitionSpeed,
  },
  '.exit': {
    opacity: 1,
  },
  '.exitActive': {
    opacity: 0,
    transition: `opacity ${transitionSpeed}`,
  },

  '.transitionContainer': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};
