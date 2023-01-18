import "dotenv/config";
import { Telegraf } from "telegraf";

const telegramToken = process.env.BOT_TELEGRAM_TOKEN;

const telegramBot = new Telegraf(telegramToken);

telegramBot.start((ctx) => {
  ctx.reply("🔥🔥🔥 Seja bem vindo 🔥🔥🔥");
});

await telegramBot.launch();

// Finalizando processos do Telegram
process.once("SIGINT", () => telegramBot.stop("SIGINT"));
process.once("SIGTERM", () => telegramBot.stop("SIGTERM"));
