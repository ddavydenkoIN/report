import { ChangeDetectorRef, Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { FormDataModel } from "../models/form-data.model";
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

  constructor(private dateAdapter: DateAdapter<Date>,
              private cdr: ChangeDetectorRef) {
    dateAdapter.setLocale("ru");
  }

  onFormFilled(data: FormDataModel): void {
    const totalPrice = data.items.reduce((acc, item) => {
      return acc + item.price;
    }, 0)
    this.formData = {
      ...data,
      totalPrice: totalPrice,
      rest: totalPrice - data.prepaid
    };
    this.tabIndex = 1;
    this.cdr.detectChanges();
  }

  returnToForm(): void {
    this.tabIndex = 0;
  }
}
