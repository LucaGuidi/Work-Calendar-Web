import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nextMonth, previousMonth } from '../../store/calendar.actions';

import * as fromApp from '../../../../../base/store/app.reducer';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calendar-header',
  imports: [CommonModule],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css',
})
export class CalendarHeaderComponent implements OnInit {
  visibleDay!: Date;

  ngOnInit(): void {
    this.store.select('calendar').subscribe((state) => {
      this.visibleDay = state.visibleDate;
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
