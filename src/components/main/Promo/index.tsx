import './promo.less';

const Promo = () => (
  <div className="promo">
    <div className="promoCarousel">
      <img src="/static/images/carousel-1.jpg" alt="printer-1" />
    </div>
    <div className="promoText">
      <div className="promoTextInner">
        <h1>Приближая объёмную печать</h1>
        <h3>Модель занимает лидирующее положение на рынке</h3>
        <p>Прогресс в области развития технологий 3D печати позволяет говорить о революции в сфере моделирования и изготовления конечной продукции. Использование возможностей, которые предлагают устройствадля аддитивного производства, - ключ к экономии при создании изделия в единичном экземпляре.</p>
      </div>
    </div>
  </div>
);

export default Promo;
