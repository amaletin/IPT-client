import React from 'react';
import map from 'lodash/map';
import { IProduct } from '../../../lib/models';
import ProductItem from '../ProductItem';

export interface IProps {
  className?: string;
  products: IProduct[];
}

const ProductList: React.SFC<IProps> = ({ className = 'catalog--container', products }) => (
  <div className={className}>
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
