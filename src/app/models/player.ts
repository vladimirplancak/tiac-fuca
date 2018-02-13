export class Player {
    public id : number;
    public name : string;
    public imgUrl : string;

    static new(name: string, imgUrl: string) : Player{
        var newPalyer = new Player();

        newPalyer.name = name;
        newPalyer.imgUrl = imgUrl;

        return newPalyer;
    }
}
