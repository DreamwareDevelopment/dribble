import { EventSchemas, Inngest } from "inngest";
import { GoogleAuth } from "@prisma/client";

export enum InngestEvent {
  GoogleCalendarSync = "calendar/google/sync",
}

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "goaltime",
  schemas: new EventSchemas().fromRecord<{
    [InngestEvent.GoogleCalendarSync]: {
      data: GoogleAuth;
    };
  }>()
});
