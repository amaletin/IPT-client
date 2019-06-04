import { IProduct } from 'lib/models';
import { isEmpty } from 'lodash';
import { API_HOST } from '../../../configuration/app.config';
import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  product: IProduct;
}

const pictureUrl = (product: IProduct) => {
  if (isEmpty(product.picture)) {
    return '/static/images/image-placeholder.png';
  }
  return `${API_HOST}/thumbnail/_/500/500/contain/best/${product.picture}`;
};

const ProductDetails: React.FC<IProps> = ({ product }) => (
  <div className="container">
    <h1 className="product-details--title">
      {product.name}
    </h1>
    <div className="product-details--top">
      <div className="product-details--image">
        <img src={pictureUrl(product)} />
      </div>
      <div className="product-details--spec">
        <div className="product-details--price"><span>{product.price.toLocaleString('ru-RU')} ₽</span></div>
        <ul className="product-details--spec--list">
          {product.brand && <li><span>Производитель</span><span>{product.brand}</span></li>}
          {product.technology && <li><span>Технология печати</span><span>{product.technology}</span></li>}
          {product.chamberType && (
            <li>
              <span>Камера печати</span>
              <span>{product.chamberType === 'open' ? 'Открытая' : 'Закрытая'}</span>
            </li>
          )}
          {(product.chamberLength && product.chamberWidth && product.chamberHeight) && (
            <li>
              <span>Рабочая камера</span>
              <span>{`${product.chamberLength}x${product.chamberWidth}x${product.chamberHeight}`}</span>
            </li>
          )}
          {product.extruders && <li><span>Количество экструдеров</span><span>{product.extruders}</span></li>}
          {product.layerResolution && <li><span>Толщина слоя печати</span><span>{product.layerResolution}</span></li>}
          {product.heatedBed && <li><span>Подогреваемый стол</span><span>{product.heatedBed}</span></li>}
        </ul>
      </div>
    </div>
    <h2>Описание</h2>
    <div className="product-details--description">
      <div dangerouslySetInnerHTML={{__html: product.description}} />
    </div>
    <style jsx>{`
      .product-details--top {
        display: flex;
        flex-direction: column;
      }

      .product-details--image img {
        width: 100%;
      }

      .product-details--price {
        text-align: right;
      }

      .product-details--price span {
        font-size: 30px;
        color: white;
        background: #00abba;
        display: inline-block;
        padding: 20px;
        border-radius: 5px;
        font-weight: bold;
      }

      .product-details--spec--list {
        list-style: none;
        padding: 0;
      }
      .product-details--spec--list li {
        border-bottom: 1px solid ${ colors.greyTransparent };
        color: ${ colors.greyDark };
        display: flex;
        justify-content: space-between;
        line-height: 30px;
      }

      .product-details--spec--list li span:first-of-type {
        font-weight: bold;
      }

      .product-details--description {
        font-size: 16px;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
          .product-details--top {
            flex-direction: row;
          }

          .product-details--image img {
            width: 80%;
          }

          .product-details--image, .product-details--spec {
            min-width: 50%;
            width: 50%;
          }
        }
    `}</style>
  </div>
);

export default ProductDetails;
