import { serve, file } from "bun";
import { routes } from "./backend/api/routes";
import { errorHandler } from "./backend/api/errorHandler";
import { startEventScheduler } from "./backend/jobs/scheduler";

import index from "@/frontend/index.html";

const server = serve({
  routes:{
    "/*": index,

    ...routes,
  },
  error: errorHandler,
  development:
    process.env.NODE_ENV !== "production" && {
      hmr: true,
      console: true,
    },
});

console.log(`🚀 Server running at ${server.url}`);

startEventScheduler();            