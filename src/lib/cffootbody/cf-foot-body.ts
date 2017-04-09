import { CFRow } from './../cfrow';
export class CFFootBody{
    private row:CFRow;
    constructor(row:CFRow){
        this.setRow(row);
    }
    setRow(row:CFRow):void{
        this.row = row;
    }

    getRow():CFRow{
        return this.row;
    }
}