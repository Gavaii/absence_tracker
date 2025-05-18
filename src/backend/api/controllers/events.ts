import { prisma } from "src/backend/db/client";


export async function listEvents() {
  const data = await prisma.event.findMany({
    orderBy: { begins: "asc" },           // oldest → newest
  });

  return Response.json(data);             // Bun helper; sets 200 + JSON header
}
