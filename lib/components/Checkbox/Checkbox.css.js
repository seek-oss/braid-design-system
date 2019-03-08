export default {
  '.realCheckbox': {
    opacity: 0,
    position: 'absolute',
    height: 0,
    width: 0,
  },
  '.label': {
    display: 'flex',
  },
  '.realCheckbox:not(:disabled) ~ .content .label': {
    cursor: 'pointer',
  },
  '.checkboxContainer': {
    flexShrink: 0,
    position: 'relative',
    padding: '4px',
  },
  '.checkbox': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  '.checkboxHover': {
    opacity: 0,
    zIndex: 1,
  },
  '.realCheckbox:not(:disabled) ~ .content .label:hover > * > .checkboxHover': {
    opacity: 1,
  },
  '.checkboxFocus': {
    opacity: 0,
    zIndex: 1,
  },
  '.realCheckbox:focus ~ .content > * > * > .checkboxFocus': {
    opacity: 1,
  },
  '.checkboxDisabled': {
    opacity: 0,
    zIndex: 2,
  },
  '.checkboxChecked': {
    opacity: 0,
    zIndex: 3,
  },
  '.realCheckbox:checked ~ .content > * > * > .checkboxChecked': {
    opacity: 1,
  },
  '.checkboxCritical': {
    zIndex: 4,
  },
  '.realCheckbox:disabled ~ .content > * > * > .checkboxDisabled': {
    opacity: 1,
  },
  '.checkboxIcon': {
    opacity: 0,
    transform: 'scale(0.7)',
    position: 'relative',
    zIndex: 5,
    // IE11:
    height: '100%',
  },
  '.realCheckbox:checked ~ .content > * > * > .checkboxIcon': {
    transform: 'none',
    opacity: 1,
  },
  '.children': {
    display: 'none',
  },
  '.realCheckbox:checked ~ .content > .children': {
    display: 'block',
  },
};
