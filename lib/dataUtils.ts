import { isEmpty, keyBy, map, replace } from 'lodash';
import { API_HOST } from '../configuration/app.config';
import {
  ICategoriesState,
  ICategory,
  IPage,
  IPagesState,
  IPost,
  IPostsState,
  IProduct,
  IProductsState,
} from '../lib/models';
import {
  ICategoryRaw,
  IPageRaw,
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
    brand: product.brand ? product.brand.name : null,
    category: product.category ? product.category.data.id : null,
    chamberHeight: product.chamber_height ? parseInt(product.chamber_height, 10) : null,
    chamberLength: product.chamber_height ? parseInt(product.chamber_length, 10) : null,
    chamberType: product.chamber_type,
    chamberWidth: product.chamber_height ? parseInt(product.chamber_width, 10) : null,
    heatedBed: product.heated_bed_enum ? product.heated_bed_enum : null,
    layerResolution: product.layer_resolution,
    pictures: map(product.pictures, (p) => p.directus_files_id.filename),
    technology: product.technology ? product.technology.name : null,
    type: product.type.id,
  };
};

export const processCategories = (categories: ICategoryRaw[]): ICategoriesState  => ({
  allIds: categories.map((c) => c.id),
  byId: keyBy(categories.map((c: ICategoryRaw) => processCategory(c)), 'id'),
});

export const processCategory = (category: ICategoryRaw): ICategory => {
  return {
    ...category,
    parent: !isEmpty(category.parent) ? category.parent.id : null,
    picture: !isEmpty(category.picture) && category.picture.filename,
    type: category.type.id,
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
    cover: !isEmpty(post.cover) && post.cover.filename,
    coverCaption: post.cover_caption,
  };
};

export const processPages = (pages: IPageRaw[]): IPagesState  => ({
  allIds: pages.map((p) => p.id),
  byId: keyBy(pages.map((page: IPageRaw) => processPage(page)), 'id'),
});

export const processPage = (page: IPageRaw): IPage => page;
