import React from "react";
import useKeyDown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  console.log("ToastProvider rerendered");

  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = React.useCallback(() => {
    dismissAllToasts();
  }, []);

  useKeyDown(handleDismiss, "Escape");

  // React.useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.code === "Escape") {
  //       dismissAllToasts();
  //     }
  //   }

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

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
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
