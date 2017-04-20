import { Component } from '@angular/core';
import { CFTableControl,Type,Ihead,CFSize,genCFHeader,genCFFootBody } from './../../../lib';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myTable:CFTableControl;
  header:Array<Ihead> = [
    {
      id:"member_code",
      type:Type.TEXT,
      label:"รหัสสมาชิก",
       style:{
        ["color"]:"red"
      }
    },
    {
      id:"member_name",
      type:Type.TEXT,
      label:"ชื่อสมาชิก",
      // where:"@all"
    },
    {
      id:"@index",
      type:Type.TEXT,
      label:"index",
    },
    {
      id:"status",
      type:Type.TEXT,
      label:"status",
      // where:"@all"
    },
    {
      id:"member_surname",
      type:Type.TEXT,
      label:"นามสกุล",
      // where:"@all"
    }
  ];
  footer:Array<Ihead> = [
     {
      id:"member_code",
      type:Type.TEXT,
      label:"รหัสสมาชิก",
      pos:2,
     
    },
    {
      id:"member_name",
      type:Type.TEXT,
      label:"ชื่อสมาชิก",
      pos:4
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
        {
      member_code:"00003",
      member_name:"puttarak"
    },
    {
      member_code:"00004",
      member_name:"patty"
    },
        {
      member_code:"00005",
      member_name:"puttarak"
    },
    {
      member_code:"00006",
      member_name:"patty"
    },
        {
      member_code:"00007",
      member_name:"puttarak"
    },
    {
      member_code:"00008",
      member_name:"patty"
    },
        {
      member_code:"00009",
      member_name:"puttarak"
    },
    {
      member_code:"000010",
      member_name:"patty"
    },
        {
      member_code:"000011",
      member_name:"puttarak"
    },
    {
      member_code:"000012",
      member_name:"patty"
    },
        {
      member_code:"00001",
      member_name:"puttarak"
    },
    {
      member_code:"00002",
      member_name:"patty"
    },
        {
      member_code:"00003",
      member_name:"puttarak"
    },
    {
      member_code:"00004",
      member_name:"patty"
    },
        {
      member_code:"00005",
      member_name:"puttarak"
    },
    {
      member_code:"00006",
      member_name:"patty"
    },
        {
      member_code:"00007",
      member_name:"puttarak"
    },
    {
      member_code:"00008",
      member_name:"patty"
    },
        {
      member_code:"00009",
      member_name:"puttarak"
    },
    {
      member_code:"000010",
      member_name:"patty"
    },
        {
      member_code:"000011",
      member_name:"puttarak"
    },
    {
      member_code:"000012",
      member_name:"patty"
    },
        {
      member_code:"00001",
      member_name:"puttarak"
    },
    {
      member_code:"00002",
      member_name:"patty"
    },
        {
      member_code:"00003",
      member_name:"puttarak"
    },
    {
      member_code:"00004",
      member_name:"patty"
    },
        {
      member_code:"00005",
      member_name:"puttarak"
    },
    {
      member_code:"00006",
      member_name:"patty"
    },
        {
      member_code:"00007",
      member_name:"puttarak"
    },
    {
      member_code:"00008",
      member_name:"patty"
    },
        {
      member_code:"00009",
      member_name:"puttarak"
    },
    {
      member_code:"000010",
      member_name:"patty"
    },
        {
      member_code:"000011",
      member_name:"puttarak"
    },
    {
      member_code:"000012",
      member_name:"patty"
    }
  ];
  pagination:Array<any>;
  sizes:Array<any>;
  currentPage:number = 1;
  currentSize:number = 40;
  constructor(private http:Http){
   
    this.myTable = new CFTableControl({
       // header:this.header,
      // size:4,
      // offset:0,
      navigating:true
      // sizing:true,
      // paging:false
      // sizes:[1,2,1000,new CFSize("แสดงทั้งหมด","all")],
      // getData:
    });
    this.myTable.setHeader(genCFHeader(this.header));
    this.myTable.setFooterHeader(genCFHeader(this.footer));
    this.myTable.setFooterBody(genCFFootBody({
      member_code:"000010--footer",
      member_name:"patty--footer"
    }));
    this.myTable.setGetData((offset,size)=>{
         var body = new URLSearchParams();
         body.append("size",size);
         body.append("offset",offset);
         
        return <Observable<Array<Object>>>this.http.post('http://188.166.185.71/mju-co-op/api/member/list',body).map((res:Response)=>{
          return res.json();
        }).map(res=>{
          this.myTable.setDataTotal(res.count);
          return <Array<Object>>res.members;
        });
      });
    this.myTable.refresh();
    // this.pagination = this.myTable.getPagination().page_available;
    // this.sizes = this.myTable.getSizes();
    // this.myTable.setCurrentSize(1000);
    // this.myTable.setCurrentSize(1);
    console.log(this.myTable.getFooterRow(),"myTable.getFooterRow()");

  }
  setSize(size:number){
    //this.myTable.setSize(size);
    this.myTable.pagination.setPage('2');
    console.log(this.myTable.pagination.getPageAvailable());
  }
  setOffset(offset:number){
    this.myTable.setOffset(offset);
  }
}
