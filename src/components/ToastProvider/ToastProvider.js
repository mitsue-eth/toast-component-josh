import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  console.log("ToastProvider rerendered");

  const [toasts, setToasts] = React.useState([]);

  function createToast({ message, type }) {
    const newToasts = [
      ...toasts,
      {
        message,
        type,
        id: crypto.randomUUID(),
      },
    ];
    setToasts(newToasts);
  }

  function dismissToast({ id }) {
    const filteredToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(filteredToasts);
  }

  function dismissAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
