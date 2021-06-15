import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { ReportItem } from "../../models/form-data.model";

@Component({
  selector: 'r-preview-item',
  templateUrl: './preview-item.component.html',
  styleUrls: ['./preview-item.component.less']
})
export class PreviewItemComponent implements OnInit, OnChanges {
  @ViewChild('imageRef')
  imageRef: ElementRef<any>;

  @Input()
  data: ReportItem;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue && changes['data'].currentValue !== changes['data'].previousValue && this.imageRef) {
      this.imageRef.nativeElement.src = this.data.imgSrc;
    }
  }

  ngOnInit(): void {
  }

}
