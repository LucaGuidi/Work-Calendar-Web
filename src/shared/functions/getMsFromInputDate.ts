export function getMsFromInputDate(formControl: string): number {
  return new Date(formControl).getTime();
}
