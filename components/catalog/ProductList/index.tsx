import { map, sortBy } from 'lodash';
import { IProduct } from '../../../lib/models';
import CatalogTools from '../CatalogTools';
import ProductItem from '../ProductItem';

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
            );
          })
        }
      </div>
      <style jsx>{`
        .productList--grid {
          display: flex;
          flex-wrap: wrap;
        }

        .catalog--container--main {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
