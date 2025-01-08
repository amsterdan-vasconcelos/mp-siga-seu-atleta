import { Sport } from '@/lib/sports';
import { CategoriesFilter } from './categories-filter';
import { SportsFilter } from './sport-filter';
import { SortBy } from './sort-by';

type DesktopFiltersProps = {
  filters: {
    category?: 'olympic' | 'paralympic';
    sportCode?: string;
    sort?: 'followers' | 'name';
    dir?: 'desc' | 'asc';
  };
  onCategoryChange: (
    selectedCategory: 'olympic' | 'paralympic' | 'all',
  ) => void;
  sports: Sport[];
  onSportChange: (selectedSport: string) => void;
  onSortByChange: (selectedSort: string) => void;
  onDirectionChange: (selectedDirection: 'desc' | 'asc') => void;
};

export function DesktopFilters({
  filters,
  onCategoryChange,
  sports,
  onSportChange,
  onSortByChange,
  onDirectionChange,
}: DesktopFiltersProps) {
  const { category, sportCode, sort, dir } = filters;

  return (
    <div className='w-full hidden md:flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
        <SportsFilter
          sportCode={sportCode}
          sports={sports}
          onSportChange={onSportChange}
        />
      </div>

      <SortBy
        sort={sort}
        dir={dir}
        onSortByChange={onSortByChange}
        onDirectionChange={onDirectionChange}
      />
    </div>
  );
}
