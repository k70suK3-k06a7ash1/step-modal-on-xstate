import createClient from "openapi-fetch";

import { middleware } from "@/client/middleware";

export const client = (() => {
  const client = createClient({
    cache: "no-cache",
  });
  client.use(middleware);
  return client;
})();
