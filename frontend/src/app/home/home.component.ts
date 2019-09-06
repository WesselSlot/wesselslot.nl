import { Component, OnInit } from '@angular/core';
import {Blog} from '../core/models/blog';
import {BlogService} from '../core/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public title = "Welcome to wesselslot!";
    constructor(
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.getBlogItems();
    }

    public getBlogItems(): Blog[] {
        return this.blogService.getBlogItems();
    }

}
