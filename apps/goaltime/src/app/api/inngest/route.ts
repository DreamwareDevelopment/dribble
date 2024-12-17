import { serve } from "inngest/next";
import { inngest, syncGoogleCalendar } from "@/server-utils/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncGoogleCalendar],
});
