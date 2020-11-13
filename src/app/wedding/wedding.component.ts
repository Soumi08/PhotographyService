import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;

profile=[
{
   id: "p040",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p041",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p042",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p043",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p044",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
},
{ 
   id: "p045",
   title:"Barun Ghosh",
   location:"Kolkata",
   image: "../../assets/person5.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
