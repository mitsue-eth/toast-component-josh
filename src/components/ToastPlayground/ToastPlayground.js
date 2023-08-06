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

  const [toasts, setToasts] = React.useState([]);

  const currentToast = {
    message: textareaMessage,
    type: toastType,
    id: crypto.randomUUID(),
  };

  const handleRemoveToast = (id) => {
    const filteredToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(filteredToasts);
  };

  const addToastButton = (e) => {
    e.preventDefault();

    const newToasts = [...toasts, currentToast];
    setToasts(newToasts);
    setToastType(VARIANT_OPTIONS[0]);
    setTextareaMessage("");

    console.log("Latest List of Toasts: ", newToasts);
  };

  return (
    <form onSubmit={addToastButton} className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleRemoveToast={handleRemoveToast} />

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
