import { useEffect } from "react";

export function useCloseForm(onClose) {
  useEffect(() => {
    function callBack(e) {
      if (e.code === "Escape") {
        onClose(false);
      }
    }

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [onClose]);
}
