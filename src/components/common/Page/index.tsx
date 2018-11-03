import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MobileNav from '../MobileNav';
import PageHeader from '../PageHeader';
import './page.less';

export interface IProps {
  header?: boolean;
  customStyles?: object;
  title?: string;
  subtitle?: string;
}

export interface IState {
  showMenu: boolean;
} 

class Page extends React.Component<IProps, IState> {
  state = {
    showMenu: false,
  };

  static defaultProps = {
    header: true,
  }

  handleToggleMobileNav = () => {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    }, () => {
      document.body.classList.toggle('locked'); //eslint-disable-line
    });
  }

  render() {
    const {
      children,
      customStyles,
      header,
      title,
      subtitle
    } = this.props;
    const { showMenu } = this.state;

    return (
      <div className="page" style={customStyles}>
        <div className="pageTop">
          <Header
            onToggleMobileNav={this.handleToggleMobileNav}
          />
          {header && (
            <PageHeader
              title={title}
              subtitle={subtitle}
            />
          )}
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

export default Page;
