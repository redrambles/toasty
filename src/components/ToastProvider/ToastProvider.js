import React, { useState, useEffect } from "react";
import useEscapeKey from "../custom_hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]); // [{ id: Date.now(), variant: "notice", message: "Hello world!" }

  useEscapeKey(() => setToasts([]));

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
