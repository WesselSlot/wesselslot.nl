import { Injectable } from '@angular/core';
import {Blog} from "../core/models/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogItems() {
      return [
          new Blog('test', 'test jansd kdnmg js dfj', 'test'),
          new Blog('test2', 'test4 jsdnf j34 sl', 'test')
      ];
  }
}
