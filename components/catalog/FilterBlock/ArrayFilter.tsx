import { map } from 'lodash';
import { EFilterType } from '../../../lib/enums';
import { breakpoints } from '../../../lib/styleguide';

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
        .filters--checkbox--item {
          font-size: 3;
          line-height: 2;
        }

        .filters--checkbox--item input {
          margin-right: 10px;
        }

        @media screen and (min-width: ${ breakpoints.md }px) {
          .filters--checkbox--item {
            font-size: initial;
            line-height: initial;
          }
        }
      `}</style>
    </div>
  );
};

export default ArrayFilter;
