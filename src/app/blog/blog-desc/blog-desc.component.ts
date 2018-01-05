import { BlogService } from './../../core/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-desc',
  templateUrl: './blog-desc.component.html',
  styleUrls: ['./blog-desc.component.scss']
})
export class BlogDescComponent implements OnInit {

  blog: any;
  id: number;
  blogId: string;
  saveButton: string = "Save";
  private sub1: any;
  private sub2: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub1 = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sub2 = this.blogService.getBlog(this.id).snapshotChanges().subscribe(res=>{
        if(res.payload.exists){
          this.blog = res.payload.data(); 
          this.blogId = res.payload.id;
        }
      });
   });
  }

}
