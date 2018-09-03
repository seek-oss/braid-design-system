export default {
  '.realRadio': {
    opacity: 0,
    position: 'absolute',
    height: 0,
    width: 0
  },
  '.label': {
    display: 'flex'
  },
  '.realRadio:not(:disabled) ~ .content .label': {
    cursor: 'pointer'
  },
  '.radioContainer': {
    flexShrink: 0,
    position: 'relative',
    padding: '5px'
  },
  '.radio': {
    borderRadius: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  '.radioHover': {
    opacity: 0,
    zIndex: 1
  },
  '.realRadio:not(:disabled) ~ .content .label:hover > * > .radioHover': {
    opacity: 1
  },
  '.radioFocus': {
    opacity: 0,
    zIndex: 1
  },
  '.realRadio:focus ~ .content > * > * > .radioFocus': {
    opacity: 1
  },
  '.radioDisabled': {
    opacity: 0,
    zIndex: 2
  },
  '.radioCritical': {
    zIndex: 3
  },
  '.realRadio:disabled ~ .content > * > * > .radioDisabled': {
    opacity: 1
  },
  '.radioIcon': {
    opacity: 0,
    transform: 'scale(0.8)',
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    zIndex: 4
  },
  '.realRadio:checked ~ .content > * > * > .radioIcon': {
    transform: 'none',
    opacity: 1
  },
  '.children': {
    display: 'none'
  },
  '.realRadio:checked ~ .content > .children': {
    display: 'block'
  }
};
