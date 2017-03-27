export class CFColumn{
    private id:String;
    private value:String;
    constructor(id:String,value:String){
        this.id = id;
        this.value = value;
    }
    getId():String{
        return this.id;
    }

    setId(value:String):void{
        this.value = value;
    }

    getValue():String{
        return this.value;
    }

    setValue(value:String):void{
        this.value = value;
    }
}