import { CFHeader } from './../cfheader';
import { CFFootBody } from './../cffootbody';
export class CFFooter{
    private header:CFHeader;
    private body:CFFootBody;
    constructor(){
        
    }
    setHeader(header:CFHeader):void{
        this.header = header;
    }

    getHeader():CFHeader{
        return this.header;
    }

    setBody(body:CFFootBody):void{
        this.body = body;
    }

    getBody():CFFootBody{
        return this.body;
    }
}