import Reset from './Reset';

export default {
  component: Reset,
  examples: [
    {
      label: '',
      code: `
        <Reset component="ul">
          <Reset component="li">
            This is an example of an unordered list with a CSS reset.
          </Reset>
        </Reset>
      `
    }
  ]
};
