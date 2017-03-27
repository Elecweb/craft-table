import { CFTable } from './../cf-table.class';
import { CFHeader } from './../cfheader/cf-header.class';
import { CFHead } from './../cfhead/cf-head.class';
import { CFRow } from './../cfrow/cf-row.class';
import { CFColumn } from './../cfcolumn/cf-column.class';
import { Type } from './type.enum';
import { CFTableDataService  } from './../utility/cf-table-data.service';
import { Ihead } from './../cfhead';
import * as CFGenStatic from './../utility/cf-gen.static';
import { CFPagination } from './../cfpagination/cf-pagination';
import { CFPage  } from './../cfpagination/cfpage/cf-page';
import { CFSize  } from './../cfsizination/cfsize/cf-size';
import { CFSizination } from './../cfsizination/cf-sizination';
export class ICFTableControlOption{
    header:Array<Ihead>
    data?:Array<Object>
    getData?:any;
    navigating?:boolean;
    sizes?:Array<CFSize|number>;
    size?:number;
    offset?:number
    // size?:number;
    // offset?:number;
}

export class CFTableControl{
    private table:CFTable;
    public cftabledata:CFTableDataService;
    public pagination:CFPagination;
    private sizination:CFSizination;
    constructor(options?:ICFTableControlOption){
        let size:String | number = options.size || 10;
        if(!options.navigating && !options.size){
            size = "all";
        }

        this.cftabledata = new CFTableDataService({offset:options.offset,size:size,data:options.data || []});
       
        if(options.getData){
            this.cftabledata.getData = options.getData;
        }
        
        options.sizes = options.sizes ||  [new CFSize("10",10),new CFSize("20",20),new CFSize("30",30),new CFSize("40",40),new CFSize("50",50)];

        this.table = new CFTable(CFGenStatic.getCFHeader(options.header),this.cftabledata);
        if(options.navigating){
            this.pagination = new CFPagination(this.cftabledata);
            this.sizination = new CFSizination(this.cftabledata,options.sizes);
        }
       
    }

    getTable():CFTable{
        return this.table;
    }

    setBody(body:Array<Object>):void{
        
    }

    getHeader():CFHeader{
        return this.table.getHeader();
    }
    getHead():Array<CFHead>{
        return this.table.getHeader().getHead();
    }
    setHeader(header:Array<Object>):void{

    }
    setData(data:Array<Object>):void{
        this.cftabledata.setData(data);
    }
    setTableData(cftabledata:CFTableDataService):void{
        this.cftabledata = cftabledata;
    }

    getTableData():CFTableDataService{
        return this.cftabledata;
    }
    getColumn(row_index:number):Array<CFColumn>{
        let column = [];
        for(let head of this.getHead()){
            if(this.table.getBody().getRows()[row_index]){
                column.push(this.table.getBody().getRows()[row_index].get(head.getId()));
            }
            
        }
        return column;
    }
    getBodyRow():Array<CFRow>{
        return this.table.getBody().getRows();
    }

    getPagination():CFPagination{
        return this.pagination;
    }

    setPagination(pagination:CFPagination):void{
        this.pagination = pagination;
    }

    getPages():Array<CFPage>{
        return this.pagination.getPageAvailable();
    }

    setCurrentPage(page:String | number):void{
        this.pagination.setPage(page);
    }


    getSizes():Array<CFSize>{
        return this.sizination.getSizeAvailable();
    }

    setCurrentSize(size:String|number):void{
        this.sizination.setSize(size);
    }

    setDataTotal(total):void{
        this.cftabledata.setDataTotal(total);
      
    }

    getDataTotal():number{
        return this.cftabledata.getDataTotal();
    }

    setOffset(offset:number):void{
        this.cftabledata.setOffset(offset);
    }

    setSize(size:number):void{
        this.cftabledata.setSize(size);
    }

    getOffset():number{
        return this.cftabledata.getOffset();
    }

    getSize():number{
        return this.cftabledata.getSize();
    }
}