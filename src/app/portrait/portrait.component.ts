import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;
  
profile=[
{
   id: "p029",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p030",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p031",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p032",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
