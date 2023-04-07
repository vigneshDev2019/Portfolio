import "./FloatingButton.css"
import Arrow from "@iconscout/react-unicons/icons/uil-arrow-circle-up";
import React from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";
import { useState } from "react";

function FloatingButton() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let top  = window.pageYOffset || document.documentElement.scrollTop
      if (top > 3000 && !showScroll)
        setShowScroll(true);
      else if(top < 2500 && !showScroll)
        setShowScroll(false);
    });
  }, [])

  return (
    <Link hidden={!showScroll} to="Navbar" smooth={true} spy={true}>
      <Arrow
        className="floating-arrow"
        size={"3rem"}
      />
    </Link>
  );
}

export default FloatingButton;
