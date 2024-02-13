export {};

declare global {
  interface Date {
    isSameDateAs(date: Date): boolean;
  }
  interface Array<T> {
    containsDate(date: Date): boolean;
  }
}

Date.prototype.isSameDateAs = function (date: Date): boolean {
  return (
    date &&
    this.getFullYear() === date.getFullYear() &&
    this.getMonth() === date.getMonth() &&
    this.getDate() === date.getDate()
  );
};

Array.prototype.containsDate = function (date: Date): boolean {
  let containsDate = false;
  for (let element of this) {
    if (element instanceof Date) {
      if (element.isSameDateAs(date)) {
        containsDate = true;
        break;
      }
    }
  }
  return containsDate;
};
