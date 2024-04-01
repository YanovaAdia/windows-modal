"use strict";

const btnModals = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close");
const modal = document.querySelector(".modal");

const showModal = () => {
  modal.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
};

for (let i = 0; i < btnModals.length; i++) {
  btnModals[i].addEventListener("click", showModal);
}

btnClose.addEventListener("click", hideModal);

modal.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (e === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
