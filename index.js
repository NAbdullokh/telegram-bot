const TelegramApi = require("node-telegram-bot-api");

const API = "5405389601:AAEoaq93h8YMgCi5SOillbL98TTXlO1ngMU";

const bot = new TelegramApi(API, { polling: true });

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `Assalomu aleykum ${msg.from.first_name}. Bizning parot botimizga xush kelibsiz`
    );
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Driknks 🍷" }, { text: "Dishes 🍞" }],
          [{ text: "Fast-Food 🍔" }, { text: "Hot-Drinks ☕️" }],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === "Driknks 🍷") {
    await bot.sendPhoto(
      chatId,
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg"
    );
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Cola 🥤" }, { text: "Pepsi 🥤" }],
          [{ text: "Fanta 🥤" }, { text: "Moxito 🥤" }],
          [{ text: "Sprite 🥤" }, { text: "Suv 🥤" }],
          [{ text: "Back to main 🔙" }],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === "Dishes 🍞") {
    await bot.sendPhoto(
      chatId,
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg"
    );
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Shashlik 🥓" }, { text: "Osh 🥓" }],
          [{ text: "Norin 🥓" }, { text: "Somsa 🥓" }],
          [{ text: "Back to main 🔙" }],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === "Fast-Food 🍔") {
    await bot.sendPhoto(
      chatId,
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg"
    );
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Burger 🍔" }, { text: "Fri 🍔" }],
          [{ text: "Donar 🍔" }, { text: "Hot-Dog 🍔" }],
          [{ text: "Lavash 🍔" }],
          [{ text: "Back to main 🔙" }],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === "Hot-Drinks ☕️") {
    await bot.sendPhoto(
      chatId,
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg"
    );
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Coffee 🥤" }, { text: "Tea 🥤" }],
          [{ text: "Back to main 🔙" }],
        ],

        resize_keyboard: true,
      },
    });
  }

  if (text === "Back to main 🔙") {
    await bot.sendMessage(chatId, "Quyidagilardan biri tanlang: 🔽", {
      reply_markup: {
        keyboard: [
          [{ text: "Driknks 🍷" }, { text: "Dishes 🍞" }],
          [{ text: "Fast-Food 🍔" }, { text: "Hot-Drinks ☕️" }],
        ],
        resize_keyboard: true,
      },
    });
  }
});
