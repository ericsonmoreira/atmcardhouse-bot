import { setWebhook } from "telebot-vercel";
import bot from "../src/bot";

const path = "api/telegram.js";

export default setWebhook({ bot, path, handleErrors: true });
