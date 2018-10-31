import { EState, EProductType } from './enums';

export interface IAppState {
  brands: IBrandsState;
  products: IProductsState;
  ui: any;
}

export interface IStateChunk {
  state: EState;
}

export interface IProductsState extends IStateChunk {
  data: IProduct[];
}

export interface IBrandsState extends IStateChunk {
  data: IBrand[];
}

export interface IUIState {
  showLoader: boolean;
}

export interface IBrand {
  name: string;
  id: number;
}

export interface IFile {
  id: number;
  thumbnail_url: string;
}

export interface IServerResponse {
  meta?: {
    table: string;
    type: string;
    total?: number;
    Published?: number;
    Deleted?: number;
    Draft?: number;
    total_entries?: number;
  }
  data: any[] | {};
}

export interface IProductsResponse extends IServerResponse {
  data: IProductRaw[];
}

export interface IProductRaw {
  chamber_height?: number;
  chamber_length?: number;
  chamber_type?: string;
  chamber_width?: number;
  description?: string;
  extruders?: number;
  heated_bed?: boolean;
  id: number;
  layer_resolution?: string;
  name: string;
  picture?: any;
  price?: number;
  type: any;
}

export interface IProductCommon {
  id: number;
  name: string;
  picture?: any;
  price?: number;
  type: EProductType;
}

export interface IPrinter extends IProductCommon {
  chamberHeight?: number;
  chamberLength?: number;
  chamberType?: string;
  chamberWidth?: number;
  description?: string;
  extruders?: number;
  heatedBed?: boolean;
  layerResolution?: string;
}

export interface IScanner extends IProductCommon {}

export interface IPen extends IProductCommon {}

export interface IConsumable extends IProductCommon {}

export interface IProduct extends IPrinter, IScanner, IPen, IConsumable {}
