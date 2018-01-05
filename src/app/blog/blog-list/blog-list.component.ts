import { BlogService } from './../../core/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
declare let dataLayer: Array<any>;

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs : any;
  buttonText:string = "Join Bikkr";
  contact = {
    name : '',
    email : '',
    timestamp : (new Date()).getTime().toString()
};

  constructor(private blogService: BlogService, private userService: UserService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().snapshotChanges().subscribe(res=>{
      this.blogs = res.map(file=>{
        return {id:file.payload.doc.id, data:file.payload.doc.data()};
      });
    });
  }

  addSubscriber(){
    this.buttonText = "Joining";
    this.userService.addContact(this.contact).subscribe(res=>{
        this.reset();
        if(res == 'added'){
            dataLayer.push({'event': 'Blog Register'});
        }
    }, err=>{
        this.reset();    
    }, ()=>{
        this.reset();
    });
  }

  reset(){
    this.contact = {
        name : '',
        email : '',
        timestamp : (new Date()).getTime().toString()
    };
    this.buttonText = "Join Bikkr";
}

}
