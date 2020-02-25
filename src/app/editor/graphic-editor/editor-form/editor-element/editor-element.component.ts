import { Component, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { EditorFormComponent } from '../editor-form.component';

@Component({
  selector: 'editor-element',
  templateUrl: 'editor-element.component.html',
  styleUrls: ['editor-element.component.scss']
})
export class EditorElementComponent extends EditorFormComponent {
  @Input() name: string;
  get isControl() {
    if (this.form instanceof FormControl) {
      return this.form;
    }
  }
}
