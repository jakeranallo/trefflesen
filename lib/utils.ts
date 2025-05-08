import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add date-fns imports
import { format, formatDistanceToNow } from "date-fns"

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return format(dateObj, "MMMM d, yyyy")
}

export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true })
}

// Format date as YYYY-MM-DD
export function formatDateYYYYMMDD(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
}

// Get today's date in YYYY-MM-DD format
export function getTodayFormatted(): string {
  return formatDateYYYYMMDD(new Date())
}

// Check if a date is today
export function isToday(dateString: string): boolean {
  return dateString === getTodayFormatted()
}
