import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { AllProgramsComponent } from './all-programs/all-programs.component';
import { ProgramDetailComponent } from './all-programs/program-detail/program-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component:AboutmeComponent},
  {path:'program-detail/:name/:id',component:ProgramDetailComponent },
  {path:'programs', component:AllProgramsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
