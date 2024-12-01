import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


}
