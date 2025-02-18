import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStarsComponent } from "./app-stars/app-stars.component";
import { CorePixelArtComponent } from "./core-pixel-art/core-pixel-art.component";


interface PictureSrc {
    webp: string,
    alt: string  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppStarsComponent, CorePixelArtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  bookSrcImage: PictureSrc = {
    webp: "img/book.webp",  
    alt: "img/book.png"
  }
  bookSrcAnimation: PictureSrc = {
    webp: "img/animations/book.webp",
    alt: "img/animations/book.gif"
  }

  isPageAnimationPlaying = false;
  book = this.bookSrcImage;
  
  turnPage(): void {
    if (!this.isPageAnimationPlaying) {
      this.isPageAnimationPlaying = true;
      this.book = this.bookSrcAnimation;

      setTimeout(() => {
        this.book = this.bookSrcImage;
        this.isPageAnimationPlaying = false;
      }, 600);
    }
  }
}
