import React from "react";

import NavBar from "./NavBar";
import DiscList from "./DiscList";
import DiscForm from "./DiscForm";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container marginTopS">
        <div className="row">
          <div className="col-8">
            <h2>Latest discussions</h2>
            <DiscList />
          </div>
          <div className="col-4">
            <h2>Start a new discussion</h2>
            <DiscForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
