import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { PersonalProjectComponent } from './pages/personal-project/personal-project.component';
import { ProfileWrapperComponent } from './pages/profile-wrapper/profile-wrapper.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { TechnicalSkillsComponent } from './pages/technical-skills/technical-skills.component';
import { WorkExpComponent } from './pages/work-exp/work-exp.component';

const routes: Routes = [
  {path: 'workexp', component: WorkExpComponent}, 
  {path: 'techskill', component: TechnicalSkillsComponent},
  {path: 'projects', component: ProjectDetailsComponent},
  {path: 'education', component: EducationDetailsComponent},
  {path: 'persprojects', component: PersonalProjectComponent},
  {path: '',   redirectTo: '/workexp', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
