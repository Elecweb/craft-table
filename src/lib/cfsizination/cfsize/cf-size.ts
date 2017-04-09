export class CFSize{
    label:String | number;
    value:String | number;

    constructor(label:String | number,value:String | number){
        this.label = label;
        this.value = value;
    }

    setLabel(label:String):void{
        this.label = label;
    }

    setValue(value:String):void{
        this.value = value;
    }

    getLabel():String | number{
        return this.label;
    }

    getValue():String | number{
        return this.value;
    }
}