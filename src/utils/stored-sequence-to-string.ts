import { SequenceDay } from "@/hooks/sequence";

export function sequenceToString(date: SequenceDay): string {

  const year = date.year;
  const month = String(date.month).padStart(2, '0');
  const day = String(date.day).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// // Example usage
// console.log(formatDate("09/04/2025")); // Output: 2025-09-04
// console.log(formatDate("September 4, 2025")); // Output: 2025-09-04
// console.log(formatDate(new Date(2025, 8, 4))); // Output: 2025-09-04