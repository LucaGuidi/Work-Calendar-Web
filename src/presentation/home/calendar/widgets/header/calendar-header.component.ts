import { Component, OnInit } from '@angular/core';
import {
  getMonthName,
  getVisibleDaysRange,
} from '../../../../../shared/utils/calendar.utils';
import { Store } from '@ngrx/store';
import { nextMonth, previousMonth } from '../../store/calendar.actions';

import * as fromApp from '../../../../../base/store/app.reducer';

@Component({
  standalone: true,
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css',
})
export class CalendarHeaderComponent implements OnInit {
  title: string = '';

  ngOnInit(): void {
    this.store.select('calendar').subscribe((state) => {
      this.title = `${getMonthName(
        state.visibleDate
      )} (${state.visibleDate.getFullYear()})`;
    });
  }

  onNextPage() {
    this.store.dispatch(nextMonth());
  }

  onPreviousPage() {
    this.store.dispatch(previousMonth());
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
