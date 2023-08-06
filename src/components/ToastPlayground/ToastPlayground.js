import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
// import { useContext } from "react";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  console.log("ToastPlayground rerendered");

  const { handleAddToast } = React.useContext(ToastContext);
  const [textareaMessage, setTextareaMessage] = React.useState("");
  const [toastType, setToastType] = React.useState(VARIANT_OPTIONS[0]);

  const onOptionChange = (e) => {
    setToastType(e.target.value);
  };

  const addToastButton = (e) => {
    e.preventDefault();

    const newToast = {
      id: crypto.randomUUID(),
      type: toastType,
      message: textareaMessage,
    };

    console.log("Toast to be added: ", newToast);

    handleAddToast(newToast);

    setToastType(VARIANT_OPTIONS[0]);
    setTextareaMessage("");
  };

  return (
    <form onSubmit={addToastButton} className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

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
