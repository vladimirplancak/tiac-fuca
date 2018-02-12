import { Injectable } from '@angular/core';
import { IPlayerService } from './IPlayerService';
import { Observable } from 'rxjs';
import * as _ from 'lodash'

const players : String[] = ['Bane', 'Ceca', 'Robert', 'Mita', 'Vlada', 'Limun', 'Vaske'];

@Injectable()
export class PlayersInmemoryService implements IPlayerService{
  
  constructor() { }

  public getAll() : Observable<String[]>{
    //To avoide reference.
    return Observable.of(_.clone(players));
  }

}
