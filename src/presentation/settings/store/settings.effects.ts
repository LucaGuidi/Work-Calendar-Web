import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import * as settingsActions from './settings.actions';
import * as fromApp from '../../../base/store/app.reducer';

@Injectable()
export class SettingsEffects {
  savePreferences = createEffect(
    () =>
      this.actions$.pipe(
        ofType(settingsActions.daysChanged),
        withLatestFrom(this.store.select('settings')),
        tap(([_, state]) =>
          localStorage.setItem('settings', JSON.stringify(state))
        )
      ),
    { dispatch: false }
  );

  loadPreferences = createEffect(() =>
    this.actions$.pipe(
      ofType(settingsActions.init),
      map((_) => {
        let loadedString = localStorage.getItem('settings');
        if (loadedString != null) {
          let loadedState = JSON.parse(loadedString);
          return settingsActions.dataFetched(loadedState);
        }
        return { type: 'DUMMY' };
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
