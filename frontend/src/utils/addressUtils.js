export function getCity(address) {
  // Extracts the city from a comma separated address string,
  // Example string: "98 Funston Ave, San Francisco, CA 94118"
  const parts = address.split(', ');
  if (parts.length > 1) {
    return parts[1];
  } else {
    return '';
  }
}
