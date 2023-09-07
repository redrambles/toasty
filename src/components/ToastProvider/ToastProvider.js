import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]); // [{ id: Date.now(), variant: "notice", message: "Hello world!" }

  const addToast = (variant, message) => {
    const newToast = { id: Date.now(), variant, message };
    setToasts([...toasts, newToast]);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
