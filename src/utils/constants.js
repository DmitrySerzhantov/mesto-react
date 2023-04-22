export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelector: ".popup__button",
  disabledClass: "popup__button_style_disabled",
};

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const buttonOpeningPopupEditingCards = document.querySelector(
  ".profile__add-button"
);
export const cardTemplate = document.querySelector("#element-card").content; // нашел template в html,
export const popupFormAllInHTML = document.querySelectorAll(".popup__form");
export const cardsContainer = document.querySelector(".cards");
export const profileAvatar = document.querySelector(".profile__avatar");
export const buttonEditAvatar = document.querySelector(
  ".profile__container-avatar"
);

