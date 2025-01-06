import prisma from './prisma';

export async function findAthletes() {
  const athletes = await prisma.athlete.findMany();

  return athletes;
}
