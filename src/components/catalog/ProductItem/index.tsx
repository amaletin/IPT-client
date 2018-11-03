import React from 'react';
import { IProduct } from '../../../lib/models';
import './productItem.less';

export interface IProps {
  product: IProduct;
}

const ProductItem: React.SFC<IProps> = ({ product }) => (
  <div className="productItem">
    <div className="productItemPicture">
      <img src={`https://3dapi.amaletin.ru${product.picture}`} />
    </div>
    <div className="productItemDescription">
      <p className="productItemDescriptionName">{product.name}</p>
      <p className="productItemDescriptionPrice">{product.price}</p>
    </div>
  </div>
);

export default ProductItem;