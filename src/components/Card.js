import React from "react";
function Card(props) {
  return (
    <li className="cards__item">
      <img
        className="cards__img"
        src={props.cards.link}
        alt="Изображение карточки"
        onClick={() => props.onCardClick(props)}
      />
      <button
        className="cards__trash"
        type="button"
        aria-label="удалить карточку"
      ></button>
      <div className="cards__footer">
        <h2 className="cards__text">{props.cards.name}</h2>
        <div className="cards__container-like">
          <button
            className="cards__like"
            type="button"
            aria-label="лайк для карточки"
          ></button>
          <p className="cards__like-counter">{props.cards.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
