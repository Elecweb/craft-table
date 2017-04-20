export class CFColumn{
    private id:string;
    private value:string;
    constructor(id:string,value:string){
        this.id = id;
        this.value = value;
    }
    getId():string{
        return this.id;
    }

    setId(value:string):void{
        this.value = value;
    }

    getValue():string{
        return this.value;
    }

    setValue(value:string):void{
        this.value = value;
    }
}