import { map } from 'lodash';
import { EFilterType } from '../../../lib/enums';

interface IProps {
  block: any;
  filterType: EFilterType;
  setFilter: (val, state, filterType) => void;
}
const ArrayFilter: React.FC<IProps> = ({ block, filterType, setFilter }) => {
  return (
    <div>
      {map(block.filter.all, (option) => {
        const handleCheckboxClick = () => setFilter( option, block, filterType);
        return (
          <div key={option} className="filters--checkbox--item">
            <label>
              <input
                onChange={handleCheckboxClick}
                type="checkbox"
                checked={block.filter.selected.includes(option)}
              />
              {option}
            </label>
          </div>
        );
      })}
      <style jsx>{`
        .filters--checkbox--item input {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default ArrayFilter;
