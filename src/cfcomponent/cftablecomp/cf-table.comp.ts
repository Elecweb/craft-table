import { Component, OnInit, Input } from '@angular/core';
import { CFTableControl } from './../../core/cf-table-control.class';
@Component({
    selector: 'cf-table',
    templateUrl: './cf-table.comp.html',
    styleUrls:['./cf-table.comp.scss']
})
export class CFTableComp implements OnInit {
    @Input('cfcontrol') cftable:CFTableControl;
    constructor() {

    }
    ngOnInit() { 

    }
}