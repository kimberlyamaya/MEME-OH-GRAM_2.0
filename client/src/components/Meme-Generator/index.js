import React from "react";
import "./index.css";
// Importing react hooks useEffect and useState
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

//taking object params and pulling out key value pairs to append to url for meme creation, this passe3d back to the fetch request when form is submitted
  const appendToUrl = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

const MemeGenerator = () => {
  //Using react hooks
  //using useSate to set memes as an empty array, initialize memeIndex to 0 so we can increment to go to the next meme and captionBox to an empty array.
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");
  // const history = useNavigate();
  
  

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

  return (
    //conditionally rendering meme image based on whether there memes array has memes using a turnary
    memes.length ? (
      <div className="memes">
        <img src={memes[memeIndex].url} alt="meme" />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            //create varibale with params to append to URL to create meme
            const params = {
              template_id: memes.id,
              text0: caption1,
              text1: caption2,
              username: "lssdavies",
              password: "meme-OH-gram",
            };
            const response = await fetch(
              `https://api.imgflip.com/caption_image${appendToUrl(params)}`
            );
          }}
        >
          <input
            className="caption"
            value="caption1"
            placeholder="Caption 1"
            // onChange={(e) => setCaption1(e.target.value)}
          />
          <input
            className="caption"
            value="caption2"
            placeholder="Caption 2"
            // onChange={(e) => setCaption1(e.target.value)}
          />

          <button type="submit" className="createBtn">
            Create
          </button>
          <button
            onClick={() => setMemeIndex(memeIndex + 1)}
            className="nextBtn"
          >
            Next Meme
          </button>
        </form>
      </div>
    ) : (
      <div>
        <h2>Memes currently not available</h2>
      </div>
    )
  );
};

export default MemeGenerator;
