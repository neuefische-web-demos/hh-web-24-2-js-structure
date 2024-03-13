import Button from "../Button/Button.js";
import { caesarCipher13 } from "../../utils/cipher.js";

export function Card(author) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = author.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(author.text);

  const button = Button(handleDecipherButtonClick);

  card.append(title, text, button);

  function handleDecipherButtonClick() {
    text.textContent = author.text;
    button.setAttribute("disabled", "");
    card.classList.add("card--deciphered");
  }
  return card;
}
