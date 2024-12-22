import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';  // Import NotFoundComponent

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    NotFoundComponent  // Declare NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }  // Route to NotFoundComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
