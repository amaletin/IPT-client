import Link from 'next/link';

import { colors, gradients, shadows, breakpoints } from '../../../lib/styleguide';

const Catalog = () => (
  <div className="catalog">
    <div className="catalog--heading">
      <div className="container">
        <div className="catalog--heading--inner">
          <img src="/static/images/icons/icon-catalog.png" alt="catalog" />
          <span>Каталог продукции</span>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="catalog--list">
        <Link href="/catalog/printers">
          <div className="catalog--item">
            <div className="img-container">
              <img src="/static/images/carousel-1@0,5x.jpg" alt="3d Принтеры" />
            </div>
            <div className="catalog--item--name">
              <span>3d принтеры</span>
            </div>
          </div>
        </Link>
        <Link href="/catalog/scanners">
          <div className="catalog--item">
            <div className="img-container">
              <img src="/static/images/scaners.jpg" alt="3d Сканеры" />
            </div>
            <div className="catalog--item--name">
              <span>3d сканеры</span>
            </div>
          </div>
        </Link>
        <Link href="/catalog/materials">
          <div className="catalog--item">
            <div className="img-container">
              <img src="/static/images/materials.jpg" alt="Расходные материалы" />
            </div>
            <div className="catalog--item--name">
              <span>Расходные материалы</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .catalog--heading {
        background: ${ gradients.gradient1 };
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 20px;
      }

      .catalog--heading--inner {
        align-items: center;
        display: flex;
        padding: 15px;
      }

      .catalog--heading--inner img {
        margin-right: 38px;
      }

      .catalog--heading--inner span {
        color: ${ colors.white };
        font-size: 20px;
        text-transform: uppercase;
      }

      .catalog--list {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .catalog--item {
        cursor: pointer;
        padding: 5px;
        width: 290px;
      }

      .catalog--item:hover .img-container {
        border: 2px solid ${ colors.pink };
      }

      .catalog--item:hover .catalog--item--name {
        color: ${ colors.pink };
      }

      .img-container {
        align-items: center;
        border: 2px solid transparent;
        box-shadow: ${ shadows.boxShadow };
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        padding: 10%;
        height: 290px;
        width: 100%;
      }

      .img-container img {
        max-height: 100%;
        max-width: 100%;
      }

      .catalog--item--name {
        color: #33808F;
        font-size: 18px;
        padding: 39px 0;
        position: relative;
        text-align: center;
        text-transform: uppercase;
      }
                
      @media screen and (min-width: ${ breakpoints.md }px) {
        .catalog--heading {
          background-image: url('/static/images/catalog_header_bg.png');
          margin-bottom: 0;
        }

        .catalog--heading--inner {
          padding: 15px 15px 67px 15px;
        }

        .catalog--heading--inner span {
          font-size: 28px;
        }

        .catalog--list {
          align-items: initial;
          flex-direction: row;
        }

        .catalog--item {
          width: 30%;
        }

        .catalog--item:not(:last-of-type) .catalog--item--name:after {
          border-right: 2px solid ${ colors.grey };
          content: '';
          height: 105px;
          position: absolute;
          right: -6px;
          top: 5px;
          width: 2px;
        }

        .img-container {
          height: 330px;
        }

        .catalog--item--name {
          font-size: 27px;
        }
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .catalog--heading--inner {
          padding-bottom: 89px;
          padding-left: 104px;
          padding-top: 58px;
        }

        .catalog--heading--inner span {
          font-size: 38px;
        }

        .img-container {
          height: 428px;
        }
      }
    `}</style>
  </div>
);

export default Catalog;
