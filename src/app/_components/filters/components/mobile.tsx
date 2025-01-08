'use client';

import { useState } from 'react';
import { GoFilter } from 'react-icons/go';

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { CategoriesFilter } from './categories-filter';
import { SportsFilter } from './sport-filter';
import { SortBy } from './sort-by';
import { Sport } from '@/lib/sports';
import { useFiltersFunctions } from '../hooks/useFiltersFunctions';
import { FiltersParamsWithoutSearch } from '@/app/types/filters';

type MobileFiltersProps = {
  filters: FiltersParamsWithoutSearch;
  sports: Sport[];
};

export function MobileFilters({ sports, filters }: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleCategoryChange,
    handleSportChange,
    handleSortByChange,
    handleDirectionChange,
  } = useFiltersFunctions();

  const { sportCode, category, sort, dir } = filters;

  function closeAfter<T, R>(callback: (params: T) => R) {
    return (params: T) => {
      callback(params);
      setIsOpen(false);
    };
  }

  return (
    <div className='w-full flex justify-end md:hidden'>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className='w-16 group bg-yellow-500 border-2 border-black cursor-pointer'>
            <GoFilter className='size-6 text-black group-hover:text-white' />
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className='p-4 flex flex-col gap-4'
          aria-describedby={undefined}>
          <DrawerTitle className='hidden'>Filtros</DrawerTitle>

          <CategoriesFilter
            category={category}
            onCategoryChange={closeAfter(handleCategoryChange)}
          />
          <SportsFilter
            sportCode={sportCode}
            sports={sports}
            onSportChange={closeAfter(handleSportChange)}
          />
          <SortBy
            sort={sort}
            dir={dir}
            onSortByChange={closeAfter(handleSortByChange)}
            onDirectionChange={closeAfter(handleDirectionChange)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
