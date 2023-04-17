import React from "react";

function Header() {
  return (
    <React.Fragment>
    <div className="d-flex align-items-center m-3">
      <h3><button>Home</button></h3>
      <h3><button>Notifications</button></h3>
      <h3><button>Messages</button></h3>
      <h1 className="text-center flex-grow-1">The Social Media</h1>
      <div className="ml-auto">
        <input type="text"></input>
        <button>Submit</button>
      </div>
    </div>
    <hr />
    </React.Fragment>
  );
}

export default Header;

//Note that we didn't need to wrap our JSX code in a <React.Fragment>. This is because our component is only returning one element. If we were returning multiple elements, we'd need to use a fragment.