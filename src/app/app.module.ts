import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { AllProgramsComponent } from './all-programs/all-programs.component';
import { ProgramComponent } from './all-programs/program/program.component';
import { FormsModule } from '@angular/forms';
import { ProgramDetailComponent } from './all-programs/program-detail/program-detail.component';
import { WeekComponent } from './all-programs/week/week.component';
import { DayComponent } from './all-programs/day/day.component';
import { ExerciseComponent } from './all-programs/exercise/exercise.component';
import { TransformationComponent } from './transformation/transformation.component';
import { MotivationComponent } from './motivation/motivation.component';
import { AccordingComponent } from './according/according.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    AboutmeComponent,
    AllProgramsComponent,
    ProgramComponent,
    ProgramDetailComponent,
    WeekComponent,
    DayComponent,
    ExerciseComponent,
    TransformationComponent,
    MotivationComponent,
    AccordingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
