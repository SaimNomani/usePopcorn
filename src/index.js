import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import StarRating from "./StarRating";

// const Test = function () {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating color="blue" onSetMovieRating={setMovieRating}/>
//       <p>The movie was rated {movieRating} stars.</p>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      size={32}
      className="test"
      color="yellow"
      messages={["terrible", "bed", "okey", "good", "amazing"]}
      defaultRating={3}
    />
    <StarRating />
    <Test/> */}
  </React.StrictMode>
);
