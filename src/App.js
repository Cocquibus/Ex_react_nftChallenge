import React from "react";
import "./style.css"
import CreationBy from "./creationBy";
import ImageNft from "./image";
import Txt from "./text";
function App() {
  return (
    <div className="bodyCard">
      <ImageNft/>
      <Txt/>
      <CreationBy/>
    </div>
  );
}
export default App;