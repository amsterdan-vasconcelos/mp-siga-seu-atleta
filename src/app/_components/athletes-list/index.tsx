import { findAthletes } from '@/lib/athletes';
import { AthletesListClient } from './athletes-list-client';

export async function AthletesList() {
  const athletes = await findAthletes();

  if (!athletes.length)
    return (
      <h2 className='text-xl'>
        Não existem atletas para os filtros selecionados.
      </h2>
    );

  return <AthletesListClient initialData={athletes} />;
}
