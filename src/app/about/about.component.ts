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
    link.href = 'assets/docs/cvJRD.pdf';
    link.download = 'cvJRD.pdf';
    link.click();
  }

}
