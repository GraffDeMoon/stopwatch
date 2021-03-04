import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  seconds: any  = '00';
  minutes: any = '00';
  hours: any = '00';

  startBtm: Boolean = true;
  stopBtm: Boolean = false;
  waiteBtm: Boolean = false;
  resetBtm: Boolean = false;

  counter = 0;
  timerRef: any;
  timerDoubleClick: any;

  startTimer() {
    this.startBtm = false;
    this.stopBtm = true;
    this.waiteBtm = true;
    this.resetBtm = true;

    this.timerRef = setInterval(() => {
      this.counter++;

      //milliseconds
      this.seconds = this.counter % 60;
      //minutes
      this.minutes = Math.trunc(this.counter / 60) % 60;
      //hours
      this.hours = Math.trunc(this.counter / (60 * 60)) % 60;

      //minutes
      if (this.seconds < 10) {
        this.seconds = '0' + this.seconds;
      } else {
        this.seconds = '' + this.seconds;
      }
      //seconds
      if (this.minutes < 10) {
        this.minutes = '0' + this.minutes;
      } else {
        this.minutes = '' + this.minutes;
      }
      //hours
      if (this.hours < 10) {
        this.hours = '0' + this.hours;
      } else {
        this.hours = '' + this.hours;
      }
    }, 1000);
  }

  stopTimer() {
    this.startBtm = true;
    this.stopBtm = false;
    this.waiteBtm = false;
    this.resetBtm = false;

    this.defaultTimer();
  }

  waiteTimer() {
    if (this.timerDoubleClick) {
      this.startBtm = true;
      clearInterval(this.timerRef);
      this.timerDoubleClick = 0;
      return;
    };
    this.timerDoubleClick = setTimeout(() => {
      this.timerDoubleClick = 0;
    }, 300);
  }

  resetTimer() {
    this.startBtm = false;
    this.stopBtm = true;
    this.waiteBtm = true;
    this.resetBtm = true;

    this.defaultTimer();
    this.startTimer();
  }

  defaultTimer() {
    clearInterval(this.timerRef);
    this.counter = 0;
    this.seconds = '00';
    this.minutes = '00';
    this.hours = '00';
  }
}
