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
import { getCategoriesByParentId, getFilteredConsumablesByCategoryId } from '../../selectors';

export interface IProps {
  categories: ICategory[];
  consumables: IProduct[];
  filters: ICommonFilter;
  id: string | string[];
  onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Category: NextFunctionComponent<IProps> = ({ categories, consumables, filters,
                                                  onSetFilter, setSortOrder, sortOrder }) => {
  return (
    <Page header={false}>
      <CategoryList categories={categories} />
      {!isEmpty(consumables) && (
        <div className="catalog--layout container">
          <ProductFilters
            filters={filters}
            setFilter={onSetFilter}
            type={EProductType.CONSUMABLE}
          />
          <ProductList
            products={consumables}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
          />
        </div>
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
    filters: reduxStore.getState().filters.consumables,
    id,
    onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
    setSortOrder: () => reduxStore.dispatch(setConsumablesSorting()),
    sortOrder: reduxStore.getState().sorting.consumables,
  };
};

const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
  categories: getCategoriesByParentId(state, ownProps),
  consumables: getFilteredConsumablesByCategoryId(state, ownProps),
  filters: state.filters.consumables,
  sortOrder: state.sorting.consumables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetFilter: (val: IPriceRange, state: ICommonFilter, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.CONSUMABLE)),
  setSortOrder: () => dispatch(setConsumablesSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
