import Link from 'next/link';
import { Fragment } from 'react';
import routes from '../../../lib/routes';
import { colors } from '../../../lib/styleguide';

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
    <Fragment>
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
      <style jsx>{`
        .mainnav--parentli {
          position: relative;
        }
    
        .mainnav--parentli--link {
          border-radius: 5px;
          display: inline-block;
          font-size: 16px;
          line-height: 29px;
          padding: 0 10px;
          color: ${ colors.white };
          text-decoration: none;
          text-transform: uppercase;
          outline: none;
        }

        .mainnav--parentli--link:hover,
        .mainnav--parentli--link:active,
        .mainnav--parentli--linkfocus,
        .mainnav--parentli--link:visited {
          color: ${ colors.white };
        }

        .mainnav--parentli--link:hover,
        .mainnav--parentli--link:focus {
          background-color: ${ colors.pink };
        }

        .mainnav--parentli:hover .mainnav--inner {
          display: block;
        }

        .mainnav--inner {
          background-color: ${ colors.greyTransparent };
          border-radius: 5px;
          display: none;
          left: 0;
          list-style: none;
          margin: 0;
          padding: 10px 0;
          position: absolute;
          top: 100%;
          z-index: 10;
        }

        .mainnav--inner li {
          padding: 0 29px;
          text-align: left;
        }

        .mainnav--inner li a,
        .mainnav--inner li a:visited {
          color: ${ colors.textGrey };
          font-size: 14px;
          line-height: 30px;
          white-space: nowrap;
        }

        .mainnav--inner li a:hover {
          background: inherit;
          color: ${ colors.pink };
        }
      `}</style>
    </Fragment>
  );
};
NavItem.defaultProps = {
  item: {},
  parent: false,
};

export default () => (
  <Fragment>
    <ul className="mainnav">
      {renderNav(routes)}
    </ul>
    <style jsx>{`
      .mainnav {
        align-items: center;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </Fragment>
);
