import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewItemComponent } from './preview-item.component';

@NgModule({
  declarations: [
    PreviewItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [PreviewItemComponent],
})
export class PreviewItemModule { }
