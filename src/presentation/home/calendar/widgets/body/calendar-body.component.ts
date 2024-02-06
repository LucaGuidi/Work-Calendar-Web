import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  getDaysTable,
  getMonthName,
  getTableRowsCount,
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
  visibleDays: {
    number: number;
    offset: boolean;
    holiday: boolean;
  }[][] = [];

  ngOnInit(): void {
    this.store.select('calendar').subscribe((state) => {
      this.visibleDays = getDaysTable(state.visibleDate);
    });
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
