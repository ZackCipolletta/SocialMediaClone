import React from "react";

function Header() {
  return (
    <React.Fragment>
      <h1>The Social Media</h1>
      <input type="text"></input>
      <button>Submit</button>
    </React.Fragment>
  );
}

export default Header;

//Note that we didn't need to wrap our JSX code in a <React.Fragment>. This is because our component is only returning one element. If we were returning multiple elements, we'd need to use a fragment.