import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

function LikeButton() {
  const[likes, setLikes] = useState(0);

  return(
    <section>
      <button
      onClick={() => setLikes(likes + 1)}
      >
        <FaThumbsUp /> {likes}
        </button>
      </section>
  );
  
}

export default LikeButton;