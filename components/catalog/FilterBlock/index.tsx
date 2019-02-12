import { EFilterBlockType, EFilterType } from '../../../lib/enums';
import { colors } from '../../../lib/styleguide';
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
          box-shadow: -1px 0 0 0 #e6e6e6 inset,
                    0 -1px 0 0 #e6e6e6 inset,
                    -1px -1px 0 0 #e6e6e6,
                    -1px 0 0 0 #e6e6e6,
                    0 -1px 0 0 #e6e6e6;
        }

        .filters--block--header {
          background: ${ colors.greyTransparent };
          color: ${ colors.greyDark };
          cursor: pointer;
          padding: 0 8px;
          font-size: 18px;
          font-weight: 300;
          line-height: 34px;
        }

        .filters--block--inner {
          border: 1px solid ${ colors.greyTransparent };
          padding: 8px;
          color: ${ colors.greyDark };
        }
      `}</style>
    </div>
  );
};

export default FilterBlock;
