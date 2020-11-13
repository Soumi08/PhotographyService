import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;

profile=[
{
   id: "p018",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p019",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p020",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
