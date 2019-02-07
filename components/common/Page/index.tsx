import React from 'react';
import { canUseDOM } from '../../../lib/utils';
import Footer from '../Footer';
import Header from '../Header';
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
  public state = {
    showMenu: false,
  };

  public static defaultProps = {
    header: true,
  };

  private handleToggleMobileNav = () => {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    }, () => {
      if (showMenu) {
        if (canUseDOM) {document.body.classList.remove('locked'); }
      } else {
        if (canUseDOM) {document.body.classList.add('locked'); }
      }
    });
  }

  public render() {
    const {
      children,
      customStyles,
      header,
      subtitle,
      title,
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
          {children}
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
