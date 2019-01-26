import React from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { loadBrands } from '../../../actions/brandActions';
import { IAppState, IBrand } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';

export interface IProps {
  dispatch: Dispatch;
  brands: IBrand[];
  onUpdatePrice: (price) => void;
  filters: {
    price: {
      value: {
        min: number;
        max: number;
      }
      minValue: number;
      maxValue: number;
    }
  }
}

const mapStateToProps = (state: IAppState) => {
  const { brands } = state;

  return {
    brands: brands.data,
  };
};

class ProductFilters extends React.Component<IProps, {}> {
  handleUpdatePrice = (price) => {
    this.props.onUpdatePrice(price);
  }

  render() {
    // const { brands } = this.props;
    const { filters } = this.props;
    const brands = [];
    return (
      <div className="filters--container">
				<div className="filters--inner">
 	       Filters

          Price:
          <InputRange
            maxValue={filters.price.maxValue}
            minValue={filters.price.minValue}
            value={filters.price.value}
            onChange={this.handleUpdatePrice}
            step={1000}
          />


 	       Производители:
 	       {false && brands.map(brand => <p key={`brand-${brand.id}`}>{brand.name}</p>)}
				</div>
				<style jsx>{`
					.filters--container {
            display: none;
						width: 290px;
					}	
					.filters--inner {
						box-shadow: ${ shadows.boxShadowLite };
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
}

export default connect(mapStateToProps)(ProductFilters);
