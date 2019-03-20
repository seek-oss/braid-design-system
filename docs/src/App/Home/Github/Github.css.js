export default {
  '.root:hover': {
    '@keyframes octocatWave': {
      '0%, 100%': {
        transform: 'rotate(0)',
      },
      '20%, 60%': {
        transform: 'rotate(-25deg)',
      },
      '40%, 80%': {
        transform: 'rotate(10deg)',
      },
    },
    '.octoArm': {
      animation: 'octocatWave 560ms ease-in-out',
    },
  },
  '.octoArm': {
    transformOrigin: '130px 106px',
  },
};
