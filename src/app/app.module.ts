import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    AuthorsComponent, 
    SummaryPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    CoursesService, 
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
