import isEmpty from 'lodash/isEmpty';
import { NextFC } from 'next';
import { connect } from 'react-redux';
import { loadProduct } from '../../actions/productsActions';
import ProductDetails from '../../components/catalog/ProductDetails';
import Page from '../../components/common/Page';
import { IAppState, IProduct } from '../../lib/models';
import { getProductById } from '../../selectors';

export interface IProps {
  id: string | string[];
  product: IProduct;
}

const Product: NextFC<IProps> = ({ product }) => (
  <Page header={false}>
    {!isEmpty(product) && <ProductDetails product={product} />}
  </Page>
);
// @ts-ignore
Product.getInitialProps = async ({ reduxStore, query }) => {
  const { id } = query;
  await reduxStore.dispatch(loadProduct(parseInt(id as string, 10)));
  return {
    id,
    product: getProductById(reduxStore.getState(), { id }),
  };
};

const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
  id: ownProps.id,
  product: getProductById(state, { id: ownProps.id }),
});

export default connect(mapStateToProps)(Product);
