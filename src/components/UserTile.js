import React from "react";
import PropTypes from "prop-types";
import James from "./../img/James.jpg";


function UserTile(props) {
  return (
    <React.Fragment>
      <div class="border py-3 px-3 d-flex justify-content-center">
        <div class="text-center">
          <h2><em>James P. Weinerstein</em></h2>
          <img src={James} alt="James" style={{ width: '150px' }} />
          <br />
          <br />
          <button>Tweets</button>
          <button>Following</button>
          <button>Followers</button>
        </div>
      </div>
      <div class="border margin-top py-3 px-3">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      </div>
    </React.Fragment >
  );
}

UserTile.propTypes = {
  name: PropTypes.string,
  // location: PropTypes.string,
  post: PropTypes.string
};

export default UserTile;

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