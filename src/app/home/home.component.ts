import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
photographer=[
{
   id: "p01",
   catagory:"landscape",
   typeName:"Landscape",
   image: "../../assets/Landscape2.jpg"
},
{
   id: "p02",
   catagory:"wedding",
   typeName:"Wedding",
   image: "../../assets/Wedding2.jpg"
},
{ 
   id: "p03",
   catagory:"food",
   typeName:"Food",
   image: "../../assets/Food2.jpg"
},
{ 
   id: "p04",
   catagory:"baby",
   typeName:"Baby",
   image: "../../assets/Baby2.jpg"
},
{ 
   id: "p05",
  catagory:"event",
   typeName:"Event",
   image: "../../assets/Event2.jpg"
},
{ 
   id: "p06",
   catagory:"wildlife",
   typeName:"Wildlife",
   image: "../../assets/Wild2.jpg"
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
