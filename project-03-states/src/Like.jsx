import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(prev => !prev);
  }

  return (
    <div >

      <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={toggleLike}>
        
      </i>
      <h3> {isLiked ? 1 : 0}</h3>
      
    </div>
  );
}
