export default {
  '.container': {
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (min-width: 740px)': {
      flexDirection: 'row'
    }
  },
  '.nav': {
    flexGrow: 0,
    '@media screen and (min-width: 740px)': {
      width: '270px'
    }
  },
  '.content': {
    flexGrow: 1
  }
};
