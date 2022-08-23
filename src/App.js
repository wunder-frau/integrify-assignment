import "./App.css";
import { useEffect, useState } from "react";

import api from "./utils/api";
import Main from "./components/Main/Main";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.resolve(api.getUsers())
      .then((users) => {
        setCards(users);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(cards); //TODO: Delete this.

  return (
    <div className="App">
      <Main component={Main} cards={cards} />
    </div>
  );
}

export default App;
