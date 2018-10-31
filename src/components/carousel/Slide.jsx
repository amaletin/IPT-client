import PropTypes from 'prop-types';
import styles from './carousel.less';

const Slide = ({ customStyles, image }) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
  };
  return <div className={customStyles || styles.slide} style={slideStyles} />;
};
Slide.propTypes = {
  customStyles: PropTypes.string,
  image: PropTypes.string.isRequired,
};
Slide.defaultProps = {
  customStyles: null,
};

export default Slide;
