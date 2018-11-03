import {
  IProduct,
  IProductRaw,
  IProductsResponse,
  IPost,
  IPostRaw,
  IPostsResponse,
} from '../lib/models';

export const processProducts = (products: IProductsResponse): IProduct[]  => {
  return products.data.map((product: IProductRaw) => {
    return {
      ...product,
      chamberHeight: product.chamber_height,
      chamberLength: product.chamber_length,
      chamberType: product.chamber_type,
      chamberWidth: product.chamber_width,
      heatedBed: product.heated_bed,
      layerResolution: product.layer_resolution,
      picture: product.picture && product.picture.data.thumbnail_url,
      type: product.type.data.id,
    }
  })
}

export const processPosts = (posts: IPostsResponse): IPost[]  => {
  return posts.data.map((post: IPostRaw) => {
    return {
      ...post,
      cover: post.cover.data && post.cover.data.thumbnail_url,
      coverCaption: post.cover_caption,
    }
  })
}
