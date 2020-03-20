import React, { useState } from "react";
import "./List.scss";
import Card from "../card/Card";
import NewCard from "../new-card/NewCard";

const List = ({title}) => {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards,{
      id:cards.length,
      value:card
    }]);
  };

  return (
    <div className="list-cwrapper">
      <div className="list-wrapper">
        <div className="list-title">{title}</div>
        <div className="cards">
          {
            cards.map(card=>(
              <div>{card.value}</div>
            ))
          }
          {/* <Card /> */}
          {/* <Card /> */}
          <NewCard addCard={addCard}/>
        </div>
      </div>
    </div>
  );
};

export default List;
