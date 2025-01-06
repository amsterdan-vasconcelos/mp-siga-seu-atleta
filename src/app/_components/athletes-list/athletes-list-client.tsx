'use client';

import { AthleteType } from '@/lib/athletes';

export function AthletesListClient({
  initialData,
}: {
  initialData: AthleteType[];
}) {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {initialData.map((athlete) => (
          <p key={athlete.id}>{athlete.name}</p>
        ))}
      </div>
    </>
  );
}
