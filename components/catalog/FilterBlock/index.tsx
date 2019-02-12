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
      <div
        className="filters--block--header"
        onClick={handleToggleFilterOpen}
      >
        <span>{title}</span>
      </div>
      {block.isOpen && (
        <div className="filters--block--inner">
          {renderedFilter()}
        </div>
      )}
      <style jsx>{`
        .filters--block {
          margin: 5px 0;
          user-select: none;
        }

        .filters--block--header {
          background: #f2f3f3;
          cursor: pointer;
          padding: 8px;
        }

        .filters--block--inner {
          border: 1px solid #f2f3f3;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default FilterBlock;
