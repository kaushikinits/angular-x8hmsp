import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-data",
  templateUrl: "./form.data.component.html",
  styleUrls: ["./form.data.component.css"]
})
export class FormDataComponent implements OnInit {
  @Input("FormRefrence") FormRefrence: any;
  public form: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    // Set our form property to the parent control
    // (i.e. FormGroup) that was passed to us, so that our
    // view can data bind to it
    this.form = <FormGroup>this.controlContainer.control;
  }
}
