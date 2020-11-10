import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

profile=[
{
   id: "p033",
   title:"Richard Harris",
   location:"London",
   image: "../../assets/person1.jpg"
},
{
   id: "p034",
   title:"M Mathur",
   location:"Delhi",
   image: "../../assets/person2.jpg"
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
