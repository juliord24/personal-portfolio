import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  openEmail(){
    window.location.href = 'mailto:julio@gmail.com';
  }

  downloadCV(){
    const link = document.createElement('a');
    link.href = 'assets/documents/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
  }

}
