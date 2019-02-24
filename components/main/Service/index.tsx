import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { openOrderModal } from '../../../actions/uiActions';
import {
  breakpoints,
  colors,
  fonts,
  gradients,
} from '../../../lib/styleguide';
import Carousel from '../../carousel/Carousel';
import Button from '../../common/Button';

const images = [
  { url: '/static/images/order-slider.jpg' },
  { url: '/static/images/carousel-1@0,5x.jpg' },
  { url: '/static/images/materials.jpg' },
];

interface IProps extends IDispatchProps {}

const Service: React.FC<IProps> = ({ onOpen }) => (
  <div className="service">
    <div className="service--heading">
      <div className="container">
        <div className="service--heading--inner">
          <img src="/static/images/icons/icon-service.png" alt="service" />
          <span>Сервис-центр</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="service--content">
        <div className="service--content--text">
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>
            На основании 3D-модели можно создать любой прототип здания, автомобиля,
             жилого комплекса или самой маленькой шестеренки.
             Прототип может как повторять лишь общие очертания,
             так и детализированную сборную модель.
          </p>
          <Button onClick={onOpen}>Мы поможем</Button>
        </div>
        <div className="service--content--slider">
          <Carousel
            images={images}
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .service--heading {
        background: ${ gradients.gradient1 };
      }

      .service--heading--inner {
        align-items: center;
        display: flex;
        padding: 15px;
      }

      .service--heading--inner img {
        margin-right: 38px;
      }

      .service--heading--inner span {
        color: ${ colors.white };
        font-size: 20px;
        text-transform: uppercase;
      }

      .service--content {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
      }

      .service--content-text {
        color: ${ colors.textGrey };
        text-align: center;
        padding-top: 10px;
      }

      .service--content-text h2 {
        color: ${ colors.pink };
        font-family: ${ fonts.fontCirce };
        font-size: 22px;
        text-transform: uppercase;
      }

      .service--content-text p {
        padding-bottom: 20px;
      }

      .service--content--slider {
        display: flex;
        justify-content: center;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .service--heading {
          background-image: url('/static/images/service_header_bg.png');
          background-position: center;
          background-repeat: no-repeat;
          margin-bottom: 0;
        }

        .service--heading--inner {
          padding: 15px 15px 67px 15px;
        }

        .service--heading--inner span {
          font-size: 28px;
        }

        .service--content {
          flex-direction: row;
        }

        .service--content--text {
          padding: 0;
          text-align: initial;
          width: 50%;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .service--content--slider {
          width: 50%;
        }
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .service--heading {
          background-position: right;
          background-size: contain;
        }

        .service--heading--inner {
          padding-bottom: 89px;
          padding-left: 104px;
          padding-top: 58px;
        }

        .service--heading--inner span {
          font-size: 28px;
        }

        .service--content--text h2 {
          font-size: 38px;
        }
      }
    `}</style>
  </div>
);

interface IDispatchProps {
  onOpen: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onOpen: () => dispatch(openOrderModal()),
});

export default connect(null, mapDispatchToProps)(Service);
