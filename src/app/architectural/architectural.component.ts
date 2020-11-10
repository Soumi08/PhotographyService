import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architectural',
  templateUrl: './architectural.component.html',
  styleUrls: ['./architectural.component.css']
})
export class ArchitecturalComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;

profile=[
{
   id: "p01",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p02",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p03",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
},
{ 
   id: "p04",
   title:"Ronald Weasley",
   location:"Goa",
   image: "../../assets/person4.jpg"
},
{ 
   id: "p05",
   title:"Ramila Das",
   location:"Kolkata",
   image: "../../assets/person6.jpg"
},
{ 
   id: "p06",
   title:"Barun Ghosh",
   location:"Kolkata",
   image: "../../assets/person5.jpg"
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
