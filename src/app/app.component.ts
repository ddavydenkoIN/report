import { Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { FormDataModel } from "../models/form-data.model";
import { Form } from "@angular/forms";
import { DateAdapter } from "@angular/material/core";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formData: FormDataModel;
  tabIndex = 0;

  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("ru");
  }

  onFormFilled(data: FormDataModel): void {
    this.formData = {
      ...data,
      rest: data.price - data.prepaid
    };
    this.tabIndex = 1;
  }

  returnToForm(): void {
    this.tabIndex = 0;
  }
}
