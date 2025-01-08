import { useHandleUrl } from './useHandleUrl';

export function useFiltersFunctions() {
  const { searchParams, pathname, replace } = useHandleUrl();

  const handleCategoryChange = (
    selectedCategory: 'olympic' | 'paralympic' | 'all',
  ) => {
    if (selectedCategory.length === 0) return;

    const params = new URLSearchParams(searchParams);
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSportChange = (selectedSport: string) => {
    const params = new URLSearchParams(searchParams);

    if (selectedSport.length === 0) {
      params.delete('sport');
    } else {
      params.set('sport', selectedSport);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSortByChange = (selectedSort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', selectedSort);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDirectionChange = (selectedDirection: 'desc' | 'asc') => {
    const params = new URLSearchParams(searchParams);
    params.set('dir', selectedDirection);
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    handleCategoryChange,
    handleSportChange,
    handleSortByChange,
    handleDirectionChange,
  };
}
