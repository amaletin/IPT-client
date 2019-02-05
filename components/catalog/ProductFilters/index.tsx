import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import { IFiltersStateSlice, IPrintersFilters } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';
import { EProductType } from '../../../lib/enums';

import PriceFilter from '../PriceFilter';

interface IProps {
  filters: IFiltersStateSlice;
  setPriceFilter: (value) => void;
  setBrandFilter?: (value) => void;
  setPrintersBrandFilterOpen?: () => void;
  type: EProductType
}

const renderPrinterFilters = (filters: IPrintersFilters, setBrandFilter: (value) => void, setPrintersBrandFilterOpen) => {
  const setFilterOpen = () => setFilterOpen()
  return (
    <>
      {!isEmpty(filters.brands.filter) && (
        <div className="filters--block">
          <p onClick={setPrintersBrandFilterOpen}>Производители:</p>
          {filters.brands.isOpen && (
            <div className="filters--block--inner">
              {map((filters as IPrintersFilters).brands.filter, (brand) => {
                const handleBrandClick = () => setBrandFilter(brand.id);
                return (
                  <div key={`brand-${brand.id}`} className="filters--brand--item">
                    <label>
                      <input onChange={handleBrandClick} type="checkbox" checked={brand.selected} />
                      {brand.name}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  )
}

const ProductFilters: React.FC<IProps> = ({
  filters,
  setPriceFilter,
  setBrandFilter,
  setPrintersBrandFilterOpen,
  type,
}) => {
  return (
    <div className="filters--container">
      <div className="filters--inner">
        <h3>Фильтры</h3>
        <PriceFilter
          filters={filters.price}
          setPriceFilter={setPriceFilter}
        />
        {type === EProductType.PRINTER && (
          renderPrinterFilters(filters as IPrintersFilters, setBrandFilter, setPrintersBrandFilterOpen)
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
}

export default ProductFilters;