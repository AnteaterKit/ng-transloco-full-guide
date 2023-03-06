import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslocoService } from '@ngneat/transloco';

enum Langs {
  ru = 'ru',
  es = 'es'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = Langs.es;
  title = this.translocoService.translate('Выводим продукт на новые рынки');

  constructor(
    private translocoService: TranslocoService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    ) {
  }

  swicthLang() {
    this.lang = this.lang === Langs.ru ? Langs.es : Langs.ru;
    this.translocoService.setActiveLang(this.lang);
    this._locale = this.lang;
    this._adapter.setLocale( this.lang);
  }
}
