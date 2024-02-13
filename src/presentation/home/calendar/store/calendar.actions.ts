import { createAction, props } from '@ngrx/store';
import { Day } from '../../../../domain/models/day.model';

export const calendarInit = createAction('[Calendar] Calendar Init');
export const nextMonth = createAction('[Calendar] Next Month');
export const previousMonth = createAction('[Calendar] Previous Month');
export const holidaysFetched = createAction(
  '[Calendar] Holidays Fetched',
  props<{ holidays: Day[] }>()
);
