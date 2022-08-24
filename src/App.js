import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import api from "./utils/api";
import Main from "./components/Main/Main";
import UserDetail from "./components/UserDetail/UserDetail";

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

  //TODO: Когда путь меняется на "/" - очистить sessionStorage.data

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <Main component={Main} cards={cards} />
        </div>
      </Route>
      <Route path="/users/:id">
        <UserDetail component={UserDetail} cards={cards} />
      </Route>
    </Router>
  );
}

export default App;
