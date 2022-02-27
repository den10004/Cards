import "./Cards.css";
import "../../App.css";

import { useState } from "react";
import Modal from "../Modal/Modal";

function Cards({ cards, deleteCard }) {
  const [modalActive, setModalActive] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const [tempCard, setTempCard] = useState("");

  const OpenCard = (thumbnailUrl, id) => {
    setTempImg(thumbnailUrl);
    setTempCard(id);
    setModalActive(true);
  };

  return (
    <>
      <div className="Cards">
        {cards.map((card, i) => (
          <div className="Cards__item" key={i}>
            <div className="wrapper">
              <h5>{card.id}</h5>
              <button onClick={() => deleteCard(card.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>

            <img
              src={card.thumbnailUrl}
              alt={"logo"}
              onClick={() => OpenCard(card.thumbnailUrl, card.id)}
            />
          </div>
        ))}
      </div>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        tempCard={tempCard}
        tempImg={tempImg}
      />
    </>
  );
}

export default Cards;
