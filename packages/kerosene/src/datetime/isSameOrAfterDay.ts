import { isSameDay } from "date-fns";
import isAfterDay from "./isAfterDay";

/**
 * Returns whether the day of `date` is the same or after the day of `dateToCompare`
 * @param date
 * @param dateToCompare
 */
export default function isSameOrAfterDay(
  date: Date | number,
  dateToCompare: Date | number,
): boolean {
  return isSameDay(date, dateToCompare) || isAfterDay(date, dateToCompare);
}
