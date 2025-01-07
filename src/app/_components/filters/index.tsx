'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { SearchFilter } from './search-filter';

type FiltersProps = {
  filters: {
    search: string;
  };
};

export function Filters({ filters }: FiltersProps) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const { search } = filters;

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

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <SearchFilter defaultValue={search} onChange={handleSearch} />
    </div>
  );
}
