import React from "react";

const Home = () => {
  return (
    <div className="text-6xl">
      Welcome!
      <p>{process.env.REACT_APP_GITHUB_TOKEN}</p> {/*checking env token*/}
    </div>
  );
};

export default Home;
