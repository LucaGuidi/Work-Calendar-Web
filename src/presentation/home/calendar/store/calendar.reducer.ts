import { createReducer, on } from '@ngrx/store';

import * as calendarActions from './calendar.actions';

export interface State {
  today: Date;
  visibleDate: Date;
  holidays: Date[];
}

export const initialState: State = {
  today: new Date(),
  visibleDate: new Date(),
  holidays: [],
};

export const calendarReducer = createReducer(
  initialState,

  on(calendarActions.nextMonth, (state) => {
    let newDate: Date;
    if (state.visibleDate.getMonth() == 11) {
      newDate = new Date(state.visibleDate.getFullYear() + 1, 0, 1);
    } else {
      newDate = new Date(
        state.visibleDate.getFullYear(),
        state.visibleDate.getMonth() + 1,
        1
      );
    }

    return {
      ...state,
      visibleDate: newDate,
    };
  }),

  on(calendarActions.previousMonth, (state) => {
    let newDate: Date;
    if (state.visibleDate.getMonth() == 0) {
      newDate = new Date(state.visibleDate.getFullYear() - 1, 11, 1);
    } else {
      newDate = new Date(
        state.visibleDate.getFullYear(),
        state.visibleDate.getMonth() - 1,
        1
      );
    }

    return {
      ...state,
      visibleDate: newDate,
    };
  }),

  on(calendarActions.holidaysFetched, (state, actions) => {
    let holidaysDate: Date[] = [];

    actions.holidays.forEach((item) => {
      holidaysDate.push(new Date(item.year, item.month - 1, item.day));
    });

    return {
      ...state,
      holidays: holidaysDate,
    };
  })
);
