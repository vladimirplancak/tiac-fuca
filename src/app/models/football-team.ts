import { Player } from './player';
import { SideColor } from "../enums/side-color.enum";

export class FootballTeam {

    constructor(
        public players: Player[],
        public color: SideColor
    ) { }
    
}
