import { parseISO, format, formatDistanceToNow, differenceInDays } from "date-fns";

export function formatTimestamp(timestamp) {
  // Convert the timestamp to ISO format
  const isoString = timestamp.replace(" ", "T").replace("+00", "Z");
  const date = parseISO(isoString);

  // Calculate the difference in days between now and the given date
  const now = new Date();
  const diffInDays = (now - date) / (1000 * 60 * 60 * 24);

  // If the difference is less than 7 days, return relative time; otherwise, return formatted date
  if (diffInDays < 7) {
    // This will return something like "2 hours ago", "5 minutes ago", etc.
    return formatDistanceToNow(date, { addSuffix: true });
  } else {
    // Return a full formatted date (e.g., "Feb 14, 2025, 7:21 AM")
    return format(date, "PPpp");
  }
}

export function getDaysSinceCreated(created_at) {
  // Convert the created_at string to a Date object
  const createdDate = new Date(created_at);
  // Get the current date
  const now = new Date();
  // Calculate and return the difference in days
  return differenceInDays(now, createdDate);
}

export function formatDate(dateString) {
  const date = parseISO(dateString);
  return format(date, "dd MMM yyyy");
}
