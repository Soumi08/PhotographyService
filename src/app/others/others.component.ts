import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

// Pagination parameters.
  p: Number = 1;
  count: Number = 4;
  
profile=[
{
   id: "p027",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p028",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
