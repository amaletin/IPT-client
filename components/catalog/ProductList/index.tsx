import { IProduct } from '../../../lib/models';
import CatalogTools from '../CatalogTools';
import ProductItem from '../ProductItem';
import { map, sortBy } from 'lodash';

export interface IProps {
  className?: string;
  products: IProduct[];
  sortOrder: string;
  setSortOrder: () => void;
}

const ProductList: React.FC<IProps> = ({ className = 'catalog--container', products, setSortOrder, sortOrder }) => {
  const sortedProducts = sortOrder === 'ASC' ? sortBy(products, ['price']) : sortBy(products, ['price']).reverse();
  return (
    <div className={className}>
      <CatalogTools sortOrder={sortOrder} onChangeSorting={setSortOrder} />
      <div className="productList--grid">
        {products
          && map(sortedProducts, (product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
              />
            )
          })
        }
      </div>
      <style jsx>{`
        .productList--grid {
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default ProductList;
