import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
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

  return (
    <div className="App w-95 mt-5">
      <Cards cards={currentCountry} />
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
