import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadProduct } from '../../actions/productsActions';
import { openOrderModal } from '../../actions/uiActions';
import ProductDetails from '../../components/catalog/ProductDetails';
import Page from '../../components/common/Page';
import { IAppState, IProduct } from '../../lib/models';
import { getProductById } from '../../selectors';

export interface IProps {
  id: string | string[];
  onOpen: () => void;
  product: IProduct;
}

const Product = ({ onOpen, product }: IProps) => (
  <Page header={false}>
    {!isEmpty(product) && <ProductDetails onOpen={onOpen} product={product} />}
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

interface IDispatchProps {
  onOpen: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onOpen: () => dispatch(openOrderModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
