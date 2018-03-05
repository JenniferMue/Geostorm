import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestDataProvider} from "../../providers/rest-data/rest-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  background_mood: any;
  city: any;
  jenni: string;
  current_weather_all:any;
  current_weather:any;
  current_hours:any;
  description:any;
  sunrise:any;
  sunset:any;
  weather_data:any;
  weather_data_list:any;

  constructor(public navCtrl: NavController, public restProvider: RestDataProvider) {
    this.jenni = "jenni";
    this.getData();
    this.getCurrent();
    this.getCurrentHour();

    // when app is reopened call this
    document.addEventListener('resume', () => {
      this.getData();
      this.getCurrent();
      this.getCurrentHour();
    })

  }
    getData(){
    this.restProvider.getForecastData().then(data=>{
      this.weather_data = data;
      this.city = this.weather_data.city.name;
      this.weather_data_list = this.weather_data.list;
    });

    }
    getCurrent(){
    this.restProvider.getCurrent().then(data=>{
      this.current_weather_all = data;
      this.current_weather = this.current_weather_all.main.temp;
      this.description = this.current_weather_all.weather[0].main;
      this.sunrise = this.current_weather_all.sys.sunrise;
      this.sunset = this.current_weather_all.sys.sunset;
    });

    }
    getCurrentHour(){
      var d = new Date();
      this.current_hours = d.getHours();
      if (this.current_hours >= 8 && this.current_hours <= 18){
        this.background_mood="Sun.png";
      } else if (this.current_hours >= 19 && this.current_hours < 22) {
        this.background_mood="Moon.png";
      } else {
        this.background_mood = "Blood.png";
      }
    }

}
