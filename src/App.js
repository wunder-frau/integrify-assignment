import "./App.css";
import { useEffect, useState } from "react";

import api from "./utils/api";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.resolve(api.getUsers())
      .then((users) => {
        setCards(users);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(cards);

  return (
    <div className="App">
      <span>Cards will be here soon</span>
    </div>
  );
}

export default App;
