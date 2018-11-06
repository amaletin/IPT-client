import { IProductRaw } from '../lib/models';

export const generateProductMock = ():IProductRaw => {
  return {
    chamber_height: undefined,
    chamber_length: undefined,
    chamber_type: undefined,
    chamber_width: undefined,
    description: undefined,
    extruders: undefined,
    heated_bed: undefined,
    id: 1,
    layer_resolution: undefined,
    name: 'test',
    type: {
      data: {
        id: 1,
      }
    },
    picture: undefined,
    price: undefined,
  };
}