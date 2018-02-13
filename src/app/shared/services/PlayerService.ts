import { Player } from './../../models/player';
import { Observable } from "rxjs/Observable";

export interface PlayerService {
    // getAll(): Observable<Player[]>;
    // removePlayer(player: Player): void
    // addPlayer(player: Player) : Observable<Player>;
    readonly players: Observable<Player[]>;
    addPlayer(player: Player): Observable<Player>;
    deletePlayer(player: Player): Observable<void>;
}
