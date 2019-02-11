import React from 'react';
import { EFilterType } from '../../../lib/enums';
import { IChamberSizeFilterBlock, IFilterBlock, IRange } from '../../../lib/models';
import SizeFilterChunk from './SizeFilterChunk';

interface IProps {
  block: IFilterBlock<IChamberSizeFilterBlock>;
  filterType: EFilterType;
  setFilter: (val: IChamberSizeFilterBlock, state: IFilterBlock<IChamberSizeFilterBlock>,
              filterType: EFilterType) => void;
}

const SizeFilter: React.FC<IProps> = ({ block, filterType, setFilter }) => {
  const onSetFilter = (val: IRange, type: string) => {
    const data = { ...block.filter, [type]: val };
    setFilter(data, block, filterType);
  };
  return (
    <div>
      <SizeFilterChunk
        filter={block.filter.length}
        onSetFilter={onSetFilter}
        title="Длина"
        type="length"
      />
      <SizeFilterChunk
        filter={block.filter.width}
        onSetFilter={onSetFilter}
        title="Ширина"
        type="width"
      />
      <SizeFilterChunk
        filter={block.filter.height}
        onSetFilter={onSetFilter}
        title="Высота"
        type="height"
      />
    </div>
  );
};

export default SizeFilter;
