import React from "react";
import PropTypes from "prop-types";
import { Col } from 'react-bootstrap';


function Tile(props) {
  return (
    <React.Fragment>
      <h4 class="float-left">{props.image}</h4>
      <div class="fix-margin border clearfix">
      <h3>{props.name}</h3>
      <h5>{props.post}</h5>
      </div>
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