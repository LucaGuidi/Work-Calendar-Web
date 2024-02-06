import { createReducer, on } from '@ngrx/store';

import * as settingsActions from './settings.actions';

export interface State {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export const initialState: State = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: true,
  sunday: true,
};

export const settingsReducer = createReducer(
  initialState,

  on(settingsActions.daysChanged, (state, actions) => {
    let stateKey = actions.name as keyof State;
    return {
      ...state,
      [actions.name]: !state[stateKey],
    };
  }),

  on(settingsActions.dataFetched, (_, newState) => newState)
);
