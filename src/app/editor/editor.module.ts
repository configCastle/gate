import { NgModule } from '@angular/core';
import { EditorElementComponent } from './editor-element/editor-element.component';
import { EditorComponent } from './editor.component';
import { UIModule } from '../ui.module';
import { SetsService } from '../sets-service/sets.service';

@NgModule({
  imports: [
    UIModule
  ],
  exports: [],
  declarations: [
    EditorComponent,
    EditorElementComponent
  ],
  providers: [
    SetsService
  ],
})
export class EditorModule { }
