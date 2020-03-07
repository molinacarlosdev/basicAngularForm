import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import { IUserSettings } from "../data/interface-user-settings";

@Injectable({
  providedIn: "root"
})
export class ServiceDataService {
  constructor(private http: Http) {}

  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    return this.http.post("url", userSettings);
  }
}
