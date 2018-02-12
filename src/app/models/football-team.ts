import { SideColor } from "../enums/side-color.enum";

export class FootballTeam {

    constructor(
        public players: string[],
        public color: SideColor
    ) { }
    
}
