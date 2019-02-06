import React, { SyntheticEvent } from 'react';
import InputRange from 'react-input-range';
import { EFilterType } from '../../../lib/enums';
import { IFilterBlock, IPriceFilterBlock, IPriceRange } from '../../../lib/models';

interface IProps {
  filters: IFilterBlock<IPriceFilterBlock>;
  setFilter: (val: IPriceRange, state: IFilterBlock<IPriceFilterBlock>, filterType: EFilterType.PRICE) => void;
}

interface IState {
  min: string;
  max: string;
}

class PriceFilter extends React.Component<IProps, IState> {
  public readonly state = {
    max: this.props.filters.filter.value.max ? this.props.filters.filter.value.max.toString() : '',
    min: this.props.filters.filter.value.min ? this.props.filters.filter.value.min.toString() : '',
  };

  private handleSetFilter = (val: IPriceRange) => this.props.setFilter(val, this.props.filters, EFilterType.PRICE);

  private handleChangeMin = (e: SyntheticEvent) => {
    this.setState({ ...this.state, min: e.currentTarget.nodeValue });
  }

  private handleChangeMax = (e: SyntheticEvent) => {
    this.setState({ ...this.state, max: e.currentTarget.nodeValue });
  }

  private handleUpdateMin = (e: SyntheticEvent) => {
    const { filter } = this.props.filters;
    const data = parseInt(e.currentTarget.nodeValue, 10);
    this.setState({
      ...this.state,
      min: this.validateMin(data, filter).toString(),
    }, () => {
      this.handleSetFilter({
        max: parseInt(this.state.max, 10),
        min: parseInt(this.state.min, 10),
      });
    });
  }

  private handleUpdateMax = (e: SyntheticEvent) => {
    const { filter } = this.props.filters;
    const data = parseInt(e.currentTarget.nodeValue, 10);
    this.setState({
      ...this.state,
      max: this.validateMax(data, filter).toString(),
    }, () => {
      this.handleSetFilter({
        max: parseInt(this.state.max, 10),
        min: parseInt(this.state.min, 10),
      });
    });
  }

  private validateMin = (min: number, filter: IPriceFilterBlock) => {
    const { range, value: { max } } = filter;
    return (min >= range.min && min < max) ? min : range.min;
  }

  private validateMax = (max: number, filter: IPriceFilterBlock) => {
    const { range, value: { min } } = filter;
    return (max > min && max <= range.max) ? max : range.max;
  }

  private handleSlide = (data: IPriceRange) => {
    this.setState({
      max: data.max.toString(),
      min: data.min.toString(),
    }, () => {
      this.handleSetFilter({
        max: parseInt(this.state.max, 10),
        min: parseInt(this.state.min, 10),
      });
    });
  }

  public render() {
    const { filter } = this.props.filters;
    const priceFilterDisabled = filter.range.min === null
                              || filter.range.max === null
                              || filter.range.min === filter.range.max;
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
            {!priceFilterDisabled && (
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
