import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RPreviewComponent } from './r-preview.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PreviewItemModule } from "../preview-item/preview-item.module";

@NgModule({
  declarations: [
    RPreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    PreviewItemModule
  ],
  exports: [
    RPreviewComponent
  ]
})
export class RPreviewModule { }
