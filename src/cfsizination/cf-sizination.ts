import { CFTableDataService } from './../utility/cf-table-data.service';
import { CFSize } from './cfsize/cf-size';
export class CFSizination{
    cftabledata:CFTableDataService;
    current_size:number;
    size_available:Array<CFSize>;

    constructor(cftabledata:CFTableDataService,size_available:Array<CFSize|number>){
        this.cftabledata = cftabledata;
        this.size_available = size_available.map((size)=>{
            if(!(size instanceof CFSize)){
                return new CFSize(size+"",Number(size));  
            }
            return size;
        });
        this.listen();
        this.setSize(this.size_available[0].value);
    }

    listen(){
        this.cftabledata.attach().subscribe((res)=>{
            if(res){
                
            }
        })
    }

    setSize(size:number | String):void{
        if(size == "all"){
            size = this.cftabledata.getDataTotal();
        }
        this.setCurrentSize(Number(size));
    }

    setCurrentSize(size:number){
        this.current_size = size;
        this.cftabledata.setSize(size);
    }

    getCurrentSize():number{
        return this.current_size;
    }

    getSizeAvailable():Array<CFSize>{
        return this.size_available;
    }
    
    setSizeAvailable(size_available:Array<CFSize>){
        this.size_available = size_available;
    }

}