import Carousel from '../../carousel/Carousel';
import Button from '../../common/Button';
import './order.less';

const images = [
  { url: '/static/images/order-slider.jpg' },
  { url: '/static/images/carousel-1.jpg' },
  { url: '/static/images/materials.jpg' },
];

const Order = () => (
  <div className="order">
    <div className="orderHeading">
      <div className="container">
        <div className="orderHeadingInner">
          <img src="/static/images/icons/icon-order.png" alt="order" />
          <span>Закажи 3d печать</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="orderContent">
        <div className="orderContentSlider">
          <Carousel
            customStyles={{
              carouselStyles: "carousel",
              slideStyles: "slide",
            }}
            images={images}
          />
        </div>
        <div className="orderContentText">
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
  </div>
);

export default Order;
