import { Injectable } from '@angular/core';
import { IPlayerService } from './IPlayerService';
import { Observable } from 'rxjs';
import * as _ from 'lodash'

const players : String[] = ["Mita", "Vlada"]

@Injectable()
export class PlayersFirebaseService implements IPlayerService{

  constructor() { }

  public getAll(): Observable<String[]> {
    //To avoide reference.
    return Observable.of(_.clone(players));
  }

}
