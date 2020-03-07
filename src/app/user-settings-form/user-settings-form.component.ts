import { Component, OnInit } from "@angular/core";
import { IUserSettings } from "../data/interface-user-settings";
@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: IUserSettings = {
    name: "Carlos",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "here are some notes"
  };
  constructor() {}

  ngOnInit() {}
}
