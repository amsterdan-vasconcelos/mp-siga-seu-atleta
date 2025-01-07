import { CategoriesFilter } from './categories-filter';

type DesktopFiltersProps = {
  filters: {
    category?: 'olympic' | 'paralympic';
  };
  onCategoryChange: (
    selectedCategory: 'olympic' | 'paralympic' | 'all',
  ) => void;
};

export function DesktopFilters({
  filters,
  onCategoryChange,
}: DesktopFiltersProps) {
  const { category } = filters;

  return (
    <div className='w-full hidden md:flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </div>
  );
}
