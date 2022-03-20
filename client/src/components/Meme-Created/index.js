import React, { useState } from "react";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export const MemeCreated = () => {
  const [memeLink, setMemeKink] = useState(false);

  const clipboard = useClipboard();
  const history = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setMemeKink(true);
  };

  return (
    <div className="memes">
      {/* Short circuiting so that if url is true i.e we have a link for the meme diplay the meme */}
      {url && <img alt="meme" src={url} />}
      <button onClick={() => history.push("/created")} className="nextBtn">
        Create a Meme-OH-gram
      </button>

      <button onClick={copyLink} className="copyBtn">
        {memeLink ? "Link copied!" : "Copy Meme"}
      </button>
    </div>
  );
};

export default MemeCreated;
