import {
  IProduct,
  IProductRaw,
  IProductsResponse,
} from '../lib/models';

export const processProducts = (products: IProductsResponse): IProduct[]  => {
  return products.data.map((product: IProductRaw) => {
    return {
      chamberHeight: product.chamber_height,
      chamberLength: product.chamber_length,
      chamberType: product.chamber_type,
      chamberWidth: product.chamber_width,
      description: product.description,
      extruders: product.extruders,
      heatedBed: product.heated_bed,
      id: product.id,
      layerResolution: product.layer_resolution,
      name: product.name,
      picture: product.picture && product.picture.data.thumbnail_url,
      price: product.price,
      type: product.type.data.id,
    }
  })
}
