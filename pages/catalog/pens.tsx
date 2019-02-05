import { NextFunctionComponent } from 'next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsActions';
import { setPensPriceFilter } from '../../actions/filterActions';
import { setPensSorting } from '../../actions/sortingActions';
import Page from '../../components/common/Page';
import ProductList from '../../components/catalog/ProductList';
import ProductFilters from '../../components/catalog/ProductFilters';
import { EProductType } from '../../lib/enums';
import { IAppState, IProduct, IPensFilters } from '../../lib/models';
import { getFilteredPens } from '../../selectors';

export interface IProps {
  filters: IPensFilters;
  pens: IProduct[];
  setPensPriceFilter: (val) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Pens: NextFunctionComponent<IProps> = ({ filters, pens, setPensPriceFilter, setSortOrder, sortOrder }) => {
  const setPriceFilter = (val) => setPensPriceFilter(val);
  return (
    <Page title="3D Ручки">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          setPriceFilter={setPriceFilter}
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
  const filters = reduxStore.getState().filters.pens;
  const pens = getFilteredPens(reduxStore.getState());
  const sortOrder = reduxStore.getState().sorting.pens;
  return {
    filters,
    pens,
    sortOrder,
    setSortOrder: () => true,
    setPensPriceFilter,
  };
}

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.pens,
  pens: getFilteredPens(state),
  sortOrder: state.sorting.pens,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPensPriceFilter: (val) => dispatch(setPensPriceFilter(val)),
  setSortOrder: () => dispatch(setPensSorting())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pens);
