// src/routes.ts
import { syncEventsOnce } from "../jobs/webling/syncWeblingEvents";
import { helloName, helloRoot } from "./controllers/hello";
import { notFound } from "./controllers/notFound";

import { listEvents } from "./controllers/events";
import { ApiRoutes } from "@/_shared/routes.helper";


export const routes = {

  [ApiRoutes.HELLO]: {
    GET: helloRoot,
    PUT: helloRoot,
  },

  [ApiRoutes.HELLO_NAME]: helloName,

  [ApiRoutes.EVENTS]: { GET: listEvents },

  [ApiRoutes.ADMIN_SYNC_WEBLING]: {
    POST: async () => {
      await syncEventsOnce();
      return new Response("ok");
    },
  },

  [ApiRoutes.NOT_FOUND]: notFound,
};
