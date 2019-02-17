import { map, sortBy } from 'lodash';
import { IProduct } from '../../../lib/models';
import CatalogTools from '../CatalogTools';
import ProductItem from '../ProductItem';

export interface IProps {
  products: IProduct[];
  sortOrder: string;
  setSortOrder: () => void;
  view?: string;
}

const ProductList: React.FC<IProps> = ({ products, setSortOrder, sortOrder, view = 'grid' }) => {
  const sortedProducts = sortOrder === 'ASC' ? sortBy(products, ['price']) : sortBy(products, ['price']).reverse();
  return (
    <div className="catalog--container--main">
      <CatalogTools sortOrder={sortOrder} onChangeSorting={setSortOrder} />
      <div className={`productList--${view}`}>
        {products
          && map(sortedProducts, (product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                view={view}
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

        .productList--list {
          display: flex;
          flex-direction: column;
        }

        .catalog--container--main {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
