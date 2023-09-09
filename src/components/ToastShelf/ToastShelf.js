import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

// import { useContext } from "react";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  console.log("Toasts updated in toastShelf: ", toasts);

  return (
    <ol
      role='region'
      aria-live='polite'
      aria-label='Notification'
      className={styles.wrapper}
    >
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
