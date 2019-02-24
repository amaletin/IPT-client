import { NextFC } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadCategories } from '../../actions/categoriesActions';
import { setFilter, toggleFilterOpen } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setConsumablesSorting } from '../../actions/sortingActions';
import CatalogLayout from '../../components/catalog/CatalogLayout';
import CategoryList from '../../components/catalog/CategoryList';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, ICategory, ICommonFilter, IProduct, IRange } from '../../lib/models';
import { getFilteredRootConsumables, getRootCategories } from '../../selectors';

export interface IProps {
  filters: ICommonFilter;
  consumables: IProduct[];
  categories: ICategory[];
  onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Consumables: NextFC<IProps> = ({ categories, consumables, filters,
                                                      onSetFilter, onToggleFilterOpen, setSortOrder, sortOrder }) => {
  return (
    <Page title="Расходные материалы">
      <CategoryList categories={categories} />
        <CatalogLayout>
          <ProductFilters
            filters={filters}
            onToggleFilterOpen={onToggleFilterOpen}
            setFilter={onSetFilter}
            type={EProductType.CONSUMABLE}
          />
          <ProductList
            products={consumables}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </CatalogLayout>
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
    onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
    onToggleFilterOpen: (filterType: EFilterType) =>
      reduxStore.dispatch(toggleFilterOpen(filterType, EProductTypeString.CONSUMABLE)),
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
  onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
  onToggleFilterOpen: (filterType: EFilterType) =>
    dispatch(toggleFilterOpen(filterType, EProductTypeString.CONSUMABLE)),
  setSortOrder: () => dispatch(setConsumablesSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Consumables);
