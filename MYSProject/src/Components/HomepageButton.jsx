/* eslint-disable react/prop-types */
import "./HomepageButton.css";

export function HomepageButton({ content }) {
  return (
    <button className="button" role="button">
      {content}
      <div className="arrow-background">
        <img className="arrow" src="../assets/images/right-arrow.svg" />
      </div>
    </button>
  );
}
