import { ActionReducerMap, createReducer } from '@ngrx/store';

import * as fromHome from '../../presentation/home/store/home.reducer';
import * as fromSettings from '../../presentation/settings/store/settings.reducer';
import * as fromCalendar from '../../presentation/home/calendar/store/calendar.reducer';

export interface AppState {
  home: fromHome.State;
  settings: fromSettings.State;
  calendar: fromCalendar.State;
}

export const initialState: AppState = {
  home: fromHome.initialState,
  settings: fromSettings.initialState,
  calendar: fromCalendar.initialState,
};

export const appReducer: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer,
  settings: fromSettings.settingsReducer,
  calendar: fromCalendar.calendarReducer,
};
