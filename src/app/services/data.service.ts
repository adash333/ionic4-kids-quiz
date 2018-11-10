import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  load() {

    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/questions.json').subscribe(data => {
        this.data = data["questions"];
        resolve(this.data);
      });
    });

  }
}