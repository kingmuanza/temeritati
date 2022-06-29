import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temeritati';
  theme = true;
  url = "";
  afficherMenu = true;

  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.url = location.path();
      } else {
        this.url = 'Home'
      }

      if (this.url.indexOf('/login') !== -1) {
        this.afficherMenu = false;
      } else {

        this.afficherMenu = true;
      }
      console.log('url');
      console.log(this.url);
    });
  }

  logIn() {
    this.router.navigate(['login']);
  }
  home() {
    this.router.navigate(['/']);
  }
}
