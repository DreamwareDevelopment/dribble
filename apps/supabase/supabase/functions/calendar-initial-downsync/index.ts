/* eslint-disable @typescript-eslint/no-explicit-any */
// deno-lint-ignore-file no-explicit-any

// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import { BeforeUnloadEvent } from "jsr:@supabase/functions-js/edge-runtime.d.ts"

declare const EdgeRuntime: {
  waitUntil: (promise: Promise<any>) => void;
};

async function initialDownsync(body: any) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Function request body', JSON.stringify(body, null, 2))
}

addEventListener('beforeunload', (ev: BeforeUnloadEvent) => {
  console.log('Function will be shutdown due to', ev.detail?.reason)
  // save state or log the current progress
})

Deno.serve(async (req: Request) => {
  // Mark the longRunningTask's returned promise as a background task.
  // note: we are not using await because we don't want it to block.
  console.log('Starting initial downsync')
  const body = await req.json()
  EdgeRuntime.waitUntil(initialDownsync(body))
  return new Response('ok')
})
