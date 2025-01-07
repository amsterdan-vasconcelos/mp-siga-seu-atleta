import { SearchInput } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';

type SearchFilterProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchFilter({ ...props }: SearchFilterProps) {
  return (
    <div>
      <SearchInput
        className='w-56 md:w-full lg:w-56'
        type='text'
        name='q'
        placeholder='Pesquisar'
        {...props}
      />
    </div>
  );
}
