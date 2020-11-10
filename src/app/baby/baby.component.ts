import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;
  
profile=[
{
   id: "p07",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p08",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p09",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p010",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
},
{ 
   id: "p011",
   title:"Barun Ghosh",
   location:"Kolkata",
   image: "../../assets/person5.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
