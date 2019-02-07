import { noop } from 'lodash';
import Link from 'next/link';
import React from 'react';
import routes from '../../../lib/routes';
import { colors } from '../../../lib/styleguide';
import { canUseDOM } from '../../../lib/utils';

export interface IProps {
  item?: any;
  parent?: any;
}

const renderNav = (items) => items && items.map((item) => {
  return item.children
    ? <NavItem key={item.name} item={item} parent /> : <NavItem key={item.name} item={item} />;
});

const NavItem: React.FC<IProps> = ({ item = {}, parent = false }) => {
  const renderedChildren = renderNav(item.children);
  return (
    <li>
      <Link href={item.route}>
        <a>{item.name}</a>
      </Link>
      {
        parent && (
          <ul className="mobile-nav--inner">
            {renderedChildren}
          </ul>)
      }
      <style jsx>{`
        li {
          margin-bottom: 5px;
        }

        li a {
          color: ${ colors.white };
          font-size: 20px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .mobile-nav--inner {
          list-style: none;
        }
      `}</style>
    </li>
  );
};

export interface IMobileNavProps {
  onToggleMobileNav: () => void;
  show: boolean;
}

class MobileNav extends React.Component<IMobileNavProps> {
  public componentWillUnmount() {
    if (canUseDOM) {
      document.body.classList.remove('locked');
    }
  }

  public render() {
    const { onToggleMobileNav } = this.props;
    const dynamicStyle = {
      top: this.props.show ? '0' : '-100vh',
    };
    return (
      <div
        className="mobile-nav--container"
        style={dynamicStyle}
        onScroll={noop}
      >
        <div
          className="close"
          onClick={onToggleMobileNav}
          role="button"
          tabIndex={0}
        >
          <img src="/static/images/icons/close.svg" alt="Закрыть меню" />
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav--ul">
            {renderNav(routes)}
          </ul>
        </div>
        <style jsx>{`
          .mobile-nav--container {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            background: rgba(0, 0, 0, 0.8);
            transition: all ease-in-out 0.5s;
          }

          .close {
            box-sizing: border-box;
            height: 77px;
            text-align: right;
            padding-right: 37px;
            padding-top: 22px;
          }

          .mobile-nav {
            box-sizing: border-box;
            padding-bottom: 40px;
          }

          .mobile-nav--ul {
            list-style: none;
          }
        `}</style>
      </div>
    );
  }
}

export default MobileNav;
