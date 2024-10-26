import { useState, useEffect } from "react";

export function useKey(keyCode, action) {
  useEffect(
    function () {
      const callBack = function (e) {
        if (e.code.toLowerCase() === keyCode.toLowerCase()) {
          action();
        }
      };
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, keyCode]
  );
}
