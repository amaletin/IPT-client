import React from 'react';
import { IProduct } from '../../../lib/models';

import ProductItem from '../ProductItem';

export interface IProps {
  products: IProduct[];
}

const ProductList: React.SFC<IProps> = ({ products }) => (
  <div className="container">
    This is a printers pages
    {products
      && products.map((product) => {
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
