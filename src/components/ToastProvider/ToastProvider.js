import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  console.log("ToastProvider rerendered");

  const [toasts, setToasts] = React.useState([
    // { message: "Hi", type: "notice", id: "122234" },
  ]);

  const handleAddToast = (toast) => {
    const newToasts = [...toasts, toast];
    console.log("Here are toasts to be added: ", newToasts);
    setToasts(newToasts);
  };

  const handleRemoveToast = (id) => {
    const filteredToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(filteredToasts);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, handleAddToast, handleRemoveToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
