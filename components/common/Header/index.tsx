import Head from 'next/head';
import Link from 'next/link';
import {
  breakpoints,
  colors,
  gradients,
} from '../../../lib/styleguide';
import MainNav from '../MainNav';
import OrderModal from '../OrderModal';

export interface IProps {
  onToggleMobileNav: () => void;
}

const Header: React.FC<IProps> = ({ onToggleMobileNav }) => {
  return (
    <>
      <Head>
        <title>IPT Технологии печати</title>
        <meta name="description" content="Магазин 3D принтеров." />
      </Head>
      <OrderModal />
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
              <Link href="/search">
                <a><img src="/static/images/icons/search.svg" alt="search" /></a>
              </Link>
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
            color: #FFFFFF;
            z-index: 100;
            position: relative;
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
            padding: 9px 0px;
            padding-left: 21.5px;
            position: relative;
          }

          .header--logo img {
            width: 125px;
          }

          .header--logo:after {
            border-bottom: solid 0px transparent;
            border-left: solid 0px #FFFFFF;
            border-right: solid 115px transparent;
            border-top: solid 115px #FFFFFF;
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
            height: 166px;
            transform: rotate(45deg);
            opacity: 0.3;
          }

          .header--right:after {
            content: "";
            position: absolute;
            top: -14px;
            border-left: 2px solid white;
            left: 118px;
            height: 137px;
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
            height: 100px;
            width: 100px;
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
            height: 100px;
            outline: none;
            width: 100px;
          }

          .header--burger img {
            width: 34px;
          }

          @media screen and (min-width: ${ breakpoints.lg }px) {
            .header--logo {
              margin-left: 0;
              min-width: 120px
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
};

export default Header;
