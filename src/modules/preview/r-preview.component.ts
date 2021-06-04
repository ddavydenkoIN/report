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
export class RPreviewComponent implements OnChanges {
  @ViewChild('imageRef')
  imageRef: ElementRef<any>;

  @ViewChild('reportRef')
  reportRef: ElementRef<any>;

  @Input()
  formData: FormDataModel;

  @Output()
  onBackClicked = new EventEmitter<any>();
  constructor(private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData'].currentValue && changes['formData'].currentValue !== changes['formData'].previousValue) {
      this.imageRef.nativeElement.src = this.formData.imageUrl;
      console.log(this.formData);
    }
  }

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
