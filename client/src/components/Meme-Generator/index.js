import React from 'react';
// Importing react hooks useEffect and useState
import { useEffect, useState } from 'react';

const MemeGenerator = () => {
    //Using react hooks
    //using useSate to set memes as an empty array and initialize memeIndex to 0
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0)


    //using Fisher-Yates / Durstenfeld shuffle to shuffle memes array once fetched courtesy StackOverflow
    const shuffle = (array) =>   {
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
    }


    //using useEffect to perform fetch request when componet loads
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => {
            res.json().then(res =>  {
              console.log(res);
              //assign returned object to memes array, shuffle the array and assign the array to setMemes state.
              const memes = res.data.memes;
              shuffle(memes);
              setMemes(memes);  
            })
        })
    },[])

  return (
    //conditionally rendering meme image based on whether there memes array has memes using a turnary
    memes.length ? (
      <div className='memes'>
        <img src={memes[memeIndex].url} alt="meme"/>
      </div>
    ) : (
      <div>
        <h2>Memes currently not available</h2>
      </div>
    )
  );
}

export default MemeGenerator