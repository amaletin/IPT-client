import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setBrandFilter, setPriceFilter } from '../../../actions/printerActions';
import { IAppState, IFilterState } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';

interface IProps {
  setPriceFilter: (value) => void;
  setBrandFilter: (value) => void;
  filters: IFilterState;
}

const ProductFilters: React.FC<IProps> = ({ filters, setPriceFilter, setBrandFilter }) => {
  return (
    <div className="filters--container">
      <div className="filters--inner">
        <h3>Filters</h3>
        <p>Price:</p>
        <div className="filters--price--inner">
          <InputRange
            maxValue={filters.price.range.max}
            minValue={filters.price.range.min}
            value={filters.price.value}
            onChange={setPriceFilter}
            step={1000}
            />
        </div>
        {!isEmpty(filters.brands) && (
          <div className="filters--block">
            <p>Производители:</p>
            {map(filters.brands, (brand) => {
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
      <style jsx>{`
        .filters--container {
          display: none;
          width: 25%;
        }	
        .filters--inner {
          box-shadow: ${ shadows.boxShadowLite };
          padding: 10px 15px;
        }
        .filters--price--inner {
          padding: 20px;
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

const mapStateToProps = (state: IAppState) => ({ filters: state.printers.filters });
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBrandFilter: (value) => dispatch(setBrandFilter(value)),
    setPriceFilter: (value) => dispatch(setPriceFilter(value)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);