import isEmpty from 'lodash/isEmpty';
import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadCategories } from '../../actions/categoriesActions';
import { loadProducts } from '../../actions/productsActions';
import { setConsumablesPriceFilter } from '../../actions/filterActions';
import { setConsumablesSorting } from '../../actions/sortingActions';
import { EProductType } from '../../lib/enums';
import { IAppState, ICategory, IProduct, IConsumablesFilters } from '../../lib/models';
import Page from '../../components/common/Page';
import CategoryList from '../../components/catalog/CategoryList';
import ProductList from '../../components/catalog/ProductList';
import ProductFilters from '../../components/catalog/ProductFilters';
import { getCategoriesByParentId, getFilteredConsumablesByCategoryId } from '../../selectors';

export interface IProps {
  filters: IConsumablesFilters
  id: string | string[];
  consumables: IProduct[];
  categories: ICategory[];
  sortOrder: string;
  setSortOrder: () => void;
  setConsumablesPriceFilter: (val) => void;
}

const Category: NextFunctionComponent<IProps> = ({ categories, consumables, filters, setConsumablesPriceFilter, setSortOrder, sortOrder }) => {
  return (
    <Page header={false}>
      <CategoryList categories={categories} />
      {!isEmpty(consumables) && (
        <div className="catalog--layout container">
          <ProductFilters
            filters={filters}
            setPriceFilter={setConsumablesPriceFilter}
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
  )
}
// @ts-ignore
Category.getInitialProps = async ({ reduxStore, query }) => {
  const { id } = query;
  await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
  await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));
  const filters = reduxStore.getState().filters.consumables;
  const state = reduxStore.getState();
  const sortOrder = reduxStore.getState().sorting.consumables;
  return {
    categories: getCategoriesByParentId(state, { id }),
    consumables: getFilteredConsumablesByCategoryId(state, { id }),
    filters,
    id,
    sortOrder,
    setSortOrder: () => true,
    setConsumablesPriceFilter,
  }
}

const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
  filters: state.filters.consumables,
  categories: getCategoriesByParentId(state, ownProps),
  consumables: getFilteredConsumablesByCategoryId(state, ownProps),
  sortOrder: state.sorting.consumables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setConsumablesPriceFilter: (val) => dispatch(setConsumablesPriceFilter(val)),
  setSortOrder: () => dispatch(setConsumablesSorting())
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);