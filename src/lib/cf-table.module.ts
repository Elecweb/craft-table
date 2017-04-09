import { NgModule } from '@angular/core';
import { CFComponentModule } from './cfcomponent/cf-component.module';

import { CFUtilityModule } from './utility/index';
@NgModule({
    imports: [CFComponentModule],
    exports: [CFComponentModule],
    declarations: [],
    providers: [],
})
export class CFTableModule { }
