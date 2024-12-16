// src/mocks.js
// 1. Import the library.
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  http.get("https://github.com/octocat", ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: "Mocked response",
      },
      {
        status: 202,
        statusText: "Mocked status",
      }
    );
  }),
  // Handle POST requests.
  http.post(`https://github.com/octocat`, async ({ request }) => {
    // const body = await request.json(); // Parse the JSON body of the request
    return HttpResponse.json(
      {
        message: "Mocked POST response",
        received: "hello", // Echo the received body in the response
      },
      {
        status: 201,
        statusText: "Created",
      }
    );
  })
);

// 3. Start request interception by starting the Service Worker.
await worker.start();
