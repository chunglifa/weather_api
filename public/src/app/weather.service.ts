import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }


  bobFunction() {
    console.log('GET SEATTLE FUNCTION');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=98114,us&APPID=e0312c2dea756ace9a7002c130aab1cb');
  }
  getCity(zip) {
    console.log('Getting City', zip);
    const city = this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=e0312c2dea756ace9a7002c130aab1cb');
    console.log('This is your city data', city);
    return city;
  }

}

