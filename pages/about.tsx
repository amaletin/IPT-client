import Head from 'next/head';
import { connect } from 'react-redux';
import { loadPage } from '../actions/uiActions';
import Page from '../components/common/Page';
import { IAppState, IPage } from '../lib/models';
import { getPageById } from '../selectors';

const PAGE_ID = 4;

const AboutPage = ({ page }: IStateProps) => (
  <Page title="О НАС">
    {page && (
      <Head>
        <title>{page.title}</title>
        <meta name="description" key="description" content={page.description} />
        <meta name="keywords" key="keywords" content={page.keywords} />
      </Head>
    )}
    <div className="container">
      {page && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
    </div>
  </Page>
);
// @ts-ignore
AboutPage.getInitialProps = async ({ reduxStore, query }) => {
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

export default connect(mapStateToProps, null)(AboutPage);
