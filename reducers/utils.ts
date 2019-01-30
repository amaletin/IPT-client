import isEmpty from 'lodash/isEmpty';
import replace from 'lodash/replace';
import map from 'lodash/map';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import keyBy from 'lodash/keyBy';
import { Dictionary } from 'lodash';
import {
  IBrand,
  ICategory,
  IFilterState,
  IPriceFilter,
  IPriceRange,
  IPrinter,
  IProduct,
  IProductRaw,
  IPost,
  IPostRaw,
  ICategoryRaw,
  IServerResponse,
} from '../lib/models';
import { API_HOST } from '../configuration/app.config';

export const processProducts = (products: IServerResponse<IProductRaw[]>): IProduct[]  => {
  return products.data.map((product: IProductRaw) => {
    return processProduct(product);
  })
}

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
  }
}

export const processCategories = (categories: IServerResponse<ICategoryRaw[]>): ICategory[]  => {
  return categories.data.map((category: ICategoryRaw) => {
    return processCategory(category);
  })
}

export const processCategory = (category: ICategoryRaw): ICategory => {
  return {
    ...category,
    parent: !isEmpty(category.parent) ? category.parent.data.id : null,
    picture: !isEmpty(category.picture) && category.picture.data.thumbnail_url,
    type: category.type.data.id,
  }
}

export const processPosts = (posts: IServerResponse<IPostRaw[]>): IPost[]  => {
  return posts.data.map((post: IPostRaw) => {
    return processPost(post);
  })
}

export const processPost = (post: IPostRaw): IPost => {
  return {
    ...post,
    body: replace(post.body, 'src="/storage', `src="${API_HOST}storage`),
    cover: !isEmpty(post.cover) && post.cover.data.name,
    cover_caption: post.cover_caption,
  }
}

export const filterPrinters = (filters: IFilterState, printers: IPrinter[]): IPrinter[] => {
  const filteredPrinters = filter(printers, (prod) => {
    return (
      (prod.price <= filters.price.value.max
      && prod.price >= filters.price.value.min)
      && filters.brands[prod.brand.id].selected
    )
  })
  return filteredPrinters;
}

export const updateBrandFilters = (oldBrands: Dictionary<IBrand>, printers: IPrinter[]): Dictionary<IBrand> => {
  const brands = keyBy(map(printers, (prod) => {
    const brand = prod.brand;
    brand.selected = true;
    return brand;
  }), 'id');
  
  return { ...oldBrands, ...brands };
}

export const updatePriceFilters = (oldPrice: IPriceFilter, printers: IPrinter[]): IPriceFilter => {
  const prices = map(printers, prod => prod.price).sort((a, b) => a - b);
  const newLimits: IPriceRange = {
    max: prices[prices.length - 1],
    min: prices[0],
  };
  const filterIsNull = oldPrice.value.max === null || oldPrice.value.max === null;
  return {
    range: newLimits,
    value: filterIsNull ? newLimits : oldPrice.value,
  }
}

export const updatePrintersSorting = (printers: IPrinter[], sorting: String): IPrinter[] => {
  return sorting === 'DESC' ? sortBy(printers, ['price']).reverse() : sortBy(printers, ['price']);
}