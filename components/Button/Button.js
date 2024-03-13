export default function Button(onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Decipher";
  button.addEventListener("click", onClick);
  return button;
}
