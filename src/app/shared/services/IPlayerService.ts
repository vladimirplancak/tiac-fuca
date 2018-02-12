import { Observable } from "rxjs/Observable";

export interface IPlayerService {
     getAll(): Observable<String[]>;
}
