import React, { useState } from "react";
import "./NewCard.scss";
import { IoIosAddCircle } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import Card from "../card/Card";
import Dialog from "../dialog/dialog";

const NewCard = () => {
  const [show, setShow] = useState(false);
  const [name,setName] = useState('');

  return (
    <div>
      {show ? (
       <Dialog>
         <h1>kamal</h1>
       </Dialog>
      ):''}
      <div className="new-card-wrapper" onClick={() => setShow(true)}>
          <IoIosAddCircle /> Add New Card
        </div>
    </div>
  );
};

export default NewCard;
