import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms';
import { CFPagination } from './../../cfpagination/cf-pagination';
import { CFTableControl } from './../../core/cf-table-control.class';
export const CUSTOM_PAGE_CONTROL_VALUE_ACCESSOR:any = {
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>CFPaginationComp),
    multi:true
}
const noop = () => {
};
@Component({
    selector: 'cf-pagination',
    templateUrl: './cf-pagination.comp.html',
    styleUrls:['./cf-pagination.comp.scss'],
    providers:[CUSTOM_PAGE_CONTROL_VALUE_ACCESSOR]
})
export class CFPaginationComp implements OnInit,ControlValueAccessor{
    @Input('cfpagination') cfpagination:  CFPagination;
    @Input('class') class:String;
    private current_page:number;

    private onTouchedCallback:()=>void = noop;
    private onChangeCallback:(_any)=>void = noop;
    writeValue(value:any){
        
        this.setPage(value,false);
        
    }

    registerOnChange(fn:any){
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn:any){
        
    }

    setPage(value:any,update:boolean){
        this.cfpagination.setPage(value);
        let current_page = this.cfpagination.getCurrentPage();
        this.current_page = current_page;
        
        if(update){
            this.onChangeCallback(current_page);
        }
       
        
    }

    constructor() { 

    }

    ngOnInit() { 
       
    }
}