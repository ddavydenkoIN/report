import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-image-loading',
  templateUrl: './image-loading.component.html',
  styleUrls: ['./image-loading.component.less']
})
export class ImageLoadingComponent implements OnInit {
  @ViewChild('fileInput', {static: true})
  fileInput: ElementRef<HTMLInputElement>;

  @ViewChild('image', {static: true})
  image: ElementRef<HTMLImageElement>;

  @Output()
  onLoaded = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.fileInput.nativeElement.onchange = (evt: any) => {
      let files = evt.target.files; // FileList object
      let file = files[0];
      let reader = new FileReader();
      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        this.image.nativeElement.src = event.target.result;
        this.onLoaded.emit(event.target.result);
      }
    }
  }

}
