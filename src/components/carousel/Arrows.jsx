import PropTypes from 'prop-types';
import styles from './carousel.less';

export const RightArrow = ({ goToNextSlide, handleKeyDown }) => (
  <div
    className={styles.arrowRight}
    onClick={goToNextSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex="0"
  >
    <img src="/static/images/arrow-rigth.png" alt="следующий слайд" />
  </div>
);
RightArrow.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export const LeftArrow = ({ goToPrevSlide, handleKeyDown }) => (
  <div
    className={styles.arrowLeft}
    onClick={goToPrevSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex="0"
  >
    <img src="/static/images/arrow-left.png" alt="предыдущий слайд" />
  </div>
);
LeftArrow.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};
