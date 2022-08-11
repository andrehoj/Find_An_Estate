export function trimDescription(description) {
  if (!description) return "No description";
  if (description.indexOf("Key Features:") !== -1) {
    const desc = description.split("Key Features:");
    return desc[0];
  }
  return description;
}

export function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
}
