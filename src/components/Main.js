import React from "react";
import api from "../utils/api.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserProfile().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  });

  return (
    <main className="content">
      <section className="profile" aria-label="секция профиля страницы">
        <button
          className="profile__container-avatar"
          onClick={props.onEditAvatar}
        >
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар профиля"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Кнопка добавления контента"
          onClick={props.onAddPlace}
        ></button>
      </section>
    </main>
  );
}
export default Main;
