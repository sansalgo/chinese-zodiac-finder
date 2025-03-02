import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { z } from "zod";
import { DateObject } from "../types/date";

dayjs.extend(customParseFormat);

// Zod schema for validation
const dateSchema = z
  .string()
  .regex(/^\d{4}:\d{2}:\d{2}$/, "Invalid format (YYYY:MM:DD)")
  .refine((dateStr) => {
    const parsed = dayjs(dateStr, "YYYY:MM:DD", true);
    return parsed.isValid();
  }, "Invalid date");

export function validateDate(dateStr: string): DateObject | null {
  const result = dateSchema.safeParse(dateStr);
  if (!result.success) return null;

  const [year, month, day] = dateStr.split(":").map(Number);
  return { year, month, day };
}
