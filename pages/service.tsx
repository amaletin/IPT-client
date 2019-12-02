import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadPage, openOrderModal } from '../actions/uiActions';
import Button from '../components/common/Button';
import Page from '../components/common/Page';
import { IAppState, IPage } from '../lib/models';
import { getPageById } from '../selectors';

const PAGE_ID = 3;

interface IProps extends IStateProps, IDispatchProps {}

const ServicePage = ({ onOpen, page }: IProps) => (
  <Page title="СЕРВИС">
    <div className="container">
      {page && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
      <Button onClick={onOpen}>Мы поможем</Button>
    </div>
  </Page>
);
// @ts-ignore
ServicePage.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(loadPage(PAGE_ID));
  return {
    id: PAGE_ID,
    page: getPageById(reduxStore.getState(), { PAGE_ID }),
  };
};

interface IStateProps {
  page: IPage;
}
const mapStateToProps = (state: IAppState): IStateProps => ({
  page: getPageById(state, { id: PAGE_ID }),
});
interface IDispatchProps {
  onOpen: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onOpen: () => dispatch(openOrderModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
