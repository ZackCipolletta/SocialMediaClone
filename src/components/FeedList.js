import React from "react";
import Tile from "./Tile";
import Imani from "./../img/Imani.jpg";
import Sleater from "./../img/Sleater.jpg";
import Thato from "./../img/Thato.jpg";


const mainFeedList = [
  {
    name: "Thato",
    image: <img src={Thato} alt="Thato" style={{ width: '30%' }} />,
    post: "Firebase won\'t save record. Halp."
  },
  {
    name: "Sleater",
    image: <img src={Sleater} alt="Sleater" style={{ width: '30%' }} />,
    post: "Prop types are throwing an error."
  },
  {
    name: "Imani",
    image: <img src={Imani} alt="Imani" style={{ width: '30%' }} />,
    post: "Child component isn\'t rendering."
  }
];
function FeedList() {
  return (
    <React.Fragment>
          <hr />
          {mainFeedList.map((ticket, index) =>
            <Tile name={ticket.name}
              image={ticket.image}
              post={ticket.post}
              key={index} />
          )}
    </React.Fragment>
  );
}

export default FeedList;;