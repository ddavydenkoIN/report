import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
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

  result: number | null;
  reportForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      date: '',
      description: '',
      nickname: '',
      prepaid: '',

      items: this.fb.array([
        this.createFormGroupForItem()
      ])
    });

    this.items = this.reportForm.get('items') as FormArray;
  }

  createFormGroupForItem(): FormGroup {
    return this.fb.group({
      model: '',
      color: '',
      size: '',
      wholesale: '',
      imgSrc: '',
      price: '',
    })
  }

  deleteFromList(index: number): void {
    if (confirm("Прям точно-точно удалить?")) {
      this.items.controls.splice(index, 1);
    }
  }

  resetItem(index: number): void {
    if (confirm("Прям точно-точно очистить?")) {
      this.items.controls[index].reset();
    }
  }

  addItem(): void {
    (this.reportForm.get('items') as FormArray).push(this.createFormGroupForItem());
  }

  clearForm(): void {
    if (confirm("Прям точно-точно очистить всю форму?")) {
      this.reportForm.reset();
    }
  }

  save(): void {
    this.onFormFilled.emit({
      ...this.reportForm.value,
    });
  }

  setImageSrc(src: string, index: number): void {
    (this.items.controls[index] as FormGroup).patchValue({
      imgSrc: src
    });
  }
}
