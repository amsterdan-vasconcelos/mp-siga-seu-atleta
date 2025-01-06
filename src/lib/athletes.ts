'use server';

import { ATHLETES_PER_PAGE } from './contants';
import prisma from './prisma';

import { Athlete } from '@prisma/client';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

type FindAthletesParams = {
  offset?: number;
  limit?: number;
};

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
}: FindAthletesParams) {
  const athletes = await prisma.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: { select: { name: true } } },
  });

  return athletes;
}
