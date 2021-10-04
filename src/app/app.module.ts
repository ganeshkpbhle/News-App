import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { LatestComponent } from './latest/latest.component';
import { ContactComponent } from './contact/contact.component';
import { ElementComponent } from './element/element.component';
import { DetailComponent } from './detail/detail.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog1/blog1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoryComponent,
    AboutComponent,
    LatestComponent,
    ContactComponent,
    ElementComponent,
    DetailComponent,
    BlogComponent,
    Blog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
