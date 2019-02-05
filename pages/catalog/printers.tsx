import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NextFunctionComponent } from 'next'
import { IProduct, IPrintersFilters } from '../../lib/models';
import Page from '../../components/common/Page';
import { loadProducts } from '../../actions/productsActions';
import { setPrintersSorting } from '../../actions/sortingActions';
import { IAppState } from '../../lib/models';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import { getFilteredPrinters } from '../../selectors';
import { EProductType } from '../../lib/enums';
import { setPrintersPriceFilter, setPrintersBrandFilter, setPrintersBrandFilterOpen } from '../../actions/filterActions';


interface IProps {
  filters: IPrintersFilters;
  printers: IProduct[];
  setPrintersBrandFilter: (val) => void;
  setPrintersPriceFilter: (val) => void;
  setPrintersBrandFilterOpen: () => void;
  setSortOrder: () => void
  sortOrder: string;
}

const Printers: NextFunctionComponent<IProps> = ({ filters, printers, sortOrder, setPrintersBrandFilter, setPrintersPriceFilter, setSortOrder, setPrintersBrandFilterOpen }) => {
  const handleSetSortOrder = () => setSortOrder();
  return (
    <Page title="3D Принтеры">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          setPriceFilter={setPrintersPriceFilter}
          setBrandFilter={setPrintersBrandFilter}
          setPrintersBrandFilterOpen={setPrintersBrandFilterOpen}
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
}
// @ts-ignore
Printers.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.PRINTER));
  const filters = reduxStore.getState().filters.printers
  const printers = getFilteredPrinters(reduxStore.getState());
  const sortOrder = reduxStore.getState().sorting.printers;
  return {
    filters,
    printers,
    sortOrder,
    setSortOrder: () => true,
    setPrintersBrandFilter,
    setPrintersPriceFilter,
    setPrintersBrandFilterOpen,
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    filters: state.filters.printers,
    printers: getFilteredPrinters(state),
    sortOrder: state.sorting.printers,
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPrintersBrandFilterOpen: () => dispatch(setPrintersBrandFilterOpen()),
  setPrintersBrandFilter: (val) => dispatch(setPrintersBrandFilter(val)),
  setPrintersPriceFilter: (val) => dispatch(setPrintersPriceFilter(val)),
  setSortOrder: () => dispatch(setPrintersSorting())
});
export default connect(mapStateToProps, mapDispatchToProps)(Printers);
