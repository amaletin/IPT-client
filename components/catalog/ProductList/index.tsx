import { SFC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IAppState, IProduct } from '../../../lib/models';
import { setSortOrder } from '../../../actions/printerActions';
import CatalogTools from '../CatalogTools';
import ProductItem from '../ProductItem';

export interface IProps {
  className?: string;
  products: IProduct[];
  sortOrder: string;
  setSortOrder: () => void;
}

const mapStateToProps = (state: IAppState) => {
  return { sortOrder: state.printers.sortOrder };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    setSortOrder: () => dispatch(setSortOrder()),
  })
}

const ProductList: SFC<IProps> = ({ className = 'catalog--container', products, setSortOrder, sortOrder }) => {
  return (
    <div className={className}>
      <CatalogTools sortOrder={sortOrder} onChangeSorting={setSortOrder} />
      <div className="productList--grid">
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
      <style jsx>{`
        .productList--grid {
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
