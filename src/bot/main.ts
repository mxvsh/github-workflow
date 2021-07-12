import { Context, Telegraf } from "telegraf";

const Start = (ctx: Context) => {
  ctx.reply("Working");
};

export class GithubTest {
  token: string;
  constructor(token: string) {
    this.token = token;
    this.start();
  }

  start() {
    const bot = new Telegraf(this.token);
    bot.start(Start);
    bot.launch();
  }
}
