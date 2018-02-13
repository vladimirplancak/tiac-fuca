import { Injectable } from '@angular/core';
import { IPlayerService } from './IPlayerService';
import { Observable } from 'rxjs';
import * as _ from 'lodash'
import { Player } from '../../models/player';

const players : Player[] = [
  {id: 1, name: "", imgUrl: ""}
]

@Injectable()
export class PlayersFirebaseService implements IPlayerService{

  constructor() { }

  public getAll(): Observable<Player[]> {
    //To avoide reference.
    return Observable.of(_.clone(players));
  }

  public removePlayer(player: Player): void {
    throw new Error("Method not implemented.");
  }

  public addPlayer(player: Player): Observable<Player> {
    throw new Error("Method not implemented.");
  }

}
