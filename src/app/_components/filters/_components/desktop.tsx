import { Sport } from '@/lib/sports';
import { CategoriesFilter } from './categories-filter';
import { SportsFilter } from './sport-filter';

type DesktopFiltersProps = {
  filters: {
    category?: 'olympic' | 'paralympic';
    sportCode?: string;
  };
  onCategoryChange: (
    selectedCategory: 'olympic' | 'paralympic' | 'all',
  ) => void;
  sports: Sport[];
  onSportChange: (selectedSport: string) => void;
};

export function DesktopFilters({
  filters,
  onCategoryChange,
  sports,
  onSportChange,
}: DesktopFiltersProps) {
  const { category, sportCode } = filters;

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
    </div>
  );
}
