import {
  breakpoints,
  colors,
} from '../../../lib/styleguide';

const Promo = () => (
  <div className="promo">
    <div className="promo--carousel">
      <img src="/static/images/carousel-1.jpg" alt="printer-1" />
    </div>
    <div className="promo--text">
      <div className="promo--text--inner">
        <h1>Приближая объёмную печать</h1>
        <h3>Модель занимает лидирующее положение на рынке</h3>
        <p>Прогресс в области развития технологий 3D печати позволяет говорить о революции в сфере моделирования и изготовления конечной продукции. Использование возможностей, которые предлагают устройствадля аддитивного производства, - ключ к экономии при создании изделия в единичном экземпляре.</p>
      </div>
    </div>
    <style jsx>{`
      .promo {
        display: flex;
        flex-direction: column;
      }

      .promo--carousel {
        min-width: 50%;
      }

      .promo--carousel img {
        min-width: 100%;
      }

      .promo--text {
        background-color: #a9edf5;
        position: relative;
      }

      .promo--text--inner {
        background-image: url("/static/images/hzbg-big.png");
        background-position: 23% 100%;
        box-sizing: border-box;
        color: ${ colors.white };
        min-width: 50%;
        padding: 13.616398243045388%;
        height: 100%;
      }

      .promo--text--inner h1 {
        font-size: 26px;
        font-weight: 300;
        text-transform: uppercase;
      }

      .promo--text--inner h3 {
        font-weight: 200;
        text-transform: uppercase;
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .promo {
          flex-direction: row;
        }

        .promo--text {
          background-image: none;
          width: 50%;
        }

        .promo--text--inner {
          background-image: url(/static/images/hzbg-big.png);
          background-position: left;
          box-sizing: border-box;
          color: #FFFFFF;
          min-width: 50%;
          padding: 13.61639824%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          width: 120%;
          height: 100%;
          top: 0;
          left: -20%;
          padding: 36% 15% 8% 38%;
        }
      }

      @media screen and (min-width: ${ breakpoints.xl }px) {
        .promo--text--inner {
          padding: 41% 44% 10% 26%;
        }
      }
    `}</style>
  </div>
);

export default Promo;
