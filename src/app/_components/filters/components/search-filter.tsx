'use client';

import { InputHTMLAttributes } from 'react';

import { SearchInput } from '@/components/ui/input';
import { useSearchFilter } from '../hooks/useSearchFilter';

type SearchFilterProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchFilter({ ...props }: SearchFilterProps) {
  const { handleSearch } = useSearchFilter();

  return (
    <div>
      <SearchInput
        className='w-56 md:w-full lg:w-56'
        type='text'
        placeholder='Pesquisar'
        onChange={handleSearch}
        {...props}
      />
    </div>
  );
}
