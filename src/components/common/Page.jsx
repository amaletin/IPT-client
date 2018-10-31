import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import styles from './page.less';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.handleToggleMobileNav = this.handleToggleMobileNav.bind(this);
  }

  handleToggleMobileNav() {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    }, () => {
      document.body.classList.toggle('locked'); //eslint-disable-line
    });
  }

  render() {
    const { children, customStyles } = this.props;
    const { showMenu } = this.state;

    return (
      <div className={styles.page} style={customStyles}>
        <div className={styles.pageTop}>
          <Header
            onToggleMobileNav={this.handleToggleMobileNav}
          />
          { children }
        </div>
        <Footer />
        <MobileNav
          onToggleMobileNav={this.handleToggleMobileNav}
          show={showMenu}
        />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.object, //eslint-disable-line
};
Page.defaultProps = {
  children: null,
  customStyles: null,
};

export default Page;
