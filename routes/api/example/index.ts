import { Router } from "@udibo/react-app/server";

export default new Router()
  .get("/", (context) => {
    const { response } = context;
    response.body = { message: "Hello, world!" };
  });
