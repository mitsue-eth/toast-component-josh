import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleRemoveToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toastProps, index) => {
        return (
          <li className={styles.toastWrapper} key={toastProps.id}>
            <Toast
              type={toastProps.type}
              id={toastProps.id}
              handleRemoveToast={handleRemoveToast}
            >
              {toastProps.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
