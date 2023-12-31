import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() exercises: Exercise[] = [];
  url;

  constructor(private sanitizer:DomSanitizer){
    this.url = sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/zLDKemkGuzg?si=v8UnC6BGCjg0MU5G")
  }
}
