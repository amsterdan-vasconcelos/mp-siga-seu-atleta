import prisma from "@/lib/prisma";

export default async function Home() {
  const athletes = await prisma.athlete.findMany({ take: 50 });

  return (
    <div>
      <p>Olá</p>

      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>{athlete.name}</li>
        ))}
      </ul>
    </div>
  );
}
