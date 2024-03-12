import { authors } from "./utils/authors.js";
import { Header } from "./components/Header/Header.js";
import { Card } from "./components/Card/Card.js";

/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

/** Get root element */

const root = document.querySelector("#root");

/** Header */

const header = Header();
root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  const cardElement = Card(author);
  root.append(cardElement);
});
