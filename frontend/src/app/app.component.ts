import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) {}
  
  title = 'Bud Buddy in Angular';
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/explore', icon: 'search', title: 'Explore'},
    { path: '/my-plants', icon: 'favorite', title: 'My Plants'},
    { path: '/plant:id'}
  ]
}
