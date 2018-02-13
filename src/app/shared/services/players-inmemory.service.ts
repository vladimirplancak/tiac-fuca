import { Injectable } from '@angular/core';
import { PlayerService } from './PlayerService';
import { Observable, BehaviorSubject } from 'rxjs';
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
export class PlayersInmemoryService implements PlayerService {
  private _players: BehaviorSubject<Player[]> = null;

  constructor() {
    this._players = new BehaviorSubject<Player[]>(players);
    this._players.next(players);
  }

  get players(): Observable<Player[]> {
    return this._players.asObservable();
  }

  public addPlayer(player: Player): Observable<Player> {
    player.id = players.length + 1;
    players.push(player);

    this._players.next(players);

    return Observable.of(player);
  }

  public deletePlayer(player: Player): Observable<void> {
    _.remove(players, it => it.id === player.id);

    this._players.next(players);

    return Observable.of();
  }

}
