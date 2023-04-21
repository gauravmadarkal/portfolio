import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './common/button/button.component';
import { TagComponent } from './common/tag/tag.component';
import { ProjectComponent } from './project/project.component';
import { StoryComponent } from './story/story.component';
import { SpecialtextComponent } from './common/specialtext/specialtext.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    TagComponent,
    ProjectComponent,
    StoryComponent,
    SpecialtextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
