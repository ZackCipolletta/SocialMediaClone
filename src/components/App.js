import { Row, Col } from 'react-bootstrap';
import React from "react";
import Header from "./Header";
import FeedList from "./FeedList";
import UserTile from "./UserTile";
import FriendRecs from "./FriendSuggestion";

function App(){
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid d-flex justify-content-between">
      <div className="col-3 fixed-width">
        <UserTile />
      </div>
      <div className="col-5 fixed-width">
        <FeedList />
      </div>
      <div className="col-3 fixed-width">
        <FriendRecs />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;