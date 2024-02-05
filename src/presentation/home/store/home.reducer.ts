import { createReducer, on } from '@ngrx/store';

import * as homeActions from './home.actions';

export interface State {
  initialDate: string;
  finalDate: string;

  calculatedDays: number;
}

export const initialState: State = {
  initialDate: '',
  finalDate: '',
  calculatedDays: -1,
};

export const homeReducer = createReducer(
  initialState,

  on(homeActions.fromSubmitted, (state, actions) => ({
    ...state,
    initialDate: actions.initialDate,
    finalDate: actions.finalDate,
  })),

  on(homeActions.caluclationSuccess, (state, actions) => ({
    ...state,
    calculatedDays: actions.calculatedDays,
  }))
);
