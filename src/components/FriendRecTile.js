import React from "react";
import PropTypes from "prop-types";


function FriendRecTile(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-auto">
          <h4>{props.image}</h4>
        </div>
        <div className="col">
          <h3>{props.name}</h3>
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

FriendRecTile.propTypes = {
  name: PropTypes.string,
  // location: PropTypes.string,
  post: PropTypes.string
};

export default FriendRecTile;

// MyExampleComponent.propTypes = {
//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,
// }

// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

// exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),