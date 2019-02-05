import { isEmpty, keyBy, map, replace } from 'lodash';

import {
  ICategory,
  IProduct,
  IPost,
  IPostsState,
  ICategoriesState,
  IProductsState,
} from '../lib/models';
import {
  IProductRaw,
  IPostRaw,
  ICategoryRaw,
} from '../lib/modelsAPI';
import { API_HOST } from '../configuration/app.config';

export const processProducts = (products: IProductRaw[]): IProductsState  => ({
  byId:  keyBy(products.map((p: IProductRaw) => processProduct(p)), 'id'),
  allIds: products.map(p => p.id),
})

export const processProduct = (product: IProductRaw): IProduct => {
  return {
    ...product,
    brand: product.brand ? product.brand.data : null,
    category: product.category ? product.category.data.id : null,
    chamberHeight: product.chamber_height,
    chamberLength: product.chamber_length,
    chamberType: product.chamber_type,
    chamberWidth: product.chamber_width,
    heatedBed: product.heated_bed,
    layerResolution: product.layer_resolution,
    picture: product.picture && product.picture.data.thumbnail_url,
    type: product.type.data.id,
    technology: product.technology ? product.technology.data.name : null,
  }
}

export const processCategories = (categories: ICategoryRaw[]): ICategoriesState  => ({
  byId: keyBy(categories.map((c: ICategoryRaw) => processCategory(c)), 'id'),
  allIds: categories.map(c => c.id)
})

export const processCategory = (category: ICategoryRaw): ICategory => {
  return {
    ...category,
    parent: !isEmpty(category.parent) ? category.parent.data.id : null,
    picture: !isEmpty(category.picture) && category.picture.data.thumbnail_url,
    type: category.type.data.id,
  }
}

export const processPosts = (posts: IPostRaw[]): IPostsState  => ({
  byId: keyBy(posts.map((post: IPostRaw) => processPost(post)), 'id'),
  allIds: posts.map(p => p.id)
})

export const processPost = (post: IPostRaw): IPost => {
  return {
    ...post,
    body: replace(post.body, 'src="/storage', `src="${API_HOST}storage`),
    cover: !isEmpty(post.cover) && post.cover.data.name,
    coverCaption: post.cover_caption,
  }
}