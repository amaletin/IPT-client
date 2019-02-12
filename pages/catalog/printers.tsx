import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter, toggleFilterOpen } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setPrintersSorting } from '../../actions/sortingActions';
import CatalogLayout from '../../components/catalog/CatalogLayout';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, IPriceFilterBlock, IPrintersFilters, IProduct, IRange } from '../../lib/models';
import { getFilteredPrinters } from '../../selectors';

interface IProps {
  filters: IPrintersFilters;
  printers: IProduct[];
  onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Printers: NextFunctionComponent<IProps> = ({
  filters, printers,  onSetFilter, onToggleFilterOpen, sortOrder, setSortOrder }) => {
  const handleSetSortOrder = () => setSortOrder();
  return (
    <Page title="3D Принтеры">
      <CatalogLayout>
        <ProductFilters
          filters={filters}
          setFilter={onSetFilter}
          onToggleFilterOpen={onToggleFilterOpen}
          type={EProductType.PRINTER}
        />
        <ProductList
          className="catalog--container--main"
          products={printers}
          sortOrder={sortOrder}
          setSortOrder={handleSetSortOrder}
        />
      </CatalogLayout>
    </Page>
  );
};
// @ts-ignore
Printers.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.PRINTER));
  return {
    filters: reduxStore.getState().filters.printers,
    onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.PRINTER)),
    onToggleFilterOpen: (filterType: EFilterType) =>
      reduxStore.dispatch(toggleFilterOpen(filterType, EProductTypeString.PRINTER)),
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
  onSetFilter: (val: IRange, state: IPriceFilterBlock, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.PRINTER)),
  onToggleFilterOpen: (filterType: EFilterType) => dispatch(toggleFilterOpen(filterType, EProductTypeString.PRINTER)),
  setSortOrder: () => dispatch(setPrintersSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Printers);
