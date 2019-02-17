import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter, toggleFilterOpen } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setPensSorting } from '../../actions/sortingActions';
import CatalogLayout from '../../components/catalog/CatalogLayout';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, ICommonFilter, IPriceFilterBlock, IProduct, IRange } from '../../lib/models';
import { getFilteredPens } from '../../selectors';

export interface IProps {
  filters: ICommonFilter;
  pens: IProduct[];
  onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Pens: NextFunctionComponent<IProps> = ({ filters, onSetFilter, onToggleFilterOpen,
                                               pens, setSortOrder, sortOrder }) => {
  return (
    <Page title="3D Ручки">
      <CatalogLayout>
        <ProductFilters
          filters={filters}
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={onSetFilter}
          type={EProductType.PEN}
        />
        <ProductList
          products={pens}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
        />
      </CatalogLayout>
    </Page>
  );
};
// @ts-ignore
Pens.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.PEN));
  return {
    filters: reduxStore.getState().filters.pens,
    onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.PEN)),
    onToggleFilterOpen: (filterType: EFilterType) =>
      reduxStore.dispatch(toggleFilterOpen(filterType, EProductTypeString.PEN)),
    pens: getFilteredPens(reduxStore.getState()),
    setSortOrder: () => reduxStore.dispatch(setPensSorting()),
    sortOrder: reduxStore.getState().sorting.pens,
  };
};

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.pens,
  pens: getFilteredPens(state),
  sortOrder: state.sorting.pens,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.PEN)),
  onToggleFilterOpen: (filterType: EFilterType) => dispatch(toggleFilterOpen(filterType, EProductTypeString.PEN)),
  setSortOrder: () => dispatch(setPensSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pens);
