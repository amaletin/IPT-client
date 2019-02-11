import { isEmpty } from 'lodash';
import { EFilterBlockType, EFilterType, EProductType } from '../../../lib/enums';
import { ICommonFilter, IPrintersFilters } from '../../../lib/models';
import { breakpoints, shadows } from '../../../lib/styleguide';
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
      <FilterBlock
        block={filters.heatedBed}
        filterType={EFilterType.HEATED_BED}
        key="heatedBed-filter"
        onToggleFilterOpen={onToggleFilterOpen}
        setFilter={setFilter}
        title="Подогреваемый стол"
        type={EFilterBlockType.BOOLEAN}
      />
    </>
  );
};

const ProductFilters: React.FC<IProps> = ({
  filters,
  setFilter,
  onToggleFilterOpen,
  type,
}) => {
  return (
    <div className="filters--container">
      <div className="filters--inner">
        <h3>Фильтры</h3>
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
        {type === EProductType.PRINTER && (
          renderPrinterFilters(filters as IPrintersFilters, setFilter, onToggleFilterOpen)
        )}
      </div>
      <style jsx>{`
        .filters--container {
          display: none;
          width: 25%;
        }
        .filters--inner {
          box-shadow: ${ shadows.boxShadowLite };
          padding: 10px 15px;
        }

        @media screen and (min-width: ${ breakpoints.md }px) {
          .filters--container {
            display: block;
            width: 290px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductFilters;
