import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-photographers',
  templateUrl: './multiple-photographers.component.html',
  styleUrls: ['./multiple-photographers.component.css']
})
export class MultiplePhotographersComponent implements OnInit {

photographer=[
{
   id: "p01",
   type:"Landscape",
   image: "../../assets/Landscape2.jpg"
},
{
   id: "p02",
   type:"Wedding",
   image: "../../assets/Wedding2.jpg"
},
{ 
   id: "p03",
   type:"Food",
   image: "../../assets/Food2.jpg"
},
{ 
   id: "p04",
   type:"Architectural",
   image: "../../assets/Architectural2.jpg"
},
{ 
   id: "p05",
   
   type:"Street",
   image: "../../assets/Street2.jpg"
},
{ 
   id: "p06",
   type:"Baby",
   image: "../../assets/Baby2.jpg"
},
{ 
   id: "p07",
   type:"Event",
   image: "../../assets/Event2.jpg"
},
{
   id: "p08",
   type:"Product",
   image: "../../assets/Product2.jpg"
},
{ 
   id: "p09",
   type:"Wildlife",
   image: "../../assets/Wild2.jpg"
},
{ 
   id: "p010",
   type:"Portrait",
   image: "../../assets/Portrait2.jpg"
},
{ 
   id: "p011",
   type:"Sports",
   image: "../../assets/Sports2.jpg"
},
{ 
   id: "p012",
   type:"Others",
   image: "../../assets/Others2.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
