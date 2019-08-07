import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import {Blog} from '../core/models/blog';
import {BlogService} from './blog.service';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;
    let blogService: BlogService;
    let spy: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogComponent ],
            providers: [BlogService]
        }).compileComponents();

        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        blogService = TestBed.get(BlogService)
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get blog items', function () {
        var testBlogs = [
            new Blog('test', 'test jansd kdnmg js dfj', 'test'),
            new Blog('test2', 'test4 jsdnf j34 sl', 'test')
        ];

        //spy = spyOn(this.blogService, 'getBlogItems').and.returnValue(testBlogs);

        expect(component.getBlogItems()[0].title == 'test').toBeTruthy()
    });
});
