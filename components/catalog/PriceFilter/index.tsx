import React from 'react';
import InputRange from 'react-input-range';
import { IPriceFilterBlock, IFilterBlock, IPriceRange } from '../../../lib/models';

interface IProps {
  filters: IFilterBlock<IPriceFilterBlock>;
  setPriceFilter: (val) => void;
}

interface IState {
  min: string;
  max: string;
}

class PriceFilter extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      min: this.props.filters.filter.value.min.toString(),
      max: this.props.filters.filter.value.max.toString(),
    }
  }

  handleChangeMin = (e) => {
    this.setState({ ...this.state, min: e.target.value })
  }

  handleChangeMax = (e) => {
    this.setState({ ...this.state, max: e.target.value })
  }

  handleUpdateMin = (e) => {
    const { filters, setPriceFilter } = this.props;
    const { filter } = filters;
    const data = parseInt(e.target.value);
    this.setState({
      ...this.state,
      min: this.validateMin(data, filter).toString(),
    }, () => {
      setPriceFilter({
        min: parseInt(this.state.min),
        max: parseInt(this.state.max)
      });
    })
  }

  handleUpdateMax = (e) => {
    const { filters, setPriceFilter } = this.props;
    const { filter } = filters;
    const data = parseInt(e.target.value);
    this.setState({
      ...this.state,
      max: this.validateMax(data, filter).toString(),
    }, () => {
      setPriceFilter({
        min: parseInt(this.state.min),
        max: parseInt(this.state.max)
      });
    })
  }

  validateMin = (min, filter) => {
    const { range, value: { max } } = filter;
    return (min >= range.min && min < max) ? min : range.min;
  }

  validateMax = (max, filter) => {
    const { range, value: { min } } = filter;
    return (max > min && max <= range.max) ? max : range.max;
  }

  handleSlide = (data: IPriceRange) => {
    this.setState({
      min: data.min.toString(),
      max: data.max.toString(),
    }, () => {
      this.props.setPriceFilter({
        min: parseInt(this.state.min),
        max: parseInt(this.state.max)
      });
    })
  }

  render() {
    const { filters, setPriceFilter } = this.props;
    const { filter } = filters;
    const priceFilterDisabled = filter.range.min === null || filter.range.max === null || filter.range.min === filter.range.max; 
    return (
      <div className="filters--block">
        <div className="filters--block--tilte">
          <p>Цена:</p>
        </div>
        <div className="filters--block--inner">
          <div className="price--block--inputs">
            <input
              type="text"
              disabled={priceFilterDisabled}
              value={this.state.min}
              onChange={this.handleChangeMin}
              onBlur={this.handleUpdateMin}
            />
            <input
              type="text"
              disabled={priceFilterDisabled}
              value={this.state.max}
              onChange={this.handleChangeMax}
              onBlur={this.handleUpdateMax}
            />
          </div>
          <div className="price--block--slider">
            {priceFilterDisabled ? (
              <InputRange
                disabled={priceFilterDisabled}
                value={0}
                onChange={setPriceFilter}
              />
            ) : (
              <InputRange
                disabled={priceFilterDisabled}
                maxValue={filter.range.max}
                minValue={filter.range.min}
                value={filter.value}
                onChange={this.handleSlide}
                step={1}
              />
            )}
          </div>
        </div>
        <style jsx>{`
          .filters--block--inner {
            padding: 20px;
          }
  
          .price--block--inputs {
            box-sizing: border-box;
            display: flex;
            padding: 30px 0;
          }
        `}</style>
      </div>
    );
  }
}

export default PriceFilter;