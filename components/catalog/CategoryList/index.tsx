import map from 'lodash/map';
import { ICategory } from '../../../lib/models';
import CategoryItem from '../CategoryItem';

export interface IProps {
  categories: ICategory[];
}

const CategoryList: React.FC<IProps> = ({ categories }) => {
  return (
    <>
      <div className="catalog--container">
        <h2>Категории</h2>
      </div>
      <div className="container catalog--container">
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
    </>
  );
};

export default CategoryList;
