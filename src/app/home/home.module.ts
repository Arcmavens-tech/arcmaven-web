import { CoreModule } from './../core/core.module';
import { HomeRoutes } from './home.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(HomeRoutes),
        CoreModule
    ],
    declarations: [ 
        HomeComponent
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
