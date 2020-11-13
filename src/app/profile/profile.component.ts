import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userData:any;
profileDetails=[
{
   id: "p01",
   type:"Architectural",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p02",
   type:"Architectural",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p03",
   type:"Architectural",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p04",
  type:"Architectural",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p05",
   type:"Architectural",
   name:"Ramila Das",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p06",
   type:"Architectural",
   name:"Barun Ghosh",
   image1: "../../assets/person5.jpg",
   sample1: "../../assets/img2.JPG",
  sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p07",
   type:"Baby",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p08",
   type:"Baby",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p09",
   type:"Baby",
   name:"Ronald Weasley",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
  sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p010",
   type:"Baby",
   name:"Ramila Das",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img2.JPG"
},
{
   id: "p011",
   type:"Baby",
   name:"Barun Ghosh",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p012",
   type:"Event",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p013",
   type:"Event",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p014",
   type:"Event",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p015",
   type:"Event",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p016",
   type:"Event",
   name:"Ramila Das",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p017",
   type:"Event",
   name:"Barun Ghosh",
   image1: "../../assets/person5.jpg",
   sample1: "../../assets/img2.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p018",
   type:"Food",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p019",
   type:"Food",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p020",
   type:"Food",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p021",
   type:"Landscape",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p022",
   type:"Landscape",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p023",
   type:"Landscape",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p024",
   type:"Landscape",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p025",
   type:"Landscape",
   name:"Ramila Das",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p026",
   type:"Landscape",
   name:"Barun Ghosh",
   image1: "../../assets/person5.jpg",
   sample1: "../../assets/img2.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p027",
   type:"Others",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p028",
   type:"Others",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p029",
   type:"Portrait",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p030",
   type:"Portrait",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p031",
   type:"Portrait",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p032",
   type:"Portrait",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p033",
   type:"Product",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p034",
   type:"Product",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p035",
   type:"Sports",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p036",
   type:"Sports",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p037",
   type:"Street",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p038",
   type:"Street",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p039",
   type:"Street",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p040",
   type:"Wedding",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p041",
   type:"Wedding",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p042",
   type:"Wedding",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p043",
   type:"Wedding",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p044",
   type:"Wedding",
   name:"Ramila Das",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p045",
   type:"Wedding",
   name:"Barun Ghosh",
   image1: "../../assets/person5.jpg",
   sample1: "../../assets/img2.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p046",
   type:"Wildlife",
   name:"Richard Harris",
   image1: "../../assets/person1.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p047",
   type:"Wildlife",
   name:"M Mathur",
   image1: "../../assets/person2.jpg",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p048",
   type:"Wildlife",
   name:"Riya Bagchi",
   image1: "../../assets/person3.png",
   sample1: "../../assets/img6.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{ 
   id: "p049",
   type:"Wildlife",
   name:"Ronald Weasley",
   image1: "../../assets/person4.jpg",
   sample1: "../../assets/img4.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
},
{
   id: "p050",
   type:"Wildlife",
   name:"Ramila Das",
   image1: "../../assets/person6.jpg",
   sample1: "../../assets/img1.JPG",
   sample2: "../../assets/img11.JPG",
   sample3: "../../assets/img7.JPG",
   sample4: "../../assets/img12.JPG"
}
];

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.params.subscribe((idInfo)=>{
        console.log(idInfo);
        this.userData=this.profileDetails.filter((pDetails)=>{
             return pDetails.id==idInfo.id;
        })[0];
        console.log(this.userData);
     })
  }

}
