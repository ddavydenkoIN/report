import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.less']
})
export class RFormComponent implements OnInit {

  @ViewChild('fileInput', {static: true})
  fileInput: ElementRef<HTMLInputElement>;

  @ViewChild('image', {static: true})
  image: ElementRef<HTMLImageElement>;

  @ViewChild('reportFormRef')
  reportFormRef: ElementRef<any>;

  @Output()
  onFormFilled = new EventEmitter<any>();

  title = 'report';
  result: number | null;
  reportForm: FormGroup;
  imageUrl: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.reportForm = this.fb.group({
      date: '',
      model: '',
      color: '',
      size: '',
      description: '',
      nickname: '',
      price: '',
      prepaid: '',
      wholesale: '',
    });

    this.fileInput.nativeElement.onchange = (evt: any) => {
      let files = evt.target.files; // FileList object
      let file = files[0];
      let reader = new FileReader();
      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        this.image.nativeElement.src = event.target.result;
        this.imageUrl = event.target.result;
      }
    }
  }

  clear(): void {
    this.image.nativeElement.src = "";
    this.reportForm.reset();
  }

  save(): void {
    this.onFormFilled.emit({
      ...this.reportForm.value,
      imageUrl: this.imageUrl,
    });
  }
}
