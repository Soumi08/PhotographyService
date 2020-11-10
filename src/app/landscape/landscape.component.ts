import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;

profile=[
{
   id: "p021",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p022",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p023",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p024",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p025",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
},
{ 
   id: "p026",
   title:"Barun Ghosh",
   location:"Kolkata",
   image: "../../assets/person5.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
