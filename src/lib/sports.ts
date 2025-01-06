import prisma from './prisma';

export async function findSports() {
  const sports = await prisma.sport.findMany();

  return sports;
}
