export class DateRange {
  constructor(public start: Date, public end: Date) {}
}

/**
 * Returns the number of days in `date`'s month
 *
 * ```ts
 * //e.g. '02 February 2024'
 * const today = new Date();
 * getDaysInMonth(today) = 29;
 * ```
 */
function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getDaysBefore(date: Date): number {
  date.setDate(1);
  if (date.getDay() == 0) return 6;
  return date.getDay() - 1;
}

function getDaysAfter(date: Date): number {
  date.setDate(getDaysInMonth(date));
  if (date.getDay() == 0) return 0;
  return 6 - date.getDay() + 1;
}

export function getTableRowsCount(date: Date): number[] {
  let rows =
    (getDaysBefore(date) + getDaysInMonth(date) + getDaysAfter(date)) / 7;
  let rowsArray: number[] = [];

  for (let i = 0; i < rows; i++) rowsArray.push(i + 1);

  return rowsArray;
}

function getVisibleDays(date: Date) {
  return getDaysBefore(date) + getDaysInMonth(date) + getDaysAfter(date);
}

export function getVisibleDaysRange(date: Date): DateRange {
  let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  let endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    getDaysInMonth(date)
  );

  startDate.setDate(startDate.getDate() - getDaysBefore(date));
  endDate.setDate(endDate.getDate() + getDaysAfter(date));

  return new DateRange(startDate, endDate);
}

export function getMonthName(date: Date): string {
  switch (date.getMonth()) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Error';
  }
}

export function getDaysTable(date: Date) {
  let startDate = getVisibleDaysRange(date).start;
  let days = [];
  let weeks = [];

  for (let i = 0; i < getVisibleDays(date); i++) {
    let isOffset = startDate.getMonth() !== date.getMonth();
    days.push({
      number: startDate.getDate(),
      offset: isOffset,
      holiday: false,
    });
    startDate.setDate(startDate.getDate() + 1);
  }

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}
