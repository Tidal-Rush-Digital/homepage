import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Section {
  id: string;
  title: string;
}

interface Slide {
  image: string;
  text: string;
}

interface Profile {
  image: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent {
  title = 'TidalRushDigital';
  currentSlide = 0;

  slides: Slide[] = [
    {
      image: 'Matthew_TBT_TitleScreen_TextAndBackground.png',
      text: "A tactics game that's both unpredictable and controlled. Rolling plans with changing unit abilities: move, attack, and reroll your units\' actions for an opportunity at greatness. For strategy noobs and vets alike, take your chance and roll the dice in Toybox Tactics."
    },
    {
      image: 'ToyboxTacticsVerbs30X.gif', // Replace with your image paths
      text: 'The ebb and flow of battle hinges on the roll of dice, dictating the strength of your units\' abilities each turn. Issue commands to move, attack, and utilize special actions, whether it\'s summoning the undead, resupplying your mechs, or riding into battle on a pterodactyl. For a strategic gamble, overcharge your units, rerolling their dice to potentially amplify their power.'
    },
    {
      image: 'EpicGamerScreenshot.png', // Replace with your image paths
      text: 'Choose from three distinct forces: the Prehistoric Tribe, a hardy alliance of domesticated dinosaurs and powerful cavemen; the Futurists, a high-tech army of swift mechs and soldiers reliant on supply trucks; or the Necro-Plushies, a relentless horde of undead plush toys led by the formidable Ester [pictured].'
    }
  ];

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const padding = 50;
      const offsetTop = element.offsetTop - padding;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  }

  sections: Section[] = [
    { id: 'home', title: 'Home' },
    { id: 'game', title: 'Toybox Tactics' },
    { id: 'about', title: 'About Us' },
    { id: 'contact', title: 'Contact Us' }
  ];

  prevSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  profiles: Profile[] = [
    {
      image: 'Jack.png',
      text: 'Jack Bio.'
    },
    {
      image: 'Zach.png', // Replace with your image paths
      text: 'Zach Bio.'
    },
    {
      image: 'Justin.jpg', // Replace with your image paths
      text: 'Justin Bio.'
    }
  ];
}