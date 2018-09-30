import Link from 'next/link';

import styles from './catalog.less';

const Catalog = () => (
  <div className={styles.catalog}>
    <div className={styles.catalogHeading}>
      <div className={styles.container}>
        <div className={styles.catalogHeadingInner}>
          <img src="/static/images/icons/icon-catalog.png" alt="catalog" />
          <span>Каталог продукции</span>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.catalogList}>
        <Link href="/">
          <div className={styles.catalogItem}>
            <div className={styles.imgContainer}>
              <img src="/static/images/printers.jpg" alt="3d Принтеры" />
            </div>
            <div className={styles.catalogItemName}>
              <span>3d принтеры</span>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.catalogItem}>
            <div className={styles.imgContainer}>
              <img src="/static/images/scaners.jpg" alt="3d Сканеры" />
            </div>
            <div className={styles.catalogItemName}>
              <span>3d сканеры</span>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.catalogItem}>
            <div className={styles.imgContainer}>
              <img src="/static/images/materials.jpg" alt="Расходные материалы" />
            </div>
            <div className={styles.catalogItemName}>
              <span>Расходные материалы</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Catalog;
