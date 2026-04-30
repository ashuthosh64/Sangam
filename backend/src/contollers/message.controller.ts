import { Request, Response } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { sendMessageService } from "../services/message.service";
import { sendMessageSchema } from "../validators/message.validator";
import { asyncHandler } from "../middlewares/asyncHandler.middlware";


export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body = sendMessageSchema.parse(req.body);

    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Message sent successfully",
      ...result,
    });
  }
);