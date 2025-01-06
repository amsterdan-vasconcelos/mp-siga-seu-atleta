import prisma from './prisma';

import { Athlete } from '@prisma/client';

export type AthleteType = Athlete;

export async function findAthletes() {
  const athletes = await prisma.athlete.findMany({ take: 50 });

  return athletes;
}
