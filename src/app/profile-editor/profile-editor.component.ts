import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: []
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    NameList: this.fb.array([])
  });

  getFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      city: [""]
    });
  }

  get NameLists() {
    return this.profileForm.get("NameList") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addAlias() {
    this.NameLists.push(this.getFormGroup());
    console.log("namelist", this.NameLists, this.profileForm);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
