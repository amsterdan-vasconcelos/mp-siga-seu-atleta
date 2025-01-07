import { Suspense } from 'react';

import { AthletesList } from './_components/athletes-list';
import { Filters } from './_components/filters';
import { AthletesListSkeleton } from './_components/athlete-list-skeleton';
import { findSports } from '@/lib/sports';

type HomeProps = {
  searchParams: Promise<{
    q?: string;
    category?: 'olympic' | 'paralympic';
    sport?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q: search, category, sport: sportCode } = await searchParams;

  const filters = { search, category, sportCode };

  const sports = await findSports();

  return (
    <main className='p-4 flex flex-col gap-10'>
      <Filters filters={filters} sports={sports} />
      <Suspense
        key={'' + search + category + sportCode}
        fallback={<AthletesListSkeleton />}>
        <AthletesList filters={filters} />
      </Suspense>
    </main>
  );
}
