import { ElementRef, TemplateRef } from "@angular/core";

export interface FormDataModel {
  date: string;
  description: string;
  nickname: string;
  prepaid: number;
  rest?: number;
  items: ReportItem[];
  totalPrice?: number;
}

export interface ReportItem {
  color: string;
  imgSrc: string;
  model: string;
  size: string;
  wholesale: number;
  price: number;
}
