import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter, setPrintersBrandFilterOpen } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setPrintersSorting } from '../../actions/sortingActions';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, IPriceFilterBlock, IPriceRange, IPrintersFilters, IProduct } from '../../lib/models';
import { getFilteredPrinters } from '../../selectors';

interface IProps {
  filters: IPrintersFilters;
  printers: IProduct[];
  onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) => void;
  onSetPrintersBrandFilterOpen: () => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Printers: NextFunctionComponent<IProps> = ({
  filters, printers,  onSetFilter, onSetPrintersBrandFilterOpen, sortOrder, setSortOrder }) => {
  const handleSetSortOrder = () => setSortOrder();
  return (
    <Page title="3D Принтеры">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          setFilter={onSetFilter}
          setPrintersBrandFilterOpen={onSetPrintersBrandFilterOpen}
          type={EProductType.PRINTER}
        />
        <ProductList
          className="catalog--container--right"
          products={printers}
          sortOrder={sortOrder}
          setSortOrder={handleSetSortOrder}
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
Printers.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.PRINTER));
  return {
    filters: reduxStore.getState().filters.printers,
    onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.PRINTER)),
    onSetPrintersBrandFilterOpen: () => reduxStore.dispatch(setPrintersBrandFilterOpen()),
    printers: getFilteredPrinters(reduxStore.getState()),
    setSortOrder: () => reduxStore.dispatch(setPrintersSorting()),
    sortOrder: reduxStore.getState().sorting.printers,
  };
};

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.printers,
  printers: getFilteredPrinters(state),
  sortOrder: state.sorting.printers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetFilter: (val: IPriceRange, state: IPriceFilterBlock, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.PRINTER)),
  onSetPrintersBrandFilterOpen: () => dispatch(setPrintersBrandFilterOpen()),
  setSortOrder: () => dispatch(setPrintersSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Printers);
