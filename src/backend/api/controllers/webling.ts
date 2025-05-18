import { z } from "zod";

const BASE = Bun.env.WEBLING_BASE_URL!;
const APIKEY = Bun.env.WEBLING_API_KEY!;   // Header must be “apikey” :contentReference[oaicite:1]{index=1}

export const WeblingEvent = z.object({
  id: z.number(),
  properties: z.object({
    title: z.string(),
    begin: z.string(),   // “YYYY-MM-DD hh:mm:ss”
    end:   z.string(),
    description: z.string().nullish(),
  }),
});
export type WeblingEvent = z.infer<typeof WeblingEvent>;

// export async function fetchCalendars(): Promise<WeblingEvent[]> {
//   const r = await fetch(`${BASE}/calendar?format=full`, {
//     headers: { apikey: APIKEY, Accept: "application/json" },
//   });
//   if (!r.ok) {
//     const body = await r.text();              // Webling often explains the 401
//     console.error("Webling error", r.status, r.statusText, body);
//     throw new Error(`Webling ${r.status} ${r.statusText}`);
//   }
//     return WeblingEvent.array().parse(await r.json());
// }


export async function fetchEvents(): Promise<WeblingEvent[]> {

  const url = `${BASE}calendarevent?format=full`;

  const r = await fetch(url, {
    headers: { apikey: APIKEY, Accept: "application/json" },
    verbose: Bun.env.DEBUG_FETCH === "1",   // turn on with env var
  });
  if (!r.ok) {
    const body = await r.text();              // Webling often explains the 401
    console.error("Webling error", r.status, r.statusText, body);
    throw new Error(`Webling ${r.status} ${r.statusText}`);
  }
    return WeblingEvent.array().parse(await r.json());
}
