import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="profile image" />
      <h1>
        <span>I'm Bigyan Basnet,</span> Full Stack Developer based in Nepal.
      </h1>
      <p>
        Full stack dev from Nepal with centuries of experience—built Prithivi
        Narayan Shah's site in the 1700s and gave Gautam Buddha a minimalist
        landing page in 500 BCE
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
