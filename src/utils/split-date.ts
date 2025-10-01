export function splitDate(date:Date) {
  return {
    day: date.getDate(),
    month: date.getMonth()+1,
    year: date.getFullYear(),
  }
}