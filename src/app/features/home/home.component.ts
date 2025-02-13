import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = ['icons/angular.svg', 'icons/spring-boot.svg', 'icons/flutter.svg', 'icons/dart.svg'];

}
