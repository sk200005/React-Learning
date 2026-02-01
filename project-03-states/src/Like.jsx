import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [clicks, setClicks] = useState(0)

  function toggleLike() {
    setIsLiked(prev => !prev);
    setClicks((cur) => cur + 1 )
  }
  let likeStyle = {color : "red"}

  return (
    <div >
        <button>
            <i className={isLiked ? "fa-solid fa-heart": "fa-regular fa-heart"}
            style={isLiked ? likeStyle : null} onClick={toggleLike}>
      </i>
        </button>
      
      <h3> {isLiked ? 1 : 0}</h3>
      <h5> total :  {clicks}</h5>
    </div>  
  );
}
