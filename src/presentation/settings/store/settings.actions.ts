import { createAction, props } from '@ngrx/store';

import * as fromSettings from './settings.reducer';

export const init = createAction('[Settings] Init');

export const dataFetched = createAction(
  '[Settings] Data Fetched',
  props<fromSettings.State>()
);

export const daysChanged = createAction(
  '[Settings] Days Changed',
  props<{ name: string }>()
);
