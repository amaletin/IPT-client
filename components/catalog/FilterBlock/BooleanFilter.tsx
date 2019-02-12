import { EFilterType } from '../../../lib/enums';

interface IProps {
  block: any;
  filterType: EFilterType;
  setFilter: (val, state, filterType) => void;
}

const BooleanFilter: React.FC<IProps> = ({ block, filterType, setFilter }) => {
  const handleCheckboxClick = () => setFilter(!block.filter, block, filterType);
  return (
    <label className="filters--checkbox--item">
      <input
        onChange={handleCheckboxClick}
        type="checkbox"
        checked={block.filter}
      />
      Есть
      <style jsx>{`
        .filters--checkbox--item input {
          margin-right: 10px;
        }
      `}</style>
    </label>
  );
};

export default BooleanFilter;
