import { NgModule } from '@angular/core';
import { WorkspaceComponent } from './workspace.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ComponentService } from './shared/services/component.service';
import { DynamicComponent } from './shared/components/dynamic/dynamic.component';
import { CardDirective } from './shared/directives/card-content.directive';


@NgModule({
  declarations: [
    WorkspaceComponent,
    DynamicComponent,
    CardDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    DragDropModule
  ],
  exports: [
    WorkspaceComponent,
    DynamicComponent,
    CardDirective,
  ]
})
export class WorkspaceModule { }
