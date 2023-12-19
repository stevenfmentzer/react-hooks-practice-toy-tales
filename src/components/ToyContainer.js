import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toysArray} ) {

  const toysCollectionArray = toysArray.map((toy) => {
    return( 
      <ToyCard toy={toy} />
    )
  })

  return (
    <div id="toy-collection">{toysCollectionArray}</div>
  );
}

export default ToyContainer;
