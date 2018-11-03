import Link from 'next/link';
import MainNav from '../MainNav';
import './header.less';

export interface IProps {
  onToggleMobileNav: () => void;
}

const Header: React.SFC<IProps> = ({ onToggleMobileNav }) => (
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
  </header>
);

export default Header;
