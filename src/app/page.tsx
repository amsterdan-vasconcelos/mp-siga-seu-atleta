import { Suspense } from 'react';

import { AthletesList } from './_components/athletes-list';
import { Filters } from './_components/filters';
import { AthletesListSkeleton } from './_components/athlete-list-skeleton';
import { FiltersParams } from './types/filters';

type HomeProps = {
  searchParams: Promise<FiltersParams>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { search, category, sportCode, sort, dir } = await searchParams;

  const filters = { search, category, sportCode, sort, dir };

  return (
    <main className='p-4 flex flex-col gap-10'>
      <Filters filters={filters} />
      <Suspense
        key={'' + search + category + sportCode + sort + dir}
        fallback={<AthletesListSkeleton />}>
        <AthletesList filters={filters} />
      </Suspense>
    </main>
  );
}
