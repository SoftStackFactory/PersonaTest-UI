import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {
  @Output() answerSelected = new EventEmitter();

  constructor() {
    console.log('Hello SliderComponent Component');
  }
  selectAnswer(form: NgForm) {
    this.answerSelected.emit(form);
  }


}
