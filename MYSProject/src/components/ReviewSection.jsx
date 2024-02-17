import { useEffect, useState } from "react";
import "./ReviewSection.css"
import { Button } from "./Button";
import { StarRating } from "./StarRating";

export function ReviSection({ productId }) {

  const [savedReviews, setSavedReviews] = useState([]);

  async function fetchReviews(productId) {
    const response = await fetch(`http://localhost:3000/api/products/reviews/${productId}`)
    const responseJson = await response.json()
       setSavedReviews([responseJson])
  }

  useEffect(() => {
    fetchReviews(productId)
    console.log(savedReviews)
  }, [productId])

  const [input, setInput] = useState({
    username: "",
    description: "",
    rating: ""
  })

  const [review, setReview] = useState([])
  const [averageRating, setAverageRating] = useState(0);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setInput({
      ...input,
      [name]: type === "checkbox" ? checked : value
    }
    )
  }



  const localStorageKey = `review_${productId}`;

  useEffect(() => {
    const savedReview = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setReview(savedReview);
  }, [productId, localStorageKey]);


  useEffect(() => {
    if (review.length > 0) {
      const totalRating = review.reduce((acc, cur) => acc + Number(cur.rating), 0);
      const avgRating = totalRating / review.length;
      setAverageRating(avgRating);
    } else {
      setAverageRating(0);
    }
  }, [review]);

  function handleSubmit(event) {
    event.preventDefault();
    const newReview = {
      username: input.username,
      description: input.description,
      rating: input.rating
    };
    const updatedReview = [...review, newReview];
    localStorage.setItem(localStorageKey, JSON.stringify(updatedReview));
    setReview(updatedReview);
    setInput({
      username: "",
      description: "",
      rating: ""
    });
  }

  function handleRatingChange(rating) {
    setInput({
      ...input,
      rating: rating
    });
  }

  return (
    <div className="review">
      <div className="average-rating">
        <p><span>Rating:</span> {averageRating.toFixed(1)}</p>
      </div>
      <h1>Write your review!</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* <input type="text" name="username" value={input.username} placeholder="Username" onChange={handleChange} /> */}
        <textarea name="description" value={input.description} id="description" cols="20" rows="5" onChange={handleChange}></textarea>
        <StarRating onRatingChange={handleRatingChange} />
        <Button label="Submit" type="submit" disabled={input.rating === ""} />
        {savedReviews && savedReviews.map((rev, index) => (
          <div key={rev.id} className="newReview">
            <p><span>Description:</span>{rev.description}</p>
            <p><span>Rating:</span> {rev.rating}</p>
          </div>
        ))}
      </form>
      <ul className="newReview">
        {review && review.map((el, index) => (
          <li key={index} className="review-inner">
            <p><span>Description:</span> {el.description}</p>
            <p><span>Rating:</span> {el.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}