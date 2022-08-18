import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { MyPlantsComponent } from './pages/my-plants/my-plants.component';
import { PlantInfoComponent } from './pages/my-plants/child-routes/plant-info/plant-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlantComponent } from './components/plant/plant.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from './material.module';
import { PlantListModule } from './components/plant-list/plant-list.module';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    MyPlantsComponent,
    PlantInfoComponent,
    NavbarComponent,
    PlantComponent,
    SearchBarComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    PlantListModule,
    AuthModule.forRoot({
      domain: "",
      clientId: "",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
