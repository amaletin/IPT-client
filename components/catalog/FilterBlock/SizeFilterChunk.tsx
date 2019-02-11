import React from 'react';
import { IRange } from '../../../lib/models';

interface IProps {
  filter: IRange;
  onSetFilter: (val: IRange, type: string) => void;
  title: string;
  type: string;
}

const SizeFilterChunk: React.FC<IProps> = ({ filter, onSetFilter, title, type }) => {
  const handleUpdateMin = (e) => {
    onSetFilter({
      ...filter,
      min: parseInt(e.target.value, 10) || null,
    }, type);
  };
  const handleUpdateMax = (e) => {
    onSetFilter({
      ...filter,
      max: parseInt(e.target.value, 10) || null,
    }, type);
  };
  const { max, min } = filter;

  return (
    <label className="size-label">
      {title} от
      <input
        type="text"
        className="size-input"
        value={min != null ? min.toString() : ''}
        onChange={handleUpdateMin}
      />
      до
      <input
        type="text"
        className="size-input"
        value={max != null ? max.toString() : ''}
        onChange={handleUpdateMax}
      />
      <style jsx>{`
        .size-label {
          display: block;
        }

        .size-input {
          width: 30px;
        };
      `}</style>
    </label>
  );
};

export default SizeFilterChunk;
