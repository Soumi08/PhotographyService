import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsPhotographerComponent } from './details-photographer/details-photographer.component';
import { MultiplePhotographersComponent } from './multiple-photographers/multiple-photographers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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

import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DetailsPhotographerComponent,
    MultiplePhotographersComponent,
    ContactUsComponent,
    ArchitecturalComponent,
    BabyComponent,
    EventComponent,
    FoodComponent,
    LandscapeComponent,
    OthersComponent,
    PortraitComponent,
    ProductComponent,
    SportsComponent,
    StreetComponent,
    WeddingComponent,
    WildlifeComponent,
    ProfileComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
