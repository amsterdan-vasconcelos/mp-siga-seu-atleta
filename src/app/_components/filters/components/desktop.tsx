'use client';

import { Sport } from '@/lib/sports';
import { CategoriesFilter } from './categories-filter';
import { SportsFilter } from './sport-filter';
import { SortByFilter } from './sort-by-filter';
import { useFiltersFunctions } from '../hooks/useFiltersFunctions';
import { FiltersParamsWithoutSearch } from '@/app/types/filters';

type DesktopFiltersProps = {
  filters: FiltersParamsWithoutSearch;
  sports: Sport[];
};

export function DesktopFilters({ filters, sports }: DesktopFiltersProps) {
  const {
    handleCategoryChange,
    handleSportChange,
    handleSortByChange,
    handleDirectionChange,
  } = useFiltersFunctions();

  const { category, sportCode, sort, dir } = filters;

  return (
    <div className='w-full hidden md:flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={handleCategoryChange}
        />
        <SportsFilter
          sportCode={sportCode}
          sports={sports}
          onSportChange={handleSportChange}
        />
      </div>

      <SortByFilter
        sort={sort}
        dir={dir}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
