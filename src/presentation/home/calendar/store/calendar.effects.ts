import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { calendarInit, holidaysFetched } from './calendar.actions';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { Day } from '../../../../domain/models/day.model';

@Injectable()
export class CalendarEffects {
  fetchHolidays = createEffect(() =>
    this.actions$.pipe(
      ofType(calendarInit),
      switchMap(() =>
        this.http
          .get<Day[]>(
            'https://work-calendar-lucaguidi.onrender.com/days/holidays'
          )
          .pipe(map((holidays) => holidaysFetched({ holidays: holidays })))
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
