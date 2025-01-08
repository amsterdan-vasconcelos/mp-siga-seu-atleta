'use client';

import { Sport } from '@/lib/sports';
import { CategoriesFilter } from './categories-filter';
import { SportsFilter } from './sport-filter';
import { SortBy } from './sort-by';
import { useFiltersFunctions } from '../hooks/useFiltersFunctions';

type DesktopFiltersProps = {
  filters: {
    category?: 'olympic' | 'paralympic';
    sportCode?: string;
    sort?: 'followers' | 'name';
    dir?: 'desc' | 'asc';
  };
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

      <SortBy
        sort={sort}
        dir={dir}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
