import type { Middleware } from "openapi-fetch";

export const middleware: Middleware = {
  async onRequest({ request, options: _ }) {
    return request;
  },
};
