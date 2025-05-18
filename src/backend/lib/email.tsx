// ⬅️  new file:  src/_backend/lib/email.ts
import { Resend } from "resend";

const resend = new Resend(Bun.env.RESEND_API_KEY!);
import SyncSuccessEmail from "./emailTemplates/SyncSuccessEmail";

export async function notifySyncOK(eventCount: number) {
  const runAt = new Date().toISOString();

  await resend.emails.send({
    from: Bun.env.MAIL_FROM!,
    to: Bun.env.MAIL_TO!.split(","),
    subject: `Webling events synced (${eventCount})`,
    react: <SyncSuccessEmail count={eventCount} runAt={runAt} />,
    text: `Successfully synced ${eventCount} events at ${runAt}.`, // fallback
  });
}
