import React, { useState } from "react";
import "./NewCard.scss";
import { IoIosAddCircle } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import Card from "../card/Card";

const NewCard = ({ addCard }) => {
  const [show, setShow] = useState(false);
  const [name,setName] = useState('');

  return (
    <div>
      {show ? (
        <div className="new-card-wrapper-edit">
          <div className="add-new">
            <div className="title-input">
              <input onChange={e=>setName(e.target.value)}/>
            </div>
            <div>{/* <MdTimer/> */}</div>
            <div className="buttons">
              <button className="cancel" onClick={() => setShow(false)}>
                cancel
              </button>
              <button
                className="add"
                onClick={() => {
                  setShow(false);
                  addCard(<Card name={name}/>)
                }}
              >
                add card
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="new-card-wrapper" onClick={() => setShow(true)}>
          <IoIosAddCircle /> Add New Card
        </div>
      )}
    </div>
  );
};

export default NewCard;
