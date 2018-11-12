import { IProduct } from  'lib/models';

export interface IProps {
  product: IProduct
}

const ProductDetails: React.SFC<IProps> = ({ product }) => (
  <div className="product-details--container">
    <h1 className="product-details--title">
      {product.name}
    </h1>
  </div>
);

export default ProductDetails;
