export function trimDescription(description) {
  if (!description) return "No description";
  if (description.indexOf("Key Features:") !== -1) {
    const desc = description.split("Key Features:");
    return desc[0];
  }
  return description;
}
