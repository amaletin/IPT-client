import React, { SFC } from 'react';
import { colors } from '../../../lib/styleguide';

interface IProps {
  onChangeSorting: () => void;
  sortOrder: string | null;
}

const renderArrow = (order) => {
  switch(order) {
    case 'DESC':
      return <i className="fas fa-sort-down"></i>;
    case 'ASC':
      return <i className="fas fa-sort-up"></i>;
    default:
      return <i className="fas fa-sort"></i>;
  }
}

const CatalogTools: SFC<IProps> = ({ onChangeSorting, sortOrder }) => (
  <div className="catalog-tools--container">
    <div className="catalog-tools--inner">
      <div
        className="catalog-tools--sorting"
        onClick={onChangeSorting}
       >
        <span>ЦЕНА</span>
        <span className="sort--icon">
          {renderArrow(sortOrder)}
        </span>
      </div>
    </div>
    <style jsx>{`
      .catalog-tools--container {
        width: 100%;
        padding-bottom: 20px;
      }

      .catalog-tools--sorting {
        background: ${ colors.greyTransparent };
        height: 30px;
        background: rgba(238, 239, 240, 0.76);
        height: 30px;
        text-align: right;
        padding: 0px 5px;
        line-height: 30px;
        margin-left: 5px;
        color: rgb(136, 136, 136);
        font-weight: bold;
        cursor: pointer;
        user-select: none;
      }

      .sort--icon {
        margin-left: 5px;
      }
    `}</style>
  </div>
);

export default CatalogTools;
