import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuActive: boolean = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.toggleBurgerIcon();
  }

  closeMenu() {
    this.isMenuActive = false;
    this.toggleBurgerIcon();
  }

  toggleBurgerIcon() {
    const burger = document.querySelector('.burger');
    if (burger) {
      if (this.isMenuActive) {
        burger.classList.add('active');
      } else {
        burger.classList.remove('active');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menu = document.querySelector('nav');
    const button = document.querySelector('.burger');

    if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
      this.isMenuActive = false;
      this.toggleBurgerIcon();
    }
  }
}
