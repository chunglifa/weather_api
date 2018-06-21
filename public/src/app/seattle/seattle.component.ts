import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  temp_min: any;
  temp_max: any;
  temp: any;
  status: any;
  humidity: any;
  constructor(
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getThisCity();
  }
getThisCity() {
  const observable = this._weatherService.bobFunction();
  observable.subscribe(server_response => {
    this.weather = server_response;
    this.temp_min = Math.floor(((this.weather.main.temp_min * (9 / 5) - 459)));
    this.temp_max = Math.floor(((this.weather.main.temp_max * (9 / 5) - 459)));
    this.temp = Math.floor(((this.weather.main.temp * (9 / 5) - 459)));
    this.status = this.weather.weather[0].description;
    this.humidity = this.weather.main.humidity;
    console.log('your Seattle forecast is....', this.weather);

  });
}

}


