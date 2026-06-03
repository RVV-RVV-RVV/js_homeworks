const services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        total += parseFloat(this[key]);
      }
    }
    return total;
  },

  minPrice() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        let currentPrice = parseFloat(this[key]);
        if (currentPrice < min) {
          min = currentPrice;
        }
      }
    }
    return min;
  },

  maxPrice() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        let currentPrice = parseFloat(this[key]);
        if (currentPrice > max) {
          max = currentPrice;
        }
      }
    }
    return max;
  }
};
// Перевірка початкових послуг
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());

// Додаємо нову послугу під час роботи
services['Rozбити скло'] = "200 грн";

// Перевірка після додавання
console.log("\nПісля додавання нової послуги:");
console.log("Нова загальна вартість:", services.price());
console.log("Нова мінімальна ціна:", services.minPrice());
console.log("Нова максимальна ціна:", services.maxPrice());