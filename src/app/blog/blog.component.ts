import {Component, OnInit} from '@angular/core';
import {Blog} from '../core/models/blog';
import {BlogService} from "./blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor(
        private blogService: BlogService
    ) {
    }

    ngOnInit() {
      this.getBlogItems();
    }

    public getBlogItems(): Blog[] {
        return this.blogService.getBlogItems();
    }
}
