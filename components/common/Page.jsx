import { PropTypes } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Page = (props) => {
  const { children } = props;
  return (
    <div className="page--main">
      <Header />
      <div className="content--main">
        { children }
      </div>
      <Footer />
    </div>
  );
};
Page.propTypes = {
  children: PropTypes.node,
};
Page.defaultProps = {
  children: null,
};

export default Page;
