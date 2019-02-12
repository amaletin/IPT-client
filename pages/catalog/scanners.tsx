import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter, toggleFilterOpen } from '../../actions/filterActions';
import { loadProducts } from '../../actions/productsActions';
import { setScannersSorting } from '../../actions/sortingActions';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';
import Page from '../../components/common/Page';
import { EFilterType, EProductType, EProductTypeString } from '../../lib/enums';
import { IAppState, ICommonFilter, IProduct, IRange } from '../../lib/models';
import { getFilteredScanners } from '../../selectors';

export interface IProps {
  filters: ICommonFilter;
  scanners: IProduct[];
  onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setSortOrder: () => void;
  sortOrder: string;
}

const Scanners: NextFunctionComponent<IProps> = ({ filters, onSetFilter, onToggleFilterOpen,
                                                   scanners, setSortOrder, sortOrder }) => {
  return (
    <Page title="3D Сканеры">
      <div className="catalog--layout container">
        <ProductFilters
          filters={filters}
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={onSetFilter}
          type={EProductType.SCANER}
        />
        <ProductList
          className="catalog--container--main"
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
  return {
    filters: reduxStore.getState().filters.scanners,
    onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) =>
      reduxStore.dispatch(setFilter(val, state, filterType, EProductTypeString.SCANER)),
    onToggleFilterOpen: (filterType: EFilterType) =>
      reduxStore.dispatch(toggleFilterOpen(filterType, EProductTypeString.SCANER)),
    scanners: getFilteredScanners(reduxStore.getState()),
    setSortOrder: () => reduxStore.dispatch(setScannersSorting()),
    sortOrder: reduxStore.getState().sorting.scanners,
  };
};

const mapStateToProps = (state: IAppState) => ({
  filters: state.filters.scanners,
  scanners: getFilteredScanners(state),
  sortOrder: state.sorting.scanners,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetFilter: (val: IRange, state: ICommonFilter, filterType: EFilterType) =>
    dispatch(setFilter(val, state, filterType, EProductTypeString.SCANER)),
  onToggleFilterOpen: (filterType: EFilterType) => dispatch(toggleFilterOpen(filterType, EProductTypeString.SCANER)),
  setSortOrder: () => dispatch(setScannersSorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scanners);
