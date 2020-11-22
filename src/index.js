import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favorite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://www.sickchirpse.com/wp-content/uploads/2016/06/Burrito-1.jpg"
        alt="image1"
      ></img>
      <img
        className="food-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FImages-Desktop-Food-HD.jpg&f=1&nofb=1"
        alt="image2"
      ></img>
      <img
        className="food-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UdU3P1Xa2aAPZFpBi8P0_AHaEg%26pid%3DApi&f=1"
        alt="image3"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
