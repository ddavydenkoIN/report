import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RPreviewComponent } from './r-preview.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    RPreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RPreviewComponent
  ]
})
export class RPreviewModule { }
