const arr = [
  {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
  },
  {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com" 
  },
  {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru" 
  }
];

const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

const trustedEmails = [];

arr.forEach(item => {
  if (emailRegex.test(item.email)) {
      trustedEmails.push(item.email);
  }
});

console.log("--- Адреси, гідні довіри ---");
console.log(trustedEmails);