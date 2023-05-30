import React from "react";
import { error } from "../../Assets/getImages";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="h-72" src={error} alt="" />
      <p>Page not Found!</p>
      <Link to="/">
        <p>
          Back to <span className="text-primaryMain font-black">Home</span>
        </p>
      </Link>
    </div>
  );
};

export default ErrorPage;
