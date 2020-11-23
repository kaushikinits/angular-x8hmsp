import { Component, Input } from "@angular/core";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./form.data.component.html",
  styleUrls: ["./form.data.component.css"]
})
export class FormDataComponent {
  @Input("FormRefrence") FormRefrence: any;
}
