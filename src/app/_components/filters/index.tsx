import { SearchFilter } from './components/search-filter';
import { DesktopFilters } from './components/desktop';
import { findSports } from '@/lib/sports';
import { MobileFilters } from './components/mobile';
import { FiltersParams } from '@/app/types/filters';

type FiltersProps = {
  filters: FiltersParams;
};

export async function Filters({ filters }: FiltersProps) {
  const { search, ...restFilters } = filters;

  const sports = await findSports();

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <SearchFilter defaultValue={search} />
      <MobileFilters filters={restFilters} sports={sports} />
      <DesktopFilters filters={restFilters} sports={sports} />
    </div>
  );
}
