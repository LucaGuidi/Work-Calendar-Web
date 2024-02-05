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
    switch (actions.name) {
      case 'monday':
        return {
          ...state,
          monday: !state.monday,
        };
      case 'tuesday':
        return {
          ...state,
          tuesday: !state.tuesday,
        };
      case 'wednesday':
        return {
          ...state,
          wednesday: !state.wednesday,
        };
      case 'thursday':
        return {
          ...state,
          thursday: !state.thursday,
        };
      case 'friday':
        return {
          ...state,
          friday: !state.friday,
        };
      case 'saturday':
        return {
          ...state,
          saturday: !state.saturday,
        };
      case 'sunday':
        return {
          ...state,
          sunday: !state.sunday,
        };
      default:
        return {
          ...state,
        };
    }
  }),

  on(settingsActions.dataFetched, (_, actions) => actions)
);
