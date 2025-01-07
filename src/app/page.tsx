import { Suspense } from 'react';

import { AthletesList } from './_components/athletes-list';
import { Filters } from './_components/filters';
import { AthletesListSkeleton } from './_components/athlete-list-skeleton';

type HomeProps = {
  searchParams: Promise<{
    q?: string;
    category?: 'olympic' | 'paralympic';
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q: search = '', category } = await searchParams;

  const filters = { search, category };

  return (
    <main className='p-4 flex flex-col gap-10'>
      <Filters filters={filters} />
      <Suspense key={search + category} fallback={<AthletesListSkeleton />}>
        <AthletesList filters={filters} />
      </Suspense>
    </main>
  );
}
