import MainNav from './MainNav';
import style from './header.less';

const Header = () => (
  <header className={style.header}>
    <div className="header--logo">
      Логотип
    </div>
    <div className="header--nav">
      <MainNav />
    </div>
  </header>
);

export default Header;
