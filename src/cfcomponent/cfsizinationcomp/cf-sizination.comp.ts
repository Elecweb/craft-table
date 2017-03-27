import { Component, OnInit,AfterViewInit,Input,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
declare var $: any;
import { CFSizination } from './../../cfsizination/cf-sizination';
export const CUSTOM_SIZE_CONTROL_VALUE_ACCESSOR:any = {
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>CFSizinationComp),
    multi:true
}
const noop = () => {
};
@Component({
    selector: 'cf-sizination',
    templateUrl: './cf-sizination.comp.html',
    styleUrls:['./cf-sizination.comp.scss'],
    providers:[CUSTOM_SIZE_CONTROL_VALUE_ACCESSOR]
})
export class CFSizinationComp implements OnInit,AfterViewInit, ControlValueAccessor {
    @Input('cfsizination') cfsizination:CFSizination;
    private current_in_size:number;
    get current_size():number{
        return this.current_in_size;
    }
    set current_size(value:number){
        this.current_in_size = value;
        this.cfsizination.setSize(value);
        this.onChangeCallback(value);
    }
    constructor() { }

    
    ngOnInit() { 
        
    }

    private onTouchedCallback:()=>void = noop;
    private onChangeCallback:(_any)=>void = noop;

    setSize(value:any):void{
        if(value !== this.current_size){
             this.current_size = value;
        }
       
    }

    writeValue(value:any){
        this.setSize(value);
        this.resetDropdown();
    }

    registerOnChange(fn:any){
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn:any){
        
    }

    resetDropdown(){
        setTimeout(()=>{
            $('.ui.dropdown')["dropdown"]('set selected',this.current_size);
        },10);
    }

    ngAfterViewInit(){
        // $('.ui.dropdown')["dropdown"]('set selected',40);
        $('.ui.dropdown')["dropdown"]();
        this.resetDropdown();
        
    }
}