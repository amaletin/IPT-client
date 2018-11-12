import React from 'react';
import { canUseDOM } from '../utils';
import Header from '../Header';
import Footer from '../Footer';
import MobileNav from '../MobileNav';
import PageHeader from '../PageHeader';

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
      if(showMenu) {
        canUseDOM && document.body.classList.remove('locked');
      } else {
        canUseDOM && document.body.classList.add('locked');
      }
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
        <style jsx>{`
          .page {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

export default Page;
