import * as fromSettings from '../../presentation/settings/store/settings.reducer';

export function getNonWorkingDaysList(state: fromSettings.State) {
  let nonWorkingDays: string[] = [];

  if (state.monday) nonWorkingDays.push('Monday');
  if (state.tuesday) nonWorkingDays.push('Tuesday');
  if (state.wednesday) nonWorkingDays.push('Wednesday');
  if (state.thursday) nonWorkingDays.push('Thursday');
  if (state.friday) nonWorkingDays.push('Friday');
  if (state.saturday) nonWorkingDays.push('Saturday');
  if (state.sunday) nonWorkingDays.push('Sunday');

  return nonWorkingDays;
}
