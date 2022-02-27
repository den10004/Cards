import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(96);

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get("http://jsonplaceholder.typicode.com/photos");
      setCards(res.data);
    };
    getCards();
  }, []);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCountry = cards.slice(firstCardIndex, lastCardIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  function deleteCard(id) {
    const idx = cards.findIndex((item) => item.id === id);
    const newCards = [...cards.slice(0, idx), ...cards.slice(idx + 1)];
    setCards(newCards);
  }

  function decrease() {
    let res = [...cards].sort((a, b) => (a["id"] < b["id"] ? 1 : -1));
    setCards(res);
  }

  function increase() {
    let res = [...cards].sort((a, b) => (a["id"] > b["id"] ? 1 : -1));
    setCards(res);
  }

  return (
    <div className="App w-95 mt-5">
      <div className="p-10 mb-3">
        Сортировка по Id
        <button className="btn btn-primary ms-2" onClick={decrease}>
          По убыванию
        </button>
        <button className="btn btn-primary ms-2" onClick={increase}>
          По возрастанию
        </button>
      </div>
      <Cards cards={currentCountry} deleteCard={deleteCard} />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
      <div className="p-10">
        <button className="btn btn-primary" onClick={prevPage}>
          Prev
        </button>
        <button className="btn btn-primary ms-2" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
