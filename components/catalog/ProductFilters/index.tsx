import { isEmpty } from 'lodash';
import { useState } from 'react';
import { EFilterBlockType, EFilterType, EProductType } from '../../../lib/enums';
import { ICommonFilter, IPrintersFilters } from '../../../lib/models';
import { breakpoints, colors } from '../../../lib/styleguide';
import FilterIcon from '../../icons/Filter';
import FilterBlock from '../FilterBlock';
import PriceFilter from '../PriceFilter';

interface IProps {
  filters: IPrintersFilters | ICommonFilter;
  setFilter: (val, state, filterType) => void;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  type: EProductType;
}

const renderPrinterFilters = (filters: IPrintersFilters, setFilter, onToggleFilterOpen) => {
  const setFilterOpen = () => setFilterOpen();
  return (
    <>
      {!isEmpty(filters.technology.filter) && (
        <FilterBlock
          block={filters.technology}
          filterType={EFilterType.TECHNNOLOGY}
          key="tech-filter"
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={setFilter}
          title="Технология печати"
          type={EFilterBlockType.ARRAY}
        />
      )}
      <FilterBlock
        block={filters.chamberSize}
        filterType={EFilterType.CHAMBER_SIZE}
        key="chamberSize-filter"
        onToggleFilterOpen={onToggleFilterOpen}
        setFilter={setFilter}
        title="Рабочая камера"
        type={EFilterBlockType.SIZE}
      />
      {!isEmpty(filters.chamberType.filter) && (
        <FilterBlock
          block={filters.chamberType}
          filterType={EFilterType.CHAMBER_TYPE}
          key="chamberType-filter"
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={setFilter}
          title="Камера печати"
          type={EFilterBlockType.ARRAY}
        />
      )}
      {!isEmpty(filters.extruders.filter) && (
        <FilterBlock
          block={filters.extruders}
          filterType={EFilterType.EXTRUDERS}
          key="extruders-filter"
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={setFilter}
          title="Количество экструдеров"
          type={EFilterBlockType.ARRAY}
        />
      )}
      {!isEmpty(filters.layerResolution.filter) && (
        <FilterBlock
          block={filters.layerResolution}
          filterType={EFilterType.LAYER_RESOLUTION}
          key="layerResolution-filter"
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={setFilter}
          title="Толщина слоя печати"
          type={EFilterBlockType.ARRAY}
        />
      )}
      {!isEmpty(filters.layerResolution.filter) && (
        <FilterBlock
          block={filters.heatedBed}
          filterType={EFilterType.HEATED_BED}
          key="heatedBed-filter"
          onToggleFilterOpen={onToggleFilterOpen}
          setFilter={setFilter}
          title="Подогреваемый стол"
          type={EFilterBlockType.ARRAY}
        />
      )}
    </>
  );
};

const ProductFilters: React.FC<IProps> = ({
  filters,
  setFilter,
  onToggleFilterOpen,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className="filters--container">
      <div className="filters--header" onClick={handleToggle}>
        <FilterIcon color={colors.greyDark} size="30px" />
        <span>Фильтры</span>
      </div>
      <div className="filters--inner">
        <FilterBlock
          block={filters.price}
          filterType={EFilterType.PRICE}
          onToggleFilterOpen={onToggleFilterOpen}
          title="Цена"
        >
          <PriceFilter
            filters={filters.price}
            setFilter={setFilter}
          />
        </FilterBlock>
        {!isEmpty(filters.brands.filter) && (
          <FilterBlock
            block={filters.brands}
            filterType={EFilterType.BRAND}
            key="brand-filter"
            onToggleFilterOpen={onToggleFilterOpen}
            setFilter={setFilter}
            title="Производители"
            type={EFilterBlockType.ARRAY}
          />
        )}
        {type === EProductType.PRINTER && (
          renderPrinterFilters(filters as IPrintersFilters, setFilter, onToggleFilterOpen)
        )}
      </div>
      <style jsx>{`
        .filters--container {
          margin-bottom: 10px;
        }

        .filters--header {
          margin: 0;
          font-size: 30;
          font-weight: normal;
          line-height: 30px;
          background: ${ colors.greyTransparent };
          color: ${ colors.greyDark };
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
          padding: 0px 5px;
          user-select: none;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .filters--inner {
          display: ${isOpen ? 'block' : 'none'};
          padding: 10px 15px;
        }

        @media screen and (min-width: ${ breakpoints.md }px) {
          .filters--container {
            margin-right: 10px;
            min-width: 290px;
            width: 290px;
          }

          .filters--inner {
            display: ${isOpen ? 'block' : 'block'};
          }
        }
      `}</style>
    </div>
  );
};

export default ProductFilters;
