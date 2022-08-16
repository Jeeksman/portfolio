import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';

import {ProjectComponent} from './pages/project/project.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'projects',component:ProjectComponent},
  {path: 'skills',component:SkillsComponent},
  {path: 'Experience',component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
