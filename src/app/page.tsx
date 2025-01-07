import { Suspense } from 'react';
import { AthletesList } from './_components/athletes-list';
import { Filters } from './_components/filters';

type HomeProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q: search = '' } = await searchParams;

  const filters = { search };

  return (
    <main className='p-4 flex flex-col gap-10'>
      <Filters filters={filters} />
      <Suspense key={search} fallback={<p>Carregando...</p>}>
        <AthletesList filters={filters} />
      </Suspense>
    </main>
  );
}
