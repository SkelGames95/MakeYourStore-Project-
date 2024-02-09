import { useEffect, useState } from "react";
import "./ReviewSection.css"
import { Button } from "./Button";
import { StarRating } from "./StarRating";

export function ReviSection({ productId }) {

  const [input, setInput] = useState({
    username: "",
    description: "",
    rating: ""
  })

  const [review, setReview] = useState([])
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
    // Carica le recensioni dal localStorage quando il componente viene montato
    const savedReview = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setReview(savedReview);
  }, [productId, localStorageKey]);

  function handleSubmit(event) {
    event.preventDefault();
    const newReview = {
      username: input.username,
      description: input.description,
      rating: input.rating
    };
    // Aggiungi la nuova recensione al localStorage
    const updatedReview = [...review, newReview];
    localStorage.setItem(localStorageKey, JSON.stringify(updatedReview));
    // Aggiorna lo stato delle recensioni
    setReview(updatedReview);
    // Resetta il campo di input per la nuova recensione
    setInput({
      username: "",
      description: "",
      rating: ""
    });
  }

  useEffect(() => {
    // Carica le recensioni dal localStorage quando il componente viene montato
    const savedReviews = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setReview(savedReviews);
  }, [productId, localStorageKey]);



  function handleRatingChange(rating) {
    setInput({
      ...input,
      rating: rating
    });
  }

  return (
    <div className="review">
      <h1>Write your review!</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="username" value={input.username} placeholder="Username" onChange={handleChange} />
        <textarea name="description" value={input.description} id="description" cols="20" rows="5" onChange={handleChange}></textarea>
        <StarRating onRatingChange={handleRatingChange} />
        <Button label="Submit" type="submit" disabled={input.username === "" || input.rating === ""} />
      </form>
      <ul className="newReview">
        {review && review.map((el, index) => (
          <li key={index} className="review-inner">
            <p><span>User:</span> {el.username}</p>
            <p><span>Description:</span> {el.description}</p>
            <p><span>Rating:</span> {el.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}