import { Api } from './services/api';

import config from './config.json';

export class MyApp {
  private prices = {};

  constructor(private api: Api) {

  }

  async binding() {
    this.prices = await this.api.getPrices(config.coins);

    this.priceUpdate();
  }

  priceUpdate() {
    setInterval(async () => {
        this.prices = await this.api.getPrices(config.coins);
    }, 1000);
}
}