import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HeadderComponent } from './sharepages/headder/headder.component';
import { FooterComponent } from './sharepages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectComponent,
    SkillsComponent,
    HeadderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
