export default {
  '.source': {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '10vh',
    width: '10vw',
    minHeight: '80px',
    minWidth: '80px',
  },
  '.sourceLink': {
    color: 'white',
    outline: 'none',
    '&:focus': {
      transition: '0.2s ease',
      color: 'DeepSkyBlue',
    },
  },
  '.content': {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    '.container': {
      maxWidth: '380px',
    },
    '.actionsContainer': {
      maxWidth: '450px',
    },
  },
  '.linkButton': {
    width: '100%',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  '.subtitle': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '> *': {
      whiteSpace: 'nowrap',
    },
  },
};
