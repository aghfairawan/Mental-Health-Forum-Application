export function convertToInitial(username) {
  return username
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
