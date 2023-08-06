import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

// import { useContext } from "react";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  console.log("ToastShelf rerendered");

  const { toasts, dismissAllToasts } = React.useContext(ToastContext);
  console.log("Toasts updated in toastShelf: ", toasts);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        dismissAllToasts();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismissAllToasts]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, type }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} type={type}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
