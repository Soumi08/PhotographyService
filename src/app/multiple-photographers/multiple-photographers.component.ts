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
   catagory:"landscape",
   type:"Landscape",
   image: "../../assets/Landscape2.jpg"
},
{
   id: "p02",
   catagory:"wedding",
   type:"Wedding",
   image: "../../assets/Wedding2.jpg"
},
{ 
   id: "p03",
   catagory:"food",
   type:"Food",
   image: "../../assets/Food2.jpg"
},
{ 
   id: "p04",
   catagory:"architectural",
   type:"Architectural",
   image: "../../assets/Architectural2.jpg"
},
{ 
   id: "p05",
   catagory:"street",
   type:"Street",
   image: "../../assets/Street2.jpg"
},
{ 
   id: "p06",
   catagory:"baby",
   type:"Baby",
   image: "../../assets/Baby2.jpg"
},
{ 
   id: "p07",
   catagory:"event",
   type:"Event",
   image: "../../assets/Event2.jpg"
},
{
   id: "p08",
   catagory:"product",
   type:"Product",
   image: "../../assets/Product2.jpg"
},
{ 
   id: "p09",
   catagory:"wildlife",
   type:"Wildlife",
   image: "../../assets/Wild2.jpg"
},
{ 
   id: "p010",
   catagory:"portrait",
   type:"Portrait",
   image: "../../assets/Portrait2.jpg"
},
{ 
   id: "p011",
   catagory:"sports",
   type:"Sports",
   image: "../../assets/Sports2.jpg"
},
{ 
   id: "p012",
   catagory:"others",
   type:"Others",
   image: "../../assets/Others2.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
