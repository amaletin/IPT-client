import { EFilterType } from '../../../lib/enums';

interface IProps {
  block: any;
  filterType: EFilterType;
  setFilter: (val, state, filterType) => void;
}

const BooleanFilter: React.FC<IProps> = ({ block, filterType, setFilter }) => {
  const handleCheckboxClick = () => setFilter(!block.filter, block, filterType);
  return (
    <label>
      <input
        onChange={handleCheckboxClick}
        type="checkbox"
        checked={block.filter}
      />
      Есть
    </label>
  );
};

export default BooleanFilter;
