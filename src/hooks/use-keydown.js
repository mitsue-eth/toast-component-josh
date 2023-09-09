import React from "react";

function useKeyDown(callback, code) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === code) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, code]);

  return;
}

export default useKeyDown;
