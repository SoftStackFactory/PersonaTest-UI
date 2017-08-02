import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {
  @Output() answerSelected = new EventEmitter();
  @ViewChild('f') sliderForm: NgForm;

  constructor() {
    console.log('Hello SliderComponent Component');
  }
  selectAnswer(form: NgForm) {
    this.answerSelected.emit(form);
  }


}
