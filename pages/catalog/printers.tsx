import filter from 'lodash/filter';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IProduct } from '../../lib/models';
import { EProductType } from '../../lib/enums';
import Page from '../../components/common/Page';
import { loadProducts } from '../../actions/catalogActions';
import { IAppState } from '../../lib/models';
import { setPriceFilter } from '../../actions/filterActions';

import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';


interface IProps {
  dispatch: Dispatch;
  filters: {
    price: {
      value: {
        min: number;
        max: number;
      }
      minValue: number;
      maxValue: number;
    }
  };
  products: IProduct[];
  setPriceFilter: Function;
}

interface IState {
  filteredProducts: IProduct[];
}

const mapStateToProps = (state: IAppState) => {
  const { products } = state.catalog;
  const { filters } = state;
  const printers = filter(products, (product) => product.type === EProductType.PRINTER)

  return {
    products: printers,
    filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    setPriceFilter: (value) => dispatch(setPriceFilter(value)),
  })
}

class Printers extends React.Component<IProps, IState> {
  static async getInitialProps ({ reduxStore }) {
    const products = await reduxStore.dispatch(loadProducts(EProductType.PRINTER));

    return { products }
  }

  constructor(props) {
    super(props);
    this.state = {
      filterProducts: this.props.products,
    };
  }

  componentDidMont() {
    this.filterProducts();
  }

  handleUpdatePriceFilter = (value) => {
    this.props.setPriceFilter(value);

    this.filterProducts();
  }

  filterProducts = () => {
    const { filters, products } = this.props;
    const filteredProducts = filter(products, (prod) => {
      return (prod.price <= filters.price.value.max
      && prod.price >= filters.price.value.min)
    })

    this.setState({filteredProducts});
  }

  render() {
    const { filters } = this.props;
    const { filteredProducts } = this.state;
    return (
      <Page title="3D Принтеры">
        <div className="catalog--layout container">
          <ProductFilters
            filters={filters}
            onUpdatePrice={this.handleUpdatePriceFilter}
          />
          <ProductList className="catalog--container--right" products={filteredProducts} />
        </div>
				<style jsx>{`
          .catalog--layout {
            display: flex;
            justify-content: center;
          }
				`}</style>
      </Page>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Printers);
