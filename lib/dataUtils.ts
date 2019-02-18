import { isEmpty, keyBy, replace } from 'lodash';
import { API_HOST } from '../configuration/app.config';
import {
  ICategoriesState,
  ICategory,
  IPost,
  IPostsState,
  IProduct,
  IProductsState,
} from '../lib/models';
import {
  ICategoryRaw,
  IPostRaw,
  IProductRaw,
} from '../lib/modelsAPI';

export const processProducts = (products: IProductRaw[]): IProductsState  => ({
  allIds: products.map((p) => p.id),
  byId:  keyBy(products.map((p: IProductRaw) => processProduct(p)), 'id'),
});

export const processProduct = (product: IProductRaw): IProduct => {
  return {
    ...product,
    brand: product.brand ? product.brand.data.name : null,
    category: product.category ? product.category.data.id : null,
    chamberHeight: product.chamber_height ? parseInt(product.chamber_height, 10) : null,
    chamberLength: product.chamber_height ? parseInt(product.chamber_length, 10) : null,
    chamberType: product.chamber_type,
    chamberWidth: product.chamber_height ? parseInt(product.chamber_width, 10) : null,
    heatedBed: product.heated_bed_enum ? product.heated_bed_enum : null,
    layerResolution: product.layer_resolution,
    picture: product.picture && product.picture.data.name,
    technology: product.technology ? product.technology.data.name : null,
    type: product.type.data.id,
  };
};

export const processCategories = (categories: ICategoryRaw[]): ICategoriesState  => ({
  allIds: categories.map((c) => c.id),
  byId: keyBy(categories.map((c: ICategoryRaw) => processCategory(c)), 'id'),
});

export const processCategory = (category: ICategoryRaw): ICategory => {
  return {
    ...category,
    parent: !isEmpty(category.parent) ? category.parent.data.id : null,
    picture: !isEmpty(category.picture) && category.picture.data.name,
    type: category.type.data.id,
  };
};

export const processPosts = (posts: IPostRaw[]): IPostsState  => ({
  allIds: posts.map((p) => p.id),
  byId: keyBy(posts.map((post: IPostRaw) => processPost(post)), 'id'),
});

export const processPost = (post: IPostRaw): IPost => {
  return {
    ...post,
    body: replace(post.body, 'src="/storage', `src="${API_HOST}storage`),
    cover: !isEmpty(post.cover) && post.cover.data.name,
    coverCaption: post.cover_caption,
  };
};
