import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "../styles/star.css";
const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <StarIcon
              className="star"
              style={{
                color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                fontSize: "3em",
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Star;
