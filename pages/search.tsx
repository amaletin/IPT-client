import { NextFunctionComponent } from 'next';
import { connect } from 'react-redux';
import ProductList from '../components/catalog/ProductList';
import Page from '../components/common/Page';
import SearchBar from '../components/search/SearchBar';
import { IAppState, IProduct } from '../lib/models';
import { getSearchedProducts } from '../selectors';

interface IProps {
  products: IProduct[];
  sortOrder: string;
  setSortOrder: () => void;
}

const SearchPage: NextFunctionComponent<IProps> = ({ products, sortOrder, setSortOrder }) => {
  const handleSetSortOrder = () => setSortOrder();
  return (
    <Page title="Поиск">
      <div className="container">
        <SearchBar />
        <ProductList
          products={products}
          sortOrder={sortOrder}
          setSortOrder={handleSetSortOrder}
          view="list"
        />
      </div>
    </Page>
  );
};

const mapStateToProps = (state: IAppState) => ({
  products: getSearchedProducts(state),
});

export default connect(mapStateToProps)(SearchPage);
