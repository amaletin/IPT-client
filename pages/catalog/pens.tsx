import filter from 'lodash/filter';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IProduct } from '../../lib/models';
import { EProductType } from '../../lib/enums';
import Page from '../../components/common/Page';
import { loadProducts } from '../../actions/catalogActions';
import { IAppState } from '../../lib/models';

import ProductList from '../../components/catalog/ProductList';


export interface IProps {
  dispatch: Dispatch;
  products: IProduct[];
}

const mapStateToProps = (state: IAppState) => {
  const { products } = state.catalog;
  const pens = filter(products, (product) => product.type === EProductType.PEN)

  return {
    products: pens,
  };
};

class Pens extends React.Component<IProps, {}> {
  static async getInitialProps ({ reduxStore }) {
    const products = await reduxStore.dispatch(loadProducts(EProductType.PEN));

    return { products }
  }

  render() {
    const { products } = this.props;
    return (
      <Page title="3D Ручки">
        <ProductList products={products} />
      </Page>
    );
  }
}

export default connect(mapStateToProps)(Pens);
