import { ContentToolbarComponent } from './../core/layouts/content-toolbar/content-toolbar.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: '',
        component: ContentToolbarComponent,
        children: [{
            path: 'home',
            component: HomeComponent
          }
        ]
    }
]

