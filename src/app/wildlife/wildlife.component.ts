import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.component.html',
  styleUrls: ['./wildlife.component.css']
})
export class WildlifeComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;

profile=[
{
   id: "p046",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p047",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p048",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p049",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p050",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
