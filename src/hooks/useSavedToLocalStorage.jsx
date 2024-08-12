import { useEffect } from "react";

export function useLocalStorage(value, key) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
}
