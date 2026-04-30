import { Router } from "express";
import { passportAuthenticateJwt } from "../config/passport.config";
import { sendMessageController } from "../contollers/message.controller";
import { createChatController, getSingleChatController, getUserChatsController } from "../contollers/chat.controller";


const chatRoutes = Router()
  .use(passportAuthenticateJwt)
  .post("/create", createChatController)
  .post("/message/send", sendMessageController)
  .get("/all", getUserChatsController)
  .get("/:id", getSingleChatController);

export default chatRoutes;