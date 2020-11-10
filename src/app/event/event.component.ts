import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;
  
profile=[
{
   id: "p012",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p013",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p014",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p015",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p016",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
},
{ 
   id: "p017",
   title:"Barun Ghosh",
   location:"Kolkata",
   image: "../../assets/person5.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
