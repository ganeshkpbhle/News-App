import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../module';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  route:string="";
  cards:Array<Card>=[
    {
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews1.jpg",
      color:"color1",
      imgsrc2:""
    },
    {
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews2.jpg",
      color:"color1",imgsrc2:""
    },
    {
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews3.jpg",
      color:"color1",imgsrc2:""
    },
    {
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews4.jpg",
      color:"color1",imgsrc2:""
    }
  ];
  constructor(private router:Router) { 
    this.route=router.url;
  }
  ngOnInit(): void {
  }

}
