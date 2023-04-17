import React from "react";
import FriendRecTile from "./FriendRecTile";
import Imani from "./../img/Imani.jpg";
import Sleater from "./../img/Sleater.jpg";
import Thato from "./../img/Thato.jpg";


const mainFeedList = [
  {
    name: "Thato",
    image: <img src={Thato} alt="Thato" style={{ width: '10%' }} />,
    post: "Firebase won\'t save record. Halp."
  },
  {
    name: "Sleater",
    image: <img src={Sleater} alt="Sleater" style={{ width: '10%' }} />,
    post: "Prop types are throwing an error."
  },
  {
    name: "Imani",
    image: <img src={Imani} alt="Imani" style={{ width: '10%' }} />,
    post: "Child component isn\'t rendering."
  }
];
function FriendSuggestion() {
  return (
    <React.Fragment>
          <hr />
          <h3>Do you know?</h3>
          {mainFeedList.map((ticket, index) =>
            <FriendRecTile name={ticket.name}
              image={ticket.image}
              key={index}>
              <button type="button">button</button>
            </FriendRecTile>
          )}
    </React.Fragment>
  );
}

export default FriendSuggestion;;