import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './button.less';

const Button = ({ to, children }) => (
  <Link href={to}>
    <div
      className={styles.button}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  </Link>
);
Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};
Button.defaultProps = {
  children: null,
  to: '/',
};

export default Button;
