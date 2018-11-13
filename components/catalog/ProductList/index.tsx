import React from 'react';
import orderBy from 'lodash/orderBy';
import map from 'lodash/map';
import { IProduct } from '../../../lib/models';
import CatalogTools from '../CatalogTools';
import ProductItem from '../ProductItem';

export interface IProps {
  className?: string;
  products: IProduct[];
}

interface IState {
  sortedProducts: IProduct[];
  sortOrder: string | null;
}

class ProductList extends React.Component<IProps, IState> {
  state = {
    sortedProducts: this.props.products, 
    sortOrder: null,
  }

  handleChangeSorting = () => {
    const prevSorting = this.state.sortOrder;
    const { products } = this.props;

    switch(prevSorting) {
      case 'DESC':
        this.setState({
          sortedProducts: orderBy(products, ['price']),
          sortOrder: 'ASC',
        })
        break;
      case 'ASC':
        this.setState({
          sortedProducts: products,
          sortOrder: null,
        })
        break;
      default:
        this.setState({
          sortedProducts: orderBy(products, ['price'], ['desc']),
          sortOrder: 'DESC',
        }) 
    }
  }

  render() {
    const { className = 'catalog--container' } = this.props;
    const { sortedProducts, sortOrder } = this.state;
    return (
      <>
        <div className={className}>
          <CatalogTools sortOrder={sortOrder} onChangeSorting={this.handleChangeSorting} />
          {sortedProducts
            && map(sortedProducts, (product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              )
            })
          }
        </div>
      </>
    )
  }
}

export default ProductList;
