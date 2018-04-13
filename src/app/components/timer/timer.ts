import { BehaviorSubject, Observable } from 'rxjs';
import { isNull } from 'util';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
export class CustomTimer{
    private _currentSeconds = 0;
    private _seconds = 0;
    private _tick: BehaviorSubject<any> = new BehaviorSubject(0);
    private _finished: BehaviorSubject<any> = new BehaviorSubject(0);
    private _timer = null;
    private _timerSubscription = null;

    public get currentTime(){

        // Hours, minutes and seconds
        var hrs = ~~(this._currentSeconds / 3600);
        var mins = ~~((this._currentSeconds % 3600) / 60);
        var secs = this._currentSeconds % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;

        return ret;
    }

    public get tick(){
        return this._tick;
    }

    public get finished(){
        return this._finished;
    }

    constructor(seconds) {
        this._seconds = seconds;
        this._timer = TimerObservable.create(0, 1000);

        this._timerSubscription = this._timer.subscribe(it => {
            if(it !== 0){
                if(this._seconds > it){
                    this._tick.next(it);
                }
                //Finished
                else {
                    this._tick.next(it);
                    this._finished.next(it);
                    this._timerSubscription.unsubscribe();
                }
            }
            this._currentSeconds++;
        })
    }


}