import React from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getUserProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((res) => {
        setCards(
          res.map((item) => ({
            id: item._id,
            link: item.link,
            likes: item.likes.length,
            name: item.name,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    props.setSelectedCard(card.cards);
  }

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
      <ul className="cards" aria-label="контентная часть страницы">
        {cards.map(({ id, ...cards }) => (
          <Card
            key={id}
            cards={cards}
            onCardClick={(evt) => {
              handleCardClick(evt);
            }}
          />
        ))}
      </ul>
    </main>
  );
}
export default Main;
