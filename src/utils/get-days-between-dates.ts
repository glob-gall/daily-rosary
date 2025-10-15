
// IMPORTANT: THIS FUNCTION SHOW ONLY BE USED FOR DATES WITH SAME HOURS TO PREVENT ERRORS.
export function getDayBetweenDates(date1: Date, date2: Date): number {
  // const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  // const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  
  // Calculate difference in milliseconds and convert to days
  const diffMs = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}