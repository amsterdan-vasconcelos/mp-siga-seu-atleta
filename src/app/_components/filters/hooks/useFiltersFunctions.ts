import { Category, Dir } from '@/types/filters';
import { useHandleUrl } from './useHandleUrl';
import { FiltersParamsName } from '@/app/types/filters';

export function useFiltersFunctions() {
  const { searchParams, pathname, replace } = useHandleUrl();

  const handleCategoryChange = (selectedCategory: Category | 'all') => {
    if (selectedCategory.length === 0) return;

    const params = new URLSearchParams(searchParams);
    if (selectedCategory !== 'all') {
      params.set(FiltersParamsName.category, selectedCategory);
    } else {
      params.delete(FiltersParamsName.category);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSportChange = (selectedSport: string) => {
    const params = new URLSearchParams(searchParams);

    if (selectedSport.length === 0) {
      params.delete(FiltersParamsName.sportCode);
    } else {
      params.set(FiltersParamsName.sportCode, selectedSport);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSortByChange = (selectedSort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(FiltersParamsName.sort, selectedSort);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDirectionChange = (selectedDirection: Dir) => {
    const params = new URLSearchParams(searchParams);
    params.set(FiltersParamsName.dir, selectedDirection);
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    handleCategoryChange,
    handleSportChange,
    handleSortByChange,
    handleDirectionChange,
  };
}
