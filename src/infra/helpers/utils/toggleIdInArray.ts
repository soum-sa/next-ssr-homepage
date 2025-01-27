export function toggleIdInArray(id: string, array: string[]) {
  const index = array.indexOf(id);
  if (index > -1) {
    // ID found, remove it
    array.splice(index, 1);
  } else {
    // ID not found, add it
    array.push(id);
  }
  return array;
}
