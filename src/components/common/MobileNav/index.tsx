import Link from 'next/link';
import { nav } from '../utils';
import './mobileNav.less';

export interface IProps {
  item?: any;
  parent?: any;
}

const renderNav = items => items && items.map((item) => {
  return item.children
    ? <NavItem key={item.name} item={item} parent /> : <NavItem key={item.name} item={item} />;
});

const NavItem: React.SFC<IProps> = ({ item = {}, parent = false }) => {
  const renderedChildren = renderNav(item.children);
  return (
    <li className="MobileNavParentli">
      <Link href={item.route}>
        <a className="MobileNavParentliLink">{ item.name }</a>
      </Link>
      {
        parent && (
          <ul className="MobileNavInner">
            { renderedChildren }
          </ul>)
      }
    </li>
  );
};

export interface IMobileNavProps {
  onToggleMobileNav: () => void;
  show: boolean;
}

const MobileNav = ({ onToggleMobileNav, show }) => {
  const dynamicStyle = {
    top: show ? '0' : '-100vh',
  };

  return (
    <div
      className="mobileNav--container"
      style={dynamicStyle}
      onScroll={() => undefined}
    >
      <div
        className="close"
        onClick={onToggleMobileNav}
        onKeyDown={onToggleMobileNav}
        role="button"
        tabIndex={0}
      >
        <img src="/static/images/icons/close.svg" alt="Закрыть меню" />
      </div>
      <div className="MobileNav">
        <ul className="MobileNavUl">
          {renderNav(nav)}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
