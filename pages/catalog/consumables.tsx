import isEmpty from 'lodash/isEmpty';
import { NextFunctionComponent } from 'next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IAppState, IProduct, ICategory, IConsumablesFilters } from '../../lib/models';
import { EProductType } from '../../lib/enums';
import Page from '../../components/common/Page';
import { loadCategories } from '../../actions/categoriesActions';
import { loadProducts } from '../../actions/productsActions';
import { setConsumablesSorting } from '../../actions/sortingActions';
import { setConsumablesPriceFilter } from '../../actions/filterActions';
import { getFilteredRootConsumables, getRootCategories } from '../../selectors';

import CategoryList from '../../components/catalog/CategoryList';
import ProductList from '../../components/catalog/ProductList';
import ProductFilters from '../../components/catalog/ProductFilters';


export interface IProps {
  filters: IConsumablesFilters;
  consumables: IProduct[];
  categories: ICategory[];
  setConsumablesPriceFilter: (val) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Consumables: NextFunctionComponent<IProps> = ({ categories, consumables, filters, setConsumablesPriceFilter, setSortOrder, sortOrder }) => {
  return (
    <Page title="3D Ручки">
      <CategoryList categories={categories} />
      {!isEmpty(consumables) && (
        <>
          <h2>Товары без категории</h2>
          <div className="catalog--layout container">
            <ProductFilters
              filters={filters}
              setPriceFilter={setConsumablesPriceFilter}
              type={EProductType.CONSUMABLE}
            />
            <ProductList
              products={consumables}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </div>
        </>
      )}
      <style jsx>{`
        .catalog--layout {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Page>
  );
}
// @ts-ignore
Consumables.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
  await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));
  const categories = getRootCategories(reduxStore.getState());
  const filters = reduxStore.getState().filters.consumables;
  const consumables = getFilteredRootConsumables(reduxStore.getState());
  const sortOrder = reduxStore.getState().sorting.consumables;
  return {
    categories,
    filters,
    consumables,
    sortOrder,
    setSortOrder: () => true,
    setConsumablesPriceFilter,
  };
}

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.consumables,
  categories: getRootCategories(state),
  consumables: getFilteredRootConsumables(state),
  sortOrder: state.sorting.consumables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setConsumablesPriceFilter: (val) => dispatch(setConsumablesPriceFilter(val)),
  setSortOrder: () => dispatch(setConsumablesSorting())
});

export default connect(mapStateToProps, mapDispatchToProps)(Consumables);
