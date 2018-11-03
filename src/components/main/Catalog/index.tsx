import Link from 'next/link';

import './catalog.less';

const Catalog = () => (
  <div className="catalog">
    <div className="catalogHeading">
      <div className="container">
        <div className="catalogHeadingInner">
          <img src="/static/images/icons/icon-catalog.png" alt="catalog" />
          <span>Каталог продукции</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="catalogList">
        <Link href="/">
          <div className="catalogItem">
            <div className="imgContainer">
              <img src="/static/images/printers.jpg" alt="3d Принтеры" />
            </div>
            <div className="catalogItemName">
              <span>3d принтеры</span>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="catalogItem">
            <div className="imgContainer">
              <img src="/static/images/scaners.jpg" alt="3d Сканеры" />
            </div>
            <div className="catalogItemName">
              <span>3d сканеры</span>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="catalogItem">
            <div className="imgContainer">
              <img src="/static/images/materials.jpg" alt="Расходные материалы" />
            </div>
            <div className="catalogItemName">
              <span>Расходные материалы</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Catalog;
