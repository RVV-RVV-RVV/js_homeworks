function pow(x, y) {
  if (y === 0) {
    return 1;
  }

  if (y % 1 !== 0) {
     return "Помилка: Ця версія функції підтримує лише цілі степені.";
  }

  let result = 1;
  let power = y < 0 ? -y : y;

  for (let i = 0; i < power; i++) {
    result *= x;
  }

  if (y < 0) {
    return 1 / result;
  }

  return result;
}
