export class WeatherForecast {
    constructor(init?: Partial<WeatherForecast>)
    {
      Object.assign(this, init);
    }
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  }
  