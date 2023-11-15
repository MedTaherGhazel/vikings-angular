import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Program } from 'src/app/program';
import { ProgramService } from 'src/app/program.service';
import { Week } from 'src/app/week';
import { WeekService } from 'src/app/week.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  @Input() week!: Week;
  route: ActivatedRoute = inject(ActivatedRoute);
  prgramService = inject(ProgramService);
  program: Program | undefined;
  @Input() programId: number;
  weeks: Week[] = [];

  constructor(private weekService: WeekService) {
    this.programId = Number(this.route.snapshot.params['id']);
    // console.log(this.programId)
    this.program = this.prgramService.getProgramById(this.programId);
    // console.log(this.programId)
  }

  ngOnInit(): void {
    if (this.programId !== undefined) {
      this.fetchWeeksByProgramId(this.programId);
    }
  }

  fetchWeeksByProgramId(programId: number): void {
    this.weekService.getWeeksByProgramId(programId).subscribe((weeks) => {
      this.weeks = weeks;
      // console.log(weeks)
    });
  }
}
