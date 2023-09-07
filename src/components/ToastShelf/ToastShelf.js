import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.message} className={styles.toastWrapper}>
            <Toast variant={toast.variant} message={toast.message} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
