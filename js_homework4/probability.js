function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let evenPercent = (evenCount * 100) / count;
  let oddPercent = (oddCount * 100) / count;

  return `Кількість згенерованих чисел: ${count}\nПарних чисел: ${evenCount}\nНе парних чисел: ${oddCount}\nВідсоток парних до не парних: ${evenPercent}% до ${oddPercent}%`;
}