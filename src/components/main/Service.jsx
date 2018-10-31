import Carousel from '../carousel/Carousel';
import Button from '../common/Button';
import styles from './service.less';

const images = [
  { url: '/static/images/order-slider.jpg' },
  { url: '/static/images/carousel-1.jpg' },
  { url: '/static/images/materials.jpg' },
];

const Service = () => (
  <div className={styles.service}>
    <div className={styles.serviceHeading}>
      <div className={styles.container}>
        <div className={styles.serviceHeadingInner}>
          <img src="/static/images/icons/icon-service.png" alt="service" />
          <span>Сервис-центр</span>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceContentText}>
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>
            На основании 3D-модели можно создать любой прототип здания, автомобиля, 
            жилого комплекса или самой маленькой шестеренки. 
            Прототип может как повторять лишь общие очертания, 
            так и детализированную сборную модель.
          </p>
          <Button to="/">Мы поможем</Button>
        </div>
        <div className={styles.serviceContentSlider}>
          <Carousel
            customStyles={{
              carouselStyles: styles.carousel,
              slideStyles: styles.slide,
            }}
            images={images}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Service;
