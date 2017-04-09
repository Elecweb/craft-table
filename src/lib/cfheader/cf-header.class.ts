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
       if(!pagination){
            return this.heads;
       }else{
          return this.heads.filter((head:CFHead)=>{
              return head.getDisplay().getWhere() == "@all" || head.getDisplay().getWhere() == pagination.getCurrentPage() || (head.getDisplay().getWhere() == "@last" && pagination.isLast()) || (head.getDisplay().getWhere() == "@first" && pagination.isFirst());
          });
       }
      
   }
}