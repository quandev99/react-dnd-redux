export function getRandomNumber() {
  const min = 1;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
