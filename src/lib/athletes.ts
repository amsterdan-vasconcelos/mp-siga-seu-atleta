import prisma from './prisma';

import { Athlete } from '@prisma/client';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

export async function findAthletes() {
  const athletes = await prisma.athlete.findMany({
    take: 50,
    orderBy: { instagramFollowersCount: 'desc' },
    include: { sport: { select: { name: true } } },
  });

  return athletes;
}
