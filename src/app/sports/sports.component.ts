import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {


profile=[
{
   id: "p035",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p036",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
