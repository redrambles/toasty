import React, { useState } from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function Toast({ variant, message }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const [showToast, setShowToast] = useState(true);

  const dismissToast = () => setShowToast(false);

  if (!message) return null;

  return (
    <>
      {showToast && (
        <div className={`${styles.toast} ${styles[variant]}`}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>
          <p className={styles.content}>{message}</p>
          <button className={styles.closeButton}>
            <X size={24} onClick={dismissToast} />
            <VisuallyHidden>Dismiss message</VisuallyHidden>
          </button>
        </div>
      )}
    </>
  );
}

export default Toast;
