import isEmpty from 'lodash/isEmpty';
import Link from 'next/link';
import { IProduct } from '../../../lib/models';
import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  product: IProduct;
}

const pictureUrl = (product: IProduct) => {
  if(isEmpty(product.picture)) {
    return '/static/images/image-placeholder.png'
  }
  return `https://3dapi.amaletin.ru${product.picture}`
};

const ProductItem: React.FC<IProps> = ({ product }) => (
  <div className="product-item--container">
    <Link as={`/catalog/product/${product.id}`} href={`/catalog/product?id=${product.id}`}>
      <div className="product-item">
        <div className="product-item--picture">
          <img src={pictureUrl(product)} />
        </div>
        <div className="product-item--description">
          <p className="product-item--description--name">{product.name}</p>
          <p className="product-item--description--price">{product.price.toLocaleString('ru-RU')}<span> ₽</span></p>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .product-item--container {
        box-sizing: border-box;
        padding: 5px;
        min-width: 290px;
        -webkit-box-shadow: -1px 0 0 0 #e6e6e6 inset, 0 -1px 0 0 #e6e6e6 inset, -1px -1px 0 0 #e6e6e6 inset, -1px 0 0 0 #e6e6e6, 0 -1px 0 0 #e6e6e6;
        box-shadow: -1px 0 0 0 #e6e6e6 inset, 0 -1px 0 0 #e6e6e6 inset, -1px -1px 0 0 #e6e6e6, -1px 0 0 0 #e6e6e6, 0 -1px 0 0 #e6e6e6;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        overflow: hidden;
      }

      .product-item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        padding: 15px;
        width: 100%;
      }

      .product-item--picture img {
      }

      .product-item--description {
        height: 100%;
        width: 100%;
      }

      .product-item--description--name {
        font-size: 18px;
        margin: 14px 0;
        text-transform: uppercase;
        font-weight: bold;
        color: ${ colors.pink };
        height: 66px;
        max-height: 66px;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 22px;
        -webkit-line-clamp: 3;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -o-text-overflow: ellipsis;
      }

      .product-item--description--price {
        font-size: 16px;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .product-item--container {
          min-width: 33.33333%;
        }
      }
    `}</style>
  </div>
);

export default ProductItem;