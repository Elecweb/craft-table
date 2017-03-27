# Crafte-table
Table UI for angular 2 that you can use it easily with component (style based on semantic ui) or you can custom it and make your own style. It support size and pagination.

**It's still in active developement**

### Installation

  `npm install --save craft-table`

  **you have to include semantic ui (css and js) and also jquery if you want to use craft-table component.**
 
  you need to import `CFTableModule`.
 
  ```
  import { NgModule } from '@angular/core';
  import { CFTableModule } from 'craft-table/craft-table';
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [AppComponent],
    imports: [CFTableModule],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

### Getting started

  There're 2 ways to use craft-table library.

  #### 1) Using craft-table by component.
_app.component.html_:
```html
<cf-table [cfcontrol]="myTable"></cf-table>
<cf-pagination [cfpagination]="myTable.pagination" [(ngModel)]="currentPage" [class]="right"></cf-pagination>
<cf-sizination [cfsizination]="myTable.sizination" [(ngModel)]="currentSize"></cf-sizination>
```
_app.component.ts_:

```typescript
import { Component } from '@angular/core';
import { CFTableControl,Ihead,Type } from 'craft-table/craft-table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTable:CFTableControl;
  header:Array<Ihead> = [
    {
      id:"member_code",
      type:Type.TEXT,
      label:"member code"
    },
    {
      id:"member_name",
      type:Type.TEXT,
      label:"member name"
    }
  ];
  data = [
    {
      member_code:"00001",
      member_name:"puttarak"
    },
    {
      member_code:"00002",
      member_name:"patty"
    },
    ...
   ];
   currentPage:number = 1;
   currentSize:number = 40;
   constructor(){
    this.myTable = new CFTableControl({
      header:this.header,
      navigating:true,
      date:this.data
    });
   }
}
```
  #### 2) Using craft-table by instantiate `CFTableControl` and make your own custom template.
  
_your-own-table.comp.html_:
```typescript
  <table class="ui celled table">
    <thead>
      <th *ngFor="let header of cftable.getHead()"> 
          {{header.getLabel()}}
      </th>
    </thead>
    <tbody>
      <tr *ngFor="let row of cftable.getBodyRow() let i = index">
        <td *ngFor="let column of cftable.getColumn(i)">{{column.getValue()}} </td>
     </tr>
    </tbody>
  </table>
 ```
  
_your-own-table.comp.ts_:   
```typescript
import { Component } from '@angular/core';
import { CFTableControl,Ihead,Type } from './../../core/cf-table-control.class';
@Component({
    selector: 'your-own-table',
    templateUrl: './your-own-table.comp.html',
    styleUrls:['./your-own-table.scss']
})
export class CFTableComp implements OnInit {
    cftable:CFTableControl;
    header:Array<Ihead> = [
      {
        id:"member_code",
        type:Type.TEXT,
        label:"member code"
      },
      {
        id:"member_name",
        type:Type.TEXT,
        label:"member name"
      }
    ];
    data = [
      {
        member_code:"00001",
        member_name:"puttarak"
      },
      {
        member_code:"00002",
        member_name:"patty"
      },
      ...
     ];
     constructor() {
        this.cftable =  new CFTableControl({
          header:this.header,
          navigating:true,
          date:this.data
        });
     }
}
```
        
## Angular CLI configuration ( Webpack )
`npm install jquery --save`

Craft-table is based on Semantic UI (it's optional though).
Download  <a href="https://semantic-ui.com/introduction/getting-started.html">Semantic UI</a>
and add `semantic.min.css`, `semantic.min.js`, jquery to the `angular-cli.json` as follows:
```javascript

...

"apps": [{
  ... 
  "styles": [
      "styles.css",
      "../path/to/semantic.min.css" // 
  ],
  "scripts": [
      "../node_modules/jquery/dist/jquery.min.js",
      "../path/to/semantic.min.js"
  ],
  ...
}]
