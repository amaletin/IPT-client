export interface IServerResponse<T> {
  data: T;
  meta?: {
    table: string;
    type: string;
    total?: number;
    Published?: number;
    Deleted?: number;
    Draft?: number;
    total_entries?: number;
  };
}

// export interface IFileRaw {
//   id: number;
//   status: number;
//   name: string;
//   title: string;
//   location?: string;
//   caption?: string;
//   type: string;
//   charset: string;
//   tags?: string;
//   width: number;
//   height: number;
//   size: number;
//   embed_id?: any;
//   user: number;
//   date_uploaded: string;
//   storage_adapter: string;
//   url: string;
//   thumbnail_url: string;
//   old_thumbnail_url: string;
//   html: string;
//   data: {
//     full_url: string;
//   }
// }

export interface IFileRaw {
  directus_files_id?: {
    filename: string;
  };
}

export interface ICategoryRaw {
  id: number;
  name: string;
  parent: any;
  picture: {
    filename: string;
  };
  type: any;
}

export interface IBrandRaw {
  id: number;
  name: string;
  sort: number;
}

export interface ITechnologyRaw {
  id: number;
  name: string;
}

export interface IProductRaw {
  brand?: IBrandRaw;
  chamber_height?: string;
  chamber_length?: string;
  chamber_type?: string;
  chamber_width?: string;
  description?: string;
  extruders?: number;
  heated_bed?: boolean;
  heated_bed_enum?: string;
  id: number;
  layer_resolution?: string;
  name: string;
  category?: any;
  pictures?: IFileRaw[];
  price?: number;
  type: any;
  technology?: ITechnologyRaw;
}

export interface IPostRaw {
  body: string;
  cover: {
    filename: string;
    data: {
      full_url: string;
    };
  };
  cover_caption: string;
  excerpt: string;
  id: number;
  sort: number;
  status: number;
  subtitle: string;
  title: string;
}
