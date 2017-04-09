export class CFHeadDisplay{
    private where:number | string;
    private size:number;
    private pos:number;
    constructor(size:number,pos:number,where:number | string){
        this.size = size;
        this.pos = pos;
        this.where = where;
    }
    setWhere(where:number|string):void{
        this.where = where;
    }

    getWhere():number | string{
        return this.where;
    }

    setSize(size:number):void{
        this.size = size;
    }

    getSize():number{
        return this.size;
    }
}