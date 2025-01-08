import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useHandleUrl } from './useHandleUrl';
import { FiltersParamsName } from '@/app/types/filters';

export function useSearchFilter() {
  const { searchParams, pathname, replace } = useHandleUrl();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchedValue = event.target.value;

      if (searchedValue) {
        params.set(FiltersParamsName.search, searchedValue);
      } else {
        params.delete(FiltersParamsName.search);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    200,
  );

  return { handleSearch };
}
