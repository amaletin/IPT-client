import React from 'react';
import Slide from './Slide';
import { LeftArrow, RightArrow } from './Arrows';
import './carousel.less';


export interface IProps {
  arrows?: boolean;
  customStyles?: any;
  images: any[];
  pagination?: boolean;
}

export interface IState {
  currentIndex: number;
  translateValue: number;
}

class Carousel extends React.Component<IProps, IState> {
  state = {
    currentIndex: 0,
    translateValue: 0,
  };

  private carousel = React.createRef<HTMLDivElement>();

  static defaultProps = {
    arrows: true,
    customStyles: null,
    pagination: true,
  };

  goToPrevSlide = () => {
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

  goToNextSlide = () => {
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

  handleArrowKeys = (event) => {
    if (event.key === 'ArrowLeft') {
      this.goToPrevSlide();
    }
    if (event.key === 'ArrowRight') {
      this.goToNextSlide();
    }
  }

  slideWidth = () => {
    return this.carousel.current.clientWidth;
  }

  renderPagination = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return images.map((image, idx) => (
      <div
        className={idx === currentIndex ? "paginationDot" : "paginationDotActive"}
        key={`pagination-dot-${image.url}`}
      />
    ));
  }

  render() {
    const {
      arrows,
      customStyles,
      images,
      pagination,
    } = this.props;
    const { translateValue } = this.state;
    const carouselClass = customStyles ? customStyles.carouselStyles : 'carousel';
    return (
      <div
        className={carouselClass}
        ref={this.carousel}
      >
        <div
          className="sliderWrapper"
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
        {arrows && (
          <div className="controls">
            <LeftArrow
              goToPrevSlide={this.goToPrevSlide}
              handleKeyDown={this.handleArrowKeys}
            />
            <RightArrow
              goToNextSlide={this.goToNextSlide}
              handleKeyDown={this.handleArrowKeys}
            />
          </div>
        )}
        {pagination && (
          <div className="pagination">
            {this.renderPagination()}
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
