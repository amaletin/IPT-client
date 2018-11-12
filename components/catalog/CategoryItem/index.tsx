import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { ICategory } from '../../../lib/models';
import Link from 'next/link';
import { shadows, breakpoints } from '../../../lib/styleguide';

export interface IProps {
  category: ICategory;
}

const pictureUrl = (category: ICategory) => {
  if(isEmpty(category.picture)) {
    return '/static/images/image-placeholder.png'
  }
  return `https://3dapi.amaletin.ru${category.picture}`
};

const CategoryItem: React.SFC<IProps> = ({ category }) => (
  <div className="category-item--container">
    <Link as={`/catalog/category/${category.id}`} href={`/catalog/category?id=${category.id}`}>
      <div className="category-item">
        <div className="category-item--picture">
          <img src={pictureUrl(category)} />
        </div>
        <div className="category-item--description">
          <p className="category-item--description--name">{category.name}</p>
        </div>
      </div>
    </Link>
    <style jsx>{`
      category-item--container {
        display: flex;
        flex-direction: column;
        padding: 15px;
        width: 290px;
      }

      category-item {
        cursor: pointer;
        box-shadow: ${ shadows.boxShadow };
        padding: 15px;
      }

      category-item--picture img {
        width: 100%;
      }

      category-item--description {
        text-align: right;
      }

      category-item--description--name {
        font-size: 30px;
      }

      @media screen and (min-width: ${ breakpoints.md }) {
        category-item--container {
          width: 30%;
        }
      }
    `}</style>
  </div>
);

export default CategoryItem;