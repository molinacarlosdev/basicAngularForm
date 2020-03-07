import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { IUserSettings } from "../data/interface-user-settings";
import { ServiceDataService } from "../data/service-data.service";
@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: IUserSettings = {
    name: null,
    investmentamount: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  constructor(private dataService: ServiceDataService) {}

  ngOnInit() {}

  onBlur(field: NgModel) {
    console.log("in blur:", field.valid);
  }
  onSubmit(userForm: NgForm) {
    console.log("in OnSubmit: ", userForm.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log("success: ", result),
      error => console.log("error: ", error)
    );
  }
}
