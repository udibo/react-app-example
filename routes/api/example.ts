import { Router } from "x/oak/mod.ts";

export default new Router()
  .get("/", ({ response }) => {
    response.body = { message: "Hello world!" };
  });
