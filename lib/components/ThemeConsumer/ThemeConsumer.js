import ThemeContext from '../private/ThemeContext';
import PropTypes from 'prop-types';

ThemeContext.Consumer.displayName = 'ThemeConsumer';

ThemeContext.Consumer.propTypes = {
  children: PropTypes.func.isRequired
};

export default ThemeContext.Consumer;
