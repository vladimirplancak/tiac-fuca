import { Injectable } from '@angular/core';
import { IPlayerService } from './IPlayerService';
import { Observable } from 'rxjs';
import * as _ from 'lodash'
import { Player } from '../../models/player';

let players: Player[] = [
  { id: 1, name: "Bane", imgUrl: "" },
  { id: 2, name: "Vaske", imgUrl: "" },
  { id: 3, name: "Vlada", imgUrl: "" },
  { id: 4, name: "Mita", imgUrl: "" },
  { id: 5, name: "Robert", imgUrl: "" },
  { id: 6, name: "Ceca", imgUrl: "" },
  { id: 7, name: "Limun", imgUrl: "http://www.tiacgroup.com/wp-content/uploads/2015/06/limun.jpg" }
]

@Injectable()
export class PlayersInmemoryService implements IPlayerService {


  constructor() {
   }

   public addPlayer(player: Player): Observable<Player>{
    var maxId = _.max(_.map(players, it=> it.id));
    player.id = maxId + 1;
    players.push(player);

    return Observable.of(player);
   }

  public getAll(): Observable<Player[]> {
    //To avoide reference.
    return Observable.of(_.clone(players));;
  }

  public removePlayer(player: Player): void {
    _.remove(players, it => it.id === player.id);
  }

}
