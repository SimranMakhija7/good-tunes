import { useState } from "react";
import "./styles.css";

export default function App() {
  const [songList, setSongList] = useState();

  const setCategory = (i) => {
    var songsList = songs[categories[i]];
    var listItems = songsList.map((song, index) => {
      return (
        <li className="list-item" key={index}>
          <strong>{song.Name}</strong>
          <span className="rating">{song.Rating}</span>
        </li>
      );
    });
    setSongList(listItems);
  };

  var categories = ["Taylor Swift", "One Direction", "Ed Sheeran"];

  var songs = {
    "Taylor Swift": [
      {
        Name: "Champagne Problems",
        Rating: 4
      },
      {
        Name: "Invisible String",
        Rating: 5
      }
    ],
    "One Direction": [
      {
        Name: "Story Of My Life",
        Rating: 4
      },
      {
        Name: "Little Things",
        Rating: 5
      }
    ],
    "Ed Sheeran": [
      {
        Name: "South Of The Border",
        Rating: 3
      },
      {
        Name: "Perfect",
        Rating: 5
      }
    ]
  };
  var categoryList = categories.map((category, index) => (
    <li
      key={index}
      className="list-item-inline"
      onClick={() => setCategory(index)}
    >
      {category}
    </li>
  ));
  return (
    <div className="App">
      <h2>
        <span role="img" aria-label="musical notes">
          🎶
        </span>
        goodtunes
      </h2>
      <p>
        Checkout music I'm listening to right now. Select an artist to get
        started
      </p>
      <ul className="list-non-bullet">{categoryList}</ul>
      <hr />
      <ul className="list-non-bullet">{songList}</ul>
    </div>
  );
}
