import Link from 'next/link';
import { nav } from '../utils';
import './mainNav.less';

export interface IProps {
  item?: any;
  parent?: any;
}

const renderNav = items => items && items.map((item) => {
  return item.children
    ? <NavItem key={item.name} item={item} parent /> : <NavItem key={item.name} item={item} />;
});

const NavItem: React.SFC<IProps> = ({ item, parent }) => {
  const renderedChildren = renderNav(item.children);
  return (
    <li className="mainnav--parentli">
      <Link href={item.route}>
        <a className="mainnav--parentli--link">{ item.name }</a>
      </Link>
      {
        parent && (
          <ul className="mainnav--inner">
            { renderedChildren }
          </ul>)
      }
    </li>
  );
};
NavItem.defaultProps = {
  item: {},
  parent: false,
};

export default () => (
  <ul className="mainnav">
    {renderNav(nav)}
  </ul>
);
