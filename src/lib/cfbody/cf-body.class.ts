import { CFRow } from './../cfrow/cf-row.class';
export class CFBody{


    private rows:Array<CFRow> = [];
    constructor(rows:Array<CFRow>){
        this.rows = rows;
    }
    add(row:CFRow){
        this.rows.push(row);
    }
    setRow(rows:CFRow[]):void{
        this.rows = rows;
    }

    getRows():Array<CFRow>{
        return this.rows;
    }
}