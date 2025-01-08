'use client';

import { SearchInput } from '@/components/ui/input';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useHandleUrl } from '../hooks/useHandleUrl';

type SearchFilterProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchFilter({ ...props }: SearchFilterProps) {
  const { searchParams, pathname, replace } = useHandleUrl();

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
    <div>
      <SearchInput
        className='w-56 md:w-full lg:w-56'
        type='text'
        name='q'
        placeholder='Pesquisar'
        onChange={handleSearch}
        {...props}
      />
    </div>
  );
}
