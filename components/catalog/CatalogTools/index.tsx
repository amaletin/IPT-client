import React, { SFC } from 'react';
import { colors } from '../../../lib/styleguide';
import SortIcon from '../../icons/Sort';

interface IProps {
  onChangeSorting: () => void;
  sortOrder: string | null;
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
          <SortIcon direction={sortOrder} width="13px" />
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
        vertical-align: text-top;
      }
    `}</style>
  </div>
);

export default CatalogTools;
