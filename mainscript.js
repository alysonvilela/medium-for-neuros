const title = document.querySelector("h1");

const phrase = title.innerHTML.split(" ");

const withBold = phrase.map((i) => {
  const splitted = i.split("");

  const idx = 2;

  const spllicedRest = splitted.splice(idx, splitted.length - 1).join("");
  const splliced = splitted.splice(0, idx).join("");

  const newWord = `<b>${splliced}</b>${spllicedRest}`;

  return newWord;
});

const newPhrase = withBold.join(" ");

title.innerHTML = newPhrase;

document.styleSheets[1].addRule("h1", "color: #a7a7a7 !important;");
document.styleSheets[1].addRule("h1 > b", "color: #000 !important;");
