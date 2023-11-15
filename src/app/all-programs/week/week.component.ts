import { Component, Input, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Week } from 'src/app/week';
import { Day } from '../day';
import { DayService } from '../day.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {
  @Input() week: Week | undefined;

  days: Day[] = [];
  id: number | undefined;

  @Input() day!: Day;


  getDays(id: number){
      this.dayService.getDaysByWeekId(id).subscribe((days) => {
        this.days = days;
        console.log('days',days)
      });
  }
  constructor(private dayService: DayService) {
  }


}
