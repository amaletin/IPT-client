import filter from 'lodash/filter';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IProduct } from '../../lib/models';
import { EProductType } from '../../lib/enums';
import Page from '../../components/common/Page';
import { loadProducts } from '../../actions/catalogActions';
import { IAppState } from '../../lib/models';

import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';


export interface IProps {
  dispatch: Dispatch;
  products: IProduct[];
}

const mapStateToProps = (state: IAppState) => {
  const { products } = state.catalog;
  const printers = filter(products, (product) => product.type === EProductType.PRINTER)

  return {
    products: printers,
  };
};

class Printers extends React.Component<IProps, {}> {
  static async getInitialProps ({ reduxStore }) {
    const products = await reduxStore.dispatch(loadProducts(EProductType.PRINTER));

    return { products }
  }

  render() {
    const { products } = this.props;
    return (
      <Page title="3D Принтеры">
        <div className="catalog--layout container">
          <ProductFilters />
          <ProductList className="catalog--container--right" products={products} />
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
}

export default connect(mapStateToProps)(Printers);
