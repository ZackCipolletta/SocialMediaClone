import React from "react";
import PropTypes from "prop-types";


function Tile(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.post}</h3>
      <h4>{props.image}</h4>
      <hr/>
    </React.Fragment>
  );
}

Tile.propTypes = {
  name: PropTypes.string,
  // location: PropTypes.string,
  post: PropTypes.string
};

export default Tile;

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