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
  search?: string;
  category?: 'olympic' | 'paralympic';
  sportCode?: string;
  sort?: 'followers' | 'name';
  dir?: 'desc' | 'asc';
};

function getOrderBy(
  sort: FindAthletesParams['sort'],
  dir: FindAthletesParams['dir'],
) {
  if (sort === 'name') return { instagramName: dir || 'desc' };

  return { instagramFollowersCount: dir || 'desc' };
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  search,
  category,
  sportCode,
  sort,
  dir,
}: FindAthletesParams) {
  const isParalympic = category ? category === 'paralympic' : undefined;

  const athletes = await prisma.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: { select: { name: true } } },
    where: {
      AND: [
        { instagramName: { contains: search } },
        { paralympic: isParalympic },
        { sport: { code: sportCode } },
      ],
    },
    orderBy: getOrderBy(sort, dir),
  });

  return athletes;
}
