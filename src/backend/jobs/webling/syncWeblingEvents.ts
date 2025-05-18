import { fetchEvents } from "src/backend/api/controllers/webling";
import { prisma } from "src/backend/db/client";

export async function syncEventsOnce() {
  const list = await fetchEvents();

  await prisma.$transaction(
    list.map((ev) =>
      prisma.event.upsert({
        where: { id: ev.id },
        create: {
          id: ev.id,
          title: ev.properties.title,
          begins: new Date(ev.properties.begin),
          ends: new Date(ev.properties.end),
          description: ev.properties.description ?? null,
        },
        update: {
          title: ev.properties.title,
          begins: new Date(ev.properties.begin),
          ends: new Date(ev.properties.end),
          description: ev.properties.description ?? null,
        },
      }),
    ),
  );

  console.log(`[Webling] synced ${list.length} events`);
}
