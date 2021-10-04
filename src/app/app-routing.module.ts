import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog1/blog1.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ElementComponent } from './element/element.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"categori",
    component:CategoryComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"latest_news",
    component:LatestComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"single-blog",
    component:BlogComponent
  },
  {
    path:"blog",
    component:Blog1Component
  },
  {
    path:"element",
    component:ElementComponent
  },
  {
    path:"details",
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
