import PropTypes from 'prop-types';
import Link from 'next/link';
import { nav } from './utils';
import styles from './mobileNav.less';

const renderNav = items => items && items.map((item) => { // eslint-disable-line arrow-body-style
  return item.children
    ? <NavItem key={item.name} item={item} parent /> : <NavItem key={item.name} item={item} />;
});


const NavItem = ({ item, parent }) => {
  const renderedChildren = renderNav(item.children);
  return (
    <li className={styles.MobileNavParentli}>
      <Link href={item.route}>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a className={styles.MobileNavParentliLink}>{ item.name }</a>
      </Link>
      {
        parent && (
          <ul className={styles.MobileNavInner}>
            { renderedChildren }
          </ul>)
      }
    </li>
  );
};
NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    route: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
        route: PropTypes.string,
      }),
      PropTypes.array,
    ]),
  }),
  parent: PropTypes.bool,
};
NavItem.defaultProps = {
  item: {},
  parent: false,
};

const MobileNav = ({ onToggleMobileNav, show }) => {
  const dynamicStyle = {
    top: show ? '0' : '-100vh',
  };

  return (
    <div
      className={styles.container}
      style={dynamicStyle}
      onScroll={() => undefined}
    >
      <div
        className={styles.close}
        onClick={onToggleMobileNav}
        onKeyDown={onToggleMobileNav}
        role="button"
        tabIndex="0"
      >
        <img src="/static/images/icons/close.svg" alt="Закрыть меню" />
      </div>
      <div className={styles.MobileNav}>
        <ul className={styles.MobileNavUl}>
          {renderNav(nav)}
        </ul>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  onToggleMobileNav: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default MobileNav;
