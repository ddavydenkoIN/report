import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { FormDataModel } from "../../models/form-data.model";
// @ts-ignore
import domtoimage from "dom-to-image";

@Component({
  selector: 'r-preview',
  templateUrl: './r-preview.component.html',
  styleUrls: ['./r-preview.component.less']
})
export class RPreviewComponent {
  @ViewChild('reportRef')
  reportRef: ElementRef<any>;

  @Input()
  formData: FormDataModel;

  @Output()
  onBackClicked = new EventEmitter<any>();

  return(): void {
    this.onBackClicked.emit();
  }

  takeAPhoto(): void {
    domtoimage.toPng(this.reportRef.nativeElement, { quality: 0.95 })
      .then((dataUrl: any) => {
        console.log(dataUrl);
        let link = document.createElement('a');
        link.download = 'report.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }
}
