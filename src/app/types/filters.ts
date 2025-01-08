import { Category, SortBy, Dir } from '@/types/filters';

export enum FiltersParamsName {
  search = 'search',
  sportCode = 'sportCode',
  category = 'category',
  sort = 'sort',
  dir = 'dir',
}

export type FiltersParams = {
  [FiltersParamsName.search]?: string;
  [FiltersParamsName.sportCode]?: string;
  [FiltersParamsName.category]?: Category;
  [FiltersParamsName.sort]?: SortBy;
  [FiltersParamsName.dir]?: Dir;
};

export type FiltersParamsWithoutSearch = {
  [FiltersParamsName.sportCode]?: string;
  [FiltersParamsName.category]?: Category;
  [FiltersParamsName.sort]?: SortBy;
  [FiltersParamsName.dir]?: Dir;
};
