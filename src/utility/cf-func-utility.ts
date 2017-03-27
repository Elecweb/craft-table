import { Observable } from 'rxjs/rx';
export function isObservable(x){
    return x instanceof Observable;
}