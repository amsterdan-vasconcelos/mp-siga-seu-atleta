'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { SearchFilter } from './components/search-filter';
import { DesktopFilters } from './components/desktop';
import { Sport } from '@/lib/sports';
import { MobileFilters } from './components/mobile';

type FiltersProps = {
  filters: {
    search?: string;
    category?: 'olympic' | 'paralympic';
    sportCode?: string;
    sort?: 'followers' | 'name';
    dir?: 'desc' | 'asc';
  };
  sports: Sport[];
};

export function Filters({ filters, sports }: FiltersProps) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const { search, ...restFilters } = filters;

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchedValue = event.target.value;

      if (searchedValue) {
        params.set('q', searchedValue);
      } else {
        params.delete('q');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    200,
  );

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

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <SearchFilter defaultValue={search} onChange={handleSearch} />

      <MobileFilters
        sports={sports}
        filters={restFilters}
        onCategoryChange={handleCategoryChange}
        onSportChange={handleSportChange}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />

      <DesktopFilters
        filters={restFilters}
        onCategoryChange={handleCategoryChange}
        sports={sports}
        onSportChange={handleSportChange}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
