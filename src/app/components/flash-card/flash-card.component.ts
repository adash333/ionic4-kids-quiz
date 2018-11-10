import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  @Input('isFlipped') flipCard: boolean;

  constructor() { }

  ngOnInit() {
  }

}
