import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

profile=[
{
   id: "p037",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p038",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
},
{ 
   id: "p039",
   title:"Riya Bagchi",
   location:"Kolkata",
   image: "../../assets/person3.png"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
