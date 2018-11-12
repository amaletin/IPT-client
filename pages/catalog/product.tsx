import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { connect } from 'react-redux';
import { loadProduct } from '../../actions/catalogActions';
import { IAppState, IProduct } from '../../lib/models';
import Page from '../../components/common/Page';
import ProductDetails from '../../components/catalog/ProductDetails';

export interface IProps {
  id: number;
  product: IProduct;
}

const mapStateToProps = (state: IAppState) => {
  const { currentProductId, products } = state.catalog;
  const product = products[currentProductId];

  return { product };
};

class Category extends React.Component<IProps> {
  static getInitialProps = async function ({ reduxStore, query }) {
    const { id } = query;
    const product = await reduxStore.dispatch(loadProduct(id));

    return { id, product }
  }

  render() {
    const { product } = this.props;
    return (
      <Page header={false}>
        {!isEmpty(product) && <ProductDetails product={product} />}
      </Page>
    )
  }
}

export default connect(mapStateToProps)(Category);