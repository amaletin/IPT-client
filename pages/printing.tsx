import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { openOrderModal } from '../actions/uiActions';
import Button from '../components/common/Button';
import Page from '../components/common/Page';

const PrintingPage = ({ onOpen }: IDispatchProps) => (
  <Page title="3D печать">
    <div className="container">
      <p>THIS IS ABOUT PAGE</p>
      <Button onClick={onOpen}>Сделать заказ</Button>
    </div>
  </Page>
);

interface IDispatchProps {
  onOpen: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onOpen: () => dispatch(openOrderModal()),
});

export default connect(null, mapDispatchToProps)(PrintingPage);
