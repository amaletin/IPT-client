import React from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { loadBrands } from '../../../actions/brandActions';
import { setPriceFilter } from '../../../actions/printerActions';
import { IAppState, IFilterState } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';

interface IProps {
  // brands: IBrand[];
  setPriceFilter: (value) => void;
  filters: IFilterState;
}

const ProductFilters: React.SFC<IProps> = ({ filters, setPriceFilter }) => {
  // const { brands } = this.props;
  // const brands = [];
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
  return { setPriceFilter: (value) => dispatch(setPriceFilter(value)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);
// Производители:
// {false && brands.map(brand => <p key={`brand-${brand.id}`}>{brand.name}</p>)}