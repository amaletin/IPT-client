export interface IRightArrowProps {
  goToNextSlide: () => void;
  handleKeyDown: (e) => void;
}

export const RightArrow: React.SFC<IRightArrowProps> = ({ goToNextSlide, handleKeyDown }) => (
  <div
    className="arrow-right"
    onClick={goToNextSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={0}
  >
    <img src="/static/images/arrow-rigth.png" alt="следующий слайд" />
    <style jsx>{`
      .arrow-right {
        align-items: center;
        cursor: pointer;
        display: flex;
        outline: none;
        padding: 10px;
        transition: all ease-in-out 0.5s;
        justify-content: flex-end;
        width: 70%;
      }

      .arrow-right:hover img,
      .arrow-right:focus img {
        transform: scale(1.1);
      }
    `}</style>
  </div>
);

export interface ILeftArrowProps {
  goToPrevSlide: () => void;
  handleKeyDown: (e) => void;
}

export const LeftArrow: React.SFC<ILeftArrowProps> = ({ goToPrevSlide, handleKeyDown }) => (
  <div
    className="arrow-left"
    onClick={goToPrevSlide}
    onKeyDown={handleKeyDown}
    role="button"
    tabIndex={0}
  >
    <img src="/static/images/arrow-left.png" alt="предыдущий слайд" />
    <style jsx>{`
      .arrow-left {
        align-items: center;
        cursor: pointer;
        display: flex;
        outline: none;
        padding: 10px;
        transition: all ease-in-out 0.5s;
        justify-content: flex-start;
        width: 30%;
      }

      .arrow-left:hover img,
      .arrow-left:focus img {
        transform: scale(1.1);
      }
    `}</style>
  </div>
);
