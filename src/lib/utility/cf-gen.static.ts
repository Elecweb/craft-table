import { Ihead,CFHead } from './../cfhead/cf-head.class';
import { CFHeader } from './../cfheader/cf-header.class';
import { CFRow } from './../cfrow/cf-row.class';
import { CFColumn } from './../cfcolumn/cf-column.class';
import { CFBody } from './../cfbody/cf-body.class';
import { CFFootBody } from './../cffootbody/cf-foot-body';
export function genCFBody(data:Array<Object>):CFBody{
    if(!data){
        data = [];
    }
    let cfrows = []; 
    for(let item of data){
        cfrows.push(genCFRow(item));
    }
    return new CFBody(cfrows);
}


export function genCFFootBody(data:Object):CFFootBody{
    return new CFFootBody(genCFRow(data));
}



export function genCFHeader(heads:Array<Ihead>):CFHeader{
    let cfheads = heads.map((head,index)=>{
        if(!head.pos){
            head.pos = index;
        }
        if(!head.size){
            head.size = 1;
        }
        if(!head.where){
            head.where = "@all";
        }
        return genCFHead(head);
    });
    return new CFHeader(cfheads);
}

export function genCFRow(columns:Object):CFRow{
    let cfcolumns = [];
    for(let column in columns){
        cfcolumns.push(new CFColumn(column,columns[column]));
    }
    return new CFRow(cfcolumns);
}

export function genCFColumn(){

}
export function genCFHead(head:Ihead):CFHead{
    return new CFHead(head.type,head.id,head.label,head.size,head.pos,head.where);
}

