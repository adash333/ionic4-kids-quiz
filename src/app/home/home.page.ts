import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  @ViewChild('slides') slides: any;

  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(
    private router: Router, 
    public dataService: DataService
  ) {

  }

  ngOnInit() {

  }

  selectAnswer(){
    this.flashCardFlipped = true;
    // this.router.navigateByUrl('/home');
  }
 
}