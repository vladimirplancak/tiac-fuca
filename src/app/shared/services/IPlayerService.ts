import { Player } from './../../models/player';
import { Observable } from "rxjs/Observable";

export interface IPlayerService {
    getAll(): Observable<Player[]>;
    removePlayer(player: Player): void
    addPlayer(player: Player) : Observable<Player>;
}
