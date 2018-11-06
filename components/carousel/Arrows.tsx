import './carousel.less';

export interface IRightArrowProps {
  goToNextSlide: () => void;
  handleKeyDown: (e) => void;
}

export const RightArrow: React.SFC<IRightArrowProps> = ({ goToNextSlide, handleKeyDown }) => (
  <div
    className="arrowRight"
    onClick={goToNextSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={0}
  >
    <img src="/static/images/arrow-rigth.png" alt="следующий слайд" />
  </div>
);

export interface ILeftArrowProps {
  goToPrevSlide: () => void;
  handleKeyDown: (e) => void;
}

export const LeftArrow: React.SFC<ILeftArrowProps> = ({ goToPrevSlide, handleKeyDown }) => (
  <div
    className="arrowLeft"
    onClick={goToPrevSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={0}
  >
    <img src="/static/images/arrow-left.png" alt="предыдущий слайд" />
  </div>
);
