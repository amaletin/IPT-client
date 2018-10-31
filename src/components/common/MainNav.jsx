import PropTypes from 'prop-types';
import Link from 'next/link';
import { nav } from './utils';
import style from './mainNav.less';

const renderNav = items => items && items.map((item) => { // eslint-disable-line arrow-body-style
  return item.children
    ? <NavItem key={item.name} item={item} parent /> : <NavItem key={item.name} item={item} />;
});

const NavItem = ({ item, parent }) => {
  const renderedChildren = renderNav(item.children);
  return (
    <li className={style['mainnav--parentli']}>
      <Link href={item.route}>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a className={style['mainnav--parentli--link']}>{ item.name }</a>
      </Link>
      {
        parent && (
          <ul className={style['mainnav--inner']}>
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

export default () => (
  <ul className={style.mainnav}>
    {renderNav(nav)}
  </ul>
);
