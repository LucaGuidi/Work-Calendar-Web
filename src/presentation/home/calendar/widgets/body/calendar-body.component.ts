import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  containsHoliday,
  getListFromState,
  getVisibleDays,
  isSameDay,
} from '../../../../../shared/utils/calendar.utils';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../../../base/store/app.reducer';

@Component({
  standalone: true,
  selector: 'app-calendar-body',
  imports: [CommonModule],
  templateUrl: './calendar-body.component.html',
  styleUrl: './calendar-body.component.css',
})
export class CalendarBodyComponent implements OnInit {
  visibleDays: Date[][] = [];
  today!: Date;
  visibleDate!: Date;
  holidays: Date[] = [];
  nonWorkingDaysList: number[] = [];

  ngOnInit(): void {
    this.store.select('calendar').subscribe((state) => {
      this.visibleDays = getVisibleDays(state.visibleDate);
      this.today = state.today;
      this.visibleDate = state.visibleDate;
      this.holidays = state.holidays;
    });

    this.store.select('settings').subscribe((state) => {
      this.nonWorkingDaysList = getListFromState(state);
    });
  }

  offsetPredicate(event: Date): string {
    if (this.visibleDate.getMonth() !== event.getMonth()) return 'offset';
    return '';
  }

  todayPredicate(event: Date): string {
    if (isSameDay(this.today, event)) return 'today';
    return '';
  }

  holidayPredicate(event: Date): string {
    if (containsHoliday(this.holidays, event)) return 'holiday';
    return '';
  }

  nonWorkingPredicate(event: Date): string {
    if (this.nonWorkingDaysList.includes(event.getDay())) return 'non-working';
    return '';
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
