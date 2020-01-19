import { Component, Input } from "@angular/core";
import { EditorNode } from '../editor-node/editor-node';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'editor-form',
  templateUrl: 'editor-form.component.html',
  styleUrls: ['editor-form.component.scss']
})
export class EditorFormComponent {
  @Input() form: FormGroup | FormControl | FormArray;
  @Input() name: string;

  get isArray() {
    if (this.form instanceof FormArray) {
      // console.log('FormArray', this.form.controls);
      return this.form.controls;
    }
  }

  get isGroup() {
    if (this.form instanceof FormGroup) {
      const arr = [];
      for (const o in (this.form as FormGroup).controls) {
        arr.push(o);
      }
      // console.log('FormGroup', arr);
      return arr;
    }
  }

}
