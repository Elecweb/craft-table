import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject,ReplaySubject,Observable } from 'rxjs/rx';
export class ICFTableDataServiceOption{
    size?:number | String;
    data?:Array<Object>;
    offset?:number = 0;
}
@Injectable()
export class CFTableDataService {
    private size:number = 10;
    private data:Array<Object> = [];
    private observer:any;
    private dataSubject:ReplaySubject<Boolean> = new ReplaySubject<Boolean>(1);
    private offset:number = 0;
    private total:number = 0;
    private showAll:boolean = false;
    constructor(options:ICFTableDataServiceOption) {
        this.data = options.data;
        if(options.size == "all"){
            this.showAll = true;
            this.size = this.data.length;
            this.offset = 0;
        }else{
             this.size = <number>options.size || this.size;
        }
       
        this.offset = options.offset || this.offset;
    }
    

    setOffset(offset:number){
        this.offset = offset;
        this.dataSubject.next(true);
    }

    getOffset():number{
        return this.offset;
    }

    setSize(size:number):void{
        this.size = size;
        this.dataSubject.next(true);
    }

    getSize():number{
        return this.size;
    }

    setData(data:Array<Object>){
        this.data = data;
        if(this.showAll){
            this.size = this.data.length;
            
        }
        this.dataSubject.next(true);
        
    }

    getData(offset:number,size:number):Array<Object> | Observable<Array<Object>>{
        this.setDataTotal(this.data.length);
        return this.data.slice(offset,offset + size);
    }

    genData():Array<Object> | Observable<Array<Object>>{
        return this.getData(this.offset,this.size);
    }
    setDataTotal(total:number):void{
        this.total = total;
        this.dataSubject.next(false);
        
    }
    getDataTotal():number{
        return this.total;

    }

    attach(firstcall?):Subject<Boolean>{
        if(firstcall){
            this.dataSubject.next(true);
        }
        
        return this.dataSubject;
    }

    refresh(){
        this.dataSubject.next(true);
    }
 
}   