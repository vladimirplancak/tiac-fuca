import { Injectable } from '@angular/core';
import { PlayerService } from './PlayerService';
import { Observable } from 'rxjs';
import * as _ from 'lodash'
import { Player } from '../../models/player';

const players : Player[] = [
  {id: 1, name: "", imgUrl: ""}
]

@Injectable()
export class PlayersFirebaseService implements PlayerService{
  
  players: Observable<Player[]>;
  addPlayer(player: Player): Observable<Player> {
    throw new Error("Method not implemented.");
  }
  deletePlayer(player: Player): Observable<void> {
    throw new Error("Method not implemented.");
  }

  constructor() { }

}
