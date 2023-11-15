import { Component, inject } from '@angular/core';
import { ProgramService } from '../program.service';
import { Program } from '../program';

@Component({
  selector: 'app-all-programs',
  templateUrl: './all-programs.component.html',
  styleUrls: ['./all-programs.component.scss']
})
export class AllProgramsComponent {
  programList: Program[] = [];
  filteredProgramList: Program[] = [];
  searchText: string = '';

  constructor(private programService: ProgramService) {
    this.programList = this.programService.getAllPrograms();
    this.filteredProgramList = this.programList;
  }

  filterResults() {
    if (!this.searchText) {
      this.filteredProgramList = this.programList;
    } else {
      this.filteredProgramList = this.programList.filter(
        program => program?.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
