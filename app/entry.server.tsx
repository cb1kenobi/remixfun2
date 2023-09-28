import { RemixServer } from '@remix-run/react';
import { handleRequest } from '@vercel/remix';
import type { AppLoadContext, EntryContext } from "@remix-run/node";

export default function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  _loadContext: AppLoadContext
) {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}
