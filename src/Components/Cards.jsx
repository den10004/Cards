import "./Cards.css";

function Cards({ cards }) {
  return (
    <div className="Cards">
      {cards.map((card, i) => (
        <div className="Cards__item" key={i}>
          <img src={card.thumbnailUrl} alt={"logo"} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
