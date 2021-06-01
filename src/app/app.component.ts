import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
// @ts-ignore
import domtoimage from "dom-to-image";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  @ViewChild('fileInput', {static: true})
  fileInput: ElementRef<HTMLInputElement>;

  @ViewChild('image', {static: true})
  image: ElementRef<HTMLImageElement>;

  @ViewChild('reportForm')
  reportForm: ElementRef<any>;

  title = 'report';
  result: number | null;
  priceForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.priceForm = this.fb.group({
      price: '',
      prepaid: '',
    });

    this.priceForm.valueChanges.pipe(
      untilDestroyed(this),
    ).subscribe((formData: any) => {
      if ((formData['price'] || formData['price'] === 0) && (formData['prepaid'] || formData['prepaid'] === 0)) {
        this.result = formData['price'] - formData['prepaid'];
      } else {
        this.result = null;
      }

    })
    this.fileInput.nativeElement.onchange = (evt: any) => {
      let files = evt.target.files; // FileList object
      let file = files[0];
      let reader = new FileReader();
      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        this.image.nativeElement.src = event.target.result;
      }
    }
  }

  makePrintScreen(): void {
    domtoimage.toPng(this.reportForm.nativeElement, { quality: 0.95 })
      .then((dataUrl: any) => {
        let link = document.createElement('a');
        link.download = 'report.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }
}
