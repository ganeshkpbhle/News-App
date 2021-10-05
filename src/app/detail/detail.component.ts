import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  img:string="";
  constructor(private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data)=>{
      this.img=data.src;
    })
  }

}
