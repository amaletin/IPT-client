import PropTypes from 'prop-types';
import Link from 'next/link';
import MainNav from './MainNav';
import style from './header.less';

const Header = ({ onToggleMobileNav }) => (
  <header className={style.header}>
    <div className={style.container}>
      <div className={style['header--inner']}>
        <div className={style['header--logo']}>
          <Link href="/">
            {/* eslint-disable-next-line */}
            <a>
              <img src="/static/images/images/logo_01.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className={style['header--right']}>
          <div className={style['header--nav']}>
            <MainNav />
          </div>
          <div className={style['header--search']}>
            <img src="/static/images/icons/search.svg" alt="search" />
          </div>
          <div
            className={style['header--burger']}
            onClick={onToggleMobileNav}
            onKeyDown={onToggleMobileNav}
            role="button"
            tabIndex="0"
          >
            <img src="/static/images/icons/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  onToggleMobileNav: PropTypes.func.isRequired,
};

export default Header;
