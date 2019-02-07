import React from 'react';
import { breakpoints, colors, shadows } from '../../lib/styleguide';
import { LeftArrow, RightArrow } from './Arrows';
import Slide from './Slide';

export interface IProps {
  arrows?: boolean;
  images: any[];
  pagination?: boolean;
}

export interface IState {
  currentIndex: number;
  translateValue: number;
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    currentIndex: 0,
    translateValue: 0,
  };

  private carousel = React.createRef<HTMLDivElement>();

  public static defaultProps = {
    arrows: true,
    customStyles: null,
    pagination: true,
  };

  private goToPrevSlide = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex === 0) {
      return this.setState({
        currentIndex: images.length - 1,
        translateValue: this.slideWidth() * -(images.length - 1),
      });
    }

    return this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth()),
    }));
  }

  private goToNextSlide = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    return this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
    }));
  }

  private handleArrowKeys = (event) => {
    if (event.key === 'ArrowLeft') {
      this.goToPrevSlide();
    }
    if (event.key === 'ArrowRight') {
      this.goToNextSlide();
    }
  }

  private slideWidth = () => {
    return this.carousel.current.clientWidth;
  }

  private renderPagination = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return images.map((image, idx) => {
      return (
        <div
          style={{
            backgroundColor: currentIndex === idx ? colors.pink :  colors.blue,
            borderRadius: '100%',
            height: '6px',
            margin: '0 11px',
            width: '6px',
          }}
          key={`pagination-dot-${image.url}`}
        />
      );
    });
  }

  public render() {
    const {
      arrows,
      images,
      pagination,
    } = this.props;
    const { translateValue } = this.state;
    return (
      <div
        className="carousel"
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
            images.map((image) => (
              <Slide
                key={image.url}
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
            box-shadow: ${ shadows.boxShadow };
            position: relative;
            height: 290px;
            width: 290px;
            min-width: 290px;
            overflow: hidden;
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

          @media screen and (min-width: ${ breakpoints.lg }px) {
            .carousel {
              width: 500px;
              min-width: 500px;
              height: 395px;
            }
          }

          @media screen and (min-width: ${ breakpoints.xl }px) {
            .carousel {
              width: 623px;
              min-width: 623px;
              height: 492px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
