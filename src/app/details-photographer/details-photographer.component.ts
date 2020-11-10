import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-photographer',
  templateUrl: './details-photographer.component.html',
  styleUrls: ['./details-photographer.component.css']
})
export class DetailsPhotographerComponent implements OnInit {

  userData:any;
  photographerDetails=[
{
   id: "p01",
   type:"Wedding",
   name:"ABC DEF",
   image1: "../../assets/logo1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img7.JPG"
},
{ 
   id: "p02",
   type:"Baby",
   name:"DEF GHI",
   image1: "../../assets/logo2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img8.JPG"
},
{
   id: "p03",
   type:"Nature",
   name:"MNP QRS",
   image1: "../../assets/logo1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img8.JPG"
},
{ 
   id: "p04",
   type:"Street",
   name:"XYZ ABC",
   image1: "../../assets/logo2.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img2.JPG"
},
{
   id: "p05",
   type:"Product",
   name:"PQR STU",
   image1: "../../assets/logo1.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img8.JPG"
},
{ 
   id: "p06",
   type:"Wildlife",
   name:"JKL MNP",
   image1: "../../assets/logo2.jpg",
   sample1: "../../assets/img2.JPG",
   sample2: "../../assets/img6.JPG"
}
];

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.params.subscribe((idInfo)=>{
        console.log(idInfo);
        this.userData=this.photographerDetails.filter((pDetails)=>{
             return pDetails.id==idInfo.id;
        })[0];
        console.log(this.userData);
     })
  }
}
