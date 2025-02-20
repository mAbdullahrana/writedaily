import { useEffect, useRef } from "react";

export function useDetectOutsideClickModal(handler, listenInCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleOutsideClick, listenInCapturing);
    return () =>
      document.removeEventListener(
        "click",
        handleOutsideClick,
        listenInCapturing
      );
  }, [handler, listenInCapturing]);

  return ref;
}
