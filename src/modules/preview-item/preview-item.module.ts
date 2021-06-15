import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewItemComponent } from './preview-item.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    PreviewItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [PreviewItemComponent],
})
export class PreviewItemModule { }
