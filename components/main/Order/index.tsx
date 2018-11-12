import Carousel from '../../carousel/Carousel';
import Button from '../../common/Button';
import {
  breakpoints,
  fonts,
  colors,
  gradients,
  shadows,
} from '../../../lib/styleguide';

const images = [
  { url: '/static/images/order-slider.jpg' },
  { url: '/static/images/carousel-1.jpg' },
  { url: '/static/images/materials.jpg' },
];

const Order = () => (
  <div className="order">
    <div className="order--heading">
      <div className="container">
        <div className="order--heading--inner">
          <img src="/static/images/icons/icon-order.png" alt="order" />
          <span>Закажи 3d печать</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="order--content">
        <div className="order--content--slider">
          <Carousel
            customStyles={{
              carouselStyles: "carousel",
              slideStyles: "slide",
            }}
            images={images}
          />
        </div>
        <div className="order--content--text">
          <h2>3D печать из ABS-пластика</h2>
          <p>
            На основании 3D-модели можно создать любой прототип здания, автомобиля, 
            жилого комплекса или самой маленькой шестеренки. 
            Прототип может как повторять лишь общие очертания, 
            так и детализированную сборную модель.
          </p>
          <Button to="/">Заказать</Button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .order--heading {
        background: ${ gradients.gradient2 };
      }

      .order--heading--inner {
        align-items: center;
        display: flex;
        padding: 15px;
      }

      .order--heading--inner img {
        margin-right: 38px;
      }

      .order--heading--inner span {
        color: ${ colors.white };
        font-size: 20px;
        text-transform: uppercase;
      }

      .order--content {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
      }

      .order--content--slider {
        display: flex;
        justify-content: center;
      }

      .order--content-text {
        color: ${ colors.textGrey };
        text-align: center;
        padding-top: 10px;
      }

      .order--content-text h2 {
        color: ${ colors.pink };
        font-family: ${ fonts.fontCirce };
        font-size: 22px;
        text-transform: uppercase;
      }

      .order--content-text p {
        padding-bottom: 20px;
      }

      .carousel {
        box-shadow: ${ shadows.boxShadow };
        position: relative;
        height: 290px;
        width: 290px;
        min-width: 290px;
        overflow: hidden;
      }
    
      .slide {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 60%;
        display: inline-block;
        width: 290px;
        height: 100%;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .order--heading {
          background-image: url('/static/images/order_header_bg.png');
          background-position: top center;
          background-size: 150%;
          background-repeat: no-repeat;
          margin-bottom: 0;
        }

        .order--heading--inner {
          padding: 15px 15px 67px 15px;
        }

        .order--heading--inner span {
          font-size: 28px;
        }

        .order--content {
          flex-direction: row;
        }

        .order--content--slider {
          width: 50%;
        }

        .order--content--text {
          padding: 0;
          text-align: initial;
          width: 50%;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .order--heading {
          background-position: right;
          background-size: initial;
        }

        .catalog--heading--inner {
          padding-bottom: 89px;
          padding-left: 104px;
          padding-top: 58px;
        }

        .catalog--heading--inner span {
          font-size: 38px;
        }

        .order--content--text h2 {
          font-size: 38px;
        }

        .carousel {
          width: 500px;
          min-width: 500px;
          height: 395px;
        }

        .slide {
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

        .slide {
          width: 623px;
          min-width: 623px;
          height: 492px;
        }
      }
    `}</style>
  </div>
);

export default Order;
