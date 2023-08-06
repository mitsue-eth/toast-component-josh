import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [textareaMessage, setTextareaMessage] = React.useState("");
  const [toastType, setToastType] = React.useState(VARIANT_OPTIONS[0]);
  // const [isToastShown, setIsToastShown] = React.useState(false);

  const onOptionChange = (e) => {
    setToastType(e.target.value);
  };

  const [toastPropsArray, setToastPropsArray] = React.useState([]);

  const currentToastProps = {
    message: textareaMessage,
    type: toastType,
  };

  const popToastClick = (e) => {
    e.preventDefault();
    const newToastPropsArray = [...toastPropsArray, currentToastProps];
    setToastPropsArray(newToastPropsArray);
    setToastType(VARIANT_OPTIONS[0]);
    setTextareaMessage("");
    console.log("New props for toasts: ", newToastPropsArray);
  };

  return (
    <form onSubmit={popToastClick} className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastPropsArray={toastPropsArray} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              value={textareaMessage}
              onChange={(e) => setTextareaMessage(e.target.value)}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={toastType === option}
                    onChange={onOptionChange}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
