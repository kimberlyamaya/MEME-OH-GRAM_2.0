import React from "react";
import "./index.css";
// Importing react hooks useEffect and useState
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MemeGenerator = () => {
  //Using react hooks
  //using useSate to set memes as an empty array, initialize memeIndex to 0 so we can increment to go to the next meme and captionBox to an empty array.
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [textInputBox, setTextInputBox] = useState([]);
  const history = useNavigate();

  //using Fisher-Yates / Durstenfeld shuffle to shuffle memes array once fetched courtesy StackOverflow
  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  // this function captures the input from input fields and tracks which index text is being updated. we do this by passing the text from the onChange in the input field and its index
  const createCaption = (text, index) => {
    const caption = text.target.value || "";
    // we need to update the textInputBox array on the index we are currently on. We use the map() Method to go through the array and check if the index(the text box we are on matches the index in the array i.e. same text box) and then we return the captured text i.e. caption. Else we return the textbox.
    setTextInputBox(
      textInputBox.map((t, i) => {
        if (index === i) {
          return caption;
        } else {
          return t;
        }
      })
    );
  };

  // this function creates the POST method by sending the captions and the meme back to the api to create the meme.
  const createMeme = () => {
    console.log('clicked')
    const captionedMeme = memes[memeIndex];
    const formData = new FormData();
    
    formData.append("username", "lssdavies");
    console.log(formData);
    formData.append("password", "meme-OH-gram");
    console.log(formData);
    formData.append("template_id", captionedMeme.id);
    textInputBox.forEach((t, index) =>
      formData.append(`boxes[${index}][caption]`, t)
    );
    console.log(captionedMeme);
    console.log(formData);
    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      
      res.json().then((res) => {
        history.push(`/generated?url=${captionedMeme.url}`);
        console.log(res)
      });
    });
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

  /*using useEffect to track data.meme.box_count for current meme to ensure the correct amount of textbox inputs displays for the user. So we want to store the current meme i.e. memes[memeIndex] and  create an array using the Array() constructor with a length = box_count and initilize each array index to a empty string. So we can push the user text into. The useEffect hook will need access memeIndex and memes in dependency array to acees the info it needs*/
  useEffect(() => {
    if (memes[memeIndex]) {
      setTextInputBox(Array(memes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, memes]);

  return (
    //conditionally rendering meme image based on whether there memes array has memes using a turnary
    memes.length ? (
      <div className="memes">
        <img src={memes[memeIndex].url} alt="meme" />
        {
          //this takes the created array
          textInputBox.map((textbox, index) => (
            <input
              className="caption"
              placeholder="Caption"
              key={index}
              onChange={(text) => createCaption(text, index)}
            />
          ))
        }
        <button onClick={createMeme} className="createBtn">
          Create
        </button>
        <button onClick={() => setMemeIndex(memeIndex + 1)} className="nextBtn">
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
