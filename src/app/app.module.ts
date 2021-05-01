import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileSummaryComponent } from './pages/profile-summary/profile-summary.component';
import { ProfileWrapperComponent } from './pages/profile-wrapper/profile-wrapper.component';
import { WorkExpComponent } from './pages/work-exp/work-exp.component';
import { IonicModule } from '@ionic/angular';
import { TechnicalSkillsComponent } from './pages/technical-skills/technical-skills.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { PersonalProjectComponent } from './pages/personal-project/personal-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSummaryComponent,
    ProfileWrapperComponent,
    WorkExpComponent,
    TechnicalSkillsComponent,
    ProjectDetailsComponent,
    EducationDetailsComponent,
    PersonalProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
