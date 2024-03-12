import { authors } from "./utils/authors.js";
import { caesarCipher13 } from "./utils/cipher.js";

/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

/** Get root element */

const root = document.querySelector("#root");

/** Header */

const headlineText = "Classical Authors";

const header = document.createElement("header");
header.className = "header";

const headline = document.createElement("h1");
headline.textContent = caesarCipher13(headlineText);

const button = document.createElement("button");
button.textContent = "Decipher Headline";
button.type = "button";
button.className = "header__button";
button.addEventListener("click", handleDecipherHeadlineButtonClick);

header.append(headline, button);

function handleDecipherHeadlineButtonClick() {
  headline.textContent = headlineText;
  button.setAttribute("disabled", "");
}

root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = author.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(author.text);

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "Decipher";
  button.addEventListener("click", handleDecipherButtonClick);

  card.append(title, text, button);

  function handleDecipherButtonClick() {
    text.textContent = author.text;
    button.setAttribute("disabled", "");
    card.classList.add("card--deciphered");
  }

  root.append(card);
});
