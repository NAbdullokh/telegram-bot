const TelegramApi = require("node-telegram-bot-api");

const API = "5405389601:AAEoaq93h8YMgCi5SOillbL98TTXlO1ngMU";

const bot = new TelegramApi(API, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "Boshlangich uchrashuv" },
  { command: "/info", description: "Siz haqingizda malumot" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    await bot.sendSticker(
      chatId,
      "https://cdn.tlgrm.app/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/1.webp"
    );
    await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`);
    await bot.sendMessage(chatId, "Bot info", {
      reply_markup: {
        keyboard: [[{ text: "Hello", request_contact: true }, { text: "Bye" }]],
      },
    });
  }

  if (text === "Hello") {
    await bot.sendMessage(chatId, `Hello ${msg.from.first_name}`);
  }
  if (text === "Bye") {
    await bot.sendMessage(chatId, `Bye ${msg.from.first_name}`);
  }

  console.log(text);
});
