import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule]
})
export class AppComponent {
  title = 'TidalRushDigital';

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // or 'center', 'end', 'nearest'
      });
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  }

  sections: Section[] = [ // Correctly type as an array of Section objects
    { id: 'home', title: 'Home' },
    { id: 'game', title: 'Toybox Tactics' },
    { id: 'about', title: 'About Us' },
    { id: 'contact', title: 'Contact Us' }
  ];
}

interface Section { // Define the Section interface outside the class
  id: string;
  title: string;
}

