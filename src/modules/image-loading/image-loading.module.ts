import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoadingComponent } from './image-loading.component';

@NgModule({
  declarations: [
    ImageLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImageLoadingComponent]
})
export class ImageLoadingModule { }
