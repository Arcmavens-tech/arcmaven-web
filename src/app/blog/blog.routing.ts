import { BlogDescComponent } from './blog-desc/blog-desc.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Routes } from '@angular/router';
import { ContentToolbarComponent } from '../core/layouts/content-toolbar/content-toolbar.component';

export const BlogRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ContentToolbarComponent,
        children: [{
            path: 'list',
            component: BlogListComponent
          },
          {
            path: ':id',
            component: BlogDescComponent
          }
        ]
    }
]

