import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IProduct, ICategory } from '../../lib/models';
import { EProductType } from '../../lib/enums';
import Page from '../../components/common/Page';
import { loadProducts, loadCategories } from '../../actions/catalogActions';
import { IAppState } from '../../lib/models';

import CategoryList from '../../components/catalog/CategoryList';
import ProductList from '../../components/catalog/ProductList';


export interface IProps {
  dispatch: Dispatch;
  products: IProduct[];
  categories: ICategory[];
}

const mapStateToProps = (state: IAppState) => {
  const { categories, products } = state.catalog;
  const consumables = filter(products, (product) => product.type === EProductType.CONSUMABLE)
  const filteredCategories = filter(categories, (category) => category.type === EProductType.CONSUMABLE)

  return {
    categories: filteredCategories,
    products: consumables,
  };
};

class Consumables extends React.Component<IProps, {}> {
  static async getInitialProps ({ reduxStore }) {
    const categories = await reduxStore.dispatch(loadCategories(EProductType.CONSUMABLE));
    const products = await reduxStore.dispatch(loadProducts(EProductType.CONSUMABLE));

    return { categories, products }
  }

  render() {
    const { categories, products } = this.props;
    const rootCategories = filter(categories, ['parent', null]);
    const rootProducts = filter(products, ['category', null]);
    return (
      <Page title="3D Ручки">
        <CategoryList categories={rootCategories} />
        {!isEmpty(rootProducts) && (
          <>
            <div className="catalog--container">
              <h2>Товары без категории</h2>
            </div>
            <ProductList products={rootProducts} />
          </>
        )}
      </Page>
    );
  }
}

export default connect(mapStateToProps)(Consumables);
