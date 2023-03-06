import { Translation, TranslocoInterceptor, TRANSLOCO_INTERCEPTOR } from '@ngneat/transloco';

export class CustomTranslocoInterceptor implements TranslocoInterceptor {
  // вызов происходить при инициализации языка и словаря
  preSaveTranslation(translation: Translation, lang: string): Translation {
    return translation;
  }

  preSaveTranslationKey(key: string, value: string, lang: string): string {
    // вызов происходить при добавлении нового ключа в рантайме
    return value;
  }
}

export const customTranslocoInterceptor = {
  provide: TRANSLOCO_INTERCEPTOR,
  useClass: CustomTranslocoInterceptor
};