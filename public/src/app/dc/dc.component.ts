import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
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
    this.getCity(22102);
  }
getCity(zip) {
  console.log('get city with zip =', zip);
  const observable = this._weatherService.getCity(zip);
  observable.subscribe(response => {
    this.weather = response;
    console.log('your San Jose weather is', this.weather);
    this.temp_min = ((this.weather.main.temp_min * (9 / 5) - 459));
    this.temp_max = ((this.weather.main.temp_max * (9 / 5) - 459));
    this.temp = ((this.weather.main.temp * (9 / 5) - 459));
    this.status = this.weather.weather[0].description;
    this.humidity = this.weather.main.humidity;
  });
  }
}
