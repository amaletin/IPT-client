import isEmpty from 'lodash/isEmpty';
import { NextPage } from 'next';
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
import { getCategorieById, getCategoriesByParentId, getFilteredConsumablesByCategoryId } from '../../selectors';

export interface IProps {
  categories: ICategory[];
  consumables: IProduct[];
  currentCategorie: ICategory;
  filters: ICommonFilter;
  id: string | string[];
  onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Category: NextPage<IProps> = ({ categories, consumables, currentCategorie, filters,
                                                  onSetFilter, onToggleFilterOpen, setSortOrder, sortOrder }) => {
  return (
    <Page title={currentCategorie.name}>
      <CategoryList categories={categories} />
      {!isEmpty(consumables) && (
        <CatalogLayout>
          <ProductFilters
            filters={filters}
            onToggleFilterOpen={onToggleFilterOpen}
            setFilter={onSetFilter}
            type={EProductType.CONSUMABLE}
          />
          <ProductList
            products={consumables}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
          />
        </CatalogLayout>
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
Category.getInitialProps = async ({ reduxStore, query }) => {
  const { id } = query;
  await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
  await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));
  return {
    categories: getCategoriesByParentId(reduxStore.getState(), { id }),
    consumables: getFilteredConsumablesByCategoryId(reduxStore.getState(), { id }),
    currentCategorie: getCategorieById(reduxStore.getState(), { id }),
    filters: reduxStore.getState().filters.consumables,
    id,
    onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
    onToggleFilterOpen: (filterType: EFilterType) =>
      reduxStore.dispatch(toggleFilterOpen(filterType, EProductTypeString.CONSUMABLE)),
    setSortOrder: () => reduxStore.dispatch(setConsumablesSorting()),
    sortOrder: reduxStore.getState().sorting.consumables,
  };
};

const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
  categories: getCategoriesByParentId(state, ownProps),
  consumables: getFilteredConsumablesByCategoryId(state, ownProps),
  currentCategorie: getCategorieById(state, ownProps),
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
