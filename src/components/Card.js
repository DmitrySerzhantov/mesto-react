import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.cards.owner._id === currentUser._id;
  const isLiked = props.cards.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `cards__like ${
    isLiked && "cards__like_color_black"
  }`;
  function handleLikeClick(cards) {
    props.onCardLike(cards);
  }
  function handleDeleteClick(card) {
    props.onCardDelete(card);
  }
  return (
    <li className="cards__item">
      <img
        className="cards__img"
        src={props.cards.link}
        alt="Изображение карточки"
        onClick={() => props.onCardClick(props)}
      />

      {isOwn && (
        <button
          onClick={() => {
            handleDeleteClick(props);
          }}
          className="cards__trash"
          aria-label="удалить карточку"
        />
      )}
      <div className="cards__footer">
        <h2 className="cards__text">{props.cards.name}</h2>
        <div className="cards__container-like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="лайк для карточки"
            onClick={() => {
              handleLikeClick(props);
            }}
          ></button>
          <p className="cards__like-counter">{props.cards.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
