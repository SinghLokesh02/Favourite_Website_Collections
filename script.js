let button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", () => {
    link = element.parentElement.previousElementSibling.href;
    confirm(link);
  });
});
