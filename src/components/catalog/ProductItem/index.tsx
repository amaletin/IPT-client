import React from 'react';
import { IProduct } from '../../../lib/models';
import * as styles from './productItem.less';

export interface IProps {
  product: IProduct;
}

const ProductItem: React.SFC<IProps> = ({ product }) => (
  <div className={styles.productItem}>
    <div className={styles.productItemPicture}>
      <img src={`https://3dapi.amaletin.ru${product.picture}`} />
    </div>
    <div className={styles.productItemDescription}>
      <p className={styles.productItemDescriptionName}>{product.name}</p>
      <p className={styles.productItemDescriptionPrice}>{product.price}</p>
    </div>
  </div>
);

export default ProductItem;