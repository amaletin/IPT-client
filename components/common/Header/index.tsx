import Head from 'next/head';
import Link from 'next/link';
import {
  breakpoints,
  colors,
  fonts,
  gradients,
} from '../../../lib/styleguide';
import MainNav from '../MainNav';

export interface IProps {
  onToggleMobileNav: () => void;
}

const Header: React.FC<IProps> = ({ onToggleMobileNav }) => (
  <>
    <Head>
      <title>IPT Технологии печати</title>
      <meta name="description" content="Магазин 3D принтеров." />
    </Head>
    <header className="header">
      <div className="header--inner">
        <div className="header--logo">
          <Link href="/">
            <a>
              <img src="/static/images/logo_.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="header--right">
          <div className="header--nav">
            <MainNav />
          </div>
          <div className="header--search">
            <img src="/static/images/icons/search.svg" alt="search" />
          </div>
          <div
            className="header--burger"
            onClick={onToggleMobileNav}
            onKeyDown={onToggleMobileNav}
            role="button"
            tabIndex={0}
          >
            <img src="/static/images/icons/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          /*background: url('/static/images/header-bg.jpg');
          background-position: 26% top;*/
          color: #FFFFFF;
          z-index: 100;
        }

        .header--inner {
          display: flex;
          justify-content: space-between;
        }

        .header--logo {
          align-items: center;
          background: #FFFFFF;
          box-sizing: border-box;
          display: flex;
          flex: 1;
          margin-left: 21.5px;
          min-width: 120px;
          padding-left: 21.5px;
          position: relative;
        }

        .header--logo img {
          max-height: 60px;
        }

        .header--logo:after {
          border-bottom: solid 0px transparent;
          border-left: solid 0px #FFFFFF;
          border-right: solid 100px transparent;
          border-top: solid 77px #FFFFFF;
          box-sizing: border-box;
          content: "";
          left: 100%;
          position: absolute;
          top: 0;
          z-index: 1;
        }

        .header--right {
          background: ${ colors.headerBlue };
          background: ${ gradients.gradient1 };
          display: flex;
          justify-content: flex-end;
          position: relative;
          padding-left: 100px;
          width: 70%;
        }

        .header--right:before {
          content: "";
          position: absolute;
          top: -24px;
          border-left: 2px solid white;
          left: 125px;
          height: 126px;
          transform: rotate(52deg);
          opacity: 0.3;
        }

        .header--right:after {
          content: "";
          position: absolute;
          top: -14px;
          border-left: 2px solid white;
          left: 118px;
          height: 104px;
          transform: rotate(-26deg);
          opacity: 0.3;
        }

        .header--nav {
          display: none;
          flex: 1;
          text-align: center;
        }

        .header--search {
          align-items: center;
          cursor: pointer;
          display: none;
          justify-content: center;
          height: 77px;
          width: 77px;
        }

        .header--search img {
          width: 18px;
        }

        .header--burger {
          align-items: center;
          color: ${ colors.white };
          cursor: pointer;
          display: flex;
          justify-content: center;
          height: 77px;
          outline: none;
          width: 77px;
        }

        .header--burger img {
          width: 34px;
        }

        @media screen and (min-width: ${ breakpoints.lg }px) {
          .header--logo {
            margin-left: 0;
          }

          .header--nav {
            display: flex;
            justify-content: flex-end;
          }

          .header--search {
            display: flex;
          }

          .header--burger {
            display: none;
          }
        }
      `}</style>
    </header>
  </>
);

export default Header;
