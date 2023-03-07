import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { customTranslocoInterceptor } from './cdk/transloco-interceptor';
import { customMissingHandler } from './cdk/transloco-missing-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { TranslateDateAdapter } from './cdk/translate-date-adapter';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [	
    AppComponent,
    CalendarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    customTranslocoInterceptor, customMissingHandler,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {
      provide: DateAdapter,
      useClass: TranslateDateAdapter,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
