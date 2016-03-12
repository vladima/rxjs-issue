import {Subject, BehaviorSubject} from "rxjs/Rx";

class Task {
  id:number;
  title:string;
  description:string;

  constructor(data:any = {}) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
  }
}

let s1: Subject<Task[]>;
let s2 = new BehaviorSubject([]);
let arr = [ s1, s2 ]