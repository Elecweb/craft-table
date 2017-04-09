import { NgModule } from '@angular/core';
import { CFTableComp } from './cftablecomp/index';
import { CFPaginationComp } from './cfpaginationcomp/index';
import { CFUtilityModule } from './../utility/index';
import { BrowserModule } from '@angular/platform-browser';
import { CFSizinationComp } from './cfsizinationcomp/cf-sizination.comp';
@NgModule({
    imports: [CFUtilityModule],
    exports: [CFTableComp,CFPaginationComp,CFSizinationComp],
    declarations: [CFTableComp,CFPaginationComp,CFSizinationComp],
    providers: [],
})
export class CFComponentModule { 

}
