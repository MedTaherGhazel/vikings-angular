import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Program } from 'src/app/program';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  @Input() program!: Program;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(data=>{
      // console.log(data['name'])
      // console.log(data['id'])
  })
  }
}
