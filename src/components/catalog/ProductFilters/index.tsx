import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadBrands } from '../../../actions/brandActions';
import { IAppState, IBrand } from '../../../lib/models';

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
      <div>
        Filters

        Производители:
        {brands && brands.map(brand => <p key={`brand-${brand.id}`}>{brand.name}</p>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductFilters);
