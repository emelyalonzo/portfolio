import { Component, ElementRef, ViewChild } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('navbar') navbar!: ElementRef;

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    const offset = section!.offsetTop - 90;

    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}
