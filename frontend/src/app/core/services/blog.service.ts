import { Injectable } from '@angular/core';
import {Blog} from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogItems() {
      return [
          new Blog('test', 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.', 'test', ['code']),
          new Blog('test', 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.', 'test', ['code']),
          new Blog('test', 'test jansd kdnmg js dfj', 'test', ['code']),
          new Blog('test', 'test jansd kdnmg js dfj', 'test', ['code']),
          new Blog('test2', 'test4 jsdnf j34 sl', 'test', ['code']),
      ];
  }
}
