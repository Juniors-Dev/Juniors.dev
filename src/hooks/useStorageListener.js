import { useEffect } from "react";

export function useStorageListener(key, callback) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === key) {
        try {
          const newValue = event.newValue ? JSON.parse(event.newValue) : null;
          callback(newValue);
        } catch {
          callback(event.newValue);
        }
      }
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, callback]);
}
