export function formatDateTime(isoDateTime) {
  // Takes in an ISO format string and returns a pretty human readable string.
  const date = new Date(isoDateTime);

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getUTCDate();
  let hours = date.getUTCHours();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  let minutes = date.getUTCMinutes();
  // Pad minutes if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}${amPm}`;
}

export function formatDateTimeDateOnly(isoDateTime) {
  const date = new Date(isoDateTime);

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getUTCDate();

  return `${dayOfWeek}, ${month} ${day}`;
}

export function formatDateTimeHoursOnly(isoDateTime) {
  const date = new Date(isoDateTime);

  let hours = date.getUTCHours();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${hours} ${amPm}`;
}

export function getDateAbbreviation(isoDateTime) {
  const date = new Date(isoDateTime);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate().toString().padStart(2, '0');

  return [month, day];
}
