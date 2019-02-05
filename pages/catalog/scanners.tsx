import { NextFunctionComponent } from 'next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsActions';
import { setScannersPriceFilter } from '../../actions/filterActions';
import { setScannersSorting } from '../../actions/sortingActions';
import Page from '../../components/common/Page';
import ProductList from '../../components/catalog/ProductList';
import ProductFilters from '../../components/catalog/ProductFilters';
import { EProductType } from '../../lib/enums';
import { IAppState, IProduct, IScannersFilters } from '../../lib/models';
import { getFilteredScanners } from '../../selectors';

export interface IProps {
  filters: IScannersFilters;
  scanners: IProduct[];
  setScannersPriceFilter: (val) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Scanners: NextFunctionComponent<IProps> = ({ filters, scanners, setScannersPriceFilter, setSortOrder, sortOrder }) => {
  const setPriceFilter = (val) => setScannersPriceFilter(val);
  return (
    <Page title="3D Сканеры">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          setPriceFilter={setPriceFilter}
          type={EProductType.SCANER}
        />
        <ProductList
          products={scanners}
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
Scanners.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadProducts(EProductType.SCANER));
  const filters = reduxStore.getState().filters.scanners;
  const scanners = getFilteredScanners(reduxStore.getState());
  const sortOrder = reduxStore.getState().sorting.scanners;
  return {
    filters,
    scanners,
    sortOrder,
    setSortOrder: () => true,
    setScannersPriceFilter,
  };
}

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.scanners,
  scanners: getFilteredScanners(state),
  sortOrder: state.sorting.scanners,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setScannersPriceFilter: (val) => dispatch(setScannersPriceFilter(val)),
  setSortOrder: () => dispatch(setScannersSorting())
});

export default connect(mapStateToProps, mapDispatchToProps)(Scanners);
