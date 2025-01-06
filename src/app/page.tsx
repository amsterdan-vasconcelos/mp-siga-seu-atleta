import { Suspense } from 'react';
import { AthletesList } from './_components/athletes-list';

export default async function Home() {
  return (
    <main className='p-4 flex flex-col gap-10'>
      <Suspense>
        <AthletesList />
      </Suspense>
    </main>
  );
}
