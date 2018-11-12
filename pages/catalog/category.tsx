import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import React from 'react';
import { connect } from 'react-redux';
import { loadProducts, loadCategories } from '../../actions/catalogActions';
import { EProductType } from '../../lib/enums';
import { IAppState, ICategory, IProduct } from '../../lib/models';
import Page from '../../components/common/Page';
import CategoryList from '../../components/catalog/CategoryList';
import ProductList from '../../components/catalog/ProductList';

export interface IProps {
  id: number;
  products: IProduct[];
  categories: ICategory[];
}

const mapStateToProps = (state: IAppState) => {
  const { categories, products } = state.catalog;

  return {
    categories,
    products,
  };
};

class Category extends React.Component<IProps> {
  static getInitialProps = async function ({ reduxStore, query }) {
    const { id } = query;
    const categories = await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
    const products = await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));

    return { categories, id, products }
  }

  render() {
    const { categories, id, products } = this.props;
    const childCategories = filter(categories, function(cat) { return cat.parent == id; });
    const childProducts = filter(products, function(prod) { return prod.category == id; });
    return (
      <Page header={false}>
        <CategoryList categories={childCategories} />
        {!isEmpty(childProducts) && (
          <ProductList products={childProducts} />
        )}
      </Page>
    )
  }
}

export default connect(mapStateToProps)(Category);