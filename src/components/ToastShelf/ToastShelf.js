import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastPropsArray }) {
  return (
    <ol className={styles.wrapper}>
      {toastPropsArray.map((toastProps, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
            <Toast key={index} type={toastProps.type}>
              {toastProps.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
