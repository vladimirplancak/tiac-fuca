import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { CustomTimer } from './timer';
import { Subscription } from 'rxjs';

const alarmSrc = "../../../assets/alarm1.mp3";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private _alarm = new Audio();
  private _timer: CustomTimer = null;
  private _alarmIsRunning = false;
  private _runAlarm = false;
  private finishedSubscription: Subscription = null;
  private tickSubscription: Subscription = null;
  private _timeToSet = 360;

  public currentTime = "0:00";

  public get timeToSet(){
    return this._timeToSet / 60;
  }

  public set timeToSet(value){
    this._timeToSet = value * 60;
  }

  constructor() {
    this._alarm.src = alarmSrc;
    this._alarm.load();
    this._alarm.addEventListener("ended", () => {
      this._alarmIsRunning = false;
    })
   }
   private playAudio() {
    this._alarm.play();
  }

  public inputChanged(){

  }

  public tStart() {
    this.currentTime = "0:00";
    this.tStop();
    this._runAlarm = true;
    this._timer = new CustomTimer(this._timeToSet);

    this.tickSubscription = this._timer.tick.skip(1).subscribe(it => {
      this.currentTime = this._timer.currentTime;
    });

    this.finishedSubscription = this._timer.finished.skip(1).subscribe(it => {
      this.playAudio();
    });
  }

  public tRestart() {
    if (!isNull(this.finishedSubscription)) {
      this.finishedSubscription.unsubscribe();
    }
    if (!isNull(this.tickSubscription)) {
      this.tickSubscription.unsubscribe();
    }
    this.tStart();
  }

  public tStop() {
    this._alarm.pause();
    this._alarm.currentTime = 0;
    this._runAlarm = false;
    if (!isNull(this.finishedSubscription)) {
      this.finishedSubscription.unsubscribe()
    }
    if (!isNull(this.tickSubscription)) {
      this.tickSubscription.unsubscribe();
    }
    this._timer = null;
  }
  ngOnInit() {
  }

}
