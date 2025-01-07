import prisma from './prisma';

import { Sport as S } from '@prisma/client';

export type Sport = S;

export async function findSports() {
  const sports = await prisma.sport.findMany();

  return sports;
}
