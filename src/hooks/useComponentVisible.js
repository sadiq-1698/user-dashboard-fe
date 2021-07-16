import { useState, useEffect, useRef } from "react";

const useComponentVisible = (initialIsVisible = false) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const triggerRef = useRef(null);
  const childRef = useRef(null);

  const toggleChild = () => setIsComponentVisible(s => !s);

  const handleClickOutside = event => {
    let trigger = triggerRef.current;
    let child = childRef.current;

    let clickedElement = event.target;

    if (trigger) {
      let triggerClicked = trigger === clickedElement;
      let triggerContainsClicked = trigger.contains(clickedElement);

      if (isComponentVisible) {
        if (child) {
          let childClicked = clickedElement === child;
          let childContainsClicked = child.contains(clickedElement);

          if (childClicked || childContainsClicked) {
            return;
          }
        }

        if (!triggerClicked && !triggerContainsClicked) {
          setIsComponentVisible(false);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    triggerRef,
    childRef,
    isComponentVisible,
    toggleChild
  };
};

export default useComponentVisible;
