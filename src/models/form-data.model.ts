import { ElementRef, TemplateRef } from "@angular/core";

export interface FormDataModel {
  date: string;
  model: string;
  color: string;
  size: string;
  description: string;
  nickname: string;
  wholesale: number;
  price: number;
  prepaid: number;
  imageUrl: string;
  rest?: number;
}
