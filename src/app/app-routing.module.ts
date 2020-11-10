import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MultiplePhotographersComponent } from './multiple-photographers/multiple-photographers.component';
import { DetailsPhotographerComponent } from './details-photographer/details-photographer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { LandscapeComponent } from './landscape/landscape.component';
import { WeddingComponent } from './wedding/wedding.component';
import { FoodComponent } from './food/food.component';
import { ArchitecturalComponent } from './architectural/architectural.component';
import { StreetComponent } from './street/street.component';
import { BabyComponent } from './baby/baby.component';
import { EventComponent } from './event/event.component';
import { ProductComponent } from './product/product.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { PortraitComponent } from './portrait/portrait.component';
import { SportsComponent } from './sports/sports.component';
import { OthersComponent } from './others/others.component';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},

{path:"home", component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"registration", component:RegisterComponent},
{path:"contact", component:ContactUsComponent},
{path:"multiple", component:MultiplePhotographersComponent},
{path: "details/:id", component:DetailsPhotographerComponent},
{path: "profile/:id", component:ProfileComponent},

{path:"landscape", component:LandscapeComponent},
{path:"wedding", component:WeddingComponent},
{path:"food", component:FoodComponent },
{path:"architectural", component:ArchitecturalComponent},
{path:"street", component:StreetComponent},
{path:"baby", component:BabyComponent},
{path:"event", component:EventComponent},
{path:"product", component:ProductComponent},
{path:"wildlife", component:WildlifeComponent},
{path:"portrait", component:PortraitComponent},
{path:"sports", component:SportsComponent},
{path:"others", component:OthersComponent},  

{path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
