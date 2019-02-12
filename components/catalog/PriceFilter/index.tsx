import React from 'react';
import InputRange from 'react-input-range';
import { EFilterType } from '../../../lib/enums';
import { IFilterBlock, IPriceFilterBlock, IRange } from '../../../lib/models';
import { colors } from '../../../lib/styleguide';

interface IProps {
  filters: IFilterBlock<IPriceFilterBlock>;
  setFilter: (val: IRange, state: IFilterBlock<IPriceFilterBlock>, filterType: EFilterType.PRICE) => void;
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

  private handleSetFilter = (val: IRange) => this.props.setFilter(val, this.props.filters, EFilterType.PRICE);

  private handleChangeMin = (e) => {
    this.setState({ ...this.state, min: e.target.value });
  }

  private handleChangeMax = (e) => {
    this.setState({ ...this.state, max: e.target.value });
  }

  private handleUpdateMin = (e) => {
    const { filter } = this.props.filters;
    const data = parseInt(e.target.value, 10);
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

  private handleUpdateMax = (e) => {
    const { filter } = this.props.filters;
    const data = parseInt(e.target.value, 10);
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

  private handleSlide = (data: IRange) => {
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
      <div>
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
        <style jsx>{`
          .price--block--inputs {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
          }

          .price--block--inputs input {
            box-sizing: border-box;
            color: ${ colors.greyDark };
            font-size: 16px;
            outline: none;
            padding: 5px;
            width: 48%;
          }

          .price--block--slider {
            padding: 12px 8px 23px;
          }

          .price--block--slider :global(.input-range__label.input-range__label--value) {
            display: none;
          }

          .price--block--slider :global(.input-range__label-container) {
            left: 0;
          }

          .price--block--slider :global().input-range__label--max .input-range__label-container) {
            left: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default PriceFilter;
