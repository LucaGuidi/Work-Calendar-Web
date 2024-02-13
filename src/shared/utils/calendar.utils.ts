import { DateRange } from '../models/date-range.model';
import * as fromSettings from '../../presentation/settings/store/settings.reducer';

function getVisibleDaysCount(date: Date) {
  return getDaysBefore(date) + getDaysCount(date) + getDaysAfter(date);
}

function getDaysBefore(date: Date): number {
  date.setDate(1);
  if (date.getDay() == 0) return 6;
  return date.getDay() - 1;
}

function getDaysCount(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getDaysAfter(date: Date): number {
  date.setDate(getDaysCount(date));
  if (date.getDay() == 0) return 0;
  return 6 - date.getDay() + 1;
}

function getVisibleDaysRange(date: Date): DateRange {
  let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  let endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    getDaysCount(date)
  );

  startDate.setDate(startDate.getDate() - getDaysBefore(date));
  endDate.setDate(endDate.getDate() + getDaysAfter(date));

  return new DateRange(startDate, endDate);
}

//TODO make cleaner
export function getVisibleDays(date: Date): Date[][] {
  let currentDate = getVisibleDaysRange(date).start;
  let days = [];
  let weeks = [];

  for (let i = 0; i < getVisibleDaysCount(date); i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

export function getListFromState(state: fromSettings.State) {
  let list = [];
  if (state.sunday) list.push(0);
  if (state.monday) list.push(1);
  if (state.tuesday) list.push(2);
  if (state.wednesday) list.push(3);
  if (state.thursday) list.push(4);
  if (state.friday) list.push(5);
  if (state.saturday) list.push(6);
  return list;
}
