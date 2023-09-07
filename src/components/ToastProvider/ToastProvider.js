import React, { useState, useEffect } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]); // [{ id: Date.now(), variant: "notice", message: "Hello world!" }

  useEffect(() => {
    const dismissAll = (e) => {
      if (e.key === "Escape") {
        setToasts([]);
      }
    };
    window.addEventListener("keyup", dismissAll);

    return () => window.removeEventListener("keyup", dismissAll);
  }, []);

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
