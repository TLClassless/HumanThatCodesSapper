let words = [
  "Hello",
  "Olá",
  "Привет",
  "你好",
  "Ahoj",
  "Bonjour",
  "Kamusta",
  "Hei",
  "Aloha",
  "Ciao",
  "こんにちは",
  "여보세요",
  "Hallå",
  "Hi",
  "¿Qué tal?",
  "Salve",
  "Halløj",
  "Shalom",
  "Namastē",
  "Cześć",
  "Góðan dag",
  "مرحبا",
];
let word = "";
let i = 0;

(function loop() {
  console.log(i);
  word = words[i];
  if (++i) {
    setTimeout(loop, 1000);
  }
  if (i === words.length) {
    i = 0;
  }
})();

console.log(word);
