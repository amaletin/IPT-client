import Link from 'next/link';
import MainNav from '../MainNav';
import {
  breakpoints,
  colors,
  fonts,
  gradients,
} from '../../../lib/styleguide';

export interface IProps {
  onToggleMobileNav: () => void;
}

const Header: React.SFC<IProps> = ({ onToggleMobileNav }) => (
  <>
    <header className="header">
      <div className="container">
        <div className="header--inner">
          <div className="header--logo">
            <Link href="/">
              <a>
                <img src="/static/images/images/logo_01.png" alt="logo" />
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
      </div>
      <style jsx>{`
        .header {
          background: ${ colors.headerBlue };
          background: ${ gradients.gradient1 };
          color: #FFFFFF;
          z-index: 100;
        }

        .header--inner {
          display: flex;
          justify-content: space-between;
        }

        .header--logo {
          align-items: center;
          display: flex;
          margin-left: 21.5px;
          margin-right: 80px;
        }

        .header--logo img {
          max-height: 60px;
        }

        .header--logo span {
          font-family: ${ fonts.fontCirce };
          font-size: 25px;
          font-weight: 100;
          line-height: 77px;
          text-transform: uppercase;
        }

        .header--right {
          display: flex;
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
          }

          .header--search {
            display: flex;
          }

          .header--burger {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        @font-face {
          font-family: 'Circe';
          src: url("/static/fonts/Circe/Circe_1.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: fallback
        }

        @font-face {
          font-family: 'Circe Bold';
          src: url("/static/fonts/Circe/CirceBold_1.otf") format("opentype");
          font-weight: bold;
          font-style: normal;
          font-display: fallback
        }

        @font-face {
          font-family: 'Circe Light';
          src: url("/static/fonts/Circe/CIRCELIGHT_0.OTF") format("opentype");
          font-weight: lighter;
          font-style: normal;
          font-display: fallback
        }

        @font-face {
          font-family: 'Open Sans';
          src: url("/static/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: fallback
        }

        body {
          margin: 0;
          font-family: 'OpenSans', sans-serif;
        }

        body.locked {
          height: 100%;
          overflow: hidden;
          width: 100%;
          position: fixed;
        }

        .container {
          max-width: 1366px;
          padding: 0 15px;
          margin: 0 auto;
        }

        .catalog--container {
          margin: 0 auto
        }

        .catalog--container,
        .catalog--container--right{
          display: flex;
          flex: 1;
          justify-content: flex-start;
          flex-direction: column;
          align-items: center;
          max-width: 678px;
          padding: 0 15px;
        }

        @media screen and (min-width: 768px) {
          .catalog--container {
            align-items: initial;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 auto
          }

          .catalog--container--right {
            align-items: initial;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        .posts--content img {
          max-width: 100%;
          height: auto;
          margin: 20px 0;
        }
      `}</style>
    </header>
  </>
);

export default Header;
