import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadBrands } from '../../../actions/brandActions';
import { IAppState, IBrand } from '../../../lib/models';
import { shadows, breakpoints } from '../../../lib/styleguide';

export interface IProps {
  dispatch: Dispatch;
  brands: IBrand[];
}

const mapStateToProps = (state: IAppState) => {
  const { brands } = state;

  return {
    brands: brands.data,
  };
};

class ProductFilters extends React.Component<IProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadBrands());
  }

  render() {
    const { brands } = this.props;
    return (
      <div className="filters--container">
				<div className="filters--inner">
 	       Filters

 	       Производители:
 	       {brands && brands.map(brand => <p key={`brand-${brand.id}`}>{brand.name}</p>)}
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
