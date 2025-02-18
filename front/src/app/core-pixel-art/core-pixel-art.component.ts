import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-pixel-art',
  standalone: true,
  imports: [],
  templateUrl: './core-pixel-art.component.html',
  styleUrl: './core-pixel-art.component.css'
})
export class CorePixelArtComponent {
  @Input() imageSrc!: string;
  @Input() imageSrcWebp!: string;

}
