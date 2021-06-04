import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatTabsModule } from "@angular/material/tabs";
import { RFormModule } from "../modules/form/r-form.module";
import { RPreviewModule } from "../modules/preview/r-preview.module";
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTabsModule,
    RFormModule,
    RPreviewModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "ru" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
