/** @format */
"use client";

import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypewriterComponent = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "<strong>FRONTEND DEVELOPER</strong>",
        "<strong>DESIGNER</strong>",
      ],
      autoStart: true,
      loop: true,
      delay: 75,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return <span id="typewriter"></span>;
};

export default TypewriterComponent;
