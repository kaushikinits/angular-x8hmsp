import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: []
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    NameList: this.fb.array([])
  });

  ngOnInit() {
    this.addAlias();
  }

  getFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: [""],
      city: [""]
    });
  }

  get NameLists() {
    console.log("profileForm", this.profileForm);
    return this.profileForm.get("NameList") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addAlias() {
    this.NameLists.push(this.getFormGroup());
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
