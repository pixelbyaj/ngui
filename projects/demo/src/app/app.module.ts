import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkspaceModule } from 'projects/workspace/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
