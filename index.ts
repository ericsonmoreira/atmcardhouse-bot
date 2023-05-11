import { Bot } from "grammy";

const token = process.env.BOT_TELEGRAM_TOKEN;

if (!token) throw new Error("BOT_TOKEN is unset");

const webHook = process.env.WEBHOOK;

if (!webHook) throw new Error("WEBHOOK is unset");

const bot = new Bot(token);

bot.api.setWebhook(webHook);
