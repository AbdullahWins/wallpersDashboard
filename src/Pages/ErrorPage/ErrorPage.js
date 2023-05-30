import React from "react";
import { error } from "../../Assets/getImages";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="h-72" src={error} alt="" />
      <Link to="/">
        <span className="text-infoColor font-black">Home</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
