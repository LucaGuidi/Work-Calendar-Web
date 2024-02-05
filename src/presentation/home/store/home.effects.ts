import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getMsFromInputDate } from '../../../shared/functions/getMsFromInputDate';
import { Store } from '@ngrx/store';
import { getNonWorkingDaysList } from '../../../shared/functions/getNonWorkingDaysList';

import * as homeActions from '../store/home.actions';
import * as fromApp from '../../../base/store/app.reducer';

@Injectable()
export class HomeEffects {
  calculateWorkingDays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.fromSubmitted),
      withLatestFrom(this.store.select('settings')),
      switchMap(([action, state]) => {
        return this.http
          .post<{ workingDays: number }>(
            'https://work-calendar-lucaguidi.onrender.com/days/getWorkingDays',
            {
              initialDate: getMsFromInputDate(action.initialDate),
              finalDate: getMsFromInputDate(action.finalDate),
              nonWorkingDays: getNonWorkingDaysList(state),
            }
          )
          .pipe(
            map((result) =>
              homeActions.caluclationSuccess({
                calculatedDays: result.workingDays,
              })
            )
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
