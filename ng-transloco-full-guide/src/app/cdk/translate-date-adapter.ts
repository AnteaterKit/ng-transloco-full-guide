import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from "@angular/material/core";

export const MONTH_CUSTOM_NAMES = [
  'Кастом',
  'Кастом',
  'МАРТ',
  'АПР.',
  'МАЙ',
  'ИЮНЬ',
  'ИЮЛЬ',
  'АВГ.',
  'СЕНТ.',
  'ОКТ.',
  'НОЯБ.',
  'ДЕК.',
];

@Injectable()
export class TranslateDateAdapter extends NativeDateAdapter {
  private readonly separator = '.';
  constructor(@Inject(LOCALE_ID) public override locale: any) {
    super(locale);
  }

  override getMonthNames() {
    return MONTH_CUSTOM_NAMES;
  }
}

