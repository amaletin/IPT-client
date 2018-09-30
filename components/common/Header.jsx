import Link from 'next/link';
import MainNav from './MainNav';
import style from './header.less';

const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <div className={style['header--inner']}>
        <Link href="/">
          <div className={style['header--logo']}>
            <img src="/static/images/images/logo_01.png" alt="logo" />
          </div>
        </Link>
        <div className={style['header--right']}>
          <div className={style['header--nav']}>
            <MainNav />
          </div>
          <div className={style['header--search']}>
            <img src="/static/images/icons/search.svg" alt="search" />
          </div>
          <div className={style['header--burger']}>
            <img src="/static/images/icons/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
