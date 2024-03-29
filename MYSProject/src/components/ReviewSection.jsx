import { useEffect, useState } from "react";
import "./ReviewSection.css"
import { Button } from "./Button";
import { StarRating } from "./StarRating";

export function ReviSection({ productId }) {

  const [savedReviews, setSavedReviews] = useState([]);
  const [review, setReview] = useState([])
  const [averageRating, setAverageRating] = useState(0);

  async function fetchReviews(productId) {
    if (!productId) {
      console.error('Product ID is undefined');
      return;
    }
    console.log("productID:", productId);
    const response = await fetch(`http://localhost:3000/api/products/reviews/${Number(productId)}`)
    const responseJson = await response.json()
    setSavedReviews(responseJson)
  }
  //Fetcha le reviews dal DB

  useEffect(() => {
    if (productId !== undefined) {
      fetchReviews(productId)
      console.log(savedReviews)
    }
  }, [productId])
  //Al caricamenteo della pagina, richiama la funzione fetchReviews()

  const [input, setInput] = useState({
    description: "",
    rating: ""
  })
  //Gestisci gli input di una nuova recensione


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
  //Al caricamento della pagina, carica le recensioni che ci sono nel localStorage


  useEffect(() => {
    if (savedReviews.length > 0) {
        const totalRating = savedReviews.reduce((acc, cur) => acc + Number(cur.rating), 0);
        const avgRating = totalRating / savedReviews.length;
        setAverageRating(avgRating);
    } else {
        setAverageRating(0);
    }
}, [savedReviews]);
  //Calcolo dell'average rating (backend)


  async function addReview(productId, rating, description) {
    const response = await fetch('http://localhost:3000/api/products/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productId,
        rating: rating,
        description: description,
      }),
    });
  }

  function handleSubmit(event) {
    addReview(productId, input.rating, input.description)

    event.preventDefault();
    const newReview = {
      description: input.description,
      rating: input.rating
    };

    const updatedReview = [...review, newReview];
    // localStorage.setItem(localStorageKey, JSON.stringify(updatedReview));    
    setReview(updatedReview);
    setInput({
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
        <textarea name="description" value={input.description} id="description" cols="20" rows="5" onChange={handleChange}></textarea>
        <StarRating onRatingChange={handleRatingChange} />
        <Button label="Submit" type="submit" disabled={input.rating === ""} />
        {savedReviews && savedReviews.map && savedReviews.map((rev, index) => (
          <ul className="newReview">
            <li key={rev.id} className="review-inner">
              <p><span>Description:</span>{rev.description}</p>
              <p><span>Rating:</span> {rev.rating}</p>
            </li></ul>
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