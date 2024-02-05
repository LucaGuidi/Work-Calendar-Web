import { createAction, props } from '@ngrx/store';

export const fromSubmitted = createAction(
  '[Home] Form Submitted',
  props<{ initialDate: string; finalDate: string }>()
);

export const caluclationSuccess = createAction(
  '[Home] Calculation Success',
  props<{ calculatedDays: number }>()
);
