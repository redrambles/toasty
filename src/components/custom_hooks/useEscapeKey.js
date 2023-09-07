import React, { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") {
        callback(e);
      }
    };
    window.addEventListener("keydown", escape);

    return () => window.removeEventListener("keydown", escape);
  }, []);
};

export default useEscapeKey;
