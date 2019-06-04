import isEmpty from 'lodash/isEmpty';
import Link from 'next/link';
import { API_HOST } from '../../../configuration/app.config';
import { IProduct } from '../../../lib/models';
import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  product: IProduct;
  view?: string;
}

const pictureUrl = (product: IProduct) => {
  if (isEmpty(product.pictures)) {
    return '/static/images/image-placeholder.png';
  }
  return `${API_HOST}/thumbnail/_/500/500/contain/best/${product.pictures[0]}`;
};

const ProductItem: React.FC<IProps> = ({ product, view = 'grid' }) => (
  <div className={`product-item--container ${view}`}>
    <Link as={`/catalog/product/${product.id}`} href={`/catalog/product?id=${product.id}`}>
      <div className="product-item">
        <div className="product-item--picture" />
        <div className="product-item--description">
          <p className="product-item--description--name">{product.name}</p>
          <p className="product-item--description--brand">{product.brand}</p>
        </div>
        <div className="product-item--description--price">
          <span>{product.price.toLocaleString('ru-RU')}<span> ₽</span></span>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .product-item--container {
        box-sizing: border-box;
        padding: 5px;
        box-shadow: -1px 0 0 0 #e6e6e6 inset,
                    0 -1px 0 0 #e6e6e6 inset,
                    -1px -1px 0 0 #e6e6e6,
                    -1px 0 0 0 #e6e6e6,
                    0 -1px 0 0 #e6e6e6;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        min-width: 100%;
        width: 100%;
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

      .list .product-item {
        align-items: flex-start;
        flex-direction: row;
        padding: 5px;
      }

      .product-item--picture {
        background-image: url(${pictureUrl(product)});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        width: 100%;
      }

      .list .product-item--picture {
        min-width: 100px;
        width: 100px;
        margin-right: 10px
      }

      .product-item--picture:before{
        content: "";
        display: block;
        padding-top: 100%; 	/* initial ratio of 1:1*/
      }

      .product-item--description {
        width: 100%;
        flex: 1;
      }

      .list .product-item--description {
        overflow: hidden;
      }

      .product-item--description--name {
        font-size: 18px;
        margin: 14px 0;
        text-transform: uppercase;
        font-weight: bold;
        color: ${ colors.pink };
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 22px;
        -o-text-overflow: ellipsis;
      }

      .list .product-item--description--name {
        white-space: nowrap;
      }

      .product-item--description--brand {
        color: ${ colors.greyDark };
        margin: 0;
      }

      .product-item--description--price {
        align-self: flex-end;
        background: ${ colors.headerBlue };
        color: ${ colors.white };
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        text-align: right;
      }

      .list .product-item--description--price {
        align-self: flex-start;
        font-size: 14px;
      }

      @media screen and (min-width: ${ breakpoints.sm }px) {
        .product-item--container {
          min-width: 50%;
          width: 50%;
        }

        .list {
          min-width: 100%;
          width: 100%;
        }
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .product-item--container {
          min-width: 33.33333%;
          width: 33.33333%;
        }

        .list {
          min-width: 100%;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default ProductItem;
