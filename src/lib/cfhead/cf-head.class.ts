import { Type } from './../core/type.enum';
import { CFHeadDisplay } from './../cfheaddisplay';
export interface Ihead{
    id:string
    type?:Type
    label:string,
    size?:number,
    pos?:number,
    where?:number | string
}
export class CFHead{
    private type:Type;
    private id:string;
    private label:string;
    private display:CFHeadDisplay;
    constructor(type:Type,id:string,label:string,size:number,pos:number,where:number | string){
        this.label = label;
        this.id = id;
        this.type = type;
        this.display = new CFHeadDisplay(size,pos,where);
    }

    getType(){
        return this.type;
    }

    setType(type:Type){
        this.type = type;
    }

    getId():string{
        return this.id;
    }

    setId(id:string):void{
        this.id = id;
    }

    getLabel():string{
        return this.label;       
    }

    setLabel(label:string):void{
        this.label = label;
    }

    getDisplay():CFHeadDisplay{
        return this.display;
    }
    
}