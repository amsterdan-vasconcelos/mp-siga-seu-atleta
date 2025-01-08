import { Category, SortBy, Dir } from '@/types/filters';

export type FiltersParams = {
  search?: string;
  sportCode?: string;
  category?: Category;
  sort?: SortBy;
  dir?: Dir;
};

export type FiltersParamsWithoutSearch = {
  sportCode?: string;
  category?: Category;
  sort?: SortBy;
  dir?: Dir;
};
