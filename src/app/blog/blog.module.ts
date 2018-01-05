import { FormsModule } from '@angular/forms';
import { BlogRoutes } from './blog.routing';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { GravatarModule } from 'ng2-gravatar-directive';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDescComponent } from './blog-desc/blog-desc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule.forChild(BlogRoutes),
    GravatarModule
  ],
  declarations: [BlogListComponent, BlogDescComponent]
})
export class BlogModule { }
