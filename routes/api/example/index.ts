import { Router } from "@udibo/react-app/server";

import type { AppState } from "/state.ts";

export default new Router<AppState>()
  .get("/", (context) => {
    const { response } = context;
    response.body = { message: "Hello, world!" };
  });
