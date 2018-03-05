import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestDataProvider {
  apiUrl_forecast:any =
    'http://api.openweathermap.org/data/2.5/forecast/daily?id=7287650&units=metric&cnt=7&APPID=' +
    '4ce8104475f246a537c2408411acbcb3';
  apiUrl_current:any =
    'http://api.openweathermap.org/data/2.5/weather?id=7287650&units=metric&cnt=7&APPID=' +
    '4ce8104475f246a537c2408411acbcb3';

  constructor(public http: HttpClient) {
    console.log('Hello RestDataProvider Provider');
  }

  getForecastData() {
    return new Promise(
      resolve => {
        this.http.get(this.apiUrl_forecast).subscribe(
          data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
      });
  }

  getCurrent(){
    return new Promise(
      resolve => {
        this.http.get(this.apiUrl_current).subscribe(
          data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
      });
  }

}
