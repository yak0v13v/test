import { useCallback, useEffect, useRef, useState } from "react";

const useDropdown = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  const open = () => {
    setIsVisible(true);
  };

  const close = () => {
    setIsVisible(false);
  };

  const clickHandler: EventListener = useCallback((e) => {
    if (!ref.current?.contains(e.target as Node)) {
      close();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [clickHandler]);

  return { ref, isVisible, close, open };
};

export { useDropdown };
