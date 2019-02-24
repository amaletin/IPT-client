/**
 * Статус загрузки данных.
 */
export enum EStatus {
  IDLE = 'IDLE',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export enum EProductType {
  PRINTER = 1,
  SCANER = 2,
  PEN = 3,
  CONSUMABLE = 4,
}

export enum EProductTypeString {
  PRINTER = 'printers',
  SCANER = 'scanners',
  PEN = 'pens',
  CONSUMABLE = 'consumables',
}

export enum EFilterType {
  PRICE = 'price',
  BRAND = 'brands',
  TECHNNOLOGY = 'technology',
  CHAMBER_TYPE = 'chamberType',
  CHAMBER_SIZE = 'chamberSize',
  EXTRUDERS = 'extruders',
  LAYER_RESOLUTION = 'layerResolution',
  HEATED_BED = 'heatedBed',
}

export enum EFilterBlockType {
  ARRAY = 'array',
  BOOLEAN = 'boolean',
  PRICE = 'price',
  SIZE = 'size',
}
