import { FaStar } from 'react-icons/fa'
import './StarRating.css'
import { useState } from 'react'

export function StarRating({ onRatingChange}) {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1

                return (
                    <label>
                        <input type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                onRatingChange(ratingValue);
                            }} />
                        <FaStar
                            className="star"
                            size={30}
                            color={ratingValue <= (hover || rating) ? "yellow" : "lightgrey"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}/>
                    </label>)
            })}

        </div>
    )
}