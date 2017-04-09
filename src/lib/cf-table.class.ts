import { CFBody } from './cfbody/cf-body.class';
import { CFHeader } from './cfheader/cf-header.class';
import { CFTableDataService } from './utility/cf-table-data.service';
import { genCFBody } from './utility/cf-gen.static';
import { isObservable } from './utility/cf-func-utility';
import { Observable,Subject } from 'rxjs/Rx';
import { CFFooter } from './cffooter';
export class CFTable{
    header:CFHeader;
    body:CFBody = new CFBody([]);
    subject:CFTableDataService;
    footer:CFFooter;
    constructor(header:CFHeader,cftabledataservice:CFTableDataService){
        this.header = header;
        this.subject = cftabledataservice;
        this.listen();
        
    }
    
    private listen(){
        let httpStream:Subject<Observable<Array<Object>>> = new Subject<Observable<Array<Object>>>();
        let httpCallStream:Subject<boolean> = new Subject();
        this.subject.attach(true).filter((isUpdate:boolean)=>{
            
            return isUpdate;
            
        }).map(()=>{
 
                 
                return this.subject.genData();
              
 
        }).map((data)=>{
            if(!isObservable(data)){
                data = <Array<Object>> data;
                this.setBody(genCFBody(data));
            }
            return data;
        })
        .filter((data)=>{
            return isObservable(data);
        })
        .switchMap((data:Observable<Array<Object>>)=>{
            console.log("Data",data);
            return data;
        })
        .subscribe((data)=>{

            
            data = <Array<Object>> data;
              
            this.setBody(genCFBody(data));
            console.log(this.subject.genData(),"gen");
        });
       

    }

    getBody():CFBody{
        return this.body;
    }

    getHeader():CFHeader{
        return this.header;
    }

    setBody(body:CFBody):void{
        this.body = body;
    }
    
    setHeader(header:CFHeader):void{
        this.header = header;
    }

    setFooter(footer:CFFooter):void{
        this.footer = footer;
    }

    getFooter():CFFooter{
        return this.footer;
    }
}