import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsPhotographerComponent } from './details-photographer/details-photographer.component';

import { ArchitecturalComponent } from './architectural/architectural.component';
import { BabyComponent } from './baby/baby.component';
import { EventComponent } from './event/event.component';
import { FoodComponent } from './food/food.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { OthersComponent } from './others/others.component';
import { PortraitComponent } from './portrait/portrait.component';
import { ProductComponent } from './product/product.component';
import { SportsComponent } from './sports/sports.component';
import { StreetComponent } from './street/street.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { MultiplePhotographersComponent } from './multiple-photographers/multiple-photographers.component';

import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},

{path:"home", component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"login", component:LoginComponent},
{path:"registration", component:RegisterComponent},
{path:"contact", component:ContactUsComponent},
{path:"details/:id", component:DetailsPhotographerComponent},

{path:"architectural", component:ArchitecturalComponent},
{path:"baby", component:BabyComponent},
{path:"event", component:EventComponent},
{path:"food", component:FoodComponent },
{path:"landscape", component:LandscapeComponent},
{path:"others", component:OthersComponent},  
{path:"portrait", component:PortraitComponent},
{path:"product", component:ProductComponent},
{path:"sports", component:SportsComponent},
{path:"street", component:StreetComponent},
{path:"wedding", component:WeddingComponent},
{path:"wildlife", component:WildlifeComponent},
{path:"all", component:MultiplePhotographersComponent},


{path:"profile/:id", component:ProfileComponent, canActivate: [AuthGuard]},
{path:"account", component:AccountComponent},

{path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
