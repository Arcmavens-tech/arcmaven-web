import { RouterModule } from '@angular/router';
import { FooterComponent } from './panels/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ContentToolbarComponent } from './layouts/content-toolbar/content-toolbar.component';
import { NavbarComponent } from './panels/navbar/navbar.component';
import { BlogService } from './services/blog.service';
import { UserService } from './services/user.service';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    })
  ],
  declarations: [
    ContentToolbarComponent,
    NavbarComponent,
    FooterComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective
  ],
  providers: [BlogService, UserService],
  exports:[
    SmoothScrollToDirective,
    SmoothScrollDirective
  ]
})
export class CoreModule { }
