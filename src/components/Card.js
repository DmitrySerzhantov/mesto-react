import React from "react";
import api from "../utils/api.js";

function Card(data) {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(
        res.map((item) => ({
          id: item._id,
          link: item.link,
          likes: item.likes.length,
          name: item.name,
        }))
      );
    });
  });

  return (
    <ul className="cards" aria-label="контентная часть страницы">
      {cards.map(({ id, ...props }) => (
        <li key={id} className="cards__item">
          <img
            className="cards__img"
            src={props.link}
            alt="Изображение карточки"
            onClick={() => data.onCardClick(props)}
          />
          <button
            className="cards__trash"
            type="button"
            aria-label="удалить карточку"
          ></button>
          <div className="cards__footer">
            <h2 className="cards__text">{props.name}</h2>
            <div className="cards__container-like">
              <button
                className="cards__like"
                type="button"
                aria-label="лайк для карточки"
              ></button>
              <p className="cards__like-counter">{props.likes}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Card;
