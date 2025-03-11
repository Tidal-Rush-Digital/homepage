import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

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
  showMenu = true; // Initially show the menu
  isMobile = false;
  mobileImageUrl = 'wave-mobile.jpeg';
  desktopImageUrl = 'wave-desktop.jpeg';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.checkIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIsMobile();
  }

  checkIsMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;

    setTimeout(() => {
      const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      if (mobileMenu) {
        if (this.showMenu) {
          mobileMenu.classList.add('show');
        } else {
          mobileMenu.classList.remove('show');
        }
      }
    }, 25); // Adjust delay as needed
  }

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

  prevSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  slides: Slide[] = [
    {
      image: 'Matthew_TBT_TitleScreen_TextAndBackground.png',
      text: "A family friendly toy tactics game that\’s both unpredictable and controlled. Command one of the three toy factions, adapt to changing circumstances, and manage the risk of dice-based unit abilities. For strategy noobs and vets alike, take your chance and roll the dice in… Toybox Tactics."
    },
    {
      image: 'ToyboxTacticsVerbs30X.gif', // Replace with your image paths
      text: 'The ebb and flow of battle hinges on the roll of dice, dictating the strength of your units\' abilities each turn. Issue commands to move, attack, and utilize special actions, whether it\'s summoning the undead, resupplying your mechs, or riding into battle on a pterodactyl. For a strategic gamble, overcharge your units, rerolling their dice to potentially amplify their power.'
    },
    {
      image: 'EpicGamerScreenshot.png', // Replace with your image paths
      text: 'Choose from three distinct factions: the Prehistoric Tribe, a hardy alliance of domesticated dinosaurs and powerful cavemen; the Futurists, a high-tech army of swift mechs and Sci-Fi soldiers that live and die by their supply trucks; or the Necro-Plushies, a relentless horde of undead plush toys led by the formidable necromancer Ester [pictured].'
    }
  ];

  sections: Section[] = [
    { id: 'home', title: 'Home' },
    { id: 'game', title: 'Toybox Tactics' },
    { id: 'about', title: 'About Us' },
    { id: 'contact', title: 'Contact Us' }
  ];

  profiles: Profile[] = [
    {
      image: 'Jack.png',
      text: 'Jack Horvath. Co-Founder of Tidal Rush Digital, Director of Business Operations, Chief Executive Officer.'
    },
    {
      image: 'Zach.jpg', // Replace with your image paths
      text: 'Zach Jones. Co-Founder of Tidal Rush Digital, Director of Software and IT, Chief Technology Officer. (this is his cat)'
    },
    {
      image: 'Justin.jpg', // Replace with your image paths
      text: 'Justin Hay. Co-founder of Tidal Rush Digital, Creative Lead and Producer on Toybox Tactics, Chief Product Officer.'
    }
  ];
}