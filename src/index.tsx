import { serve, file } from "bun";
import { routes } from "./_backend/api/routes";
import { errorHandler } from "./_backend/api/errorHandler";
import { startEventScheduler } from "./_backend/jobs/scheduler";

import index from "./_frontend/index.html";

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