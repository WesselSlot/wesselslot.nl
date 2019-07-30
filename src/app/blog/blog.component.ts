import {Component, OnInit} from '@angular/core';
import {Blog} from '../core/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.getBlogItems();
  }

  public getBlogItems(): Blog[] {
      return [
          new Blog('test', 'test jansd kdnmg js dfj', 'test'),
          new Blog('test2', 'test4 jsdnf j34 sl', 'test')
      ];
  }
}
