import React, { Fragment } from "react";
import { Cards } from "../Cards";
import { Header } from "../Header";
export const Home = () => {
  return (
    <Fragment>
      <Header home={true}></Header>
      <div className="pt-5 pt-md-0">
        <Cards category={"people"} justThree={true} />
      </div>
      <Cards category={"planets"} justThree={true} />
    </Fragment>
  );
};
