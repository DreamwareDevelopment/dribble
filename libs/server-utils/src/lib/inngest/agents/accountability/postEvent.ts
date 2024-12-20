import { getPrismaClient } from "../../../prisma/client";
import { inngest, InngestEvent } from "../../client";
// import { Logger } from "inngest/middleware/logger";

export const postEvent = inngest.createFunction(
  {
    id: 'post-event',
    concurrency: [{
      // global concurrency queue for this function,
      // limit to 5 concurrent syncs as per the free tier quota
      scope: "fn",
      key: `"post-event"`,
      limit: 5,
    }, {
      // virtual concurrency queue for this function,
      // only one sync per user at a time
      scope: "fn",
      key: "event.data.userId",
      limit: 1,
    }],
    retries: 1,
  },
  [{
    event: InngestEvent.PostEvent,
  }],
  async ({ step, event, logger }) => {
    const { userId } = event.data;
    const prisma = await getPrismaClient(userId);
  },
);
