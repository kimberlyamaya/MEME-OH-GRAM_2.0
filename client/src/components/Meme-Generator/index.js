import React from "react";
import "./index.css";

import { useMutation } from '@apollo/client';
import { ADD_MEME } from '../../utils/mutations'

// Importing react hooks useEffect and useState
import { useEffect, useState } from "react";
//Importing npm package use-clipboard-copy
import { useClipboard } from "use-clipboard-copy";

const MemeGenerator = () => {
  //Using react hooks; useSate to set memes as an empty array, initialize memeIndex to 0 so we can increment to go to the next meme and captionBox to an empty array.
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState("");
  const [copiedMeme, setCopiedMeme] = useState(false);
  const copyToClipbpoard = useClipboard();

  // -ka new const useMutation
  const [addMeme, {error}] = useMutation(ADD_MEME)

  // console.log(JSON.stringify(error, null, 2))
  console.log(addMeme)
  console.log(generatedMeme)

  // -ka new function for mutation
  const passingMeme = async () => {
    addMeme ({
      variables: {
        link: generatedMeme
      }
    })
  }

   //function that uses useClipboard to copy meme link
  const copyMeme = () => {
    copyToClipbpoard.copy(generatedMeme);
    setCopiedMeme(true);
  };
  //taking object params and pulling out key value pairs to append to url for meme creation, this passe3d back to the fetch request when form is submitted
  const appendToUrl = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

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

  //conditional to render page based on whether a meme has been generated or if one needs to be created
  if (generatedMeme) {
    return (
      <div className="memes">
        <img src={generatedMeme} alt="Generated Meme" />
        {/* //reloads page to get user back to meme-generator but may cause issues with jwt token since only users can access page*/}
        <button className="createBtn" onClick={() => window.location.reload()}>
          Create New Meme
        </button>
        {/* using turnary express to toggle text in button based on the state copiedMeme */}
        <button onClick={copyMeme} className="copyBtn">
          {copiedMeme ? "Meme copied" : "Copy To Clipboard"}
        </button>
        <button onClick={passingMeme} className="nextBtn">Save Meme</button>
      </div>
    );
  } else {
    return (
      //conditionally rendering meme image based on whether there memes array has memes using a turnary
      memes.length ? (
        <div className="memes">
          <img src={memes[memeIndex].url} alt={memes.name} />
          <form
            className="memes"
            onSubmit={async (e) => {
              e.preventDefault();
              //create varibale with params to append to URL to create meme
              const params = {
                template_id: memes[memeIndex].id,
                text0: caption1,
                text1: caption2,
                username: "lssdavies",
                password: "meme-OH-gram",
              };
              const response = await fetch(
                `https://api.imgflip.com/caption_image${appendToUrl(params)}`
              );
              const createdMeme = await response.json();
              console.log(createdMeme.data.url);
              setGeneratedMeme(createdMeme.data.url);
            }}
          >
            <input
              className="caption"
              placeholder="Caption 1"
              value={caption1}
              onChange={(e) => setCaption1(e.target.value)}
            />
            <input
              className="caption"
              placeholder="Caption 2"
              value={caption2}
              onChange={(e) => setCaption2(e.target.value)}
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
  }
};

export default MemeGenerator;
