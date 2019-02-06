import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setPensSorting } from '../../actions/sortingActions';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, IPensFilters, IPriceFilterBlock, IPriceRange, IProduct } from '../../lib/models';
import { getFilteredPens } from '../../selectors';

export interface IProps {
  filters: IPensFilters;
  pens: IProduct[];
  onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Pens: NextFunctionComponent<IProps> = ({ filters, onSetFilter, pens, setSortOrder, sortOrder }) => {
  return (
    <Page title="3D Ручки">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          setFilter={onSetFilter}
          type={EProductType.PEN}
        />
        <ProductList
          products={pens}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
        />
      </div>
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
Pens.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.PEN));
  return {
    filters: reduxStore.getState().filters.pens,
    onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.PEN)),
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
  onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.PEN)),
  setSortOrder: () => dispatch(setPensSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pens);
