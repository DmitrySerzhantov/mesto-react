import Header from "./Header";
import "../pages/index.css";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={() => {
          setisEditAvatarPopupOpen(true);
        }}
        onEditProfile={() => {
          setIsEditProfilePopupOpen(true);
        }}
        onAddPlace={() => {
          setisAddPlacePopupOpen(true);
        }}
        setSelectedCard={(card) => {
          setSelectedCard({ value: true, link: card.link, name: card.name });
        }}
      />
      <Footer />
      <PopupWithForm
        name="cards-add"
        title="Новое место"
        id="1"
        isOpen={isAddPlacePopupOpen}
        onClose={() => {
          closeAllPopups();
        }}
      >
        <input
          required
          minLength="2"
          maxLength="30"
          id="input-name-card"
          type="text"
          className="popup__input popup__input_text_name-card"
          name="nameCards"
          placeholder="Название"
        />
        <span id="input-name-card-error" className="popup__text-error">
          {" "}
        </span>
        <input
          required
          id="input-link"
          type="url"
          className="popup__input popup__input_img_link"
          name="linkImg"
          placeholder="Ссылка на картинку"
        />
        <span id="input-link-error" className="popup__text-error">
          {" "}
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="edit-add"
        title="Редактировать профиль"
        id="0"
        isOpen={isEditProfilePopupOpen}
        onClose={(evt) => {
          closeAllPopups(evt.target);
        }}
      >
        <input
          id="input-name"
          required
          type="text"
          minLength="2"
          maxLength="40"
          className="popup__input popup__input_text_name"
          name="name"
          placeholder="Имя"
        />
        <span id="input-name-error" className="popup__text-error">
          {" "}
        </span>
        <input
          id="input-job"
          required
          type="text"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_text_job"
          name="info"
          placeholder="Вид деятельности"
        />
        <span id="input-job-error" className="popup__text-error">
          {" "}
        </span>
      </PopupWithForm>
      <PopupWithForm
        id="2"
        title="Вы уверенны?"
        name="delete-card"
        textButton="Да"
      ></PopupWithForm>
      <PopupWithForm
        name="avatar-update"
        title="Обновить аватар"
        id="3"
        isOpen={isEditAvatarPopupOpen}
        onClose={() => {
          closeAllPopups(true);
        }}
      >
        <input
          required
          id="input-avatar"
          type="url"
          className="popup__input popup__input_img_link"
          name="linkImg"
          placeholder="Ссылка на картинку"
        />
        <span id="input-avatar-error" className="popup__text-error">
          {" "}
        </span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={() => {
          closeAllPopups();
        }}
      />
    </div>
  );
}

export default App;
