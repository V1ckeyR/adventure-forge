import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-app-stars',
  standalone: true,
  imports: [],
  templateUrl: './app-stars.component.html',
  styleUrl: './app-stars.component.css'
})
export class AppStarsComponent implements OnInit {
    private starsWrapper!: HTMLElement;

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit(): void {
      this.starsWrapper = this.el.nativeElement.querySelector('div');
      this.createStars();
    }

    private createStars(): void {
      setInterval(() => {
        const star = this.renderer.createElement('div');
        star.classList.add('star');
        this.renderer.appendChild(this.starsWrapper, star);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const r = Math.random() * 2;
        
        this.renderer.setStyle(star, 'transform', `translate(${x}px, ${y}px) scale(${r})`);
        this.renderer.setStyle(star, 'opacity', `${r / 2}`);
        this.renderer.setStyle(star, 'transform', 'opacity 100s easy-in-out');
        
        setTimeout(() => {
          this.renderer.removeChild(this.starsWrapper, star);  
        }, 5000);
      }, Math.random() * 50);
    }
  
    @HostListener('window:resize')
    onResize(): void {
      this.starsWrapper.innerHTML = '';
    }  
}
