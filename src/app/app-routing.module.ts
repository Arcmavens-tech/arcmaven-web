import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
},
{
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
},
{
  path: 'blogs',
  loadChildren: 'app/blog/blog.module#BlogModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
