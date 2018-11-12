import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { ICategory } from '../../../lib/models';
import Link from 'next/link';
import { breakpoints } from '../../../lib/styleguide';

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
      .category-item--container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 5px;
        width: 290px;
      }

      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 15px;
      }

      .category-item--picture {
        box-sizing: border-box;
        width: 100%;
      }

      .category-item--picture img {
        background: #e8e8e8;
        border-radius: 50%;
        width: 100%;
      }

      .category-item--description {
        text-align: right;
      }

      .category-item--description--name {
        font-size: 18px;
        margin-top: 6px;
        text-transform: uppercase;
        font-weight: bold;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .category-item--container {
          width: 33.33333%;
        }
      }
    `}</style>
  </div>
);

export default CategoryItem;