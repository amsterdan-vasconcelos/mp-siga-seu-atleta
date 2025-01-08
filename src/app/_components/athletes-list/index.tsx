import { findAthletes } from '@/lib/athletes';
import { AthletesListClient } from './client';
import { FiltersParams } from '@/app/types/filters';

type AthletesListProps = {
  filters: FiltersParams;
};

export async function AthletesList({ filters }: AthletesListProps) {
  const athletes = await findAthletes({ ...filters });

  if (!athletes.length)
    return (
      <h2 className='text-xl'>
        Não existem atletas para os filtros selecionados.
      </h2>
    );

  return <AthletesListClient initialData={athletes} filters={filters} />;
}
