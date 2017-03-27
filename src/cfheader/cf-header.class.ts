import { Type } from './../core/type.enum';
import { CFHead } from './../cfhead/cf-head.class';
export class CFHeader{
   private heads:Array<CFHead> = [];

   constructor(heads:Array<CFHead>){
       this.heads = heads;
   }
   add(head:CFHead):void{
       this.heads.push(head);
   }

   setHead(header:Array<CFHead>){
       this.heads = header;
   }

   getHead():Array<CFHead>{
        return this.heads;
   }
}