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

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questions: any;
  //flashCardFlipped: boolean = false;

  constructor(
    private router: Router, 
    public dataService: DataService
  ) {
  }

  ngOnInit() {
    this.slides.lockSwipes(true);
    this.dataService.load().then((data) => {
      data.map((question) => {
        let originalOrder = question.answers;
        question.answers = this.randomizeAnswers(originalOrder);
        return question;
      });    
      this.questions = data;
    });
  }

  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  /*
  selectAnswer(){
    this.flashCardFlipped = true;
    // this.router.navigateByUrl('/home');
  }
  */

  selectAnswer(answer, question){
    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    
    if(answer.correct){
        this.score++;
    }

    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 3000);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {
    for (let i = rawAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = rawAnswers[i];
        rawAnswers[i] = rawAnswers[j];
        rawAnswers[j] = temp;
    }
    return rawAnswers;
  }

  restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
  }
 
}