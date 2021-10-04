import { Component, OnInit } from '@angular/core';
import { Card } from '../module';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cards1:Array<Card>=[
    {title:"LIFESTYLE",
    text:"Get the Illusion of Fuller Lashes by 'Mascng'",
    imgsrc:"assets/img/trending/trending_bottom1.jpg",
    color:"color1"
    },
   {title:"SPORTS",
   text:"Get the Illusion of Fuller Lashes by 'Mascng'",
   imgsrc:"assets/img/trending/trending_bottom2.jpg",
   color:"color2"
   },
   {
    title:"TRAVELS",
    text:"Welcome To The Best Model Winner Contest'",
    imgsrc:"assets/img/trending/trending_bottom3.jpg",
    color:"color3"
   }
  ];
  cards2:Array<Card>=[
    {
      title:"Concert",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right1.jpg",
      color:"color1"
     },
     {
      title:"sea beach",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right2.jpg",
      color:"color3"
     },
     {
      title:"Bike Show",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right3.jpg",
      color:"color2"
     },
     {
      title:"see beach",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right4.jpg",
      color:"color4"
     },
     {
      title:"Sketing",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right5.jpg",
      color:"color1"
     }
  ];
  cards3:Array<Card>=[
    {
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews2.jpg",
      color:"color1"
     },
     {
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews3.jpg",
      color:"color1"
     },
     {
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews1.jpg",
      color:"color1"
     }
  ];
  cards4:Array<Card>=[
    {
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News1.jpg",
      color:""
     },
     {
      title:"EVENT NIGHT",
      text:"",
      imgsrc:"assets/img/news/weekly2News2.jpg",
      color:""
     },
     {
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News3.jpg",
      color:""
     },
     {
      title:"EVENT TIME",
      text:"",
      imgsrc:"assets/img/news/weekly2News4.jpg",
      color:""
     },
     {
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News4.jpg",
      color:""
     }
  ];
  cards5:Array<Card>=[
    {
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent1.jpg",
      color:""
     },
     {
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent2.jpg",
      color:""
     },
     {
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent3.jpg",
      color:""
     },
     {
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent1.jpg",
      color:""
     }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
