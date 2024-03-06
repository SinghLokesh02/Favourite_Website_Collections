let button = document.querySelectorAll(".link-btn");
const modal = document.querySelector("#modal");
const modalCopy = document.querySelector("#modalCopy");
const list = document.querySelector("li");
const copyBtn = document.querySelector(".copy-button");
let link = "";
button.forEach((element) => {
  element.addEventListener("click", () => {
    link = element.parentElement.previousElementSibling.href;
    list.innerText = `${link}`;
    modal.showModal();
  });
});
const closeModal = document.querySelector(".close-button");
closeModal.addEventListener("click", () => {
  modal.close();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      modalCopy.showModal();
      setTimeout(() => {
        modalCopy.close();
      }, 1500);
    })
    .catch((error) => {
      console.error("Failed to copy link: ", error);
    });
});
