import map from 'lodash/map';
import { ICategory } from '../../../lib/models';
import { breakpoints } from '../../../lib/styleguide';
import CategoryItem from '../CategoryItem';

export interface IProps {
  categories: ICategory[];
}

const CategoryList: React.FC<IProps> = ({ categories }) => {
  return (
    <div>
      <div className="container category-list">
        {categories
          && map(categories, (category: ICategory) => {
            return (
              <CategoryItem
                category={category}
                key={category.id}
              />
              );
            })
          }
      </div>
      <style jsx>{`
        .category-list {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 40px;
        }
        @media screen and (min-width: ${ breakpoints.sm }px) {
          .category-list {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryList;
