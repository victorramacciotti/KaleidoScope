import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { AuthService, User } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchBarComponent, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}
  profile?: User | undefined | null;

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
}

  /*login() {

    this.auth.loginWithRedirect();
   
    }
  logout() {
    this.auth.logout({
    
    logoutParams: {returnTo: this.document.location.origin,},
    
    });
    
    }*/


}
