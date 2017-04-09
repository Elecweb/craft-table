export class CFPage{
    label:String;
    value:String;
    isCurrent:boolean;
    isFirst:boolean;
    isLast:boolean;
    constructor(label:String,value:String){
        this.label = label;
        this.value = value;
        this.isCurrent = false;
    }

    getLabel():String{
        return this.label;
    }

    getValue():String{
        return this.value;
    }

    setLabel(label:String){
        this.label = label;
    }

    setValue(value:String){
        this.value = value;
    }

    setCurrent(isCurrent:boolean){
        this.isCurrent = isCurrent;
    }

    setFirst(isFirst:boolean){
        this.isFirst = isFirst;
    }

    setLast(isLast:boolean){
        this.isLast = isLast;
    }
}