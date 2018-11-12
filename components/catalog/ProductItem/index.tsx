import isEmpty from 'lodash/isEmpty';
import Link from 'next/link';
import React from 'react';
import { IProduct } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';

export interface IProps {
  product: IProduct;
}

const pictureUrl = (product: IProduct) => {
  if(isEmpty(product.picture)) {
    return '/static/images/image-placeholder.png'
  }
  return `https://3dapi.amaletin.ru${product.picture}`
};

const ProductItem: React.SFC<IProps> = ({ product }) => (
  <div className="product-item--container">
    <Link as={`/catalog/product/${product.id}`} href={`/catalog/product?id=${product.id}`}>
      <div className="product-item">
        <div className="product-item--picture">
          <img src={pictureUrl(product)} />
        </div>
        <div className="product-item--description">
          <p className="product-item--description--name">{product.name}</p>
          <p className="product-item--description--price">{product.price}<span> рублей</span></p>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .product-item--container {
        display: flex;
        flex-direction: column;
        padding: 5px;
        width: 290px;
        flex-wrap: wrap;
      }

      .product-item {
        cursor: pointer;
        box-shadow: ${ shadows.boxShadow };
        padding: 15px;
      }

      .product-item--picture img {
        width: 100%;
      }

      .product-item--description {
        text-align: right;
      }

      .product-item--description--name {
        font-size: 24px;
        margin: 0;
      }

      .product-item--description--price {
        font-size: 18px;
      }

      @media screen and (min-width: ${ breakpoints.md }) {
        .product-item--container {
          width: 30%;
        }
      }
    `}</style>
  </div>
);

export default ProductItem;