'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { SearchFilter } from './_components/search-filter';
import { DesktopFilters } from './_components/desktop';

type FiltersProps = {
  filters: {
    search?: string;
    category?: 'olympic' | 'paralympic';
  };
};

export function Filters({ filters }: FiltersProps) {
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

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <SearchFilter defaultValue={search} onChange={handleSearch} />
      <DesktopFilters
        filters={restFilters}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
