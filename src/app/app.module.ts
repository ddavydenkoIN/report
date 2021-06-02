import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatTabsModule } from "@angular/material/tabs";
import { RFormModule } from "../modules/form/r-form.module";
import { RPreviewModule } from "../modules/preview/r-preview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTabsModule,
    RFormModule,
    RPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
