import React from "react";
import FriendRecTile from "./FriendRecTile";
import Imani from "./../img/Imani.jpg";
import Sleater from "./../img/Sleater.jpg";
import Thato from "./../img/Thato.jpg";


const mainFeedList = [
  {
    name: "Thato",
    image: <img src={Thato} alt="Thato" style={{ width: '100px' }} />,
    post: "Firebase won\'t save record. Halp."
  },
  {
    name: "Sleater",
    image: <img src={Sleater} alt="Sleater" style={{ width: '100px' }} />,
    post: "Prop types are throwing an error."
  },
  {
    name: "Imani",
    image: <img src={Imani} alt="Imani" style={{ width: '100px' }} />,
    post: "Child component isn\'t rendering."
  }
];
function FriendSuggestion() {
  return (
    <React.Fragment>
          <div class="border p-3">
          <h3>Do you know?</h3>
          {mainFeedList.map((ticket, index) =>
            <FriendRecTile name={ticket.name}
              image={ticket.image}
              key={index}>
              <button type="button">button</button>
            </FriendRecTile>
          )}
          </div>
    </React.Fragment>
  );
}

export default FriendSuggestion;;