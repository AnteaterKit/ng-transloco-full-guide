import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import kkLocale from '@fullcalendar/core/locales/kk';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export enum Langs {
  RU = 'ru',
  KK = 'kk',
}

export const DAY_NAMES_KK = ['дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі', 'жексенбі'];
export const DAY_NAMES_RU = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarRef!: ElementRef;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initCalendar();
  }

  initCalendar() {
    const calendar = new Calendar(this.calendarRef.nativeElement, {
      timeZone: 'local',
      plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'title',
        right: 'today prev,next',
      },
      views: {
        dayGridMonth: {
          buttonText: 'Месяц',
        },
        timeGridWeek: {
          firstDay: 1,
          buttonText: 'Неделя',
        },
        myButton: {
          buttonText: 'slots',
        },
      },
      nowIndicator: true,
      locales: [kkLocale],
      locale: 'kk-KZ',
      slotLabelInterval: {
        hours: 1,
      },
      firstDay: 1,
      contentHeight: 'auto',
      height: 'auto',
      allDaySlot: false,
      slotDuration: '00:30:00',
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
      },
      longPressDelay: 300,
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
      },
      dayHeaderFormat: {
        weekday: 'long',
      },
      dayHeaderContent(x) {
        let lg = 'kk';
        return lg === Langs.RU ? DAY_NAMES_RU[x.date.getDay()] : DAY_NAMES_KK[x.date.getDay()];
      },
      buttonText: {
        //today: this.translocoService.translate(this.todayName),
      },
      buttonIcons: {
        prev: 'left-single-arrow',
        next: 'right-single-arrow',
      },

      // initialView: self.deviceService.isMobile() ? 'timeGrid' : '',
      // initialView: self.typeView,
      // initialView: 'dayGridMonth',
      //  titleFormat(date) {
      // кастомные заголовки форматов сделаны для того чтобы переводить заголовок календаря
      //   },
      //selectable: self.selectable,
      // editable: self.editable,
      eventResizableFromStart: true,
      unselectAuto: false,
    });


    calendar.render();
  }
}
