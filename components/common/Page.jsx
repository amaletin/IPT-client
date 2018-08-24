import { PropTypes } from 'prop-types';
import Header from './Header';

const Page = (props) => {
  const { children } = props;
  return (
    <div className="page--main">
      <Header />
      <div className="content--main">
        { children }
      </div>
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
