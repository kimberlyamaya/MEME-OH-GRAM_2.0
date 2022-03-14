import React from "react";
import "./index.css";
// Importing react hooks useEffect and useState
import { useEffect, useState } from "react";

const MemeGenerator = () => {
  //Using react hooks
  //using useSate to set memes as an empty array, initialize memeIndex to 0 so we can increment to go to the next meme and captionBox to an empty array.
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captionBox, setCaptionBox] = useState([]);

  //using Fisher-Yates / Durstenfeld shuffle to shuffle memes array once fetched courtesy StackOverflow
  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  //using useEffect to perform fetch request when componet loads
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) => {
      res.json().then((res) => {
        console.log(res);
        //assign returned object to memes array, shuffle the array and assign the array to setMemes state.
        const memes = res.data.memes;
        shuffle(memes);
        setMemes(memes);
      });
    });
  }, []);

  //using useEffect to track memeIndex for current meme to ensure the correct amount of capture inputs displays. Each meme has different amounts of captions boxes (1-3)
  useEffect(() => {

  }, [memeIndex, memes]) 

  return (
    //conditionally rendering meme image based on whether there memes array has memes using a turnary
    memes.length ? (
      <div className="memes">
        <img src={memes[memeIndex].url} alt="meme" />
        <button onClick={() => console.log("generate")} className="createBtn">
          {" "}
          Create
        </button>
        <button onClick={() => setMemeIndex(memeIndex + 1)} className="nextBtn">
          {" "}
          Next Meme
        </button>
      </div>
    ) : (
      <div>
        <h2>Memes currently not available</h2>
      </div>
    )
  );
};

export default MemeGenerator;
