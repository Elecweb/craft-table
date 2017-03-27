import { CFColumn } from './../cfcolumn/cf-column.class';
export class CFRow{
    columns:Array<CFColumn> = [];
    constructor(columns:Array<CFColumn>){
        this.columns = columns;
    }
    add(column:CFColumn):void{
        this.columns.push(column);
    }

    setColumns(columns:Array<CFColumn>){
        this.columns = columns;
    }
    get(id:String):CFColumn{
        return this.columns.filter((cfcolumn)=>{ return cfcolumn.getId() === id })[0];
    }
}