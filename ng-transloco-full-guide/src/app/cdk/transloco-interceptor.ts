import { Translation, TranslocoInterceptor, TRANSLOCO_INTERCEPTOR } from '@ngneat/transloco';

export class CustomTranslocoInterceptor implements TranslocoInterceptor {
  preSaveTranslation(translation: Translation, lang: string): Translation {
    console.log('999 99');
    return translation;
  }

  preSaveTranslationKey(key: string, value: string, lang: string): string {
    console.log('999');
    return value;
  }
}

export const customTranslocoInterceptor = {
  provide: TRANSLOCO_INTERCEPTOR,
  useClass: CustomTranslocoInterceptor
};