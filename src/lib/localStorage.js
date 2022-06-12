export function getFromLocal(key) {
  try {
    const jsonString = localStorage.getItem(key);
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function setToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
