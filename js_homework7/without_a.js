const regex = /^[^aA]{6,}$/;

const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

console.log("--- Перевірка слів ---");

words.forEach(word => {
  // Метод test() повертає true, якщо слово повністю відповідає регулярці
  if (regex.test(word)) {
    console.log(`✅ Знаходить: ${word}`);
  } else {
    console.log(`❌ Не знаходить: ${word}`);
  }
});