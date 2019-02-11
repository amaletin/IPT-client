import { EFilterBlockType, EFilterType } from '../../../lib/enums';
import ArrayFilter from './ArrayFilter';
import BooleanFilter from './BooleanFilter';
import SizeFilter from './SizeFilter';

interface IProps {
  block: any;
  filterType: EFilterType;
  onToggleFilterOpen: (filterType: EFilterType) => void;
  setFilter?: (val, state, filterType) => void;
  title: string;
  type?: EFilterBlockType;
}

const FilterBlock: React.SFC<IProps> = ({block, children, filterType, onToggleFilterOpen, setFilter, title, type}) => {
  const renderedFilter = () => {
    switch (type) {
      case EFilterBlockType.ARRAY:
        return <ArrayFilter block={block} filterType={filterType} setFilter={setFilter} />;
      case EFilterBlockType.BOOLEAN:
        return <BooleanFilter block={block} filterType={filterType} setFilter={setFilter} />;
      case EFilterBlockType.SIZE:
        return <SizeFilter block={block} filterType={filterType} setFilter={setFilter} />;
      default: return children;
    }
  };
  const handleToggleFilterOpen = () => onToggleFilterOpen(filterType);
  return (
    <div className="filters--block">
      <p onClick={handleToggleFilterOpen}>{title}:</p>
      {block.isOpen && (
        <div className="filters--block--inner">
          {renderedFilter()}
        </div>
      )}
    </div>
  );
};

export default FilterBlock;
