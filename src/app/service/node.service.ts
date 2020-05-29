import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
 
    public elem;
    public next;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }


}
