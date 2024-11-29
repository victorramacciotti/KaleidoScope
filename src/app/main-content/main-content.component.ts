import { Component } from '@angular/core';
import { HomePageComponent } from "../pages/home-page/home-page.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
