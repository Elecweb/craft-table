import { Type } from './../core/type.enum';
import { CFHead } from './../cfhead/cf-head.class';
import { CFPagination } from './../cfpagination';
export class CFHeader{
   heads:Array<CFHead> = [];

   constructor(heads:Array<CFHead>){
       this.heads = heads;
   }
   add(head:CFHead):void{
       this.heads.push(head);
   }

   setHead(header:Array<CFHead>){
       this.heads = header;
   }

   getHead(pagination?:CFPagination):Array<CFHead>{
       let heads = this.heads;
    //    console.log(heads,"heads");
       var newheads = [];
       let sortFn = (a:CFHead,b:CFHead)=>{
            return a.getDisplay().getPos() - b.getDisplay().getPos();
       };
       let fillFn = head => {   
  
            newheads[head.getDisplay().getPos()-1] = head;
       };
       if(!pagination){
          heads.sort(sortFn).map(fillFn);
       }else{
          heads.filter((head:CFHead)=>{
              return head.getDisplay().getWhere() == "@all" || head.getDisplay().getWhere() == pagination.getCurrentPage() || (head.getDisplay().getWhere() == "@last" && pagination.isLast()) || (head.getDisplay().getWhere() == "@first" && pagination.isFirst());
          }).sort(sortFn).map(fillFn);
       }
       console.log(newheads,"newheads");
       return newheads;
      
   }
}