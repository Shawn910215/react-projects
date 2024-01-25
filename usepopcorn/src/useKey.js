import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // return a clean up funtion in effect function,other wise each time render this component there will be a new eventListener add to DOM.
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
