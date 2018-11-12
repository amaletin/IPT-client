import React from 'react';
import Slide from './Slide';
import { LeftArrow, RightArrow } from './Arrows';
import { colors } from '../../lib/styleguide';

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

    return images.map((image, idx) => {
      return (
        <div
          style={{
            backgroundColor: currentIndex === idx ? colors.pink :  colors.blue,
            borderRadius: '100%',
            height: '6px',
            width: '6px',
            margin: '0 11px',
          }}
          key={`pagination-dot-${image.url}`}
        />
      )
    });
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
          className="slider--wrapper"
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
        <style jsx>{`
          .carousel {
            position: relative;
            height: 500px;
            width: 500px;
            min-width: 500px;
            overflow: hidden;
          }

          .slide {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 60%;
            display: inline-block;
            width: 500px;
            height: 100%;
          }

          .slider--wrapper {
            transition: transform ease-out 0.45s;
            height: 100%;
          }

          .controls {
            display: flex;
            height: 100%;
            justify-content: space-between;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }

          .pagination {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 24px;
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
