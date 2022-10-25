import { HttpClient } from '@aurelia/fetch-client';
import { WeatherForecast } from "../models/weather-forecast";

export class FetchData {
  public baseUrl: string = "";
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient,) {
    this.getProducts().then(result => {      
        this.forecasts = result;      
    });
  }

  async getProducts() {
    const request = await this.http.fetch(`/api/WeatherForecast`);
    const response = await request.json();
    
    return response;
  }


}
