import { IProduct } from 'lib/models';
import { isEmpty } from 'lodash';

export interface IProps {
  product: IProduct;
}

const pictureUrl = (product: IProduct) => {
  if (isEmpty(product.picture)) {
    return '/static/images/image-placeholder.png';
  }
  return `https://3dapi.amaletin.ru${product.picture}`;
};

const ProductDetails: React.FC<IProps> = ({ product }) => (
  <div className="catalog--container">
    <h1 className="product-details--title">
      {product.name}
    </h1>
    <div className="product-details--top">
      <div className="product-details--image">
        <img src={pictureUrl(product)} />
      </div>
      <div className="product-details--spec">
        <ul className="product-details--spec--list">
          {product.brand && <li><span>Производитель</span><span>{product.brand.name}</span></li>}
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
    <div className="product-details--description">
      <div dangerouslySetInnerHTML={{__html: product.description}} />
    </div>
    <style jsx>{`
      .catalog--container {
        flex-direction: column;
      }

      .product-details--top {
        display: flex;
      }

      .product-details--spec {

      }

      .product-details--spec--list {
        list-style: none;
      }
    `}</style>
  </div>
);

export default ProductDetails;
