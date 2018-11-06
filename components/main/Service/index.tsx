import Carousel from '../../carousel/Carousel';
import Button from '../../common/Button';
import './service.less';

const images = [
  { url: '/static/images/order-slider.jpg' },
  { url: '/static/images/carousel-1.jpg' },
  { url: '/static/images/materials.jpg' },
];

const Service = () => (
  <div className="service">
    <div className="serviceHeading">
      <div className="container">
        <div className="serviceHeadingInner">
          <img src="/static/images/icons/icon-service.png" alt="service" />
          <span>Сервис-центр</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="serviceContent">
        <div className="serviceContentText">
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>
            На основании 3D-модели можно создать любой прототип здания, автомобиля, 
            жилого комплекса или самой маленькой шестеренки. 
            Прототип может как повторять лишь общие очертания, 
            так и детализированную сборную модель.
          </p>
          <Button to="/">Мы поможем</Button>
        </div>
        <div className="serviceContentSlider">
          <Carousel
            customStyles={{
              carouselStyles: "carousel",
              slideStyles: "slide",
            }}
            images={images}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Service;
