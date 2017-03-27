import { Type } from './../core/type.enum';
export interface Ihead{
    id:String
    type?:Type
    label:String
}
export class CFHead{
    private type:Type;
    private id:String;
    private label:String;

    constructor(type:Type,id:String,label:String){
        this.label = label;
        this.id = id;
        this.type = type;
    }

    getType(){
        return this.type;
    }

    setType(type:Type){
        this.type = type;
    }

    getId():String{
        return this.id;
    }

    setId(id:String):void{
        this.id = id;
    }

    getLabel():String{
        return this.label;       
    }

    setLabel(label:String):void{
        this.label = label;
    }

}