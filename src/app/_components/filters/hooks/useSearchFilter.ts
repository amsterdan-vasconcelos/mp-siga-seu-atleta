import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useHandleUrl } from './useHandleUrl';

export function useSearchFilter() {
  const { searchParams, pathname, replace } = useHandleUrl();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchedValue = event.target.value;

      if (searchedValue) {
        params.set('search', searchedValue);
      } else {
        params.delete('search');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    200,
  );

  return { handleSearch };
}
