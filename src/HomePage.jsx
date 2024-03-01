import React from "react";

export default function HomePage(props) { 
  const {name, profession, data} = props;
  const [firstindex,, last] = data;
  return (
    <React.Fragment>
      <div className="homePage">
        Home Page {name} - {profession} - {firstindex}
      </div>
    </React.Fragment>
  )
}
