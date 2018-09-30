import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { LeftArrow, RightArrow } from './Arrows';
import styles from './carousel.less';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carousel = React.createRef();
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex === 0) {
      return this.setState({
        currentIndex: images.length - 1,
        translateValue: this.slideWidth() * -(images.length - 1),
      });
    }

    return this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth()),
    }));
  }

  goToNextSlide() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    return this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
    }));
  }

  handleArrowKeys(event) {
    if (event.key === 'ArrowLeft') {
      this.goToPrevSlide();
    }
    if (event.key === 'ArrowRight') {
      this.goToNextSlide();
    }
  }

  slideWidth() {
    return this.carousel.current.clientWidth;
  }

  render() {
    const { images, customStyles } = this.props;
    const { translateValue } = this.state;
    const carouselClass = customStyles ? customStyles.carouselStyles : styles.carousel;
    return (
      <div
        className={carouselClass}
        ref={this.carousel}
      >
        <div
          className={styles.sliderWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            width: `${100 * images.length}%`,
          }}
        >
          {
            images.map(image => (
              <Slide
                key={image.url}
                customStyles={customStyles && customStyles.slideStyles}
                image={image.url}
              />
            ))
          }
        </div>
        <div className={styles.controls}>
          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
            handleKeyDown={this.handleArrowKeys}
          />
          <RightArrow
            goToNextSlide={this.goToNextSlide}
            handleKeyDown={this.handleArrowKeys}
          />
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  customStyles: PropTypes.shape({
    carouselStyles: PropTypes.string,
    slideStyles: PropTypes.string,
  }),
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })).isRequired,
};

Carousel.defaultProps = {
  customStyles: null,
};

export default Carousel;
