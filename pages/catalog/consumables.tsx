import isEmpty from 'lodash/isEmpty';
import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadCategories } from '../../actions/categoriesActions';
import { setFilter } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setConsumablesSorting } from '../../actions/sortingActions';
import CategoryList from '../../components/catalog/CategoryList';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, ICategory, ICommonFilter, IPriceRange, IProduct } from '../../lib/models';
import { getFilteredRootConsumables, getRootCategories } from '../../selectors';

export interface IProps {
  filters: ICommonFilter;
  consumables: IProduct[];
  categories: ICategory[];
  onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Consumables: NextFunctionComponent<IProps> = ({ categories, consumables, filters,
                                                      onSetFilter, setSortOrder, sortOrder }) => {
  return (
    <Page title="3D Ручки">
      <CategoryList categories={categories} />
      {!isEmpty(consumables) && (
        <>
          <h2>Товары без категории</h2>
          <div className="catalog--layout container">
            <ProductFilters
              filters={filters}
              setFilter={onSetFilter}
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
};
// @ts-ignore
Consumables.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
  await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));
  return {
    categories: getRootCategories(reduxStore.getState()),
    consumables: getFilteredRootConsumables(reduxStore.getState()),
    filters: reduxStore.getState().filters.consumables,
    onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
    setSortOrder: () => reduxStore.dispatch(setConsumablesSorting()),
    sortOrder: reduxStore.getState().sorting.consumables,
  };
};

const mapStateToProps = (state: IAppState) => ({
  categories: getRootCategories(state),
  consumables: getFilteredRootConsumables(state),
  filters: state.filters.consumables,
  sortOrder: state.sorting.consumables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
  setSortOrder: () => dispatch(setConsumablesSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Consumables);
