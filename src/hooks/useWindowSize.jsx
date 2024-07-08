import React, { useEffect, useState } from "react";

function getSize() {
  const isClient = typeof window === "object";
  return {
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  };
}

const useWindowSize = () => {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return undefined;
    }
    function handelSize() {
      setWindowSize(getSize());
    }
    window.addEventListener("resize", handelSize);
    return () => window.removeEventListener("resize", handelSize);
  }, [isClient]);

  return windowSize;
};

export default useWindowSize;
