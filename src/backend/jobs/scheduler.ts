import { syncEventsOnce } from "./webling/syncWeblingEvents";
import { CronJob } from 'cron';

export function startEventScheduler(
  pattern = Bun.env.WEBLING_CRON ?? "0 8 * * *"   // per‐minute
) {
  console.log("🔧 startEventScheduler called with cron_pattern =", pattern);

  const job = CronJob.from({
    cronTime: pattern,
    onTick: function () {
      console.log("✅ cron fired at", new Date().toLocaleTimeString());
      syncEventsOnce();
    },
    start: true,
    timeZone: 'Europe/Zurich'
  });

}
