import React from 'react';
import map from 'lodash/map';
import { IProduct } from '../../../lib/models';
import ProductItem from '../ProductItem';

export interface IProps {
  products: IProduct[];
}

const ProductList: React.SFC<IProps> = ({ products }) => (
  <div className="catalog--container">
    {products
      && map(products, (product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
          />
        )
      })
    }
  </div>
);

export default ProductList;
