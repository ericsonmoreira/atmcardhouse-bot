import { Bot, webhookCallback } from "grammy";

const token = process.env.BOT_TELEGRAM_TOKEN;

if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token); 

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

export default webhookCallback(bot, "http");
